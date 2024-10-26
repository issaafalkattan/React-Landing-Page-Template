import React from 'react';

export const About = ({ data }) => {
    return (
        <section id="about" className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-xs-12 col-md-6">
                    <h2 className="section-title">About Us</h2>
                    <h3>Why Choose Us?</h3>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <ul>
                                {data.Why.map((d, i) => (
                                    <li key={`${d}-${i}`}>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <ul>
                                {data.Why2.map((d, i) => (
                                    <li key={`${d}-${i}`}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
