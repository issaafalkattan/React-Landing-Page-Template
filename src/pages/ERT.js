
import '../pages/Engineering.css';
const ERT=()=>{
    return(
        
        <div className="alpha">
            <div className="title">
            <h1>Electrical Resistivity Tomography</h1>
            </div>
        
        <div className="landing">
            <div className="img1">
            <img src="img/services/ert.jpg"
                alt="No image found"/>
            </div>
            <div className="gama">
            <h2>Introduction</h2>
            <p className="para-text">Electrical Resistivity Tomography (ERT) method is a geophysical technique applicable in mapping
                subsurface conditions for various uses including geologic, geotechnical, hydrogeology, environmental
                mineral exploration, and archaeological investigation.
                <br/>
                The ERT method is used successfully to map anomalous geologic conditions including weak zone detection,
                void detection, fault/fracture detection, monitor changes in ground water or contaminations, salt water
                intrusion, contaminant plumes, map geologic conditions (including depth to bedrock, or to water table,
                stratigraphy, lithology, structure, and fractures or all of these.
                <br/>
                Electrical Resistivity Tomography records deeper information and assesses deeply seated sub-surfaces
                conditions, solution features, watercourses and archaeological targets. This technique also allows
                geophysical investigation in landscapes, which are not generally amenable for other types of survey such
                as woodland, marshland and areas of dense vegetation
                <br/>
                With this technique, the apparent electrical resistivity distribution of the subsurface is measured
                using an array of four electrodes. By injecting a dc or very low frequency ac current (I) between a pair
                of electrodes and measuring the resulting potential difference (ΔV) with a second pair of electrodes, it
                is possible to calculate the apparent resistivity using a derivation of Ohms law (R=ΔV/I).
                <br/>
                We must emphasis that the ERT method is an electrical method and will only provide information regarding
                the electrical properties of the subsurface material. For this site the saline ground water will be the
                main controlling factor, and we expect that open or partially filled cavities to be highlighted as zones
                with extreme low resistivity of less than 1 Ω.m or even as low as 0.1-0.2 Ω.m due to the higher
                concentration of saline water. Areas with disintegrated rock (weathered and highly fractured) will
                exhibit lower resistivity values compared to the site norm within each rock formation.
            </p>
        </div>
        </div>
        </div>
    );
}
export default ERT;