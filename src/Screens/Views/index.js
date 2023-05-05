import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styles from "./styles.module.css";
import { fetchAPI } from "../../Network";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ViewSlice } from "./reducer";
const Views = () => {
  const data=useSelector(state=>state.ViewReducer.placesList)
  const dispatch=useDispatch()
  const fetchnew = async ({currentTarget}) => {
    const result = await axios({
      method: 'GET',
      url:'https://dummyjson.com/users'
      // url: 'https://travel-advisor.p.rapidapi.com/locations/auto-complete',
      // params: {
      //   query: currentTarget.value,
      //   lang: 'en_US',
      //   units: 'km'
      // },
      // headers: {
      //   'X-RapidAPI-Key': 'ea09eff078msh831b8a8a35080a7p1644c6jsn79c1a81e8292',
      //   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      // }
    })
    // console.log(result);
    alert(result.data?.users)
    dispatch( ViewSlice.actions.searchPlaces( result.data?.users??[]))
  };
  return (
    <div>
      <Header />
      {data.map((item) => (
        <img src={item.image} />
      ))}
      <div className={styles.main}>
      <div className={styles.mainviews}>VIEWS OF BEAUTY PLACES</div>
      <div className={styles.mainvi}>
      <div className={styles.searchcom}>
        <input
          className={styles.searchinput}
          type="text"
          placeholder="SEARCH FOR VIEWS ..."
          onChange={fetchnew}
        />
        <button
          className={styles.searchbutton}
          type="submit"
          onClick={fetchnew}
        >
          Search
        </button>
      </div>
      <div className={styles.sentence_div}>
        <p className={styles.sentence}>
          For centuries, human imagination has been captivated by the
          awe-inspiring magnificence of both nature's wonders and the
          architectural creations of mankind. The sights of various landscapes,
          encompassing majestic mountains to gleaming oceans, along with
          historic monuments to contemporary towering buildings, have the
          ability to evoke amazement, admiration, and even a spiritual
          connection.Arizona's Grand Canyon is undoubtedly one of the most
          recognizable sights across the globe. One can't help but feel
          diminutive when confronted with the breathtaking expanse of this
          chasm, which serves as a reminder of the enormity of nature. The
          expanse of the canyon exceeds 277 miles and reaches depths of over one
          mile at its lowest point. The colorful cliffs and mesas show how
          erosion and the constant passage of time can greatly impact nature.
          Many travelers from various parts of the world come to admire the
          awe-inspiring sights of the Grand Canyon, whether it be on foot, by
          riding a mule, or soaring above in a helicopter.
        </p>
      </div>
      <Footer />
    </div>
    </div>
    
    </div>
    /*hi*/
  );
};
export default Views;
