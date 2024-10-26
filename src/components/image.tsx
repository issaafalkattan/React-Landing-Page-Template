import React from 'react';

export const Image = ({ title, largeImage, smallImage }) => {
    return (
        <div className="portfolio-item">
            <a href={largeImage} title={title} className="hover-bg">
                <h4 className="text-center hover-text">{title}</h4>
                <img src={smallImage} className="img-fluid" alt={title} />
            </a>
        </div>
    );
};
