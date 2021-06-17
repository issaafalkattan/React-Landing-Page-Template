
import './ERT.css';
const Ground=()=>{
    return(
        
        <div class="ert-container">
            <div id="ert-h1">
            <h1>Ground Penetrating Radar</h1>
            </div>
        
        <div class="ert-item">
            
            <p id="ert-p">
                GPR is an easy-to-deploy geophysical technique that produces high-resolution images of the shallow
                subsurface in a manner analogous to reflection seismic. It is usually used as a surface technique
                although borehole radar is used in specialist applications. Like many geophysical techniques, GPR can
                provide very useful data if applied in the appropriate context. Hence, any sub-surface investigation
                that requires shallow, high-resolution imaging may benefit by GPR survey.
                <br/>
                This technique involves a short duration; high frequency electromagnetic impulse being transmitted by
                the radar transducer into the subsurface. Whenever a contrast in dielectric properties of the subsurface
                is encountered, some of the transmitted impulse is reflected back to the surface, where it is detected
                by a receiver housed in the transducer. The strength of the reflected signal is proportional to the
                magnitude of the contrast in properties.
            </p>
            <img id="ert-img" src="https://www.pier-uk.co.uk/wp-content/uploads/2017/06/ground-penetrating-radar-systems-min.jpg"
                alt="No image found" width="600px" height="400px" />
        </div>
        </div>
    );
}
export default Ground;