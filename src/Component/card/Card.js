import './Card.css'
import backimage from '../../assets/backimage.png'

function Card(props) {
    return <div className="cardParent">
        <p>
            <img src={backimage} className='bullet' alt='bullet' />
            {props.data}
        </p>
    </div>
}

export default Card;