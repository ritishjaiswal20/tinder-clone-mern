import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';    
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './SwipeButtons.css'
import { IconButton } from '@mui/material';
function SwipeButtons() {
  return (
    <div className="SwipeButtons">
        <IconButton  className="swipeButtons_replay">
            <ReplayIcon  fontSize='large'/>
        </IconButton>
        <IconButton className="swipeButtons_starrate">
            <StarRateIcon fontSize='large'/> 
        </IconButton>
        <IconButton className="swipeButtons_favorites">
            <FavoriteIcon fontSize='large'/> 
        </IconButton>
        <IconButton className="FlashOnIcon">
            <FlashOnIcon fontSize='large'/>
        </IconButton>
      

    </div>
  )
}

export default SwipeButtons