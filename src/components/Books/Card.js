import React from 'react'

const Card = ({name, id, author, rating}) => {
    return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <div>
                    <h2>{name}</h2>
                    <h3>{author}</h3>
                    <p>{rating} stars</p>
                </div>
            </div>
    )
}

export default Card;