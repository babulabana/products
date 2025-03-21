
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Rating(props) {
    let total = props.r
    let fullstars = parseInt(total);
    let halfstar = (total % fullstars )>0?<FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>:""
    let ui= []
    for(var i=1;i<=fullstars;i++){
        ui.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
    }
    ui.push(halfstar)
  return (
    <div className='text-yellow-400'>
      {ui}
    </div>
  )
}
