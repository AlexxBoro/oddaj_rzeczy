import React from 'react';
import '../scss/main.scss';


const Section1 = props => {
    const nav = props.napisy.map( (e,i) => {
        return <div className="nav_buttons" key={i}>{e}</div>
    })
    const options = props.opcje.map( (e,i) => {
        return <div className="opcja" key={i}>{e}</div>
    });
    
    return (
        <>
            <div id="section1">

                <div className="log_buttons">
                    <div className="nav_buttons">Zaloguj</div>
                    <div className="nav_buttons">Załóż konto</div>
                </div>

                <div className="nav">
                    <div className="start_button">Start</div>
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


// class Section1 extends React.Component {
//     render(){
//         return(
//             <div id="section1">{this.napisy}</div>
//         )
//     }
// }

export default Section1;