import React from 'react';
import './Form.scss';


class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hideFormOne: false,
            showFormTwo: false
        }    
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            hideFormOne: !this.state.hideFormOne,
            showFormTwo: !this.state.showFormTwo
        })
    }

    render(){
        const {hideFormOne} = this.state;
        const {showFormTwo} = this.state;

        return(
            <div className="form-content-container">

                <form>

                    {/* 1/4 */}
                    <div className={`form-part-one ${hideFormOne ? 'hide-form-one' : ''}`}>
                        <div className="form-part-one__title">Zaznacz co chcesz oddac:</div>

                        <div className="form-part-one__item">
                            <label className="form-container" for="clothes">ubrania, które nadają się do ponownego użycia
                                <input type="checkbox" name="clothes" id="clothes"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" for="clothes-bin">ubrania do wyrzucenia
                                <input type="checkbox" name="clothes-bin" id="clothes-bin"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" for="toys">zabawki
                                <input type="checkbox" name="toys" id="toys"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" for="books">książki
                                <input type="checkbox" name="books" id="books"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" for="other">inne
                                <input type="checkbox" name="other" id="other"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <button className="form-part-one__button" onClick={(e) => this.handleToggle(e)}>Dalej</button>
                    </div>

                    {/* 2./4 */}
                    <div className={`form-part-two ${showFormTwo ? 'show-form-two' : ''}`}>
                         tu bedzie drugi formularz , drugie togglowanie!!!
                    </div>
                    

                </form>

            </div>
        )
    }
}


export default Form;