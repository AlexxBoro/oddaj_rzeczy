import React from 'react';
import './Logbar.scss';
import {Link} from 'react-router-dom';

class LogBar extends React.Component {
    render(){
        return(
            <>
               <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/login"><div className="nav_buttons">Zaloguj się</div></Link>
                <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/register"><div className="nav_buttons zaloz_konto">Załóż konto</div></Link>
            </>
        )
    }
}

export default LogBar;