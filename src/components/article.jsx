/* Zur Darstellung eines einzelnen Artikels */
import axios from 'axios';
import "../articlegrid.css"


const Article = ({ article, history }) => {

  // {pictures(article.uuid)}  --> insert below DESCRIPTION
  return (
    <>
      {console.log('article')}
      {console.log(article)}
      <div className="col-md-4">
        <div className="article-item">
        {article.images.map(img => <img src={img}></img>)}
        <p>   {article.title} </p>
          <p> ID: {article.uuid} </p>
          <p> Startgebot: {article.start_price} € </p>
          <p> Beschreibung : {article.description} </p>
         
        </div>
      </div>
    </>
  );
}
export default Article;