
import '../pages/Engineering.css';
const Crosshole=()=>{
    return(
        
        <div className="alpha">
            <div className="title">
            <h1>Crosshole Seismic</h1>
            </div>
        
        <div className="landing">
        <div className="img1">
            <img id="ert-img" src="img/services/crosshole.jpg"
                alt="No image found"  />
            </div>
            <div className="gama">
            <h2>Introduction</h2>
            <p className="para-text">
                Crosshole Seismic method is uses for 1D profiling of seismic velocity in set of borehole which consist
                two or three number of borehole for precise assessment of different engineering parameters. The
                Crosshole Seismic Test makes direct measurements of P-wave velocities, or/and S-wave velocities, in
                boreholes advanced primarily through soil. At selected depths down the borehole, a borehole seismic
                source is used to generate a seismic wave train. Downhole receivers are used to detect the arrival of
                the seismic wave train in offset borings at a recommended spacing of 3 to 6 m [10 to 20 ft]. The
                distance between boreholes at the test depths is measured using a borehole deviation survey. The
                borehole seismic source is connected to and triggers a data recording system that records the response
                of the downhole receivers, thus measuring the travel time of the wave train between the source and
                receivers.
                <br/>
                By the crosshole data, P and S Wave Velocities are calculated and other engineering parameters (i.e.,
                Elastic moduli, Poison’s ration) could be calculated by incorporating density values of the strata.
            </p>
            </div>
            
        </div>
        </div>
    );
}
export default Crosshole;