import { useState } from "react";

const colors = ['pink', 'green', 'red', 'blue', 'orange', 'purple'];

function Button() {
    const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
    };

    return (
        <div 
        style={{backgroundColor}}>
            {colors.map(color => 
                <button key={color} onClick={onButtonClick(color)}>
                    {color}
                </button>
            )}
        </div>
    )
}

export default Button;