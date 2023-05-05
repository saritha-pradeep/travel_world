import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div>
      <Header />

      <div className={styles.main}>
        <div>
          <div className={styles.abouthead}>
            <div className={styles.headitem}>
              <img
                src={require("../../assets/gallery_header.jpg")}
                alt=""
                style={{ maxWidth: "100%",maxHeight:"200%",marginLeft:"1rem" }}
              />
            </div>
            <div className={styles.sentence}>
              <h1>ABOUT US</h1>
              <p>
                We are a team of passionate travelers who want to share our love
                of travel with the world. Our mission is to inspire and empower
                people to explore the world and experience new cultures.
              </p>
              <p>
                Our website is designed to help you plan your next adventure,
                whether it's a weekend getaway or a round-the-world trip. We
                offer a wide range of travel resources, including destination
                guides, travel tips, and reviews of hotels, restaurants, and
                attractions.Our website is designed to help you plan your next adventure,
                whether it's a weekend getaway or a round-the-world trip. We
                offer a wide range of travel resources, including destination
                guides, travel tips, and reviews of hotels, restaurants, and
                attractions.Our website is designed to help you plan your next adventure,
                whether it's a weekend getaway or a round-the-world trip. We
                offer a wide range of travel resources, including destination
                guides, travel tips, and reviews of hotels, restaurants, and
                attractions.Our website is designed to help you plan your next adventure,
                whether it's a weekend getaway or a round-the-world trip. We
                offer a wide range of travel resources, including destination
                guides, travel tips, and reviews of hotels, restaurants, and
                attractions.Our website is designed to help you plan your next adventure,
                whether it's a weekend getaway or a round-the-world trip. 
                
              
                
                
              
          

              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
