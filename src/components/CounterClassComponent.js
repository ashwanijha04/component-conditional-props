import React from "react";
// Class based component example for Counter

class CounterClassComponent extends React.Component {

    // Constructor
    // First Step - Initialisation
    constructor(props) {
        super(props);

        // State is defined inside a constructor
        this.state = {
            count: 0
        }

        this.handleIncrement = this.handleIncrement.bind(this);
    }


    handleIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }


    // LifeCycle of this class 

        // Initialisation - Constructor, getDerivedStateFromProps
        // Mounting - Render(), ComponentWillMount, ComponentDidMount()
        // Update - getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), ComponentDidUpate 
        // Unmount - componentWillUnmount()




    // LifeCycle methods



     // Second - getDerivedStateFromProps - Just before the render method
     /*
 type GetDerivedStateFromProps<P, S> =
        /**
         * Returns an update to a component's state based on its new props and old state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
        // (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;
     **/


    
    render() {
        return (
            <>
            <h1>Hello</h1>
            <p> You clicked {this.state.count} times. </p>

            <button onClick={()=>{
                this.setState({
                    count: this.state.count - 1
                })
            }}> - </button>

            <button onClick={this.handleIncrement}> + </button>
        
            </>
        )
    }

}


export default CounterClassComponent;


// What is a state?
// State stores component data locally and this data is not usable by other components.
// When you change a state, component will re-render.
// States are mutable - states can change.
// Initialised using a contructor or a hook.



// Difference between States and Props?
// 1. Props are not mutable.
// 2. Porps are passed on to the components from parent to child.



