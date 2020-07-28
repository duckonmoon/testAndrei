import React from "react";
import RatingStar from "./RatingStar/RatingStar"

const ratingBar = (p) => {
    const onRate = p.onRate;
    const rating = p.rating;
    const stars = [];
    for(let i = 0; i < rating; i++){
        stars.push(<RatingStar key={i} index={i+1} full={true} onRate={onRate}/>)
    }
    for(let i = rating; i < 5; i++) {
        stars.push(<RatingStar key={i} index={i+1} onRate={onRate}/>)
    }

    return (
        <div>
            {stars}
        </div>
    )
};




export default ratingBar;