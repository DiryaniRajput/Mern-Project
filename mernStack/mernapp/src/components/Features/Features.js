import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Features.css'
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const links = [
  { name: 'Features', href: '/features' },
  { name: 'Premium', href: '/premium' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Sign in', href: '/signin' },
];

const buttonLink = {
  name: 'Get Started',
  href: '/get-started',
};
const logoUrl = 'https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg';



const Features = () => {

  const col = {
    color: 'green', // Text color
  };

  return (
    <div className='features-main-container'>
    
    <div className='features-header'>
    {/* <Navbar links={links} logo={logoUrl} /> */}
    <div className='features-header-center'>
      <h6>Features - </h6>
      <h1 className='features-h1'>Expect only the best meals from us.</h1>
      <p>At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur</p>
    </div>
    </div>

    <div className='features-second-div'>
    <h3 className='features-h2'> <span className='features-span-h1'>Electram constituto eam id. Eum illud option te, ea vim tractatos. </span>Mazim putant ex mea, et nullam suscipit eam, qui accommodare vituperatoribus at. </h3>
    </div>

    <div className='features-cards'>
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681bfb5b239d8246368808_icon-feature-01.svg"
        imgAlt="img"
        title="Pro ad constituto"
        description="Ne usu illud albucius abhor reant, partiendo scriptorem mel ne."
      />
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681c235fc94c975348ed36_icon-feature-02.svg"
        imgAlt="img"
        title="Eam commodo"
        description="Fuisset intellegat delicatissimi ex mea. Cu probo integre nec."
      />
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681c455b239d0903368830_icon-feature-03.svg"
        imgAlt="img"
        title="Reformidans eis"
        description="Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet."
      />
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681ce15fc94ce88a48f01b_icon-feature-04.svg"
        imgAlt="img"
        title="Senserit sadipscing ut"
        description="Wisi ornatus his at, viderer tractatos incorrupte has te."
      />
    </div>
    <div className='features-cards-2'>
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681d2223db9d753df98502_icon-feature-05.svg"
        imgAlt="img"
        title="Facer nostro"
        description="Ne usu illud albucius abhor reant, partiendo scriptorem mel ne."
      />
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681d4e659acacb7ec88a6f_icon-feature-06.svg"
        imgAlt="img"
        title="Illud albucius"
        description="Wisi ornatus his at, viderer tractatos incorrupte has te."
      />
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681d74884ddb2e21a382b4_icon-feature-07.svg"
        imgAlt="img"
        title="Vix quidam ex"
        description="Fuisset intellegat delicatissimi ex mea. Cu probo integre nec."
      />
      <Card
        imgSrc="https://uploads-ssl.webflow.com/5b681be5dc6fa89a65131967/5b681d985b239d0bba3689c0_icon-feature-08.svg"
        imgAlt="img"
        title="Wisi ornatus ut"
        description="Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet."
      />
    </div>

    <div className='features-img-para-div'>
      <div className='features-img-one'>
        <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b683ebb5fc94c7452490bd2_image-row-01.jpg' alt='img'></img>
      </div>
      <div className='features-para-one'>
        <h2 className='features-h2'><span className='features-span-h1'>Ex tempor euismod sapientem ouis lexor pro.</span> Ad vix dicta iudico singulis, ius ex mollis veritus</h2>
        <br/><br/>
        <p className='features-para-one-para'>Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</p>
      </div>
    </div>

    <div className='features-img-para-div'>
      <div className='features-para-one'>
        <h2 className='features-h2'><span className='features-span-h1'>Te elit antiopam vix zril recusabo ut pri.</span> Quas suscipit ad mea verear vivendo tincidunt.</h2>
        <br/><br/>
        <p className='features-para-one-para'>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
      </div>
      <div className='features-img-one'>
        <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6838dff109cf4aa0d96f64_image-row-02.jpg' alt='img'></img>
      </div>
    </div>

    <div className='features-img-div'>
      {/* <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6828cd23db9d2325f990e6_image-slider-02.jpg' alt='img' id='food-img'></img> */}
      <div className='features-img-div-div'>
        <h5>Go Premium -</h5>
        <br/>
        <h2 className='features-h2-2'><span className='features-span-h1-2'>Tation temporibus ei usu, vim an eirmod accus cu.</span> Tibique suscipiantur, per ex scripta fabellas petentium.</h2>
        <br/>
        <button className='features-btn-n'>GoPremium</button>
      </div>
    </div> 

    <div className='features-last-div'>
      <div className='features-last-div-left'>
        <h6 style={col}>Party on -</h6>
        <h2 className='features-h2'><span className='features-span-h1'>Quas suscipit ad mea..</span> Pri cu dico labores officiis odio principes complectitur ad sea.</h2>
      </div>
      <div className='features-last-div-right'>
        <button className='features-center-div-btn'>Get Started</button>
      </div>
    </div>

    
    </div>
  )
}

export default Features
