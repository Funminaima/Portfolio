import React, {useEffect, useState} from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ScrollForward = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const toggleVisibility = () =>
        window.pageYOffset <= 600 ? setIsVisible(true) : setIsVisible(false)
  
      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
  
    return isVisible ? (
      <div className='scroll-forward'>
        <a href='#top'>
          <ArrowForwardIcon fontSize='large' />
        </a>
      </div>
    ) : null
}

export default ScrollForward
