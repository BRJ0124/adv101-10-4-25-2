import { useEffect, useState } from "react"

export default function Effect() {
    const [counter, setCounter] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if(isStarted) {
            let interval = setInterval(() => {
                setCounter(counter + 1);
            }, 1);

            return () => {
                clearInterval(interval);
            }
        }
    }, [counter, isStarted]);

    function buttonClicked() {
        setIsStarted(!isStarted);
    }

    return (
        <div>
            <div>Count: {counter}</div>
            <button 
                onClick={buttonClicked}
                className="mt-2 border-1 p-1">
                {isStarted ? 'STOP': 'START'}
            </button>
        </div>
    )
}