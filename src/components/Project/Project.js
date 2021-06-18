import React from "react";

function Project(props) {

    return (
        <>
            <h2>
                Project Title {props.projectTitle}
            </h2>
            <p>
                Project Desc {props.projectDesc}
            </p>
            <div>
                Project Image <img src={props.projectImage} alt="project screenshot" />
            </div>
            <div></div>
        </>
    )
}





export default Project;