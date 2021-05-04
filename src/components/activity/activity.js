import React from 'react';
import './activity.scss'

const Activity = ({inactive}) => {
  return(
    <div className="activity-bg">
      <div className={`status ${inactive? 'inactive':null}`}>

      </div>
    </div>
  )
}
export default Activity;