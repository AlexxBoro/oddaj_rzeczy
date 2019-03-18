import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderOptions.scss';

class HeaderOptions extends React.Component{

    render(){
        const options = ["oddaj rzeczy", "zorganizuj zbiórkę"];
        const optionsMap = options.map((e,i) => {
            return <div className="opcja" key={i}>{e}</div>;
        })

        return(
            <nav className="opcje_container">
                <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/form">{optionsMap[0]}</Link>
                {optionsMap[1]}
            </nav>
            
        )
    }
}

export default HeaderOptions;