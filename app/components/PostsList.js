import * as React from 'react'
import { fetchStories } from '../utils/api'
import PropTypes from 'prop-types'

function FiltersNav ({ selected, onUpdateFilter }) {
    const filters = ['top', 'new']

    return (
        <ul className='row space-between'>
            {filters.map((filter) => (
                <li key={filter}>
                    <button
                        className='btn-clear nav-link'
                        style={filter === selected ? { color: 'rgb(187, 46, 31)' } : null }
                        onClick={() => onUpdateFilter(filter)}>
                        {filter}
                    </button>
                </li>
            ))}
        </ul>
    )
}

FiltersNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateFilter: PropTypes.func.isRequired
}

export default class PostList extends React.Component {
    state = {
        selectedFilter: 'top',
        posts: null,
        error: null,
    }
    componentDidMount() {
        this.updateFilter(this.state.selectedFilter)
    }
    updateFilter = (selectedFilter) => {
        this.setState({
            selectedFilter,
            error: null,
            posts: null
        })
        fetchStories(selectedFilter)
            .then((posts) => this.setState({
                posts,
                error: null
            }))
            .catch(() => {
                console.warn('Error fetching posts: ', error)

                this.setState({
                    error: `There was an error fetching posts`
                })
            })
    }
    isLoading = () => {
        const { posts, error } = this.state
        return posts === null && error === null
    }
    render() {
        const { selectedFilter, posts, error } = this.state

        return (
            <React.Fragment>
                <FiltersNav
                    selected={selectedFilter}
                    onUpdateFilter={this.updateFilter}
                />
                
                {this.isLoading() && <p>LOADING</p>}

                {posts && <pre>{JSON.stringify(posts, null, 2)}</pre>}
            </React.Fragment>
        )
    }
}