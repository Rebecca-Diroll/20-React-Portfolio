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
            projectLink: "https://rdd-tech-blog.herokuapp.com/",
            projectImage: "/images/TechBlog.jpg",
            projectDesc: "The Tech Blog is a place for software engineers to post about development tools and resources that are useful. It is a place to share and collaborate with others."
        },
        {
            projectTitle: "Team Profile Generator",
            projectLink: "https://github.com/Rebecca-Diroll/10-Team-Profile-Generator",
            projectImage: "/images/TeamProfile/Generator",
            projectDesc: "This application is used to create a software team profile using node.js. A team manager, one or more engineers, and one or more interns may be included. Once the information is entered, an HTML page will be created."
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