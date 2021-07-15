import * as React from 'react'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav() {
    return (
        <nav className = 'row space-between'>
            <ul className='row nav'>
                <li>
                    Top
                </li>
                <li>
                    New
                </li>
            </ul>
            <button
                style={{ fontSize: 30 }}
                className='btn-clear'
            >
                🔦
            </button>
        </nav>
    )
}