import React from 'react';
import './Form.scss';


class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hideFormOne: false,
            showFormTwo: false,
            showFormThreeA: false
        }    
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            hideFormOne: !this.state.hideFormOne,
            showFormTwo: !this.state.showFormTwo
        })
    }

    handleToggleThreeA(e){
        e.preventDefault();
        this.setState({
            showFormTwo: !this.state.showFormTwo,
            showFormThreeA: !this.state.showFormThreeA
        })
    }

    render(){
        const {hideFormOne} = this.state;
        const {showFormTwo} = this.state;
        const {showFormThreeA} = this.state;

        return(
            <div className="form-content-container">

                <form>

                    {/* 1/4 */}

                    <div className={`form-part-one ${hideFormOne ? 'hide-form-one' : ''}`}>

                        <div className="header_pasek">
                            <p className="pasek_wazne">Ważne!</p>
                            <p className="pasek_info">Uzupełnij szczegóły dotyczce twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                        </div>

                        <div className="form-part-one__title">Zaznacz co chcesz oddac:</div>

                        <div className="form-part-one__item">
                            <label className="form-container" htmlFor="clothes">ubrania, które nadają się do ponownego użycia
                                <input type="checkbox" name="clothes" id="clothes"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" htmlFor="clothes-bin">ubrania do wyrzucenia
                                <input type="checkbox" name="clothes-bin" id="clothes-bin"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" htmlFor="toys">zabawki
                                <input type="checkbox" name="toys" id="toys"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" htmlFor="books">książki
                                <input type="checkbox" name="books" id="books"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <div className="form-part-one__item">
                            <label className="form-container" htmlFor="other">inne
                                <input type="checkbox" name="other" id="other"></input>
                                <span className="__input"></span>
                            </label>
                        </div>

                        <button className="form-part-one__button" onClick={(e) => this.handleToggle(e)}>Dalej</button>
                    </div>

                    {/* 2./4 */}

                    <div className={`form-part-two-container ${showFormTwo ? 'show-form-two' : ''}`}>

                        <div className="form-part-two">
                            <div className="header_pasek">
                                <p className="pasek_wazne">Ważne!</p>
                                <p className="pasek_info">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak zapakować rzeczy znajdziesz <a href="#">TUTAJ</a></p>
                            </div>
                            <div className="form-part-two__title">Podaj liczbę 60 l worków, w które spakowałeś rzeczy:</div>

                            <div>
                                <label htmlFor="worki" className="select-label">Liczba 60 l worków:</label>
                                <select name="worki" id="worki">
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
                                <button className="form-part-two__button">Wstecz</button>
                                <button className="form-part-two__button" onClick={(e) => this.handleToggleThreeA(e)}>Dalej</button>
                            </div>
                            

                        </div>

                    </div>

                    {/* 3a/4 */}

                    <div className={`form-part-3a-container ${showFormThreeA ? 'show-form-3a' : '' }`}>

                        <div className="form-part-3a">
                                
                                <div className="header_pasek">
                                    <p className="pasek_wazne">Ważne!</p>
                                    <p className="pasek_info">Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji, bądź celu ich pomocy.</p>
                                </div>

                                <div className="form-part-3a__title">Lokalizacja:</div>

                                
                                <select name="lokalizacja" id="lokalizacja">
                                    <option value="0">- wybierz -</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Katowice">Katowice</option>
                                    <option value="Ustrzyki Dolne">Ustrzyki Dolne</option>
                                    <option value="Łeba">Łeba</option>
                                    <option value="Zakopane">Zakopane</option>
                                    <option value="Helsinki">Helsinki</option>
                                </select>
                                
                                <div className="form-part-3a__title--smaller">Komu chcesz pomóc?</div>

                                <div className="form-part-3a__button-container--for-small-buttons">
                                    <button className="form-part-3a__button--small-buttons">dzieciom</button>
                                    <button className="form-part-3a__button--small-buttons">samotnym matkom</button>
                                    <button className="form-part-3a__button--small-buttons">bezdomnym</button>
                                </div>
                                <div className="form-part-3a__button-container--for-small-buttons">
                                    <button className="form-part-3a__button--small-buttons">niepełnosprawnym</button>
                                    <button className="form-part-3a__button--small-buttons">osobom starszym</button>
                                </div>

                                <div className="form-part-3a__title--smaller">Wpisz nazwę konkretnej organizacji (opcjonalnie)</div>
                                <input type="textarea"></input>

                                <div className="form-part-3a__button-container">
                                <button className="form-part-3a__button">Wstecz</button>
                                <button className="form-part-3a__button">Szukaj</button>
                            </div>
                        </div>
                    
                    </div>       
                </form>
            </div>
        )
    }
}


export default Form;