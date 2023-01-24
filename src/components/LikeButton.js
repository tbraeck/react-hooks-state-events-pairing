import React, { useState } from "react";
import video from "../data/video";


function LikeButton(upvotes) {
    const [likesCount, setLikesCount] = useState(0)

    const handleIncrement = () => {

        setLikesCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={handleIncrement}>{likesCount} 👍</button>
        </>
    );


}


export default LikeButton;