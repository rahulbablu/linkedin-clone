import React from 'react'

import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('Elon bought twitter!', '1d ago - 6345 readers')}
        {newsArticle('Is redux too good?', '3h ago - 1342 readers')}
        {newsArticle('Tesla hits new highs', '12h ago - 3423 readers')}
        {newsArticle('India\'s growth forecast sees cuts', '18h ago - 2302 readers')}
        {newsArticle('Banking for Gen Zs', '20h ago - 4621 readers')}
        {newsArticle('Bitcoin breaks down again!', '4h ago - 942 readers')}
    </div>
  )
}

export default Widgets