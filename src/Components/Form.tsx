import {useState} from 'react'
import {Sub} from '../types';

interface FormState{

    inputValues: Sub  
}

interface FormProps{
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}


const Form = ({onNewSub}: FormProps) => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(subs =>([...subs, inputValues]))
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' placeholder="subMonths" />    
                <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder="description" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form