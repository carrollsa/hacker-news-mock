import * as React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from './PostMetaInfo'

export default function Comment({ comment }) {
    return (
        <div className='comment'>
            <PostMetaInfo
                comment={true}
                by={comment.by}
                id={comment.id}
                time={comment.time}
            />
            <p dangerouslySetInnerHTML={{__html: comment.text}}/>
        </div>
    )
}