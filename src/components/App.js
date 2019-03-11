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
        options: ["oddaj rzeczy", "zorganizuj zbiórkę"],
        stats_numbers: ["10", "7", "5"],
        stats_text: ["oddanych workow", "wspartych organizacji", "zorganizownych zbiórek"],
        stats_descr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    };

    render(){
        return(
            <>
                <Section1 napisy = {this.state.nav} opcje = {this.state.options}/>
                <Section2 stats_numbers = {this.state.stats_numbers} stats_text = {this.state.stats_text} stats_descr = {this.state.stats_descr} />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </>
        )
    }
}

export default App;