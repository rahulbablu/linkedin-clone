import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl} >{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpOutlinedIcon} color='gray' title='Like' />
            <InputOption Icon={CommentOutlinedIcon} color='gray' title='Comment' />
            <InputOption Icon={RepeatOutlinedIcon} color='gray' title='Repost' />
            <InputOption Icon={SendOutlinedIcon} color='gray' title='Send' />
        </div>
    </div>
  )
})

export default Post