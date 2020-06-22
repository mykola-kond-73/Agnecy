import React, { FC } from 'react'
import classes from './ContactForm.module.css'
import { InjectedFormProps, reduxForm, Field } from 'redux-form'
import { messageContentType } from '../../../../Redux/reducer'
import Button from '../../../Fregments/Button/Button'
import { required } from '../../../../Untils/Validators'

const ContactForm: FC<InjectedFormProps<messageContentType,ownPropsType>&ownPropsType> = ({ handleSubmit, error,isGoodMessage }) => {
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
                <Button inscription='SEND MESSAGE' disabled={isGoodMessage} />
            </div>
        </form>
    )
}

export const ReduxContactForm = reduxForm<messageContentType,ownPropsType>({ form: 'contact' })(ContactForm)

type ownPropsType={
    isGoodMessage:boolean
}