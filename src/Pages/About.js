import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar.js";
import "../CSS/About.css";
import Footer from "../Components/Footer.js";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../Components/LoadingModal.js";
import "react-gallery-carousel/dist/index.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay, Perspective, Sync, Fade } from "@egjs/flicking-plugins";

function About() {
  const [isSmallWindow, setIsSmallWindow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [plugins, setPlugins] = useState([]);

  const imageFlicking = useRef();
  const captionFlicking = useRef();

  const staticPlugins = [
    new AutoPlay({ duration: 3500, direction: "NEXT", stopOnHover: true }),
    new Perspective({ rotate: -0.5, scale: 2, perspective: 600 }),
    new Fade(),
  ];

  const images = [
    { src: "/AnaisProfile.png", alt: "Professional picture of Anais" },
    { src: "/graduation.png", alt: "Anais in her graduation gear" },
    { src: "/disneyBathroom.png", alt: "Anais taking a mirror selfie" },
    { src: "/greece.png", alt: "Anais in Greece" },
    { src: "/flowers.png", alt: "Anais with flowers" },
    { src: "/anaisWithJuice.png", alt: "Baby Anais drinking juice" },
  ];

  const navigate = useNavigate();
  const resumeLink = "https://anaisdawes-website-videos.s3.amazonaws.com/Resume_AnaisDawes.pdf";

  useEffect(() => {
    if (!loading) {
      if (isSmallWindow) {
        setPlugins([
          new Sync({
            type: "index",
            synchronizedFlickingOptions: [
              {
                flicking: imageFlicking.current,
                isClickable: false,
                isSlidable: true,
              },
            ],
          }),
        ]);
      } else {
        setPlugins([
          new Sync({
            type: "index",
            synchronizedFlickingOptions: [
              {
                flicking: imageFlicking.current,
                isClickable: false,
                isSlidable: true,
              },
              {
                flicking: captionFlicking.current,
                isClickable: false,
                isSlidable: true,
              },
            ],
          }),
        ]);
      }
    }
  }, [loading, isSmallWindow]);

  useEffect(() => {
    function isWindowSize(size) {
      return window.innerWidth <= size;
    }

    function handleResize() {
      setIsSmallWindow(isWindowSize(964));
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let imagesLoaded = 0;
    const images = [
      { src: "/AnaisProfile.png", alt: "Professional picture of Anais" },
      { src: "/graduation.png", alt: "Anais in her graduation gear" },
      { src: "/disneyBathroom.png", alt: "Anais taking a mirror selfie" },
      { src: "/greece.png", alt: "Anais in Greece" },
      { src: "/flowers.png", alt: "Anais with flowers" },
      { src: "/anaisWithJuice.png", alt: "Baby Anais drinking juice" },
    ];

    const handleImageLoad = () => {
      imagesLoaded += 1;
      if (imagesLoaded === images.length) {
        setLoading(false);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src.src; // Use src.src instead of just src to match the object structure
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });
  }, []);

  const handleDownload = () => {
    const url = resumeLink;
    window.open(url, "_blank");
  };

  const handleNavigation = (navEndpoint) => {
    navigate(navEndpoint);
  };

  return (
    <div className="app">
      {loading ? (
        <LoadingModal />
      ) : (
        <div>
          <Navbar page="about" />
          <div className="sectionContainer">
            <div className={`pageContent ${isSmallWindow ? "center pageContentSmall" : ""}`}>
              <div className="projectContent">
                <div className={`sectionInnerContainer sectionContentContainer vertical`}>
                  <div className={`introductionTextContainer`}>
                    <div className={`vertical center extraBottomPadding`}>
                      <div className="introductionCarouselContainer">
                        <Flicking
                          ref={imageFlicking}
                          className="introductionCarousel"
                          align="center"
                          circular={true}
                          panelsPerView={isSmallWindow ? 1 : 3}
                          plugins={[...plugins, staticPlugins[0], staticPlugins[1]]}
                        >
                          {images.map((image, index) => (
                            <div className="card-panel" key={index}>
                              <img
                                className="introductionImage"
                                src={image.src}
                                alt={image.alt}
                                draggable="false"
                              />
                            </div>
                          ))}
                        </Flicking>
                      </div>
                      {!isSmallWindow && (
                        <div className="introductionCaptionCarouselContainer">
                          <Flicking
                            ref={captionFlicking}
                            className="introductionCarousel"
                            align="center"
                            circular={true}
                            panelsPerView={1}
                            plugins={[...plugins, staticPlugins[0], staticPlugins[2]]}
                          >
                            <div className="card-panel">
                              <p>Anais Dawes</p>
                            </div>
                            <div className="card-panel">
                              <p>Graduation from my masters</p>
                            </div>
                            <div className="card-panel">
                              <p>Me with my badge at Disney StudioLAB</p>
                            </div>
                            <div className="card-panel">
                              <p>My study abroad to Athens</p>
                            </div>
                            <div className="card-panel">
                              <p>My floral design hobby</p>
                            </div>
                            <div className="card-panel">
                              <p>Me as a baby holding juice :{")"}</p>
                            </div>
                          </Flicking>
                        </div>
                      )}
                    </div>
                    <h1 className="pageHeader">Hi, I'm Anaïs!</h1>
                    <h2 className="pageSubheader">Software Engineer</h2>
                    <p>
                      I am a dedicated and skilled Front-End/Full Stack Software Developer,
                      passionate about creating elegant, responsive, and user-centric applications.{" "}
                      <br />
                      <br />
                      My expertise lies in crafting intuitive and visually appealing front-end code,
                      ensuring a seamless user experience. I thrive on solving complex problems and
                      the satisfaction of seeing my work come to life through effective and
                      efficient code!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionContainer">
            <div className={`pageContent ${isSmallWindow ? "center" : ""}`}>
              <div className="projectContent">
                <div className="sectionContentContainer">
                  <div className={`resumeHeaderContainer ${isSmallWindow ? "vertical" : ""}`}>
                    <h1 className="resumeHeader">Experience</h1>
                    <button className="resumeButton" onClick={handleDownload}>
                      Download Resume
                    </button>
                  </div>
                  <div className="fullWidthHorizontalLine" />
                  <div className="subsectionContainer">
                    <h3 className="resumeSubheader">Professional Projects</h3>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <h4 className="resumeSubsubheader">
                        Blazzi - Lead Frontend Developer - 2024
                      </h4>
                      <p className="resumeDescription">
                        Led a team of two developers in designing and implementing the frontend
                        UI/UX for a React Native app tailored to the beauty industry. Currently
                        spearheading the development of the accompanying business website. This
                        project originated as part of a year-long master’s program and has continued
                        to evolve post-graduation.
                      </p>
                      <button
                        className="resumeButton"
                        onClick={() => handleNavigation("/projects/blazzi")}
                      >
                        View Project
                      </button>
                    </div>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <h4 className="resumeSubsubheader">
                        Disney Studio LAB - Software Engineer - 2023
                      </h4>
                      <p className="resumeDescription">
                        Led the networking and coding components of a prototype IOT-type system
                        enabling remote Marvel executive visits to movie sets. Nominated by my team
                        as an inventor on a patent recognizing the project’s innovation. This was
                        undertaken as a year-long student project, working closely with
                        professionals at Disney.
                      </p>
                      <button
                        className="resumeButton"
                        onClick={() => handleNavigation("/projects/avengineers")}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="subsectionContainer">
                    <h3 className="resumeSubheader">Professional Experience</h3>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <ul className="list resumeDescription">
                        <li>Blazzi - Frontend Software Engineer</li>
                        <li>Headversity - Software Developer Intern</li>
                        <li>BYU Computer Science - UX Lab Supervisor</li>
                        <li>BYU IT - Database TA</li>
                        <li>BYU Cybersecurity Research Lab - Website manager</li>
                      </ul>
                      <button className="resumeButton" onClick={handleDownload}>
                        See more in my resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionContainer">
            <div className={`pageContent ${isSmallWindow ? "center" : ""}`}>
              <div className="projectContent">
                <div className="sectionContentContainer">
                  <h1 className="resumeHeader">Skills and Certifications</h1>
                  <div className="fullWidthHorizontalLine" />
                  <div className="subsectionContainer">
                    <h3 className="resumeSubheader">Skills</h3>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <p>
                        React.js • Typescript • Javascript • HTML • CSS • Vue.js • git • React
                        Native • Swift • RESTful APIs • MySQL • SCRUM • UX Principles • Node.js •
                        Jira • PostgreSQL • Java • Python • Docker • AWS Technologies • CI/CD
                        Pipeline
                      </p>
                    </div>
                  </div>
                  <div className="subsectionContainer">
                    <h3 className="resumeSubheader">Certifications</h3>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <ul className="list">
                        <li>Telepresence Patent with Disney Marvel</li>
                        <li>Professional Scrum Master - scrum.org</li>
                        <li>Phi Eta Sigma Honors Society (2018)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionContainer">
            <div className={`pageContent ${isSmallWindow ? "center" : ""}`}>
              <div className="projectContent">
                <div className="sectionContentContainer">
                  <h1 className="resumeHeader">Education</h1>
                  <div className="fullWidthHorizontalLine" />
                  <div className="subsectionContainer">
                    <h3 className="resumeSubheader">
                      Masters of Information Systems Management - Brigham Young University - 2024
                    </h3>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <p>
                        In this program nicknamed the MISM, I spent a year doing an accelerated
                        masters degree that emphasized in software development. I love this program
                        as it gave me so many opportunities to work in professionally simulated
                        teams and put my skills to the test through mentored projects.
                      </p>
                    </div>
                  </div>
                  <div className="subsectionContainer">
                    <h3 className="resumeSubheader">
                      Bachelors of Science in Information Technology - Brigham Young University -
                      2023
                    </h3>
                    <div className={isSmallWindow ? "" : "indent"}>
                      <p>
                        This program gave me the technical skills that I need to be where I am
                        today. The most important thing I learned through these years was to learn
                        how to teach myself new technologies and skills and to be able to learn from
                        my peers. This is one of the most vital skills in tech and will serve me for
                        years to come!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default About;
