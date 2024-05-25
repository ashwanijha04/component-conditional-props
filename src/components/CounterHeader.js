import '../style/CounterHeader.css'
import Counter from './Counter'

export default function CounterHeader(props) {

    return (
        <div className="CounterHeader">
            <h1> {props.name} </h1>
            <p> Minimum Value: {props.minValue} </p>
            <Counter minValue={props.minValue} />
        </div>
    )
}


