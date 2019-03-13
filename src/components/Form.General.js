import React from 'react';
import Form_Header from './Form_Header';
import Section6 from './Section6';

class Form extends React.Component {

    render() {
        return(
            <>
            <Form_Header />

            <div className="header_pasek">
                <p className="pasek_wazne">Ważne!</p>
                <p class="pasek_info">Uzupełnij szczegóły dotyczce twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>

            <div> MIEJSCE NA  F O R M U L A R Z </div>

            <Section6 />
            </>
        )
    }
}

export default Form;