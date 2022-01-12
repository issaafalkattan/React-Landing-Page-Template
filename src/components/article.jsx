/* Zur Darstellung eines einzelnen Artikels */

import "../articlegrid.css"

const Article = ({article, history}) => {

  
  return(
    <>
        { /*console.log('article') */}
        { /* console.log(article) */}
          <div className="article-column"> 
              <p> UUID: {article.uuid} </p>
              <p> TITLE: {article.title} </p>
              <p> START_PRICE: {article.start_price} </p>
              <p> DESCRIPTION: {article.description} </p>
          </div> 
    </>
  );
}
export default Article;