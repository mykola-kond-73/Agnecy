import React, { FC } from 'react'
import classes from './ContactForm.module.css'
import { InjectedFormProps, reduxForm, Field } from 'redux-form'
import { messageContentType } from '../../../../Redux/reducer'
import Button from '../../../Fregments/Button/Button'
import { required } from '../../../../Untils/Validators'

const ContactForm: FC<InjectedFormProps<messageContentType>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field name='name' component='input' placeHolder='NAME' valid={[required]} />
                </div>
                <div>
                    <Field name='email' component='input' placeHolder='Your Mail' valid={[required]} />
                </div>
                <div>
                    <Field name='message' component='textarea' placeHolder='Type your message' />
                </div>
            </div>

            <div>
                <Button inscription='SEND MESSAGE' disabled={false} />
            </div>
        </form>
    )
}

export const ReduxContactForm = reduxForm<messageContentType>({ form: 'contact' })(ContactForm)