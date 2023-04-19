const fs= require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

let questionList = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "Where do you live?",
        name: "location"
    },
    {
        type: "input",
        message: "Tell us about yourself:",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your Linkedin URL?",
        name: "linkedinUrl"
    },
    {
        type: "input",
        message: "What is your GitHub URL?",
        name: "gitHubUrl"
    }
]
 inquirer
    .prompt(questionList)
    .then((data)=>{
        let htmlContent = `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    <title>portfolio template</title>
</head>

<body>
        <div class="d-flex align-item-center justify-content-center">
            <div class="card " style="width: 18rem;">
                <img src="cute-cat.jpg" class="card-img-top" alt="cute cat">
                <div class="card-body">
                    <h1 id="name">${data.name}</h1>
                    <p class="card-text" id="location">I live in ${data.location}.</p>
                    <p class="card-text border" id="bio">${data.bio}</p>
                    <p class="card-text border" id="linkedin-url">${data.linkedinUrl}</p>
                    <p class="card-text border" id="github-url">${data.gitHubUrl}</p>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>`;
        fs.writeFile("index.html", htmlContent, (err)=>{
            err ? console.error(err) : console.log("HTML file is successfully made!")
        })

    })