import React from "react";
import './Navigation.scss';

class Navigation extends React.Component{

    render(){
        const nawigacja = ["O co chodzi?", "O nas", "Fundacje i organizacje", "Kontakt"];

        const nawigacjaMap = nawigacja.map ((e,i) => {
            return <a href="#" key={i} className="nav_buttons" >{e}</a>
        })

        return(
            <nav className="nav">
                {nawigacjaMap}
            </nav>
        )
    }
}

export default Navigation;