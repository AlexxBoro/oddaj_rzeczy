import React from "react";

import './Step1.scss';

export class Step1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleCheckbox = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.checked;

        this.setState({
            [name]: value,
        });
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
        return (
            <form className='form-part-one' onSubmit={this.submitForm}>
                <div className="alert">
                    <p className="alert__important">Ważne!</p>
                    <p className="alert__info">
                        Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu
                        będziemy wiedzieć komu najlepiej je przekazać.
                    </p>
                </div>

                <div className="form-part-one__title">Zaznacz co chcesz oddac:</div>

                <div className="form-part-one__item">
                    <label className="form-container" htmlFor="clothes">
                        ubrania, które nadają się do ponownego użycia
                        <input type="checkbox" name="clothes" id="clothes" onChange={this.handleCheckbox}/>
                        <span className="__input"/>
                    </label>
                </div>

                <div className="form-part-one__item">
                    <label className="form-container" htmlFor="clothes-bin">
                        ubrania do wyrzucenia
                        <input type="checkbox" name="clothes-bin" id="clothes-bin" onChange={this.handleCheckbox}/>
                        <span className="__input"/>
                    </label>
                </div>

                <div className="form-part-one__item">
                    <label className="form-container" htmlFor="toys">
                        zabawki
                        <input type="checkbox" name="toys" id="toys" onChange={this.handleCheckbox}/>
                        <span className="__input"/>
                    </label>
                </div>

                <div className="form-part-one__item">
                    <label className="form-container" htmlFor="books">
                        książki
                        <input type="checkbox" name="books" id="books" onChange={this.handleCheckbox}/>
                        <span className="__input"/>
                    </label>
                </div>

                <div className="form-part-one__item">
                    <label className="form-container" htmlFor="other">
                        inne
                        <input type="checkbox" name="other" id="other" onChange={this.handleCheckbox}/>
                        <span className="__input"/>
                    </label>
                </div>

                <div className="form-part-two__button-container">
                    <input
                        className="form-part-two__button"
                        type="submit"
                        value="Dalej"/>
                </div>
            </form>

        )
    }
}
