import React, { FC, useState } from 'react'
import classes from './Subscribe.module.css'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import { postSubscribe, actions } from '../../../Redux/reducer'
import { connect, ConnectedProps } from 'react-redux'
import { reduxForm, InjectedFormProps, Field } from 'redux-form'
import Button from '../../Fregments/Button/Button'
import { AppStateType } from '../../../Redux/reduxStore'
import { getIsGoodSubscribe } from '../../../Redux/selector'


const Subscribe: FC<Props> = props => {
    const [title, setTitle] = useState('Design tips, tricks, and freebies. Delivered weekly.')
    const [text, settext] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elif, sed do eiusmod.')
    const [photo,setPhoto]=useState('')
    const onSubmit = (formData: loginFormDataTypes) => {
        props.updateIsGoodSubscribe(true)
        props.postSubscribe(formData.subscribe)
    }
    return (
        <div className={classes.container} >
            <div>
                <TextInfo title={title} text={text} />
            </div>
            <div>
                <ReduxSubscribeForm onSubmit={onSubmit} isGoodSubscribe={props.isGoodSubscribe} />
            </div>
        </div>
    )
}

const SubscribeForm: FC<InjectedFormProps<loginFormDataTypes, ownProps> & ownProps> = ({ handleSubmit, error, isGoodSubscribe }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.input}>
                <Field name='subscribe' component='input' placeholder='Email Address...' validate={[]} />
            </div>
            <div className={classes.button}>
                <Button inscription='SUBSCRIBE' disabled={isGoodSubscribe} />
            </div>
        </form>
    )
}

const ReduxSubscribeForm = reduxForm<loginFormDataTypes, ownProps>({ form: 'subscribe' })(SubscribeForm)

const mapStateToProps = (state: AppStateType) => {
    return {
        isGoodSubscribe: getIsGoodSubscribe(state)
    }
}
const updateIsGoodSubscribe = actions.updateIsGoodSubscribe
const connector = connect(mapStateToProps, { postSubscribe, updateIsGoodSubscribe })

export default connector(Subscribe)

type Props = ConnectedProps<typeof connector>

type loginFormDataTypes = {
    subscribe: string
}

type ownProps = {
    isGoodSubscribe: boolean
}