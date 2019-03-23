import React from 'react';
// import {Link} from 'react-router-dom';
import './LoginUser.scss';
import LogBar from '../LogBar/LogBar';
import Navigation from '../Navigation/Navigation';


class LoginUser extends React.Component{

    state = {
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

    onFormSubmit = event => {
        event.preventDefault();
        
    };

    render(){

        return(
            <>

            <LogBar />

            <Navigation />
            

            <div class="rej_form_container">
                
                <div className="rej_tytul">Zaloguj się</div>

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
                        <div className="button_rej">
                            <button style={{backgroundColor: "white", color: "rgb(82, 80, 80)"}} onSubmit={this.onFormSubmit}>Zaloguj się</button>
                        </div>
                    </div>
                   
                </form>
            </div>

            </>
        )
    }
}

export default LoginUser;