import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '3vh',
        backgroundColor: '#1c1c1c',
        color: 'white',
        border: "3px solid gold",
        borderRadius: '40px',
        "&:HowToVoteRounded, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
            
              
        },
        right: '5%'
        
    }
}))

const Scroll = ({
    showBelow
}) => {

    const classes = useStyles();

const [show, setShow] = useState(showBelow ? false : true)

const handleScroll = () => {
    if(window.pageYOffset > showBelow) {
        if (!show) setShow(true)
    } else {
        if (show) setShow(false)
    }
  }

   const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth`})
    }
  useEffect(() =>{
      if (showBelow) {
          window.addEventListener(`scroll`, handleScroll)
          return () => window.removeEventListener(`scroll`, handleScroll)
      }
  })

    return (
        <div>
            {show &&
          <IconButton onClick={handleClick} className={classes.toTop} >
               <ExpandLessIcon />
          </IconButton>
           }
        </div>
    )
}


export default Scroll