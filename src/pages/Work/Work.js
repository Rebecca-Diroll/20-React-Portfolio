import React from "react";
import Project from "../../components/Project/Project.js"

function Work() {

    const projectArray = [
        {
            projectTitle: "Project 1",
            projectLink: "Link 1",
            projectImage: "./location/image.jpg",
            projectDesc: "Description 1"
        },
        {
            projectTitle: "Project 2",
            projectLink: "Link 2",
            projectImage: "Image 2",
            projectDesc: "Description 2"
        },
        {
            projectTitle: "Project 3",
            projectLink: "Link 3",
            projectImage: "Image 3",
            projectDesc: "Description 3"
        },
        {
            projectTitle: "Project 4",
            projectLink: "Link 4",
            projectImage: "Image 4",
            projectDesc: "Description 4"
        },
        {
            projectTitle: "Project 5",
            projectLink: "Link 5",
            projectImage: "Image 5",
            projectDesc: "Description 5"
        },
        {
            projectTitle: "Project 6",
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
            <div></div>
        </>
    )
}

export default Work;