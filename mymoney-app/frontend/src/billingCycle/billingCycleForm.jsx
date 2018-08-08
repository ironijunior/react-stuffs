import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from '../billingCycle/billingCycleActions'

import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    
    render() {
        const { handleSubmit, submitName } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} 
                        readOnly={this.props.readOnly}
                        label='Name' placeholder='Billing cycle name' cols='12 4' />

                    <Field name='month' component={labelAndInput} type='number' 
                        readOnly={this.props.readOnly}
                        label='Month' placeholder='Billing cycle month' cols='12 4'  />

                    <Field name='year' component={labelAndInput} type='number'
                         readOnly={this.props.readOnly}
                         label='Year' placeholder='Billing cycle year' cols='12 4' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>{submitName}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = (dispatch) => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)