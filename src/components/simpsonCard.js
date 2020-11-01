// import { render } from '@testing-library/react';
import React from 'react';


const SimpsonCard = ({simpson}) => {
    return(
        <div>
            <p>{simpson.character}</p>
            <img src={simpson.image}/>
            <p>{simpson.quote}</p>

        </div>
    )
}

export default SimpsonCard;