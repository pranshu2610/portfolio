import React from 'react';
import './activity.scss'

const Activity = ({icon,inactive, darkMode}) => {
  let imgURL = "/icons/"+icon
  return(
    <div style={{backgroundImage: "url("+imgURL+")"}} className="activity-bg">
      <div className={`status ${inactive? darkMode ? 'inactive':'inactivedark':null}`}>

      </div>
    </div>
  )
}
export default Activity;