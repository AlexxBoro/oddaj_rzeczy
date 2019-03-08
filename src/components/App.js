import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

class App extends React.Component{
    state = {
        nav: ["O co chodzi?", "O nas", "Fundacje i organizacje", "Kontakt"],
        options: ["oddaj rzeczy", "zorganizuj zbiórkę"]

    };

    render(){
        return(
            <>
                <Section1 napisy = {this.state.nav} opcje = {this.state.options}/>
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </>
        )
    }
}

export default App;