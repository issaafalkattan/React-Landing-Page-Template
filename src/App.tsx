import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

import Data from "./data/data.json";

const App = () => {

    return (
        <>
            <Navigation />
            <Header data={Data.Header} />
            <Features data={Data.Features} />
            <About data={Data.About} />
            <Services data={Data.Services} />
            <Gallery data={Data.Gallery} />
            <Testimonials data={Data.Testimonials} />
            <Team data={Data.Team} />
            <Contact data={Data.Contact} />
            <Footer />
        </>
    );
};

export default App;
