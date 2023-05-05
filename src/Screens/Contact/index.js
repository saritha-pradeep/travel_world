import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import styles from "./styles.module.css";

 const Contact = () => {
  return (
    <div> 
      <Header/>
      
      <div className={styles.fullcontact}>
      <h6 className={styles.headt}>CONTACT US</h6>
      <div className={styles.contact}>
       
        <div className={styles.ContactContent}>
        
          <form action="">
          
            <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_control}
                placeholder="FULL NAME"
                required
              />
            </div>

            <div className={styles.form_group}>
              <input
                type="email"
                className={styles.form_control}
                placeholder="EMAIL ID"
                required
              />
            </div>

            <div className={styles.form_group}>
              <input
                type="number"
                className={styles.form_control}
                placeholder="PHONE NUMBER"
                required
              />
            </div>

            <div className={styles.form_group}>
              <textarea
                rows="6"
                className={styles.form_control}
                placeholder="COMMENTS"
                required
              ></textarea>
            </div>

            <button className={styles.btn}>Submit Now</button>
          </form>
        
        </div>
      </div>
      </div>
      
      <Footer/>
      </div>
       
    
  );
}
export default Contact;
