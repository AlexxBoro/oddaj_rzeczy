import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderOptions.scss';

class HeaderOptions extends React.Component{

    render(){
        const options = ["oddaj rzeczy", "zorganizuj zbiórkę"];
        const optionsMap = options.map((e,i) => {
            return <div className="options-container__option" key={i}>{e}</div>;
        })

        return(
            <nav className="options-container">
                <Link to="/form" className="options-container__option--give">{optionsMap[0]}</Link>
                {optionsMap[1]}
            </nav>
            
        )
    }
}

export default HeaderOptions;