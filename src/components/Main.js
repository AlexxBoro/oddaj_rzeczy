import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';


class Main extends React.Component{
    state = {
        nav: ["O co chodzi?", "O nas", "Fundacje i organizacje", "Kontakt"],
        options: ["oddaj rzeczy", "zorganizuj zbiórkę"],
        stats_numbers: ["10", "7", "5"],
        stats_text: ["oddanych worków", "wspartych organizacji", "zorganizownych zbiórek"],
        stats_descr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        section3_options: ["Wybierz rzeczy", "Spakuj je", "Zdecyduj komu chcesz pomóc", "Zamów kuriera"],
        section3_descr: ["ubrania, zabawki, sprzęt i inne", "skorzystaj z worków na śmieci", "wybierz zaufane miejsce", "kurier przyjedzie w dogodnym terminie"],
        section5_org: ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]
    };

    render(){
        return(
            <>
                <Section1 napisy = {this.state.nav} opcje = {this.state.options}/>
                <Section2 stats_numbers = {this.state.stats_numbers} stats_text = {this.state.stats_text} stats_descr = {this.state.stats_descr} />
                <Section3 section3_options={this.state.section3_options} section3_descr={this.state.section3_descr}/>
                <Section4 />
                <Section5 section5_org={this.state.section5_org} />
                <Section6 />
            </>
        )
    }
}

export default Main;