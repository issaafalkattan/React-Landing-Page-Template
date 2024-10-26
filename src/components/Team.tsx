import React from 'react';

export const Team = ({ data }) => {
    return (
        <section id="team">
            <div className="container text-center">
                <h2 className="section-title">Meet the Team</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
                </p>
                <div className="row">
                    {data.map(({ name, job, img }, i) => (
                        <div key={`${name}-${i}`} className="col-lg-3 col-md-3 col-sm-6">
                            <figure className="thumbnail">
                                {" "}
                                <img src={img} alt={name} className="img-fluid" />
                                <figcaption>
                                    <h4>{name}</h4>
                                    <p>{job}</p>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
