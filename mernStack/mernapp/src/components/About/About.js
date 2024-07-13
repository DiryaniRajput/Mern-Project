import React from 'react'
import './About.css'
import Card from '../Card/Card';





const About = () => {
  const col = {
    color: 'green', // Text color
  };

  return (
    <div className='about-main-container'>

      <div className='about-header'>

        <div className='about-header-center'>
          <h6>About - </h6>
          <h1 className='about-h1'> Changing the catering game.</h1>
          <p> At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur.</p>
        </div>
      </div>

      <div className='about-image-div'>
      </div>

      <div className='about-center-div'>
        <h3 className='about-h2'> <span className='about-span-h1'>We combine the benefits of the best local farms with advances made possible by technology to deliver you the best catering experience possible. </span> Food surrounds us, but we don’t always think about where it comes from or how it got to us. The way we eat and our experiences with food have huge impact on everything from the environment to our health.</h3>
      </div>

      <div className='about-left-div'>
        <h3 className='about-h2'> <span className='about-span-h1'>Ad malorum nominati vituperata vix. </span> Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an.</h3>
      </div>

      <div className='about-packs'>
        <div className='about-pack-one'>
          <h4>01</h4>
          <h2 className='about-heading'>Stay curious</h2>
          <p className='about-p-p'>Esse audiam assentior pri in, ius probatus singulis ne. Exerci fastidii duo ex, ex quo unum senserit.</p>
        </div>
        <div className='about-pack-one'><h4>02</h4>
          <h2 className='about-heading'>Be respectful</h2>
          <p className='about-p-p'>Esse audiam assentior pri in, ius probatus singulis ne. Exerci fastidii duo ex, ex quo unum senserit.</p></div>
        <div className='about-pack-one'><h4>03</h4>
          <h2 className='about-heading'> Do good work</h2>
          <p className='about-p-p'> Esse audiam assentior pri in, ius probatus singulis ne. Exerci fastidii duo ex, ex quo unum senserit.</p></div>
      </div>

      <div className='about-left-div'>
        <h3 className='about-h2'> <span className='about-span-h1'>Meet the awesome team behind Spoon.  </span>  We’re bridging the gap between the world’s oldest and largest industry and a future where technology can be used to solve our hardest problems.</h3>
      </div>

      <div className='about-card-div'>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bb4809339560ff3cb39e_image-avatar-01.jpg'></img>
          <h5>Alex Rodriguez</h5>
          <p>CEO, Co founder</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bc0bb2819870ed8ca13b_image-avatar-07.jpg'></img>
          <h5>Eleonore Rundottir</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bc2e88664e26cfbebb95_image-avatar-09.jpg'></img>
          <h5>Gerald Mueller</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bc1b9f758e4f5121484e_image-avatar-08.jpg'></img>
          <h5>Kolby Huel</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bbe63034e3795ac009ba_image-avatar-06.jpg'></img>
          <h5>Laney Corker</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bb919f758e1de62144cc_image-avatar-03.jpg'></img>
          <h5>Layla Colliera</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bf7686ea531f9fbec814_image-avatar-011.jpg'></img>
          <h5>Marcus Sparks</h5>
          <p>CFO, Co-founder</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bbb98f97f26168e64035_image-avatar-04.jpg'></img>
          <h5>Marlon Schumm</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bb713034e37524c008d9_image-avatar-02.jpg'></img>
          <h5>Myles Jordan</h5>
          <p>Planner</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bb4809339560ff3cb39e_image-avatar-01.jpg'></img>
          <h5>Raven Jerde</h5>
          <p>CEO, Co founder</p>
        </div>
        <div className='about-img-card'>
          <img src='https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b71bbcd9c22cb1a7c087200_image-avatar-05.jpg'></img>
          <h5>Roma Bins</h5>
          <p>CEO, Co founder</p>
        </div>
      </div>

      <div className='about-last-div'>
        <div className='about-last-div-left'>
          <h6 style={col}>Party on -</h6>
          <h2 className='about-h2'><span className='about-span-h1'>Quas suscipit ad mea..</span>  Pri cu dico labores officiis odio principes complectitur ad sea.</h2>
        </div>
        <div className='about-last-div-right'>
          <button className='about-center-div-btn'>Get Started</button>
        </div>
      </div>


    </div>
  )
}

export default About
