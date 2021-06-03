import React from 'react'
import Article from '../Blog/Article'
import { useSelector } from 'react-redux'

const Blog = () => {

    //const blogs = useSelector((state)=> state.blogs)
    const blogs = [
        {date: '06/02/2021', title: 'first title',
         body: 'first body', author: 'me', tags: []},
        {date: '06/02/2021', title: 'second title',
         body: 'second body', author: 'me', tags: ['wild']},
        {date: '06/02/2021', title: 'third title',
         body: 'third body', author: 'me', tags: ['crazy','fun']}
    ]
    
    const blogList = blogs.map((user, i) => {
        return (
            <Article
                date={blogs[i].date}
                title={blogs[i].title}
                body={blogs[i].body}
                author={blogs[i].author}
                tags={blogs[i].tags} />
        )
    })

    return (
        <div>
            {blogList}
        </div>
    )

    // return (
    //     <section className="mw8 center ma7">
    //         <article className="pv4 bt bb b--black-10 ph3 ph0-l">
    //             <div className="flex flex-column flex-row-ns">
    //                 <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
    //                     <h1 className="f3 athelas mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
    //                     <p className="f5 f4-l lh-copy athelas">
    //                     The tech giant says it is ready to begin planning a quantum
    //                     computer, a powerful cpu machine that relies on subatomic particles instead
    //                     of transistors.
    //                     </p>
    //                 </div>
    //                 <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
    //                     <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="dimly lit room with a computer interface terminal." />
    //                 </div>
    //             </div>
    //                 <p className="f6 lh-copy white mv0">By <span className="ttu">Robin Darnell</span></p>
    //                 <time className="f6 db navy">Nov. 21, 2016</time>
    //         </article>
    //         <article className="pv4 bb b--black-10 ph3 ph0-l">
    //             <div className="flex flex-column flex-row-ns">
    //                 <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
    //                     <h1 className="f3 athelas mt0 lh-title">A whale takes up residence in a large body of water</h1>
    //                     <p className="f5 f4-l lh-copy athelas">
    //                     This giant of a whale says it is ready to begin planning a new
    //                     swim later this afternoon. A powerful mammal that relies on fish and plankton instead
    //                     of hamburgers.
    //                     </p>
    //                 </div>
    //                 <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
    //                     <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="whale's tale coming crashing out of the water." />
    //                 </div>
    //             </div>
    //             <p className="f6 lh-copy gray mv0">By <span className="ttu">Katherine Grant</span></p>
    //             <time className="f6 db gray">Nov. 19, 2016</time>
    //         </article>
    //         <article className="pv4 bb b--black-10 ph3 ph0-l">
    //             <div className="flex flex-column flex-row-ns">
    //                 <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
    //                     <h1 className="f3 athelas mt0 lh-title">
    //                     ‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found
    //                     </h1>
    //                     <p className="f5 f4-l lh-copy athelas">
    //                     Archaeologists have found more than 40 tons of vinyl records,
    //                     some more than a five years old, shedding light on early hipster
    //                     trends.
    //                     </p>
    //                 </div>
    //                 <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
    //                     <img src="http://mrmrs.github.io/photos/warehouse.jpg" className="db" alt="warehouse with stacked shelves."/>
    //                 </div>
    //             </div>
    //             <p className="f6 lh-copy gray mv0">By <span className="ttu">Imelda Clancy</span></p>
    //             <time className="f6 db gray">Nov. 19, 2016</time>
    //         </article>
    //     </section>
    // )
    
}


export default Blog