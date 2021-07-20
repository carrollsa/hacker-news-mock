import * as React from 'react'
import PropTypes from 'prop-types'

export default function Title ({ url, title, id }) {
    return url
        ? <a className='link' href={url}>{title}</a>
        : <span>{title}</span>
}

Title.propTypes  = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}