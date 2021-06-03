import React from 'react'

const Article = ({date, title, body, author, tags}) => {
    return (
        <div className="pv4 bt bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
                <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                    <h1 className="f3 athelas mt0 lh-title">{title}</h1>
                    <p className="f5 f4-l lh-copy athelas">{body}</p>
                </div>
                <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="dimly lit room with a computer interface terminal." />
                </div>
            </div>
            <p className="f6 lh-copy black mv0">By <span className="ttu">{author}</span></p>
            <time className="f6 db navy">{date}</time>
        </div>
    )
} 

export default Article