import React from 'react';

class Section5 extends React.Component {
    
    
    render() {

        const organizacje = this.props.section5_org.map((e,i) => {
            return <div className="opcja_section5" key={i}>{e}</div>
        });

        return(
            <div id="section5">
            
            <div className="section5_container">

                <div className="title_section5">Komu pomagamy?</div>

                <div className="znaczek_section5">
                    <div className="znaczek_section5"></div>
                </div>

                <div className="opcje_section5">
                    {organizacje}
                </div>

                <div className="text_section5">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>

                <div className="organizacje"> tu bedzie wybrana organizacja</div>

            </div>
            
            </div>
        )
    }
}

export default Section5;