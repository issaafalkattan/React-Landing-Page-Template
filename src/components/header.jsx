import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  GEO MAGNIFY
                  <span></span>
                </h1>
                <p>Understand Earth Better</p>
                <NavLink
                  to='/engineering'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </NavLink>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
