import React, { useState } from "react";


export default function LikeButton() {

    const [likes, setLikes] = useState(0);
    const [colorIndex, setcolorIndex] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const handleClick = () => {

        setLikes(likes + 1);
        setcolorIndex(((colorIndex + 1) % colors.length));
      
       
    };

    

    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1em',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {likes} {likes === 1 ? 'Like' : 'Likes'}
        </button>
    );
}
