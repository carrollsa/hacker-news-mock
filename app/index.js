import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import PostsList from './components/PostsList'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <PostsList />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)