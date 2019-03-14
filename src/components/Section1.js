import React from 'react';
import '../scss/main.scss';
import {Link} from 'react-router-dom';


class Section1 extends React.Component {
    // Użyj react-scrollbar :)
    handleClick = (e) => {
        if (e.target.innerText === "O co chodzi?") {
            const element = document.querySelector('#id1');
            const upperPos = element.clientTop;

            window.scrollBy(0, upperPos);
        }
        else if (e.target.innerText === "O nas") {
            window.scrollBy(0, 1600);
        }
        else if (e.target.innerText === "Fundacje i organizacje") {
            window.scrollBy(0, 2300);
        }
        else if (e.target.innerText === "Kontakt") {
            window.scrollBy(0, 3000);
        }
    };

    render(){
        // DRY - nie powtarzaj nawigacj. Stwórz niezależny komponent
        const nav = this.props.napisy.map( (e,i) => {
            return <div onClick={this.handleClick}  className="nav_buttons" key={i}>{e}</div>
        })
        const options = this.props.opcje.map( (e,i) => {
            return <div className="opcja" key={i}>{e}</div>
        });


        return (
            <>
                <div id="section1">

                    <div className="log_buttons">
                        {/* Style może wylądować w CSS - powinno wylądować w jakimś komponencie */}
                        {/* <Button color="" to="" uppercase="" /> */}
                        <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/login"><div className="nav_buttons">Zaloguj</div></Link>
                        <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/rej"><div className="nav_buttons zaloz_konto">Załóż konto</div></Link>
                    </div>

                    <div className="nav">
                            {nav}
                    </div>

                    <div className="napis">Zacznij pomagać! <br></br>
                    Oddaj niechciane rzeczy w zaufane ręce <br></br>
                    </div>

                    <div className="znaczek_container">
                        <div className="znaczek"></div>
                    </div>


                    <div className="opcje_container">
                        <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/form">{options[0]}</Link>
                        <div>
                            {options[1]}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}


export default Section1;
