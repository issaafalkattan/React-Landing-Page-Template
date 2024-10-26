import React from 'react';

export const Features = ({ data }) => {
    return (
        <section id="features" className="section-gray">
            <div className="container text-center">
                <h2 className="section-title">Features</h2>
                <div className="row">
                    {data.map(({ title, text, icon }, i) => (
                        <div key={`${title}-${i}`} className="col-xs-6 col-md-3">
                            <i className={`${icon} fa-2x`}></i>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
