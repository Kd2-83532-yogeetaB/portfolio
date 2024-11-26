import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Emed",
      img: "path_to_your_emed_image.jpg", // Add the correct image path here
      description:
        "Emed is a comprehensive healthcare platform designed to streamline patient care and improve access to medical services.",
      technologies: "HTML | CSS | JavaScript | React",
      link: "https://your_emed_live_demo_link.com", // Add the correct link here
      github: "https://github.com/your_emed_github_link", // Add the correct GitHub link here
    },
    {
      id: 2,
      title: "Sizzlo",
      img: "path_to_your_sizzlo_image.jpg", // Add the correct image path here
      description:
        "Sizzlo is a food delivery application that connects users with local restaurants, enabling them to order meals online with ease.",
      technologies: "HTML | CSS | JavaScript | React",
      link: "https://your_sizzlo_live_demo_link.com", // Add the correct link here
      github: "https://github.com/your_sizzlo_github_link", // Add the correct GitHub link here
    },
    {
      id: 3,
      title: "Product Feedback App JS",
      img: "path_to_your_product_feedback_app_image.jpg", // Add the correct image path here
      description: "A web app for collecting and managing product feedback.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://yogeeta16.github.io/product-feedback-App-js/Index.html",
      github: "https://github.com/Yogeeta16/product-feedback-App-js",
    },
    {
      id: 4,
      title: "Task Management Web App",
      img: "path_to_your_task_management_image.jpg", // Add the correct image path here
      description: "A web app to help users manage their tasks efficiently.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://yogeeta16.github.io/task-management-web-app/",
      github: "https://github.com/Yogeeta16/task-management-web-app",
    },
    {
      id: 5,
      title: "Movie App JS",
      img: "path_to_your_movie_app_image.jpg", // Add the correct image path here
      description: "An interactive web app to browse and find movie information.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://yogeeta16.github.io/movie-app-js/",
      github: "https://github.com/Yogeeta16/movie-app-js",
    },
    {
      id: 6,
      title: "Tetris Game",
      img: "path_to_your_tetris_game_image.jpg", // Add the correct image path here
      description: "A classic Tetris game implemented in JavaScript.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://yogeeta16.github.io/tetrisgame/",
      github: "https://github.com/Yogeeta16/tetrisgame",
    },
    {
      id: 7,
      title: "Weather App",
      img: "path_to_your_weather_app_image.jpg", // Add the correct image path here
      description: "A web app to check the weather conditions in different locations.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://yogeeta16.github.io/weather-app-js/",
      github: "https://github.com/Yogeeta16/weather-app-js",
    },
    {
      id: 8,
      title: "Movie React App",
      img: "path_to_your_movie_react_app_image.jpg", // Add the correct image path here
      description: "A React-based movie search application.",
      technologies: "HTML | CSS | JavaScript | React",
      link: "https://your_movie_react_app_live_demo_link.com", // Add the correct link here
      github: "https://github.com/Yogeeta16/movie-app-react",
    },
    {
      id: 9,
      title: "Public-Spirited MEDIA",
      img: "path_to_your_public_spirited_media_image.jpg", // Add the correct image path here
      description: "A simple website reimagining media as a public venture.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://yogeeta16.github.io/",
      github: "https://github.com/Yogeeta16/public-spirited-media",
    },
    {
      id: 10,
      title: "Web Scraping Project",
      img: "path_to_your_web_scraping_image.jpg", // Add the correct image path here
      description: "A project demonstrating web scraping techniques.",
      technologies: "HTML | CSS | JavaScript | Node.js",
      link: "https://your_web_scraping_live_demo_link.com", // Add the correct link here
      github: "https://github.com/Yogeeta16/web-scraping",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
