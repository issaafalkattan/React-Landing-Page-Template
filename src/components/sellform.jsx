import React from "react";
import "../sellform.css";

export const Sellform = (props) => {
  return (
  <div id="sellform" className='text-center'>
    <div className='section-title text-center'>
     <div className='container'>
        <h2> advertise an article </h2> 
        <p> If you would like to advertise an article, please fill in the form below. The article must have a title, an ID, a description and a picture. </p>
         <p> Please notice that an <strong> article </strong> is only <strong> available </strong> for <strong> 15 Minutes </strong>. </p>

        <form action="/article" method="Post">
          <div className="uuid">
            <label for="uuid">Unique ID </label>
            <input type="number" placeholder="UUID" name="uuid" id="uuid" required />
          </div>

          <div className="title">
            <label for="title">Title</label>
            <input type="title" placeholder="title" name="title" id="title" required />
          </div>

          <div className="start_price">
            <label for="start_price">Start Price</label>
            <input type="number" step="0.5" placeholder="Your start price is" name="start_price" id="start_price" required />
          </div>

          <div className="description">
            <label for="description">Description</label>
            <textarea name="description" placeholder="Description for the new article" cols="30" rows="5" id="description" required> </textarea>
          </div>      

          <div className="submit">
            <input type="submit" value="Create article" />
          </div>

        </form>

      </div>
    </div>

</div>
);
}
