import React from 'react'
import {Link} from 'react-router-dom'
import {arrow,github} from '../assets/icons'

const InfoBox = ({ text, link, btnTxet }) => (
  <div className="info-box">
    <p className="font-small sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnTxet}
      <img src={arrow}  className='w-4 h-4 object-contain'/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Vishal Kanjariya</span>👋
      <br />A Full Stack Developer
    </h1>
  ),
  2: (
    <InfoBox
      text="An Innovative Thinker who fearlessly tackles challenges with creativity and determination"
      link="/about"
      btnTxet="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Creating full-stack solutions that combine aesthetic design with backend excellence."
      link="/projects"
      btnTxet="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Let's connect and bring your vision to life! Reach out to discuss your project today."
      link="/contact"
      btnTxet="Let's Talk"
    />
  ),
};


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo
