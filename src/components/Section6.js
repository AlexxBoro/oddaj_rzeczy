import React from 'react';

class Section6 extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    onNameChange = event => {
        this.setState({
            name: event.target.value,
        });
    };

    onEmailChange = event => {
        this.setState({
            email: event.target.value,
        });
    };

    onMessageChange = event => {
        this.setState({
            message: event.target.value,
        });
    };

    onFormSubmit = event => {
        event.preventDefault();

    };

    // onChange -> twój handler -> setState -> stan się zmienił -> render (zawsze wołany na zmianie stanu / propsów)

    render() {
        return(
            <div id="section6">

                <div className="container1">
                    <div className="subcont1"></div>
                    <div className="subcont2">
                        <p className="subcont2_title">Skontaktuj się z nami</p>
                        <div className="znaczek_section6"></div>
                        <p className="formularz_title">formularz kontaktowy</p>

                        <form>
                            <div className="name_and_email">
                                <input className="input_name" type="text" placeholder="Imię" value={this.state.name} onChange={this.onNameChange}></input>
                                <input className="input_email" type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}></input><br></br>
                            </div>
                            <div className="message">
                                <input className="input_message" type="text" placeholder="Wiadomość" value={this.state.message} onChange={this.onMessageChange}></input><br></br>
                            </div>
                            <div className="button">
                                <button onSubmit={this.onFormSubmit}>Wyslij</button>
                            </div>
                        </form>

                    </div>
                </div>


                <div className="container2">
                    <div className="podpis">Lorem ipsum lorem ipsum lorem lorem.</div>
                    <div className="logos">
                        <i className="fab fa-facebook fa-2x"></i>
                        <i className="fab fa-twitter-square fa-2x"></i>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </div>
                </div>

            </div>
        )
    }
}

export default Section6;
