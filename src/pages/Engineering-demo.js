
import './Engineering.css';
import ayush from '../img/ayush.jpg';
const Engineering = () => {
    return (
        <div className="alpha">
            <div className="title">
                <h1>Engineering Geophysics</h1>
            </div>
            <h2 id='bita'>Introduction</h2>
            <div className="gama">
                <div>
                    <img src={ayush} alt="Geophysics" />
                </div>
                <div class="bita">
                    
                    <p style={{"font-size":"20px"}}>
                        Engineering Geophysical methods provide accurate data about the
                        structure of the subsurface - valuable information in the field
                        of engineering. Engineering geophysics is concerned with resolution,
                        details and quantification of specific subsurface condition with the purpose
                        of detailed information of location and distribution of weak and poor material
                        undesirable for foundation or Tunnel or Road alignment or Open pit mines. Engineering
                        Geophysics includes two fields
                    </p>
                </div>
            </div>
            <div className="delta">
                <h2 id="bita" >Geotechnical or Civil Engineering</h2>
                <ol className="lower-alpha">
                    <li>Investigation for Cavity and weak zones within the civil structure areas.</li>
                    <li>Utility detection </li>
                    <li>Overburden Estimation</li>
                    <li>Shallow Stratigraphy</li>
                    <li>Slop stability </li>
                    <li>Engineering Parameter assessment</li>
                </ol>
                <h3 id="h">Techniques used for different purposes:</h3>
                <ol className="decimal">
                    <li>Investigation for Cavity and weak zones within the civil structure areas.</li>
                    <ul className="circle">
                        <li>Multichannel Analysis of surface Wave (MASW)</li>
                        <li>Frequency domain Electromagnetic (FDEM)</li>
                        <li>Ground Penetrating Radar (GPR)</li>
                        <li>Electrical Resistivity Tomography (ERT) </li>
                    </ul>
                    <li>Utility detection </li>
                    <ul className="circle">
                        <li>Radio Detection</li>
                        <li>GPR</li>
                        <li>Magnetic Survey</li>
                    </ul>
                    <li>Overburden Estimation</li>
                    <ul className="circle">
                        <li>Seismic Refraction Tomography (SRT)</li>
                        <li>Electrical Resistivity Tomography (ERT) </li>
                    </ul>
                    <li>Shallow Stratigraphy</li>
                    <ul className="circle">
                        <li>Refraction Microtremor (ReMi)</li>
                        <li>Seismic Refraction Tomography (SRT)</li>
                        <li>Electrical Resistivity Tomography (ERT)</li>
                        <li>Time Domain Electromagnetic (TDEM)</li>
                    </ul>
                    <li>Slop stability </li>
                    <ul className="circle">
                        <li>Seismic Refraction Tomography (SRT)</li>
                        <li>Electrical Resistivity Tomography (ERT)</li>
                    </ul>
                    <li>Engineering Parameter assessment </li>
                    <ul className="circle">
                        <li>Seismic Downhole Profiling</li>
                        <li>Crosshole Seismic Profiling</li>
                    </ul>
                </ol>

            </div>


        </div>
    );
}
export default Engineering;