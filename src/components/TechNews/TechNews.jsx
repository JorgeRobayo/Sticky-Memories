import React from "react";

function TechNews() {
  const key = "c0ec8f1af7994f868737f416eb39984e";
  //NEWS CATEGORY
  let category = "technology";
  //FROM DATE ((FOR FREE TRIAL ONLY ABLE TO FETCH FROM THE PAST 5 MONTHS))
  let date = "2023-12-21";
  //HOW MANY RESULTS
  let pageSize = "10";
  //LANGUAGE EN = ENGLISH
  let language = "en";
  //DYNAMIC URL
  let url = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&from=${date}-12-21&language=${language}&apiKey=c0ec8f1af7994f868737f416eb39984e`;
  
  const req = new Request(url);
  fetch(req).ten((response) => {
    console.log(response.json);
  });

  return (
    <div>
      <h1>Tech News</h1>
      <ul>
        <ls>ARTICLES HERE</ls>
        <ls>ARTICLES HERE</ls>
        <ls>ARTICLES HERE</ls>
        <ls>ARTICLES HERE</ls>
        <ls>ARTICLES HERE</ls>
      </ul>
    </div>
  );
}

export default TechNews;
