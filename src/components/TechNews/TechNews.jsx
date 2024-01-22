import React from "react";
import { useEffect, useState } from "react";
import './TechNews.css'

function TechNews() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const key = "c0ec8f1af7994f868737f416eb39984e";
  //NEWS CATEGORY
  let category = "technology";
  //FROM DATE ((FOR FREE TRIAL ONLY ABLE TO FETCH FROM THE PAST 5 MONTHS))
  let date = "2023-12-21";
  //HOW MANY RESULTS
  let pageSize = "12";
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
      } catch (error) {
        setError("Error fetching tech news");
      }
    };
    fetchData();
    
  }, [url]);

  return (
    <div>
      <h1>Tech News</h1>
      {error && <p>{error}</p>}
      <ul className='news-ul'>
        {articles.map((article, index) => (
          <container className="container" key={index}>
            <h3>{article.title}</h3>
            <a href={article.url}>
              <img className="article-img" src={article.urlToImage} alt="" />{" "}
            </a>
            <p>{article.description}</p>
            <h4>Author: {article.author}</h4>
          </container>
        ))}
      </ul>
    </div>
  );
}

export default TechNews;
