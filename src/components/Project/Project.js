import React from "react";

function Project(props) {

    return (
        <>
            <h2>
                {props.projectTitle}
            </h2>
            <p>
                Link: <a href={props.projectLink}>{props.projectLink}</a>
            </p>
            <p>
                {props.projectDesc}
            </p>
            <div>
                <img src={props.projectImage} alt="project screenshot" />
            </div>
            <br />
            <hr />
        </>
    )
}

export default Project;