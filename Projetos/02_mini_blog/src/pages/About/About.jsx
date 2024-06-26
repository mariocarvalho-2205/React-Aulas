// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css"
import React from "react";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end.</p>
      <Link className="btn" to="/posts/create" >Criar post</Link>
    </div>
  );
};

export default About;
