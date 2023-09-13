import {useState} from "react"

function Login() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const inputText = function(e) {
        setId(e.target.value)
    }

    const inputPw = (e) => {
        const {value} = e.target
        setPw(value)
    }

    return <>
    <div>ID : <input value={id} onChange={inputText} /></div>
    <div>PW : <input type="password" value={pw} onChange={inputPw} /></div>
    <hr />
    </>
}

export default Login