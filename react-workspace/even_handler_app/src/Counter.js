import {useState} from 'react'

function Counter() {

    const [number, setNumber] = useState(0) // number = 0 으로 초기화
    
    const increaseNumber = function() {
        // setNumber(number+1)
        // setNumber(function(num) {
        //     return num + 1
        // })
        setNumber((num) => num +1)
    }

    const resetNumber = () => {
        setNumber(0)
    }

    return <>
        {number} 번 클릭
        <button onClick={increaseNumber}>CLICK</button>
        <button onClick={resetNumber}>RESET</button>
    </>
}

export default Counter