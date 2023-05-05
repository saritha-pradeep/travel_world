import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI, apis } from "../../Network";

import { callsomeapi } from "./reducer";
import Header from "../../Components/Header";
import styles from "./styles.module.css";
import Footer from "../../Components/Footer";
import DatePicker from "react-datepicker";
import "./styles.module.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
export default function Home(props) {
  const state = useSelector((state) => state.HomeReducer);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchNew = async () => {
    const result = await fetchAPI({ url: apis.food });
    dispatch(callsomeapi(result));
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.sentence}>
        <p>
          A platform aimed at providing travel enthusiasts with useful resources
          to plan, research, and reserve their desired travel experiences is
          referred to as a travel website. Travel websites offer a plethora of
          resources and tools that enable travelers to make well-informed
          decisions about their travel arrangements, be it for a work trip, a
          short escapade, or a much-anticipated vacation.
        </p>
      </div>
      <div className={styles.imgs}>
        <div className={styles.searchcom}>
          <input
            className={styles.searchinput}
            type="text"
            placeholder="SEARCH DESTINATIONS ..."
          />
          <button className={styles.searchbutton} type="submit">
            Search
          </button>
        </div>
        <div className={styles.maindate}>
          <div>
            <DatePicker
              selected={startDate}
              className={styles.cust}
              placeholderText="START DATE"
              onChange={(newValue) => setStartDate(newValue)}
            />
          </div>
          <div>
            <DatePicker
              className={styles.cust}
              selected={endDate}
              placeholderText="END DATE"
              onChange={(newValue) => setEndDate(newValue)}
            />
          </div>
        </div>
      </div>
      <div>
        <section>
          <div className={styles.container}>
            <div className={styles.pricing_top}>
              <h2 className={styles.section_title}>
                PRICING <span className={styles.highlited}> PLANS</span>
              </h2>
            </div>
            <div className={styles.pricing_wrapper}>
              <div className={styles.pricing_item}>
                <div className={styles.pricing_cardtop}>
                  <h2 className={styles.section_title}>REGULAR </h2>
                  <h2 className={styles.pricing_sectiontitle}>
                    $30 <span>/month</span>
                  </h2>
                </div>
                <div className={styles.services}>
                  <ul>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i> 6Months Travel
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Customer support
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Travel Card{" "}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>
                      </span>
                      Standard options
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Return Ticket
                      </span>
                    </li>
                  </ul>
                  <button className={styles.reg}>Join Now</button>
                </div>
              </div>
              <div className={styles.pricing_item}>
                <div className={styles.pricing_cardtop}>
                  <h2 className={styles.section_title}>PREMIUM </h2>
                  <h2 className={styles.pricing_sectiontitle}>
                    $100 <span>/month</span>
                  </h2>
                </div>
                <div className={styles.services}>
                  <ul>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i> 1Year Travel
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Customer support
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Family Trip
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>
                      </span>
                      Standard options
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>First Class
                      </span>
                    </li>
                  </ul>
                  <button className={styles.reg}>Join Now</button>
                </div>
              </div>
              <div className={styles.pricing_item}>
                <div className={styles.pricing_cardtop}>
                  <h2 className={styles.section_title}>STANDARD</h2>
                  <h2 className={styles.pricing_sectiontitle}>
                    $50 <span>/month</span>
                  </h2>
                </div>
                <div className={styles.services}>
                  <ul>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i> 8Months Travel
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Customer support
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Travel Card
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>
                      </span>
                      Standard options
                    </li>
                    <li>
                      <span>
                        <i class="ri-checkbox-circle-line"></i>Economy Class
                      </span>
                    </li>
                  </ul>
                  <button className={styles.reg}>Join Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <p className={styles.logo}>TRENDING PLACES</p>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            {" "}
            <img src={require("../../assets/china.jpg")} />
          </div>

          <div className={styles.grid_item}>
            {" "}
            <img src={require("../../assets/bali.jpg")} />
          </div>

          <div className={styles.grid_item}>
            {" "}
            <img src={require("../../assets/londonbridge.jpg")} />
          </div>

          <div className={styles.grid_item}>
            {" "}
            <img src={require("../../assets/maldives.jpg")} />
          </div>

          <div className={styles.grid_item}>
            {" "}
            <img src={require("../../assets/paris.jpg")} />
          </div>

          <div className={styles.grid_item}>
            {" "}
            <img src={require("../../assets/kerala.jpg")} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
