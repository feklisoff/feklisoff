import React from 'react';
import Card from './Card'

const CardList = (books) => {
    const cardArray = books.entries.map((user, i) => {
        return (<Card 
            key={i} 
            id={books[i].id} 
            name={books[i].name} 
            email={books[i].email} />
        )
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;