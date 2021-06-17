import React from "react";

function Project(props) {
    console.log(props);
    return (
        <>
            <h1>Projects</h1>
            <h2>props.projectName</h2>
            <p>props.projectDesc</p>
            <img>props.projectImage</img>
            <p>props.projectLink</p>
    )
}

export default Project;