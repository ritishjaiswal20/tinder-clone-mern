import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
function Header() {
  return (
    <div className="header">
   <IconButton>
       <PersonIcon className="header_icon" font-size="large" />
   </IconButton>
   <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7_JXEyq-ViuRT1z-jpCkTr3mTwpfheg0tg&usqp=CAU" alt=""/>
   <IconButton>
         <ForumIcon className="header_icon" font-size="large" />
   </IconButton>
    </div>
  )
}

export default Header