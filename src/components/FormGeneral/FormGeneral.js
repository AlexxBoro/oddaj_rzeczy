import React from 'react';
import FormHeader from '../FormHeader';
import Form from '../Form/Form';
import Section6 from '../Section6';

class FormGeneral extends React.Component {

    render() {
        return(
            <>
            <FormHeader />

            <div className="FormGeneral__info">
                <p className="FormGeneral__info-attention">Ważne!</p>
                <p className="FormGeneral__info-text">Uzupełnij szczegóły dotyczce twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>

            <Form />

            <Section6 />
            </>
        )
    }
}

export default FormGeneral;
