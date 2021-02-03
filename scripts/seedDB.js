// ===================================================
// THIS is just example code and needs to be changed
// ===================================================


const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/FlashGrid"
);

const projects = [
  {
    name: "Make a budget sheet",
    tasks: {1: "Make spreadsheets detailing our budget for upcoming store construction",
    2: "Double check with the financing department to make sure it is fiscally responsible",
    3: "Send to the higher ups to get their approval"
  },
    description:
      "Create and expansive budget for this upcomig quarter to present to the board and the finance department, so we as a company can carefully make sure we make money this year.",
    CompleteDate: new Date(Date.setDate())
  },
  {
    name: "Make a floor plan",
    tasks: {
      1: "Find out the lay out measurements for the floor plan",
      2: "Meet with the QA department to see if the lay out meets standards",
      3: "Meet with the business peope to discuss what layouts work best for tartget demographic",
      4: "Get okay on rough draft, then make the full design",
      5: "Hire a contractor"
    },
    description:
      "Make a floor plan for the new brick and morter store coming to the local mall",
      CompleteDate: new Date(Date.setDate())
  },
  {
    name: "Create tag line for new merch line",
    tasks: {
      1:"Figure out who the target demo is for the clothing line",
      2: "Where is the clothing line going to be sold and where",
      2: "prepare a list of 3-5 tag lines for the upcoming meeting"
    },
    description:
      "How we represent ourselves with this new line is important, we have to create a tag that will bring the younger demo in",
      CompleteDate: new Date(Date.setDate())
  },
  {
    name: "Create updated UI screen for the application",
    tasks: {
      1:"Figure out what on our app catches users eyes first and then make it front and center",
      2:"Bring back friends feature",
      3:"Update color scheme to catch younger audiences eyes",
      4:"Update privacy setting to better pretect user data from being shared outside of app"
    },
    
    description:
      "Update the UI for the app so that it is better useable for all age groups, then update it to better run on upcoming OS and intergrate user recommendations",
      CompleteDate: new Date(Date.setDate())
  },
  {
    name: "Deploy new changes to application",
    tasks: {
      1:"Test on local host to make sure the new changes work",
      2:"Run it through lead web dev to make sure it looks good",
      3:"Make sure it is pushed to github so rest of the team go look at and make comments",
      4:"Get it deployed"
    } ,
    description:
      "",
      CompleteDate: new Date(Date.setDate())
  }
  
    
];

db.projects
  .remove({})
  .then(() => db.projects.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
