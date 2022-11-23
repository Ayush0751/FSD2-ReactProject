import React from "react";
import { useState } from "react";
import styles from "../../Assets/css/ViewAll/ViewAll.module.css";
import Navbar from "../Navbar/Navbar";
function ViewAll() {
  //   const getCellValue = (tr, idx) =>
  //     tr.children[idx].innerText || tr.children[idx].textContent;

  //   const comparer = (idx, asc) => (a, b) =>
  //     ((v1, v2) =>
  //       v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
  //         ? v1 - v2
  //         : v1.toString().localeCompare(v2))(
  //       getCellValue(asc ? a : b, idx),
  //       getCellValue(asc ? b : a, idx)
  //     );

  //   // do the work...
  //   document.querySelectorAll("th").forEach((th) =>
  //     th.addEventListener("click", () => {
  //       const table = th.closest("table");
  //       Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
  //         .sort(
  //           comparer(
  //             Array.from(th.parentNode.children).indexOf(th),
  //             (this.asc = !this.asc)
  //           )
  //         )
  //         .forEach((tr) => table.appendChild(tr));
  //     })
  //   );
  const [BookMark, setBookMark] = useState();
  const fbookbark = (e) => {
    // console.log(e.currentTarget);
    setBookMark(()=>{
        if(e.currentTarget.style.color===""){
             e.currentTarget.style.color="#0095eb"
        }
        else e.currentTarget.style.color=""
    })
  };
  return (
    <div>
      <Navbar/>
      <section class={styles["page-category"]}>
        <div class={styles["page-logo"]}>
          <i class="fa-solid fa-fire"></i>
        </div>
        <div class={styles["page-type"]}>Most Copied</div>

        <input
          class={styles["form-control"]+" "+ styles["search-box"]}
          id="myInput"
          type="text"
          placeholder="Search.."
        />
      </section>

      <section>
        <div className={styles["TableCont"]}>
          <table id={styles["myTable"]} class={styles["searchable"] + " "+ styles["sortable"]}>
            <thead>
              <tr>
                {/* <!--When a header is clicked, run the sortTable function, with a parameter, 0 for sorting by names, 1 for sorting by country:--> */}
                <th>Name</th>
                <th>Place</th>
                <th>Score</th>
                <th>Return</th>
                <th>P/L %</th>
                <th>Copiers</th>
                <th>Commission</th>
                <th>Wishlist</th>
              </tr>
            </thead>
            {/* <!-- <tr>
                <td>Berglunds snabbkop</td>
                <td>Sweden</td>
            </tr> --> */}
            <tbody>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>Sanu Das</span>
                  <p class={styles["td-user-name"]}>KrSanu02</p>
                </td>
                <td class={styles["tb-place"]}>Purnia</td>
                <td class={styles["tb-score"]}>5⭐</td>
                <td class={styles["tb-return"]}>85%</td>
                <td class={styles["tb-pl"]}>1.9</td>
                <td class={styles["tb-copiers"]}>958</td>
                <td class={styles["tb-charge"]}>25%</td>
                <td class={styles["tb-wishlist"]}>
                  <i
                    class="fa-solid fa-bookmark wish-btn"
                    id={styles["fa-watchlist"]}
                    onClick={fbookbark}
                  ></i>
                </td>
              </tr>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>Parth Raut</span>
                  <p class={styles["td-user-name"]}>rautparth02</p>
                </td>
                <td class={styles["tb-country"]}>Nagpur</td>
                <td class={styles["tb-score"]}>2⭐</td>
                <td class={styles["tb-return"]}>78%</td>
                <td class={styles["tb-pl"]}>1.7</td>
                <td class={styles["tb-copiers"]}>562</td>
                <td class={styles["tb-charge"]}>18%</td>
                <td class={styles["tb-wishlist"]} >
                  <i
                    class="fa-solid fa-bookmark"
                    id={styles["fa-watchlist"]}
                    onClick={fbookbark}
                  ></i>
                </td>
              </tr>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>prashant Kumar Prakash</span>
                  <p class={styles["td-user-name"]}>prashant01</p>
                </td>
                <td class={styles["tb-country"]}>Patna</td>
                <td class={styles["tb-score"]}>3⭐</td>
                <td class={styles["tb-return"]}>55%</td>
                <td class={styles["tb-pl"]}>2.2</td>
                <td class={styles["tb-copiers"]}>754</td>
                <td class={styles["tb-charge"]}>32%</td>
                <td class={styles["tb-wishlist"]} onClick={fbookbark}>
                  <i class="fa-solid fa-bookmark" id={styles["fa-watchlist"]} onClick={fbookbark}></i>
                </td>
              </tr>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>Ayush Raj</span>
                  <p class={styles["td-user-name"]}>rajayush01</p>
                </td>
                <td class={styles["tb-country"]}>muzaffarpur</td>
                <td class={styles["tb-score"]}>1⭐</td>
                <td class={styles["tb-return"]}>88%</td>
                <td class={styles["tb-pl"]}>2.12</td>
                <td class={styles["tb-copiers"]}>641</td>
                <td class={styles["tb-charge"]}>19%</td>
                <td class={styles["tb-wishlist"]} onClick={fbookbark}>
                  <i class="fa-solid fa-bookmark" id={styles["fa-watchlist"]} onClick={fbookbark}></i>
                </td>
              </tr>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>Aditya Raj</span>
                  <p class={styles["td-user-name"]}>rajAditya01</p>
                </td>
                <td class={styles["tb-country"]}>Bangalore</td>
                <td class={styles["tb-score"]}>4⭐</td>
                <td class={styles["tb-return"]}>69%</td>
                <td class={styles["tb-pl"]}>1.6</td>
                <td class={styles["tb-copiers"]}>415</td>
                <td class={styles["tb-charge"]}>13%</td>
                <td class={styles["tb-wishlist"]} onClick={fbookbark}>
                  <i class="fa-solid fa-bookmark" id={styles["fa-watchlist"]} onClick={fbookbark}></i>
                </td>
              </tr>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>Shubham Shandilya</span>
                  <p class={styles["td-user-name"]}>frolicsandy01</p>
                </td>
                <td class={styles["tb-country"]}>New Delhi</td>
                <td class={styles["tb-score"]}>2⭐</td>
                <td class={styles["tb-return"]}>95%</td>
                <td class={styles["tb-pl"]}>1.55</td>
                <td class={styles["tb-copiers"]}>251</td>
                <td class={styles["tb-charge"]}>8%</td>
                <td class={styles["tb-wishlist"]}>
                  <i class="fa-solid fa-bookmark" id={styles["fa-watchlist"]} onClick={fbookbark}></i>
                </td>
              </tr>
              <tr class={styles["sort"]}>
                <td class={styles["table-name"]}>
                  <span>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                  </span>
                  <span class={styles["td-name"]}>Rahul Raj</span>
                  <p class={styles["td-user-name"]}>01rahul</p>
                </td>
                <td class={styles["tb-country"]}>Noida</td>
                <td class={styles["tb-score"]}>1⭐</td>
                <td class={styles["tb-return"]}>30%</td>
                <td class={styles["tb-pl"]}>1.33</td>
                <td class={styles["tb-copiers"]}>102</td>
                <td class={styles["tb-charge"]}>5%</td>
                <td class={styles["tb-wishlist"]}>
                  <i class="fa-solid fa-bookmark" id={styles["fa-watchlist"]} onClick={fbookbark}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ViewAll;
