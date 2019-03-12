import React from 'react';
import '../scss/main.scss';


class Section1 extends React.Component {

    handleClick = (e) => {
        if (e.target.innerText === "O co chodzi?") {
            window.scrollBy(0, 980);
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
    }

    render(){
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
                        <div className="nav_buttons">Zaloguj</div>
                        <div className="nav_buttons zaloz_konto">Załóż konto</div>
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
                    
    
                    <div className="opcje_container">{options}</div>
                </div>
            </>
        )
    }
    
}


export default Section1;