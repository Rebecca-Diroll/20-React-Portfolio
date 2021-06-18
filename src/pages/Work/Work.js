import React from "react";
import Project from "../../components/Project/Project.js"

function Work() {

    const projectArray = [
        {
            projectTitle: "Trey's List",
            projectLink: "Link 1",
            projectImage: "./location/image.jpg",
            projectDesc: "Description 1"
        },
        {
            projectTitle: "Budget Tracker",
            projectLink: "Link 2",
            projectImage: "Image 2",
            projectDesc: "Description 2"
        },
        {
            projectTitle: "Workout Tracker",
            projectLink: "Link 3",
            projectImage: "Image 3",
            projectDesc: "Description 3"
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