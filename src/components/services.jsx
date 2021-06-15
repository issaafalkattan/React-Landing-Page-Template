import {Link,Switch,Route} from 'react-router-dom';
import Engineering from '../pages/Engineering';
import Environment from '../pages/Environment';
import './services.css';
export const Services = (props) => {
  return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <nav className="service-nav">
                <ul>
                    <li >
                        <Link to='/engineering' >Engineering Geophysics</Link>
                    </li>
                    <li>
                        <Link to='/environment'>Environment Geophysics</Link>
                    </li>
                </ul>
            </nav>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>

          



          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
        <Switch>
           <Route path='/engineering' component={Engineering} />
           <Route path='/environment' component={Environment} />
        </Switch>
      </div>
      
  );
};
