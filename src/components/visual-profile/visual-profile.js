import React,{useState} from 'react';
import visBG from '../../assets/images/vis-bg.jpg';
import Activity from '../activity/activity';
import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './visual-profile.scss'

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 23,
    width: 23,
    backgroundColor: '#306344',
    border: '5px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    boxShadow: "inset 5px 1px 4px -2px rgba(0,0,0,0.16)",
    '&:focus, &:hover, &$active': {
      boxShadow: "inset 5px 1px 4px -2px rgba(0,0,0,0.16)",
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 6,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
  },
})(Slider);

const VisualProfile = () => {
  const [year,setYear] = useState(2021)
  return(
    <div className="visual-bg" style={{backgroundImage: "url("+visBG+")"}}>
      <p className="year">{year}</p>
      <div className="top-lable">
        <div className="current-job flat">
          <Activity inactive={true}/>
          <div className="flat-con">
            <p className="card-title">Wealth42 Inc</p>
            <p className="card-sub">SDE Intern</p>
          </div>
        </div>
        <div className="current-job">
          <Activity />
          <p className="card-title">Wealth42 Inc</p>
          <p className="card-sub">SDE Intern</p>
          <p className="card-sub">Banglore</p>
        </div>
      </div>
      <div className="top-lable down">
        <div className="current-job flat-large">
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <p className="card-sub">2018</p>
            <p className="card-sub">2021</p>
          </div>
          <PrettoSlider 
            aria-label="pretto slider" 
            value={year} 
            onChange={(event, newValue) => {setYear(newValue)}}
            steps={1}
            min={2018}
            max={2021}
          />
        </div>
      </div>
    </div>
  );
}
export default VisualProfile;