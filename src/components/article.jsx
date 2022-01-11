/* Zur Darstellung eines einzelnen Artikels */

import "../sellform.css"

const Article = ({article, history}) => {

  
  return(
    <>
        { /*console.log('article') */}
        { /* console.log(article) */}

      <div id='team' className='text-center'>
          <div> 
              <p> UUID: {article.uuid} </p>
              <p> TITLE: {article.title} </p>
              <p> START_PRICE: {article.start_price} </p>
              <p> DESCRIPTION: {article.description} </p>
          </div> 
      </div>
    </>
  );
}
export default Article;