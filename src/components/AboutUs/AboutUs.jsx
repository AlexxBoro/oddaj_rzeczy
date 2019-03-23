import React from 'react';
import './AboutUs.scss';

class AboutUs extends React.Component {
    render(){
        return(
            <div id="section4">

            <div className="section4_container">

                <div className="text_container">
                    <div className="section4_tytul">O nas</div>

                    <div className="znaczek_container_section4">
                        <div className="znaczek_section4"></div>
                    </div>

                    <div className="section4_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh imperdiet, mollis metus sit amet, ornare quam. Sed malesuada tincidunt sapien.</p>
                    </div>
                </div>


                <div className="image_container"></div>

            </div>
            
            </div>
        )
    }
}

export default AboutUs;