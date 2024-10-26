import React from 'react';

export const Testimonials = ({ data }) => {
    return (
        <section id="testimonials" className="section-gray">
            <div className="container text-center">
                <h2 className="section-title">What our clients say</h2>
                <div className="row">
                    {data.map(({ name, img, text }, i) => (
                        <div key={`${name}-${i}`} className="col-md-4">
                            <div className="testimonial">
                                <div className="testimonial-image">
                                    <img src={img} alt="" />
                                </div>
                                <div className="testimonial-content text-start">
                                    <p>"{text}"</p>
                                    <div className="testimonial-meta"> - {name} </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
