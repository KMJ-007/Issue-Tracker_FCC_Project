# [Issue Tracker](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker)


## This project is part of free code camp quality assurance module, i learned mocha-chai for testing.  
### live demo [here](https://issue-trackerfccproject.karanmj.repl.co/)
  
 
 <br>
 <details>
    <summary>User Stories:</summary>

- Complete the necessary routes in /routes/api.js
- Create all of the functional tests in tests/2_functional-tests.js
- Copy the sample.env file to .env and set the variables appropriately
- To run the tests uncomment NODE_ENV=test in your .env file
- To run the tests in the console, use the command npm run test. To open the Replit console, press Ctrl+Shift+P (Cmd if on a Mac) and type "open shell"
- Write the following tests in tests/2_functional-tests.js:

- Create an issue with every field: POST request to /api/issues/{project}
- Create an issue with only required fields: POST request to /api/issues/{project}
- Create an issue with missing required fields: POST request to /api/issues/{project}
- View issues on a project: GET request to /api/issues/{project}
- View issues on a project with one filter: GET request to /api/issues/{project}
- View issues on a project with multiple filters: GET request to /api/issues/{project}
- Update one field on an issue: PUT request to /api/issues/{project}
- Update multiple fields on an issue: PUT request to /api/issues/{project}
- Update an issue with missing _id: PUT request to /api/issues/{project}
- Update an issue with no fields to update: PUT request to /api/issues/{project}
- Update an issue with an invalid _id: PUT request to /api/issues/{project}
- Delete an issue: DELETE request to /api/issues/{project}
- Delete an issue with an invalid _id: DELETE request to /api/issues/{project}
- Delete an issue with missing _id: DELETE request to /api/issues/{project}
</details>
 <br>

# Technology used to build this project

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)



## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/KMJ-007/Issue-Tracker_FCC_Project.git
```

2. Change the working directory

```bash
cd Issue-Tracker_FCC_Project
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

5. Run the app

```bash
npm run start
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.


