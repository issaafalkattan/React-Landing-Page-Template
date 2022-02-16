import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from "./article.jsx";
import "../articlegrid.css";

const ArticleList = ({ history }) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {

            try {
                const { data } = await axios.get('http://localhost:8080/articles');
                console.log('data');
                console.log(data);
                data.rows.map(row => {
                    let images = [];
                    for(let pic of data.images){
                        if(row.uuid == pic.substr(0, pic.indexOf('/'))) images.push(pic);
                    }
                    row["images"] = images;
                })
                console.log(data);
                setArticles(data.rows);

            } catch (error) {
                console.log(error);
            }

        };
        getArticles()
    }, [history])

    return (
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