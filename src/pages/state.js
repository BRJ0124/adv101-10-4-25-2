import { useState } from "react"

export default function State() {
    const [state, setState] = useState(0);

    function buttonClicked() {
        setState(state + 1);
        // setState((previousState) => {
        //     return previousState + 1;
        // });
    }

    return (
        <div>
            <div>
                {state}
            </div>
            <button 
                onClick={buttonClicked}
                className="mt-2 border-1 p-1">
                Click me!
            </button>
        </div>
    )
}