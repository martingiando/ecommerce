import {useState} from 'react'
import './counter.css'

const Contador = ({initialValue, maxValue, onAdd}) => {
    const [counter, setCounter] = useState(initialValue)

    const adding = () => {
        if (counter >= initialValue && counter < maxValue) {
            return setCounter(counter + 1)
        } else if (counter === maxValue){
            console.log('maxValuee')
        }
        
    }

    const removing = () => {
        if (counter > initialValue) {
            return setCounter(counter - 1)
        } else if (counter <= initialValue){
            console.log('minValue')
        }
    }

    return(<>
        <div className='centered'>
            <div>
                <h3>{counter}</h3>
            </div>
            </div>
            <div className='centered'>
            <div>
                <button onClick={adding}>+</button>
                <button onClick={removing}>-</button>
            </div>
        </div>
        </>
    )
}

export default Contador