import React from 'react';
import './text-profile.scss';

const imgURL = {
  "React": "https://res.cloudinary.com/practicaldev/image/fetch/s--JIe3p0M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/093ewdrgyf1kedlhzs51.png",
  "Redux": "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg",
  "JS": "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg",
  "SASS": "https://engineering.icf.com/wp-content/uploads/2020/02/sass-wide-logo.png",
  "Node": "https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png",
  "MongoDB": "https://img.stackshare.io/service/1030/leaf-360x360.png",
  "TS": "https://iconape.com/wp-content/png_logo_vector/typescript.png",
  "NextJS": "https://www.creative-tim.com/assets/icon-nextjs-2a1bcdd2079d47a4f10c5620632a7994b8544ca0d5e5f11049e9c542142ca82b.jpg"
}
const TextProfile = () => {
  return(
    <div className="textSpace">
      <div className="text-div">
        <p className="mainText">Hello I am </p>
        <p className="mainText main">Pranshu</p>
      </div>
      <div className="skill-badges">
        <div 
          className="skills" 
          style={{  
            backgroundImage: "url(" + imgURL.React + ")"
          }}
        />
        <div 
          className="skills" 
          style={{  
            backgroundImage: "url(" + imgURL.JS + ")"
          }}
        />
        <div 
          className="skills" 
          style={{  
            backgroundImage: "url(" + imgURL.SASS + ")"
          }}
        />
        <div 
          className="skills" 
          style={{  
            backgroundImage: "url(" + imgURL.TS + ")"
          }}
        />
        <div 
          className="skills" 
          style={{  
            backgroundImage: "url(" + imgURL.NextJS + ")"
          }}
        />
      </div>
    </div>
  )
}
export default TextProfile;