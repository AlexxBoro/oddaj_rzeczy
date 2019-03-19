import React from 'react';
import './Organisations.scss';
import classnames from 'classnames';


class Organisations extends React.Component {
    
    handleClick = (e) => {

        if (e.target.innerText === "Fundacjom") {
            document.querySelector('#fundacje').classList.remove('hidden');
            document.querySelector('#pozarzadowe').classList.add('hidden');
            document.querySelector('#lokalne').classList.add('hidden');
        }  
        else if (e.target.innerText === "Organizacjom pozarządowym") {
            document.querySelector('#fundacje').classList.add('hidden');
            document.querySelector('#pozarzadowe').classList.remove('hidden');
            document.querySelector('#lokalne').classList.add('hidden');
        }  
        else if (e.target.innerText === "Lokalnym zbiórkom") {
            document.querySelector('#fundacje').classList.add('hidden');
            document.querySelector('#pozarzadowe').classList.add('hidden');
            document.querySelector('#lokalne').classList.remove('hidden');
        }   
    }
    
    render() {

        const organizacje = this.props.section5_org.map((e,i) => {
            return <div onClick={this.handleClick} className="opcja_section5" key={i}>{e}</div>
        });

        return(
            <div id="section5">
            
            <div className="section5_container">

                <div className="title_section5">Komu pomagamy?</div>

                <div className="znaczek_section5"></div>

                <div className="opcje_section5">
                    {organizacje}  
                </div>

                <div className="text_section5">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>


                <div className="organizacje"> 
                
                    <div id="fundacje">
                        <div className="informacje">
                            <div className="informacje1">
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Fundacja "Dbam o Zdrowie"</p>
                                    <p className="cel_org">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    <hr align="left"></hr>
                                </div>
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Fundacja "Dla dzieci"</p>
                                    <p className="cel_org">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    <hr align="left"></hr>
                                </div>
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Fundacja "Bez domu"</p>
                                    <p className="cel_org">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    <hr align="left"></hr>
                                </div>
                            </div>
                            <div className="informacje2">
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    <hr></hr>
                                </div>
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">ubrania, meble, zabawki</p>
                                    <hr></hr>
                                </div>
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">ubrania, jedzenie, ciepłe koce</p>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                        <div className="numerki">
                            <p className="numerek numerek_wybr">1</p>
                            <p className="numerek">2</p>
                            <p className="numerek">3</p>
                        </div>
                    </div>



                    <div id="pozarzadowe" className='hidden'>
                        <div className="informacje">
                            <div className="informacje1">
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Organizacja 1</p>
                                    <p className="cel_org">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    <hr align="left"></hr>
                                </div>
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Organizacja 2</p>
                                    <p className="cel_org">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    <hr align="left"></hr>
                                </div>
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Organizacja 3</p>
                                    <p className="cel_org">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    <hr align="left"></hr>
                                </div>
                            </div>
                            <div className="informacje2">
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">lorem, lorem, lorem</p>
                                    <hr></hr>
                                </div>
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">lorem, lorem, lorem, lorem</p>
                                    <hr></hr>
                                </div>
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">lorem, lorem</p>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                        <div className="numerki">
                            <p className="numerek">1</p>
                            <p className="numerek numerek_wybr">2</p>
                            <p className="numerek">3</p>
                        </div>
                    </div>


                    <div id="lokalne" className='hidden'>
                        <div className="informacje">
                            <div className="informacje1">
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Lokalna zbiórka 1</p>
                                    <p className="cel_org">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    <hr align="left"></hr>
                                </div>
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Lokalna zbiórka 2</p>
                                    <p className="cel_org">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    <hr align="left"></hr>
                                </div>
                                <div className="informacje1_kontenerek">
                                    <p className="nazwa_org">Lokalna zbiórka 3</p>
                                    <p className="cel_org">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    <hr align="left"></hr>
                                </div>
                            </div>
                            <div className="informacje2">
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">lorem, lorem, lorem, lorem</p>
                                    <hr></hr>
                                </div>
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">lorem, lorem</p>
                                    <hr></hr>
                                </div>
                                <div className="informacje2_kontenerek">
                                    <p className="informacje2_artykuly">lorem, lorem</p>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                        <div className="numerki">
                            <p className="numerek">1</p>
                            <p className="numerek">2</p>
                            <p className="numerek numerek_wybr">3</p>
                        </div>
                    </div>
                
                </div>

            </div>
            
            </div>
        )
    }
}

export default Organisations;