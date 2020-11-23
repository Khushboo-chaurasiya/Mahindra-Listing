import React, { useState, useEffect } from "react";
import myData from "./data.json";

function Notes() {
  const [language, setLanguage] = useState([]);
  const [wholeData] = useState(myData);

  const positionClicked = (item) => {
    setLanguage(item.languages);
    let allLanguage = item.languages;
    setLanguage(allLanguage);
    var filter, table, i, wholeDiv;
    table = document.getElementById("myTable");
    filter = allLanguage;
    for (i = 0; i < table.getElementsByTagName("table").length; i++) {
      let check = 0;
      for (let j = 0; j < filter.length; j++) {
        let currentElementCheck = wholeData[i].languages.indexOf(filter[j]);
        if (currentElementCheck === -1) {
          check = 1;
          break;
        }
      }
      wholeDiv = table.getElementsByTagName("tbody")[i];

      if (check === 0) {
        wholeDiv.style.display = "";
      } else {
        wholeDiv.style.display = "none";
      }
    }
  };

  const filterRow = (currentItem) => {
    let allLanguage = language;
    allLanguage = allLanguage.filter(function (e) {
      return e !== currentItem;
    });
    setLanguage(allLanguage);
    var filter, table, i, wholeDiv;
    table = document.getElementById("myTable");
    filter = allLanguage;
    for (i = 0; i < table.getElementsByTagName("table").length; i++) {
      let check = 0;
      for (let j = 0; j < filter.length; j++) {
        let currentElementCheck = wholeData[i].languages.indexOf(filter[j]);
        if (currentElementCheck === -1) {
          check = 1;
          break;
        }
      }

      wholeDiv = table.getElementsByTagName("tbody")[i];

      if (check === 0) {
        wholeDiv.style.display = "";
      } else {
        wholeDiv.style.display = "none";
      }
    }
  };

  const RemoveFilter = () => {
    var table, i, wholeDiv;
    table = document.getElementById("myTable");
    setLanguage([]);
    for (i = 0; i < table.getElementsByTagName("table").length; i++) {
      wholeDiv = table.getElementsByTagName("tbody")[i];

      wholeDiv.style.display = "";
      
    }
  }

  return (
    <div className="container outerDiv">
      <p>
        <img
          className="headerImg"
          src={require("./images/bg-header-desktop.svg")}
          alt="Not found"
        />
      </p>
      <div
        className="container my-4"
        style={{ backgroundColor: "hsl(180, 52%, 96%)" }}
      >
        {language.length > 0 ? (
          <p className="mb-4 tableDiv filter">
            <span className="languageSpan">
              {language.map((language) => (
                <>
                  <span><button className="languageItem"> {language} <button
                      className="filterButton"
                      onClick={() => filterRow(language)}
                    >
                      X
                    </button> </button> </span>
                </>
              ))}
              <b className="ClearTag" onClick={RemoveFilter}>
                <u>CLEAR</u>
              </b>
            </span>
          </p>
        ) : (
          ""
        )}

        <div className="row" id="myTable">
          <div className="col-md-12 mb-4 tableDiv">
            {myData.map((item) => (
              <table>
                <tbody className="wholeDiv">
                  <tr key={item.id}>
                    <td rowSpan="3" className="imgRow">
                      <img
                        src={require(`${item.logo}`)}
                        width="55px"
                        height="55px"
                        alt="Not found"
                      />
                    </td>
                    <td style={{ paddingTop: "1%" }}>
                      <b className="title">{item.company}</b>{" "}
                      {item.new && <span className="titleNew">NEW!</span>}{" "}
                      {item.featured && (
                        <span className="titleFeatured">FEATURED</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="position"
                      onClick={() => positionClicked(item)}
                    >
                      {item.position}
                    </td>
                    <td className="languageTd">
                      {item.languages.map((language) => (
                        <span className="language"> {language} </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td className="lastRow">
                      {item.postedAt} <span>.</span> {item.contract}{" "}
                      <span>.</span> {item.location}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Notes;
