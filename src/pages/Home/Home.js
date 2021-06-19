import React from "react";
import './Home.css';

function Home() {
    return (
        <>
            <h1>
                Software Engineer
            </h1>
            <h2>
                About Me
            </h2>
            <p className="homeText">
                Software Engineer. Full Stack Web Development Bootcamp Certificate 
                from The Ohio State University.
            </p>
            <br />
            <p className="homeText">
                Four years experience as an Electrical Design Engineer at Motorola. 
                Bachelor of Science in Engineering. EIT Certificate.
            </p>
            <br />
            <p className="homeText">
                Teacher to university, high school, and middle school students.
                Team Leader, Teacher Mentor, and Teacher Trainer. Attention to detail,
                creative, and a team player.
            </p>
            <br />
            <p className="homeText">
                Technologies include: HTML, CSS, JavaScript, JQuery, JSON, API, Node.js,
                Express.js, MySQL, Sequelize, Handlebars, OOP, DotEnv, BCrypt, MVC, React,
                GitHub, Heroku, Agile Software Development.
            </p>
            <br />
        </>
    )
}

export default Home;