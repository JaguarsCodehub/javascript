import { useState } from "react";

const ToggleButton = () => {

    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Toggle</button>
            {visible ? <p>The button was clicked so here's the text!</p> : <p></p>}
        </div>

    )
}

export default ToggleButton;