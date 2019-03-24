import React from 'react';
// import {Link} from 'react-router-dom';
import './FormHeader.scss';
import Navigation from '../Navigation/Navigation';

class Form_Header extends React.Component{

    showHiddenMenu = () => {
        document.querySelector('.header_pop_menu').classList.add('show_menu');
    }

    render(){
        return(
            <div className="header_container">

                <div onClick={this.showHiddenMenu} className="header_user_nav">
                    <div onClick={this.showHiddenMenu} className="header_user">Witaj  NAME</div>
                    <i onClick={this.showHiddenMenu} className="header_user_icon fas fa-cogs"></i>
                </div>

                <Navigation />

                <div className="header_napis">Oddaj zbędne rzeczy<br></br>
                    POTRZEBUJĄCYM <br></br>
                </div>
                <div className="znaczek_header_container">
                        <div className="znaczek_header"></div>
                </div>
                <div className="header_napis_nizej">Wystarczą 4 proste kroki:<br></br>
                </div>


                <div className="header_kwadraty">

                    <div className="header_box">
                        <div className="box_inside">
                            <p className="box_numer">1</p>
                            <p className="box_tresc">Wybierz<br></br> rzeczy</p>
                        </div>
                    </div>
                    <div className="header_box">
                        <div className="box_inside">
                            <p className="box_numer">2</p>
                            <p className="box_tresc">Spakuj je<br></br> w worki</p>
                        </div>
                    </div>
                    <div className="header_box">
                        <div className="box_inside">
                            <p className="box_numer">3</p>
                            <p className="box_tresc">Wybierz<br></br>fundację</p>
                        </div>
                    </div>
                    <div className="header_box">
                        <div className="box_inside">
                            <p className="box_numer">4</p>
                            <p className="box_tresc">Zamów <br></br>kuriera</p>
                        </div>
                    </div>
                </div>


                <div className="header_pop_menu">
                    <li>Profil</li>
                    <li>Ustawienia</li>
                    <li>Moje zbiórki</li>
                    <li>Wyloguj</li>
                </div>

            </div>
        )
    }
}

export default Form_Header;