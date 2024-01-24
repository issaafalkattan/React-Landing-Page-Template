import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState('5rem'); // Default font size

  useEffect(() => {
    const welcomeText = " Welcome to Manna Kitchen Ormiston";

    // Typewriter effect
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + welcomeText[index]);
      index++;

      if (index === welcomeText.length) {
        clearInterval(intervalId);
      }
    }, 70); // Adjust the typing speed as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{ position: 'relative', textAlign: 'center' }}>
                <h1 style={{ fontSize: fontSize }}>
                  {text.toLowerCase()} {/* Display small letters */}
                  <span></span>
                </h1>
                <p style={{ fontSize: fontSize }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>

                <a
  href="#Contact"
  className="btn btn-custom btn-lg page-scroll shining-button"
  style={{
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }}
>
  Contact Us/Reservation
</a>

{/* Add the "Order Now" button */}
<a
  href="http://www.doordash.com/store/manna-kitchen-auckland-27642015/?event_type=autocomplete&pickup=false"
  className="btn btn-custom btn-lg page-scroll shining-button"
  style={{
    position: 'absolute',
    top: '90%',  // Adjust the vertical position as needed
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }}
>
  Order Now
</a>


                <script src="//code.tidio.co/pyrul9dl4isngp3ftlgvakecwuj8uxk0.js" async></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
