import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ArticleList = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
      const getArticles = async () => {

          try {
              const response = await axios.get('http://localhost:8080/articles')
              console.log('response')
              console.log(response)
              setArticles(response)

          } catch (error) {
              console.log(error)
          }

          console.log('articles')
          console.log(articles)

      };
      getArticles()

      return articles.map((article) => <li> {article} </li> )
  }, [])
  
  return(
      <h1> Hello World!</h1>
  )
}
export default ArticleList;