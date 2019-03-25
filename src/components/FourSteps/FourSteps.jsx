import React from 'react';
import {Link} from 'react-router-dom';
import './FourSteps.scss';


class Section3 extends React.Component {
    render(){
        const opcje = this.props.section3_options.map((e,i) => {
            return <p key={i}>{e}</p>;
        });
        const opcje_desr = this.props.section3_descr.map((e,i) => {
            return <p key={i}>{e}</p>
        });

        return(
            <div id="four-steps">
                <div className="section3_container">

                    <div className="napis_sekcja3">Wystarczą 4 proste kroki</div>

                    <div className="znaczek_container_section3">
                        <div className="znaczek_section3"></div>
                    </div>

                    <div className="tab_sekcja3">

                        <div className="opcja_sekcja3">
                            <div>
                                <i className="far fa-lightbulb fa-2x"></i>
                            </div>
                            <div className="opcja_tytul">
                                {opcje[0]}
                            </div>
                            <hr className="hr_sekcja3"></hr>
                            <div>
                                {opcje_desr[0]}
                            </div>
                        </div>

                        <div className="opcja_sekcja3">
                            <div>
                                <i className="fas fa-box-open fa-2x"></i>
                            </div>
                            <div className="opcja_tytul">
                                {opcje[1]}
                            </div>
                            <hr className="hr_sekcja3"></hr>
                            <div>
                                {opcje_desr[1]}
                            </div>
                        </div>

                        <div className="opcja_sekcja3">
                            <div>
                                <i className="fas fa-binoculars fa-2x"></i>
                            </div>
                            <div className="opcja_tytul">
                                {opcje[2]}
                            </div>
                            <hr className="hr_sekcja3"></hr>
                            <div>
                                {opcje_desr[2]}
                            </div>
                        </div>

                        <div className="opcja_sekcja3">
                            <div>
                                <i className="fas fa-exchange-alt fa-2x"></i>
                            </div>
                            <div className="opcja_tytul">
                                {opcje[3]}
                            </div>
                            <hr className="hr_sekcja3"></hr>
                            <div>
                                {opcje_desr[3]}
                            </div>
                        </div>
                    </div>

                    <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/register">
                    <div className="zaloz_konto_sekcja3">załóż konto</div>
                    </Link>
                    
                </div>
            </div>
            
        )
    }
}

export default Section3;