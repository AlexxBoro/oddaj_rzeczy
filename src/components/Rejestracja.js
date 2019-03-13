import React from 'react';
import {Link} from 'react-router-dom';

class Rejestracja extends React.Component{

    state = {
        rej_nav: ["O co chodzi?", "O nas", "Fundacje i organizacje", "Kontakt"],
        email: '',
        password: '',
        repeat_password: ''
    }

    onEmailChange = event => {
        this.setState({ 
            email: event.target.value,
        });
    };

    onPasswordChange = event => {
        this.setState({ 
            password: event.target.value,
        });
    };

    onRepeatPasswordChange = event => {
        this.setState({ 
            repeat_password: event.target.value,
        });
    };

    onFormSubmit = event => {
        event.preventDefault();
        
    };

    render(){

        const rej_nav = this.state.rej_nav.map((e,i) => {
            return <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/" className="rej_buttons_header" key={i}>{e}</Link>
        });

        return(
            <>

            <div className="rej_log_buttons">
                <Link style={{ textDecoration: 'none', color: 'rgb(82, 80, 80)' }} to="/login"><div className="rej_nav_buttons">Zaloguj</div></Link>
                <div className="rej_nav_buttons rej_zaloz_konto">Załóż konto</div>
            </div>

            <div className="rej_header">
                {rej_nav}
            </div>

            <div class="rej_form_container">
                
                <div className="rej_tytul">Załóż konto</div>

                <div className="znaczek_container_rej">
                        <div className="znaczek_rej"></div>
                </div>

                <form>
                    <div>
                        <input className="input_form_rej" type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}></input>
                    </div>
                    <div>
                    <input className="input_form_rej" type="password" placeholder="Hasło" value={this.state.password} onChange={this.onPasswordChange}></input>
                    </div>
                    <div>
                        <input className="input_form_rej" type="password" placeholder="Powtórz hasło" value={this.state.repeat_password} onChange={this.onRepeatPasswordChange}></input>
                    </div>
                    <div>
                        <div className="button_rej">
                            <button style={{backgroundColor: "white", color: "rgb(82, 80, 80)"}} onSubmit={this.onFormSubmit}>Załóż konto</button>
                        </div>
                    </div>
                   
                </form>
            </div>

            </>
        )
    }
}

export default Rejestracja;