import {useState} from 'react'
import './counter.scss'
import Button from '../Button/Button'

const Counter = ({initialValue, maxValue, onAdd}) => {
    const [counter, setCounter] = useState(initialValue)

    const adding = () => {
        if (counter >= initialValue && counter < maxValue) {
            return setCounter(counter + 1), onAdd(counter + 1)
        } else if (counter === maxValue){
            console.log('maxValuee')
        }
        
    }

    const removing = () => {
        if (counter > initialValue) {
            return setCounter(counter - 1), onAdd(counter - 1)
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
                <Button content={'+'} callback={adding} className='buttonCounter'></Button>
                <Button content={'-'} callback={removing} className='buttonCounter'></Button>
            </div>
        </div>
        </>
    )
}

export default Counter