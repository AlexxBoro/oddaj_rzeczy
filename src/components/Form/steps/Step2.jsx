import React from "react";

import "./Step2.scss";

export class Step2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleSelection = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    };

    handleStepBack = () => {
        const onStepBack = this.props.onStepBack;

        if (onStepBack) {
            onStepBack();
        }
    };

    submitForm = (event) => {
        event.preventDefault();
        const onSubmitHandler = this.props.onSubmit;

        // Jeżeli nic nie zostało wybrane - nie wysyłaj...

        if (onSubmitHandler) {
            onSubmitHandler(this.state);
        }
    };

    render() {
        console.log(this.state);

        return (
            <form className='form-part-two' onSubmit={this.submitForm}>
                <div className="alert">
                    <p className="alert__important">Ważne!</p>
                    <p className="alert__info">
                        Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                        instrukcję jak zapakować rzeczy znajdziesz{" "}
                        <a href="#here">TUTAJ</a>
                    </p>
                </div>
                <div className="form-part-two__title">
                    Podaj liczbę 60 l worków, w które spakowałeś rzeczy:
                </div>

                <div>
                    <label htmlFor="worki" className="select-label">
                        Liczba 60 l worków:
                    </label>
                    <select name="worki" id="amountOfClothes" onChange={this.handleSelection}>
                        <option value="0">- wybierz -</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value=">10">więcej</option>
                    </select>
                </div>

                <div className="form-part-two__button-container">
                    <button className="form-part-two__button" onClick={this.handleStepBack}>
                        Wstecz
                    </button>

                    <input
                        className="form-part-two__button"
                        type="submit"
                        value="Dalej"/>
                </div>
            </form>
        )
    }
}
