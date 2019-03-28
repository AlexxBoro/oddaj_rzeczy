import React from "react";
import "./Form.scss";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Te wszystkie stany da się zastąpić jedną zmienną
            // Spójrz na stepNumber
            showFormThreeA: false,
            showFormThreeB: false,
            showFormFour: false,
            showFormFive: false,
            showFormSix: false,

            // wybierz co chesz oddać -> wybierz ile worków -> wybierz dla kogo

            // Spójrz na clickedTags
            changeBackgroundColor: false,

            // Proponuję zawinąć w obiekt, np. deliveryDetails: { street: "", /.../ },
            street: "",
            city: "",
            postalCode: "",
            phone: "",
            date: "",
            hour: "",
            additionalInfo: "",

            // Tak to można zrobić:
            deliveryDetails: {},

            amountOfClothes: 0,

            /**
             * {
             *  dzieciom: true,
             *  matkom: false,
             * }
             *
             * !undefined === true
             */

            clickedTags: {}, // [klucz]: boolean

            // Numerek informujący, co wyświetlić
            stepNumber: 0,
        };
    }

    nextStep() {
        this.setState({
            stepNumber: this.state.stepNumber + 1,
        })
    }

    previousStep() {
        this.setState({
            stepNumber: this.state.stepNumber - 1,
        })
    }

    handleStep1 = (items) => {
        this.setState({
            itemsToCollect: items,
        });

        this.nextStep();
    };

    handleStep2 = (selectedItems) => {
        this.setState({
            howManyBags: selectedItems,
        });
    };

    handleAddress = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({
            deliveryDetails: {
                ...this.state.deliveryDetails,
                [name]: target.value,
            }
        });
    };

    // Podpięte do submita. Tutaj siedziałaby logika walidacji
    handleToggleFive(e) {
        this.nextStep(e);
    }

    changeBackgroundColor = (e, param) => {
        e.preventDefault();

        const selectedTags = this.state.clickedTags;
        selectedTags[param] = !selectedTags[param];

        this.setState({
            clickedTags: selectedTags,
        });
    };

    submitData = (e) => {
        console.log('Zapisywanie formularza');
    };

    render() {
        const { stepNumber } = this.state;

        let stepDOM;

        switch(stepNumber) {
            case 1: {
                stepDOM = <Step2 onSubmit={this.handleStep2} onStepBack={this.previousStep}/>;
                break;
            }

            // Default - krok domyślny (0)
            default: {
                stepDOM = <Step1 onSubmit={this.handleStep1}/>;
            }
        }

        return (
            <div className="form-content-container">
                { stepDOM }

                <div
                    className={`form-part-3a ${stepNumber === 2 ? 'show-element' : ''}`}>
                    <div className="alert">
                        <p className="alert__important">Ważne!</p>
                        <p className="alert__info">
                            Jeśli wiesz, komu chcesz pomóc, możesz wpisać nazwę tej
                            organizacji w wyszukiwarce. Możesz też filtrować organizacje
                            po ich lokalizacji, bądź celu ich pomocy.
                        </p>
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

                    <div className="form-part-3a__title--smaller">
                        Komu chcesz pomóc?
                    </div>

                    <div className="form-part-3a__button-container--for-small-buttons">
                        <button
                            className={`form-part-3a__button--small-buttons ${
                                this.state.clickedTags['dzieciom']
                                    ? "change-background-color-to-yellow"
                                    : ""}`}
                            onClick={e => this.changeBackgroundColor(e, 'dzieciom')}
                        >
                            dzieciom
                        </button>
                        <button
                            className={`form-part-3a__button--small-buttons ${
                                this.state.clickedTags['matkom']
                                    ? "change-background-color-to-yellow"
                                    : ""
                                }`}
                            onClick={e => this.changeBackgroundColor(e, 'matkom')}>
                            samotnym matkom
                        </button>
                        <button className="form-part-3a__button--small-buttons">
                            bezdomnym
                        </button>
                    </div>

                    <div className="form-part-3a__button-container--for-small-buttons">
                        <button className="form-part-3a__button--small-buttons">
                            niepełnosprawnym
                        </button>
                        <button className="form-part-3a__button--small-buttons">
                            osobom starszym
                        </button>
                    </div>

                    <div className="form-part-3a__title--smaller">
                        Wpisz nazwę konkretnej organizacji (opcjonalnie)
                    </div>
                    <input type="textarea"/>

                    <div className="form-part-3a__button-container">
                        <button
                            className="form-part-two__button"
                            onClick={e => this.previousStep(e)}
                        >
                            Wstecz
                        </button>
                        <button
                            className="form-part-two__button"
                            onClick={e => this.nextStep(e)}
                        >
                            Szukaj
                        </button>
                    </div>
                </div>

                {/* 3b/6 */}

                <div
                    className={`form-part-3b  ${stepNumber === 3 ? 'show-element' : ''}`}
                >
                    <div className="alert">
                        <p className="alert__important">Ważne!</p>
                        <p className="alert__info">
                            Na podstwaie Twoich kryteriów oraz rzeczy, które masz do
                            oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz
                            jedną, do której trafi Twoja przesyłka.
                        </p>
                    </div>

                    <div className="form-part-3b__title">
                        Wybierz organizację, której chcesz pomóc:
                    </div>

                    <div className="information-container">
                        <hr align="left"/>
                        <label
                            className="form-container-3b"
                            htmlFor="fundacjadbam-o-zdrowie"
                        >
                            <input
                                type="checkbox"
                                name="fundacjadbam-o-zdrowie"
                                id="fundacjadbam-o-zdrowie"
                            />
                            <span className="__input"/>
                        </label>
                        <div style={{ marginLeft: "3em" }}>
                            <p className="nazwa_org">Fundacja "Dbam o Zdrowie"</p>
                            <p className="cel_org">
                                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                                życiowej.
                            </p>
                        </div>
                        <hr align="left"/>
                    </div>

                    <div className="information-container">
                        <label
                            className="form-container-3b"
                            htmlFor="fundacja-dla-dzieci"
                        >
                            <input
                                type="checkbox"
                                name="fundacja-dla-dzieci"
                                id="fundacja-dla-dzieci"
                            />
                            <span className="__input"/>
                        </label>
                        <div style={{ marginLeft: "3em" }}>
                            <p className="nazwa_org">Fundacja "Dla dzieci"</p>
                            <p className="cel_org">
                                Cel i misja: Pomoc dzieciom z ubogich rodzin.
                            </p>
                        </div>
                        <hr align="left"/>
                    </div>

                    <div className="form-part-3b__button-container">
                        <button
                            className="form-part-two__button"
                            onClick={e => this.previousStep(e)}
                        >
                            Wstecz
                        </button>
                        <button
                            className="form-part-two__button"
                            onClick={e => this.nextStep(e)}
                        >
                            Dalej
                        </button>
                    </div>
                </div>

                {/* 4/6 */}
                <div
                    className={`form-part-4 ${stepNumber === 4 ? 'show-element' : ''}`}
                >
                    <div className="alert">
                        <p className="alert__important">Ważne!</p>
                        <p className="alert__info">
                            Podaj adres oraz termin odbioru rzeczy.
                        </p>
                    </div>

                    <div className="form-part-4__title">
                        Podaj adres oraz termin odbioru rzeczy przez kuriera
                    </div>
                    <form className="form-part-4__details" name="part-4" onSubmit={this.handleToggleFive}>
                        <div className="form-part-4__details-address">
                            <h1>Adres odbioru</h1>
                            <div className="form-part-4__item">
                                <label htmlFor="street">Ulica</label>
                                <input type="textarea" name="street" id="street" onChange={this.handleAddress}/>
                            </div>
                            <div className="form-part-4__item">
                                <label htmlFor="city">Miasto</label>
                                <input type="textarea" name="city" id="city" onChange={this.handleAddress}/>
                            </div>
                            <div className="form-part-4__item">
                                <label htmlFor="postal-code">Kod pocztowy</label>
                                <input type="textarea" name="postal-code" id="postalCode"
                                       onChange={this.handleAddress}/>
                            </div>
                            <div className="form-part-4__item">
                                <label htmlFor="phone">Numer telefonu</label>
                                <input type="textarea" name="phone" id="phone" onChange={this.handleAddress}/>
                            </div>
                        </div>
                        <div className="form-part-4__details-date">
                            <h1>Termin odbioru</h1>
                            <div className="form-part-4__item">
                                <label htmlFor="date">Data</label>
                                <input type="textarea" name="date" id="date" onChange={this.handleAddress}/>
                            </div>
                            <div className="form-part-4__item">
                                <label htmlFor="hour">Godzina</label>
                                <input type="textarea" name="hour" id="hour" onChange={this.handleAddress}/>
                            </div>
                            <div className="form-part-4__item">
                                <label htmlFor="additional-info">Uwagi dla kuriera</label>
                                <input
                                    style={{ height: "7em" }}
                                    type="textarea"
                                    name="additional-info"
                                    id="additionalInfo"
                                    onChange={this.handleAddress}
                                />
                            </div>
                        </div>

                        <div className="form-part-4__button-container">
                            <button
                                className="form-part-two__button"
                                onClick={e => this.previousStep(e)}
                            >
                                Wstecz
                            </button>
                            <input
                                className="form-part-two__button"
                                type="submit"
                                value="Dalej"/>
                        </div>
                    </form>
                </div>

                {/* 5/6 */}

                <div
                    className={`form-part-5 ${stepNumber === 5 ? 'show-element' : ''}`}
                >
                    <div className="form-part-5__title">
                        Podsumowanie Twojej darowizny:
                    </div>

                    <div className="form-part-5__details--upper">
                        <div className="form-part-5__details-summary">
                            <h1>Oddajesz:</h1>
                            <div className="form-part-5__summary">
                                <div>{this.state.amountOfClothes} worki/ów rzeczy</div>
                            </div>
                        </div>
                    </div>

                    <div className="form-part-5__details">
                        <div className="form-part-5__details-address">
                            <h1>Adres odbioru</h1>
                            <div className="form-part-5__item">
                                <div>Ulica:</div>
                                <div>{this.state.street}</div>
                            </div>
                            <div className="form-part-5__item">
                                <div>Miasto:</div>
                                <div>{this.state.city}</div>
                            </div>
                            <div className="form-part-5__item">
                                <div>Kod pocztowy:</div>
                                <div>{this.state.postalCode}</div>
                            </div>
                            <div className="form-part-5__item">
                                <div>Numer telefonu:</div>
                                <div>{this.state.phone}</div>
                            </div>
                        </div>
                        <div className="form-part-5__details-date">
                            <h1>Termin odbioru</h1>
                            <div className="form-part-5__item">
                                <div>Data:</div>
                                <div>{this.state.date}</div>
                            </div>
                            <div className="form-part-5__item">
                                <div>Godzina:</div>
                                <div>{this.state.hour}</div>
                            </div>
                            <div className="form-part-5__item">
                                <div>Uwagi dla kuriera:</div>
                                <div>{this.state.additionalInfo}</div>
                            </div>
                        </div>
                    </div>

                    <div className="form-part-5__button-container">
                        <button
                            className="form-part-two__button"
                            onClick={e => this.previousStep(e)}
                        >
                            Wstecz
                        </button>
                        {/* To może być input type submit */}
                        <button
                            className="form-part-two__button"
                            onClick={e => this.submitData(e)}>
                            Potwierdzam
                        </button>
                    </div>
                </div>

                {/* 6/6 */}
                <div
                    className={`form-part-6 ${stepNumber === 6 ? 'show-element' : ''}`}
                >
                    <div className="form-part-6__title">
                        <p>Dziękujemy za przesłanie formularza.</p>
                        <p>Na maila prześlemy wszelkie informacje o odbiorze.</p>
                    </div>

                    <div className="form-part-6__decoration-container">
                        <div className="form-part-6__decoration"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
