import React, { FC, useState } from 'react'
import classes from './Subscribe.module.css'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import { postSubscribe } from '../../../Redux/reducer'
import { connect, ConnectedProps } from 'react-redux'
import { reduxForm, InjectedFormProps, Field } from 'redux-form'
import Button from '../../Fregments/Button/Button'

const Subscribe: FC<Props> = props => {
    const [title, setTitle] = useState('Design tips, tricks, and freebies. Delivered weekly.')
    const [text, settext] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elif, sed do eiusmod.')
    const onSubmit = (formData: loginFormDataTypes) => {
        props.postSubscribe(formData.subscribe)
    }
    return (
        <div>
            <div>
                <TextInfo title={title} text={text} />
            </div>
            <div>
                <ReduxSubscribeForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const SubscribeForm: FC<InjectedFormProps<loginFormDataTypes>> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='subscribe' component='input' placeHolder='Email Address...' validate={[]} />
            </div>
            <div>
                <Button inscription='SUBSCRIBE' disabled={false} />
            </div>
        </form>
    )
}

const ReduxSubscribeForm = reduxForm<loginFormDataTypes>({ form: 'subscribe' })(SubscribeForm)

const connector = connect(null, { postSubscribe })

export default connector(Subscribe)

type Props = ConnectedProps<typeof connector>

type loginFormDataTypes = {
    subscribe: string
}