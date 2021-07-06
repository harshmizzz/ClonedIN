import React from "react";
import "./Widget.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";
function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>


      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Reactjs On Top", "Top News = 3989 readers")}
      {newsArticle("CoronaVirus", "Top News = 500 readers")}
      {newsArticle("Front-End development on rise", "Top News = 3000 readers")}
      {newsArticle("Php Sucks", "Top News = 10000 readers")}
    </div>
  );
}

export default Widget;
