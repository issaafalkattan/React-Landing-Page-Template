import React from 'react';

export const Header = ({ data }) => {
    return (
        <header id="header">
            <div className="intro" style={{ backgroundImage: 'url(./assets/img/intro-bg.jpg)' }}>
                <div className="overlay">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="intro-text col-md-8">
                                <h1>
                                    {data.title}
                                </h1>
                                <p>{data.paragraph}</p>
                                <a
                                    href="#features"
                                    className="btn btn-custom btn-lg"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
