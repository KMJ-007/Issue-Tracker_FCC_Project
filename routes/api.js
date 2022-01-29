'use strict';
const Issue = require("../model/issue");
const mongoose = require("mongoose");
module.exports = function(app) {
    app.route('/api/issues/:project')

    .get(async(req, res) => {
        let project = req.params.project;

        if (Object.keys(req.query).length == 0) {
            try {
                const result = await Issue.find({
                    project_title: project
                });
                if (result.length == 0) {
                    return res.send({
                        error: "no issues found"
                    })
                }
                return res.json(result);
            } catch (err) {
                console.log(err);
                res.send("server error");
            }
        } else {
            try {
                const Query = req.query;

                Query['project_title'] = project;

                const result = await Issue.find(Query)

                return res.json(result);

            } catch (err) {
                console.log(err);
                res.send("server error");

            }
        }
    })





    .post(async(req, res) => {
        let project = req.params.project;
        // let {issueTitle,issueText,createdBy,assignedTo,statusText}= req.body;
        let issueTitle = req.body.issue_title,
            issueText = req.body.issue_text,
            createdBy = req.body.created_by,
            assignedTo = req.body.assigned_to,
            statusText = req.body.status_text

        if (issueText == "" || issueTitle == "" || createdBy == "") {
            return res.json({
                error: 'required field(s) missing'
            })
        }

        const issue = new Issue({
            project_title: project,
            issue_title: issueTitle,
            issue_text: issueText,
            created_by: createdBy,
            assigned_to: assignedTo,
            status_text: statusText,
        })
        try {
            const newIssue = await issue.save();

            res.json({
                assigned_to: newIssue.assigned_to,
                status_text: newIssue.status_text,
                open: newIssue.open,
                _id: newIssue.id,
                issue_title: newIssue.issue_title,
                issue_text: newIssue.issue_text,
                created_by: newIssue.created_by,
                created_on: newIssue.created_on,
                updated_on: newIssue.updated_on
            })

        } catch (err) {
            console.log(err);
            return res.json({
                error: 'required field(s) missing'
            })
        }
    })

    .put(async(req, res) => {

        let id = req.body._id

        if (id == null) {
            return res.json({
                error: 'missing _id'
            })
        }

        try {
            id = mongoose.Types.ObjectId(id)
        } catch (err) {
            return res.json({
                error: 'could not update',
                _id: id
            })
        }


        // will add all non empty values to this
        let update = {
            "updated_on": Date.now()
        };

        //check to close
        const open = req.body.open
        if (open == "true") {
            update["open"] = false;
        }

        Object.keys(req.body).forEach(key => {
            if (req.body[key] != "") {
                update[key] = req.body[key]
            }
        })

        //console.log(update)

        if (Object.keys(update).length < 3) {
            return res.json({
                error: 'no update field(s) sent',
                _id: id
            })
        }


        let updatedRecord = await Issue.findByIdAndUpdate(id,
            update,
            (err, result) => {
                if (!err && result) {
                    return res.json({
                        result: 'successfully updated',
                        _id: id
                    })
                } else if (!result) {
                    return res.json({
                        error: 'could not update',
                        _id: id
                    })
                }
                //https://github.com/Automattic/mongoose/issues/5354
            });

    })

    .delete(async(req, res) => {
        let id = req.body._id

        if (id == null) {
            return res.json({
                error: 'missing _id'
            })
        }

        try {
            const obId = mongoose.Types.ObjectId(id)
        } catch (err) {
            return res.json({
                error: 'could not delete',
                _id: id
            })
        }

        if (Object.keys(req.body).length > 1) {
            return res.json({
                error: 'could not delete',
                _id: id
            })
        }

        await Issue.findByIdAndRemove(id, (err, result) => {
            if (err) {
                return res.json({
                    error: 'could not delete',
                    _id: id
                })
            } else {
                return res.json({
                    result: 'successfully deleted',
                    _id: id
                })
            }
        });


    })

};