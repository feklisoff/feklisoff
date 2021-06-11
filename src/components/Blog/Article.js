import React from 'react'
import './Blog.css'

const Article = ({date, title, description, body, author, tags, imgUrl}) => {
    const artLength = description.length

    return (
        <div className="pv4 bt bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
                <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                    <h1 className="f3 athelas mt0 lh-title">{title}</h1>
                    {(artLength > 200) ? 
                        <p className="f5 f4-l lh-copy athelas">{description[200]}</p> : 
                        <p className="f5 f4-l lh-copy athelas">{description}</p>}
                    
                </div>
                <div className="pl3-ns order-1  order-2-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={imgUrl} className="blogImg db" alt={title} />
                </div>
            </div>
            <p className="f6 lh-copy black mv0">By <span className="ttu">{author}</span></p>
            <time className="f6 db navy">{date}</time>
        </div>
    )
} 

export default Article