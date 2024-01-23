import React from "react";
import { useEffect, useState } from "react";
import "./TechNews.css";
import techNewsImg from './tech-news.png'

function TechNews() {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(4);

  const key = "c0ec8f1af7994f868737f416eb39984e";
  //NEWS CATEGORY
  let category = "technology";
  //FROM DATE ((FOR FREE TRIAL ONLY ABLE TO FETCH FROM THE PAST 5 MONTHS))
  let date = "2023-12-21";
  //HOW MANY RESULTS
  // let pageSize = "12";
  //LANGUAGE EN = ENGLISH
  let language = "en";
  //DYNAMIC URL
  let url = `https://newsapi.org/v2/top-headlines?sortBy=relevancy&category=${category}&pageSize=${pageSize}&from=${date}-12-21&language=${language}&apiKey=c0ec8f1af7994f868737f416eb39984e`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArticles(data.articles);
        setDisplayedArticles(data.articles.slice(0, pageSize));
      } catch (error) {
        setError("Error fetching tech news");
      }
    };
    fetchData();
  }, [url, pageSize]);

  const handleShowMore = () => {
    setPageSize(12);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setPageSize(4);
    setShowMore(true);
  };
  

  return (
    <div>
      {/* <h1>Tech News</h1> */}
      <img
      className="tech-title-img" src={techNewsImg} alt="" />
      {error && <p>{error}</p>}
      <ul className="news-ul">
        {displayedArticles.map((article, index) => (
          <div className="container" key={index}>
            <a href={article.url}>
            <h3>{article.title}</h3>
              <img className="article-img" src={article.urlToImage} alt="" />
            </a>
            <p>{article.description}</p>
            <h4 className="author">Author: {article.author}</h4>
          </div>
        ))}
      </ul>
      
      {showMore && (
        <button onClick={handleShowMore}>Read More</button>
      )}

      {!showMore && (
        <button onClick={handleShowLess}>Read Less</button>
      )}
      
    </div>
  );
}

export default TechNews;
