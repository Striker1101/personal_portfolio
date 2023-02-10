import React from 'react'
import img from '../assets/use1.png'
export default function Header() {
  return (
    <>
    <header>
      <div className="header">
        <img id="profileImg" src={img} alt="" />
        <h4 className="headerName">ODEMILIN EROMOSELE</h4>
      </div>
      <div className="headerAbout">
        <h2>About me</h2>
        <div>
          <em >
            Growing up, I always had an affinity for everything tech related.
            Jailbreaking my first iPod, installing custom ROMs on my android
            phones (and nearly bricking them) or modding my gaming consoles were
            some of the things that developed my problem solving skills with good computer enginerring skill and knowlege on Microsoft suits
          </em>
          <p style={{paddingTop: '10px', marginTop: '10px'}}>
            Today I'm enthralled by web
             development. Creating new experiences, implementing eye pleasing designs and making them come to life 
            with animation is what I do best.
          </p>
        </div>
        <div className="links">
          <a href="https://drive.google.com/file/d/18q_6YhiHzMoCPosp6Dhc3KCoAZ3Bp-Xl/view?usp=sharing">
          <button style={{borderRadius:'50px', textAlign:'center', height:'30px', width:'30px', 
              border:'1px solid blue', cursor:'pointer'}} type="submit">CV</button>
          </a>
          
          <a href="https://github.com/Striker1101"
            ><img
            alt='github'
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/eromosele-odemilin-2033aa242/">
            <img
            alt='linkedin'
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            />
          </a>
          <a href="http://"
            ><img
            alt='twitter'
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
          /></a>
        </div>
      </div>
    </header>
    </>
  )
}
