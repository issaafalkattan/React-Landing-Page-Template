
import './ERT.css';
const Crosshole=()=>{
    return(
        
        <div class="ert-container">
            <div id="ert-h1">
            <h1>Crosshole Seismic</h1>
            </div>
        
        <div class="ert-item">
            
            <p id="ert-p">
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
            <img id="ert-img" src="https://www.ocsa-geofisica.com/images/crosshole2.jpg"
                alt="No image found" width="600px" height="400px" />
        </div>
        </div>
    );
}
export default Crosshole;