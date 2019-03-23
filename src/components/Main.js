import React from 'react';
import './reset.scss';
import Header from './Header/Header';
import YellowStatsStripe from './YellowStatsStripe/YellowStatsStripe';
import FourSteps from './FourSteps/FourSteps';
import AboutUs from './AboutUs/AboutUs';
import Organisations from './Organisations/Organisations';
import Contact from './Contact/Contact';



class Main extends React.Component{
    // Do propsów :)
    state = {
        stats_numbers: ["10", "7", "5"],
        stats_text: ["oddanych worków", "wspartych organizacji", "zorganizownych zbiórek"],
        stats_descr: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
        section3_options: ["Wybierz rzeczy", "Spakuj je", "Zdecyduj komu chcesz pomóc", "Zamów kuriera"],
        section3_descr: ["ubrania, zabawki, sprzęt i inne", "skorzystaj z worków na śmieci", "wybierz zaufane miejsce", "kurier przyjedzie w dogodnym terminie"],
        section5_org: ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]
    };

    render(){
        console.log(this.props);

        return(
            <>
                    <Header />

                {/* <div className="loading_rwd">
                    <div>moment, aktualnie pracuję nad RWD... </div><br></br>
                    <i className="fas fa-smile-beam fa-3x"></i>
                </div>   */}

                <div className="hide_all">
                    <YellowStatsStripe stats_numbers = {this.state.stats_numbers} stats_text = {this.state.stats_text} stats_descr = {this.state.stats_descr} />
                    <FourSteps section3_options={this.state.section3_options} section3_descr={this.state.section3_descr}/>
                    <AboutUs />
                    <Organisations section5_org={this.state.section5_org} />
                    <Contact />
                </div>

            </>
        )
    }
}

export default Main;
