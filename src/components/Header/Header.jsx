import React from 'react';
import './Header.scss';
import '../Navigation/Navigation.scss';
// import {Link} from 'react-router-dom';
import LogBar from '../LogBar/LogBar';
import Navigation from '../Navigation/Navigation';
import HeaderOptions from '../HeaderOptions/HeaderOptions';


class Header extends React.Component {

    // handleClick = (e) => {
        
    //     window.scrollBy(0, 980);

    //     if (nawigacja[i] === 0) {
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
                <div id="header">

                    <LogBar />
                    
                    <Navigation />
                    
                    <div className="title">
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p> 
                    </div>
    
                    <div className="decoration-container">
                        <div className="decoration"></div>
                    </div>
                    
                    <HeaderOptions />
                    
                </div>
            </>
        )
    }  
}


export default Header;