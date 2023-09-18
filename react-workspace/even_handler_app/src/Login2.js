import {useState} from "react"

function Login2() {

    const [inputs, setInputs] = useState({id:'', pw:''})
    const {id, pw} = inputs

    const onInput = (e) => {
        const{value, name} = e.target
        setInputs({...inputs, [name] : value})
    }

    return <>
    <div>ID : <input value={id} onChange={onInput} name="id"/></div>
    <div>PW : <input type="password" value={pw} onChange={onInput} name ="pw" /></div>
    <hr />
    </>
}

export default Login2