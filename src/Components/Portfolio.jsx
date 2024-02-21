/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/backastranaut.jpg";

const imageAltText = "Image of an astranaut from the back";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Omnifood: A healthy meal delivered to your door, every single day",
    description:
      "Omnifood a single page website built as a dummy project. Omnifood is a fictional company focused on providing AI-based meals through a subscription service",
    url: "https://omnifood-casiomax.netlify.app/",
  },
  {
    title: "Domino's Cashier GUI Project! 🍕 ",
    description:
      "This Java Swing-based application revolutionizes the cashier's role at Domino's restaurants with modern graphical user interfaces",
    url: "https://github.com/CASIOmax/dominos-ordering-system",
  },
  {
    title: "JARVIS AI virtual assistant SRS",
    description:
      "An SRS document and a prototype for that Jarvis Artificial Intelligence Virtual assistant",
    url: "https://www.linkedin.com/in/sajjadahmad-casiomax/details/projects/1635534072400/single-media-viewer/?profileId=ACoAACumJa8BiWKDI3fr5F0F2vsMRGRNFrxPa5c",
  },
  {
    title: "Graphics Designing Portofolio",
    description:
      "This protofolio is specifically related to my graphics designing, contains all the projects I have worked on",
    url: "https://drive.google.com/file/d/1U4XG7ExLirbocSMkqPEY-pila9vQK9PO/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
