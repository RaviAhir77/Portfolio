import React from 'react'
import '../css/Experience.css'
import Footer from '../component/Footer'

const Experience = () => {
  return (
    <div className='Experience'>
        <h1>Experience</h1>
        <div className='Exprience-container'>
            <div className="project proj1">
                <h2>LenDen</h2>
                <span><strong>technology : </strong>ejs,NodeJs,Express,CSS,MongoDB</span>
                <p>A web platform that connects buyers and sellers, allowing
                    users to list and purchase items. Built with Node.js, Express,
                    and EJS for dynamic, server-side rendering. Developed key
                    features like user authentication, item listing, and a
                    search/filtering system to enhance user experience and
                    improve platform functionality.
                </p>
            </div>

            <div className="project proj2">
                <h2>Realtime Chat</h2>
                <span><strong>technology : </strong>React,Socket.io, NodeJs,Express,CSS,MongoDB</span>
                <p>Developed a responsive chat application using the MERN
                    stack with real-time messaging capabilities enabled by
                    Socket.io. The app supports features like user
                    authentication, private chats, and efficient message storage.
                    Focused on scalability and seamless user experience with a
                    modern UI.
                </p>
            </div>
            <div className="project proj3">
            
            <h2>Women Safety</h2>
                <span><strong>technology : </strong>Java,XML,Firebase</span>
                <p>I have experience working on a women's safety application
                    where I focused on location tracking, sending emergency
                    alerts, and integrating APIs. I utilized Java and Firebase to
                    implement these functionalities effectively. This project
                    enhanced my skills in mobile app development and API
                    integration, contributing to a safer environment for users
                </p>
            </div>
        </div>

    </div>
  )
}

export default Experience