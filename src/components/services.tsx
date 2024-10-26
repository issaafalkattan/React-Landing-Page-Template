import React from 'react';

export const Services = ({ data }) => {
    return (
        <section id="services" className="section-gradient">
            <div className="container text-center">
                <h2 className="section-title">Our Services</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
                </p>
                <div className="row">
                    {data.map(({ name, text, icon }, i) => (
                        <div key={`${name}-${i}`} className="col-md-4">
                            <i className={`${icon} fa-2x`}></i>
                            <div className="service-desc">
                                <h3>{name}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
