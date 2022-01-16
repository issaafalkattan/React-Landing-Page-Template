import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from "./article.jsx";
import "../articlegrid.css";

const ArticleList = ({history}) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
      const getArticles = async () => {

          try {
              const {data} = await axios.get('http://localhost:8080/articles')
              console.log('data')
              console.log(data)
              setArticles(data)

          } catch (error) {
              console.log(error)
          }

      };
      getArticles()
  }, [history])
  
  return(
    <>
        <div id="buyarticle"> 
            <div className='section-title text-center'>
                    <h2> buy an article </h2>
            </div>

            {console.log('articles')}
            {console.log(articles)}    
            {articles.map((article) => (
                <Article article={article} />
            ))}
        </div>
    </>
    
  );
}
export default ArticleList;