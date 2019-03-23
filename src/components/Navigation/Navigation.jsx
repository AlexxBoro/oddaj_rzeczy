import React from "react";
import './Navigation.scss';
import { routes } from "../../routes";

class Navigation extends React.Component{
    navClick = (route) => {
        if (this.props.onNavigation) {
            this.props.onNavigation(route);
        }
    };

    showHiddenMenu = (e) => {
        // document.querySelector("#hidden-menu").className === "nav-column-hidden" ?
        // console.log("on ma klase nav-column-hidden") :
        // console.log("NIE ma klasy nav-colum-hidden");

        if (document.querySelector("#hidden-menu").className === "nav-column-hidden"){
            document.querySelector("#hidden-menu").classList.remove("nav-column-hidden");
            document.querySelector("#hidden-menu").classList.add("nav-column-show");
        }
        else if (document.querySelector("#hidden-menu").className === "nav-column-show"){
            document.querySelector("#hidden-menu").classList.remove("nav-column-show");
            document.querySelector("#hidden-menu").classList.add("nav-column-hidden");
        }
    }

    render(){

        const nawigacjaMap = routes.map((e, i) => {
            return <a href={`#${e.route}`} key={i} className="nav__element" onClick={() => this.navClick(e.route)}>{e.title}</a>
        });

        return(
            <>
            <nav className="nav">
                {nawigacjaMap}
            </nav>

            <button onClick={this.showHiddenMenu} className="hamburger"></button>

            <nav id="hidden-menu" className="nav-column-hidden">
                {nawigacjaMap}
            </nav>
            </>
        )
    }
}

export default Navigation;
