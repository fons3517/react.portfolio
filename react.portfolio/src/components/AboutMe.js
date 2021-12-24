import React from 'react';
import ProfilePic from '../assets/images/ProfilePic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe() {
  return (

    <section className="page-section bg-dark" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About Me</h2>
          <div className="paragraph" id="about">
            <p className="text-white-50 bg-danger">
              I am a language enthusiast<br />
              <b>I love languages. Languages are what the world uses in order to communicate with itself.</b>
              They are fascinating and unique in many ways. I speak English and Spanish fluently and
              practice Italian and French as a hobby.
            </p>
            <p className="text-white-50 bg-danger">
              Learning a computer language has helped satisfy my passion
              for languages, inspires me to dive deeper down the rabbit hole and also connects my deep interest with UI/UX together.
              Learning how to write code has opened my eyes to the depths there are to explore in the coding world.
              My journey has just begun and already I'm excited to see where this will go. <br />

            </p>
          </div>
          <h4 className="section-subheading text-muted">
            Contact Information
          </h4>
        </div>
        <div>

        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="./assets/img/Gmail-logo-color.ico"
                alt="Gmail logo"
              />
              <a href="mailto:fons3517@gmail.com"
                target="_blank"
                rel='noreferrer'
              ><h4>Gmail</h4></a
              >
            </div>
          </div>
          <div className="col-md-8">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="./assets/img/github.ico"
                alt="GitHub icon"
              />
              <a href="https://github.com/fons3517"
                target="_blank"
                rel='noreferrer'
              ><h4>GitHub</h4></a
              >
            </div>
          </div>
          <div className="col-md-8">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="./assets/img/linkedInjpg.jpg"
                alt="linkedIn Profile"
              />
              <a
                href="https://www.linkedin.com/in/alfonso-robles-505abb151/"
                target="_blank"
                rel='noreferrer'
              ><h4>linkedIn</h4></a
              >
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <p className="large text-muted">
              All contact information is accurate and up to date. Feel free to contact
              me at your convenience. I look forward to the opportunity of collaborating with you
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}