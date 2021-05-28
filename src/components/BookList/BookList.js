import { response } from 'express'
import React from 'react'

class BookList extends React.Component {
    constructor() {
        super()
        this.state = {
            books: [],
            searchbar: ''
        }
    }

    componentDidMount() {
        fetch('myurlofbooks')
        .then(response => response.json)
        .then(books => this.setState({books: books}))
    }

    onSearchChange = (event) => {
        this.setState({searchbar: event.target.value})
    }

    render() {
        const { books, searchbar } = this.state
        const filteredBooks = books.filter(books => {
            return books.name.toLowerCase().includes(searchbar.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>My Books</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredBooks}/>
                    </ErrorBoundary>  
                </Scroll>
                
            </div>
        )
    }

}