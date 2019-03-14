import React from 'react';
import Form_Header from './Form_Header';
import Form from './Form';
import Section6 from './Section6';

class Form_General extends React.Component {

    render() {
        return(
            <>
            <Form_Header />

            <div className="header_pasek">
                <p className="pasek_wazne">Ważne!</p>
                <p className="pasek_info">Uzupełnij szczegóły dotyczce twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>

            <Form />
            
            <Section6 />
            </>
        )
    }
}

export default Form_General;