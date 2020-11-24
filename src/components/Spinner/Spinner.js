import './Spinner.scss'
import spinner from '../../spinner1.gif'

const Spinner = () => {


    return (
        <div id='Spinner'>
            <img src={spinner} alt='Loading...' />
        </div>
    )
}

export default Spinner