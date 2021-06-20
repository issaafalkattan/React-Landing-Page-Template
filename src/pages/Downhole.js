
import '../pages/Engineering.css';
const Downhole=()=>{
    return(
        
        <div className="alpha">
            <div className="title">
            <h1>Downhole</h1>
            </div>
        
        <div className="landing">
            <div className="img1">
            <img src="img/services/downhole.jpg"
                alt="No image found"  />
            </div>
            <div className="gama">
            <h2>Introduction</h2>
            <p className="para-text">
                Dynamic geo-technical properties of soil and rock are determined by various in-situ test methods.
                Dynamic problems are related to earthquakes (liquefaction, ground response and slope stability),
                vibrating machinery, pile driving, dynamic compaction and other techniques for ground improvement and
                also from blast, wind, wave and ice loadings. Apart from these the traffic vibrations also cause dynamic
                problems in a great extent. Engineering interest is mostly concentrated on those methods that can
                measure the dynamic properties of soils/rocks in order to design the site-specific problems.
                <br/>
                The objective of seismic down-hole/up-hole tests is to measure travel times of P and S-waves from the
                energy source to the receiver/s. These tests can be performed in single borehole. A hole is drilled to
                the required depth at the testing site and a vibrating source is created to determine shear wave
                velocity for various soil layers. In this case the waves will be travelling in vertical direction either
                down or up depending on the location of the source of impulse.
                <br/>
                In down-hole test, the generated waves propagate through the soil layers in downward direction. A single
                wave source is located on the ground surface adjacent to the borehole. Inside the hole, either a string
                of multiple receivers at known depths is fixed or a single receiver is moved to different depths as the
                test advances. All receivers are connected to high-speed recording system and the output is measured as
                a function of time.
            </p>
            </div>
            
        </div>
        </div>
    );
}
export default Downhole;