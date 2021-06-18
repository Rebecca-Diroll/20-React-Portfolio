import React from "react";
import Project from "../../components/Project/Project.js"

function Work() {

    const projectArray = [
        {
            projectTitle: "Trey's List",
            projectLink: "https://treyslist.herokuapp.com",
            projectImage: "/images/TreysList.jpg",
            projectDesc: "Trey's List is an application to help students buy or sell textbooks in an effort to save money or earn back some of the cost of the book."
        },
        {
            projectTitle: "Budget Tracker",
            projectLink: "https://rdd-budget-tracker.herokuapp.com",
            projectImage: "/images/BudgetTracker.jpg",
            projectDesc: "Keep track of finances online, entering income and expenses. Log financial transactions when offline. The application will update the online records when back online."
        },
        {
            projectTitle: "Workout Tracker",
            projectLink: "https://rdd-workout-tracker.herokuapp.com",
            projectImage: "/images/WorkoutTracker.jpg",
            projectDesc: "Make healthier choices and lead a more active life. This app keeps track of fitness accomplishments."
        },
        {
            projectTitle: "Tech Blog",
            projectLink: "Link 4",
            projectImage: "Image 4",
            projectDesc: "Description 4"
        },
        {
            projectTitle: "Team Profile Generator",
            projectLink: "Link 5",
            projectImage: "Image 5",
            projectDesc: "Description 5"
        },
        {
            projectTitle: "Note Taker",
            projectLink: "Link 6",
            projectImage: "Image 6",
            projectDesc: "Description 6"
        }
    ]

    return (
        <>
            <h1>
                Work 
            </h1>

            <div id="projects-container">
                { projectArray.map(eachProject => {
                    return (
                        <Project 
                            projectTitle={eachProject.projectTitle}
                            projectLink={eachProject.projectLink} 
                            projectDesc={eachProject.projectDesc}
                            projectImage={eachProject.projectImage}
                        />
                    )}
                ) }
            </div>
            <br />
        </>
    )
}

export default Work;