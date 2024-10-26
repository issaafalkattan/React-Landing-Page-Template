import React from 'react';
import { Image } from './image';

export const Gallery = ({ data }) => {
    return (
        <section id="portfolio">
            <div className="container text-center">
                <h2 className="section-title">Portfolio</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                    dapibus leonec.
                </p>
                <div className="row g-1 portfolio-items">
                    {data.map(({ title, largeImage, smallImage }, i) => (
                        <div
                            key={`${title}-${i}`}
                            className="col-sm-6 col-md-4 col-lg-4"
                        >
                            <Image
                                title={title}
                                largeImage={largeImage}
                                smallImage={smallImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
