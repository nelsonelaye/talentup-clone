import React, {useEffect, useState} from 'react';
import './App.css';

import logo from './img/logo.svg'
import white from "./img/white.svg"

function App () {

  const [count, setCount] = useState(0)
  const bg = [
    {
      color: "#123E7D",
      text: "Land your dream job, home and abroad"
    },
    {
      color:  "#fa401f",
      text: "The best job marketplace on the internet"
    },
    {
      color:"#00b9e7",
      text: "Find high-paying companies with loads of benefits "
    }, 
    {
      color:"#20bd73",
      text: "Find a promising tech start-up"
    }
  ]
  // const bgColors = ["#123E7D", "#fa401f",]
  // const headlines = [
  //   "Land your dream job, home and abroad",
  //   "Live your dream and achieve BIG",
  //   "Best job marketplace on the internet"
  // ]

  const addCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  const removeCount = () => {
    if(count === 0) {
      setCount(count)
    } else {
      setCount(count-1)
    }
    console.log(count)
  }

  // useEffect(()=> {
  //   setInterval(() => {
  //     setCount((el) =>  el + 1 )
  //   }, 3000)
  // }, [])

  // setInterval(addCount, 2000)

  return (
    <div className='container' >

      <header>
        <span className="logo"><img alt="site logo" src={logo}/></span>
        <nav>
          <span>Find Job</span>
          <span>Coaching</span>
          <span>Sign in</span>
          <span><button className="transBtn">For Employers</button></span>
        </nav>
      </header>

      <div className="heroSection" style={{ backgroundColor:bg[count % bg.length].color}}>
        <div className="background" >
          <h1> {bg[count % bg.length].text} </h1>
          <p>We connect you with top companies hiring talented professionals in the <span className="orangeText">US</span> and <span className="orangeText">Africa</span></p>
          <div className="search-box">
            <div className="search-icon" ><img alt="search icon" src={require('./img/search-icon.png')}/></div>
            <input type="text" placeholder='Job Title or Keyword'/>
            <button className="search-btn">Search</button>
          </div>
          <div>
            <div className="left-btn" onClick={removeCount}><img alt="left arrow" src={require("./img/left.png")}/></div>
            <div className="right-btn" onClick={addCount}><img alt="left arrow" src={require("./img/right.png")}/></div>
          </div>
        </div>
      </div>

      <div className="jobSection">
        {/* <div className="subSection"> */}

          <div className="recentJobs subSection">
            <h2>Recently posted jobs</h2>
            <div className="jobs">

              <div className="card">
                <span className="companyLogo"><img  alt="company logo" src={require("./img/kobo.png")}/></span>
                <div className="jobInfo">
                  <span className="jobTitle">Backend Engineer</span>
                  <span className="companyName">Kobo 360 (Kobo Logistics...</span>
                  <span className="state">Lagos</span>
                  <div className="orange">
                    <span className="orangeText time ">5 months ago</span>
                    <span className="orangeText apply">Apply</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <span className="companyLogo"><img  alt="company logo" src={require("./img/hmo.jpg")}/></span>
                <div className="jobInfo">
                  <span className="jobTitle">Influencer &amp; Community...</span>
                  <span className="companyName">Reliance HMO Limited</span>
                  <span className="state">Lagos</span>
                  <div className="orange">
                    <span className="orangeText time ">5 months ago</span>
                    <span className="orangeText apply">Apply</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="exploreJobs recentJobs subSection">
            <h2>Explore US-based jobs</h2>
            <div className="jobs">
               <div className="card">
                <span className="companyLogo"><img  alt="company logo" src={require("./img/tuan.jpg")}/></span>
                <div className="jobInfo">
                  <span className="jobTitle">IOS Mobile Developer</span>
                  <span className="companyName">TUAN Nigeria Inter-Global...</span>
                  <span className="state">Lagos</span>
                  <div className="orange">
                    <span className="orangeText time ">8 days ago</span>
                    <span className="orangeText apply">Apply</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="blueBtn">EXPLORE ALL JOBS</button>
          </div>
        {/* </div> */}
      </div>

      <div className="brands subSection">
        <h2>Companies recruiting from our Talent List</h2>
        <div className="brandLogos">
          <div className="brandLogoImages"><img alt="reliance logo" src={require("./img/reliance.png")}/></div>
          <div className="brandLogoImages"><img alt="fair money logo" src={require("./img/fair.png")}/></div>
          <div className="brandLogoImages"><img alt="elalan logo" src={require("./img/elalan.png")}/></div>
          <div className="brandLogoImages"><img alt="chris-ejik logo" src={require("./img/chris.png")}/></div>
          <div className="brandLogoImages"><img alt="Cwoermann logo" src={require("./img/download.png")}/></div>
          <div className="brandLogoImages"><img alt="SBC logo" src={require("./img/sbc.png")}/></div>
          <div className="brandLogoImages"><img alt="GB food logo" src={require("./img/gb.png")}/></div>
          <div className="brandLogoImages"><img alt="zercom logo" src={require("./img/zercom.png")}/></div>

        </div>
      </div>

      <div className="features subSection ">
        <h2>Let’s help you stand out</h2>

        <div className="featureList">
          <div className="featureText">
            <h2>Join our Talent List</h2>
            <span className="blueText">Create your professional profile by uploading your CV and filling a profile form</span> <br/>
            <span className="orangeText ">JOIN NOW</span>
          </div>
          <div className="featureImage"><img alt="talent list" src={require("./img/talentPool.png")}/></div>
        </div>
                  
        <div className="featureList ">
        <div className="featureImage"><img alt="US map" src={require("./img/us.png")}/></div>
          <div className="featureText">
            <h2>Get US-based remote jobs</h2>
            <span className="blueText">Finding your dream remote job just got easier. We curate and deliver top remote jobs in the US straight to your inbox</span> <br/>
            <span className="orangeText ">Find jobs</span>
          </div>
        </div>

        <div className="featureList ">
          <div className="featureText">
            <h2>Showcase your talent by taking our HR-endorsed assessment</h2>
            <span className="blueText">Pass the online assessment once and for all</span> <br/>
            <span className="orangeText ">LEARN MORE</span>
          </div>
          <div className="featureImage"><img alt="assessment" src={require("./img/assessment.png")}/></div>
        </div>

        <div className="featureList ">
        <div className="featureImage"><img alt="talent list" src={require("./img/talentPool.png")}/></div>
          <div className="featureText">
            <h2>Career coaching</h2>
            <span className="blueText">We offer periodic FREE career coaching to mid-senior level managers. We help you review your career path, optimize your CV to land bigger roles, prep you for interviews and negotiations</span> <br/>
            <span className="orangeText ">LEARN MORE</span>
          </div>
        </div>
      </div>

      <div className="blueBoxContainer">
      <div className="blueBox"> 
        <div className="employees"><img alt="remote employees" src={require("./img/employee.png")} /></div>
        <div>
          <h2>Land a dream US remote job</h2>
          <span>Employers are always checking our pool of talent for their next hire</span>
          <div className="btns">
            <button className="orangeBtn">Join Now</button>
            <button className="transBtn">Search jobs</button>

          </div>
        </div>
      </div>
      </div>

      <footer>

        <div className="footerLinks">
          <div className="footerLogo"><img alt="logo" src={white}/></div>
          <div className="socials">
            <div className="socialLogo"><img alt="instagram logo" src={require("./img/instagram.png")}  /></div>
            <div className="socialLogo"><img alt="Facebook logo" src={require("./img/facebook.png")}  /></div>
            <div  className="socialLogo"><img alt="Twitter logo" src={require("./img/twitter.png")}  /></div>
            <div className="socialLogo"><img alt="linkedIn logo" src={require("./img/linkedin.png")}  /></div>
          </div>
          <div>&copy; copyright 2020</div>
        </div>

        <div className="footerLinks">
          <span><h3>Solutions</h3></span>
          <span>Join Talent Pool</span>
          <span>Find Jobs</span>
          <span>Talent Pool</span>
        </div>

        <div className="footerLinks">
          <span><h3>Company</h3></span>
          <span>About</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>

        <div className="footerLinks">
          <span><h3>Resources</h3></span>
          <span>Blog</span>
        </div>

      </footer>
      
    </div>
  );
};

export default App;
