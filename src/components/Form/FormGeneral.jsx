import React from 'react';
import FormHeader from './FormHeader';
import Form from './Form';
import Contact from '../Contact/Contact';
import './FormAlertStripe.scss';

class FormGeneral extends React.Component {

    render() {
        return(
            <>

            {/* <div className="loading_rwd">
                <div>moment, aktualnie pracuję nad RWD... </div><br></br>
                <i className="fas fa-smile-beam fa-3x"></i>
            </div> */}


            {/* <div className="hide_all"> */}
                
                <FormHeader />

                <Form />
                
                <Contact />

            {/* </div> */}
            </>
        )
    }
}

export default FormGeneral;