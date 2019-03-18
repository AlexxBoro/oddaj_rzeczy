import React from 'react';
import './Header.scss';
import '../Navigation/Navigation.scss';
// import {Link} from 'react-router-dom';
import LogBar from '../LogBar/LogBar';
import Navigation from '../Navigation/Navigation';
import HeaderOptions from '../HeaderOptions/HeaderOptions';


class Header extends React.Component {

    // handleClick = (e) => {
    //     if (e.target.innerText === "O co chodzi?") {
    //         window.scrollBy(0, 980);
    //     }  
    //     else if (e.target.innerText === "O nas") {
    //         window.scrollBy(0, 1600);
    //     }  
    //     else if (e.target.innerText === "Fundacje i organizacje") {
    //         window.scrollBy(0, 2300);
    //     } 
    //     else if (e.target.innerText === "Kontakt") {
    //         window.scrollBy(0, 3000);
    //     }    
    // }

    render(){
        return (
            <>
                <div id="section1">

                    <LogBar />
                    
                    <Navigation />
                    
                    <div className="napis">Zacznij pomagać! <br></br>
                    Oddaj niechciane rzeczy w zaufane ręce <br></br>
                    </div>
    
                    <div className="znaczek_container">
                        <div className="znaczek"></div>
                    </div>
                    
                    <HeaderOptions />
                    
                </div>
            </>
        )
    }  
}


export default Header;