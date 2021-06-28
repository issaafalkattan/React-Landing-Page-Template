import {NavLink} from 'react-router-dom';

import './services.css';
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
    <div className='container'>
      <div className='section-title'>
        <h2>Our Services</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p> */}
      </div>
      <div className='row'>
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`}>
                <div className='portfolio-items'>
                  <div className='col-sm-6 col-md-4 col-lg-4'>
                    <div className='portfolio-item'>
                      <div className='hover-bg'>
                        <NavLink to={d.url} >
                          <div className='hover-text'>
                            <h4>{d.name}</h4>
                          </div>
                          </NavLink>
                          <img style={{"padding":"6px"}}
                            src={d.icon}
                            className='img-responsive'
                            alt='Project Title'
                          />
                      </div>{' '}
                    </div>
                  </div>
                  </div>
                  </div>
            ))
          : 'loading'}
          </div>
          </div>
          </div>
  );
};
