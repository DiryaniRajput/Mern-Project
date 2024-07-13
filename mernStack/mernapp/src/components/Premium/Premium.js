import React from 'react'
import './Premium.css'
 

 

const Premium = () => {
  const col = {
    color: 'green',  
      };


  return (
    <div className='premium-main-container'>

      <div className='premium-header'>
        
        <div className='premium-header-center'>
          <h6>Premium - </h6>
          <h1 className='premium-h1'>Personalized and total service.</h1>
          <p>At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur.</p>
        </div>
      </div>

      <div className='premium-second-div'>
    <h3 className='premium-h2'> <span className='premium-span-h1'>Here's a different option for you. </span>Eos in maluisset mediocritatem. Cu qui admodum inimicus, te mei debet qualisque. </h3>
    </div>

    
    <div className='premium-img-div'>
        {/* <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6828cd23db9d2325f990e6_image-slider-02.jpg' alt='img' id='premium-food-img'></img> */}
      </div>

      <div className='premium-small-div'>
        <div className='premium-logo-div'>
          <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6afec21ea16a4da87f29bd_icon-feature-02.svg'></img>
        </div>
        <div className='premium-type-div'>
          <h5>Pro ad constituto el</h5>
          <p className='premium-type-div-para'>Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei.</p>
        </div>
      </div>

      <div className='premium-center-div'>
        <p className='premium-paragraph'>WHAT THE PEOPLE SAY</p>
        <h3 className='premium-h3' >“Great customer service, kuddos for doing things the right way rather than the easy way. I am still getting compliments about the food served at my wedding.”</h3>
        <div className='premium-author-div'> <img id='premium-logo-author' src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b35083d9b8429b96e2c98_image-avatar.jpg' ></img> 
        <h6>Paul Morgan</h6></div>
      </div>

      <div className='premium-img-para-div'>

<div className='premium-para-one'>
  <h2 className='premium-h2'><span className='premium-span-h1'>Te elit antiopam vix zril recusabo ut pri.</span> Quas suscipit ad mea verear vivendo tincidunt.</h2>
  <br></br><br></br>
  <p className='premium-para-one-para'>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
</div>

<div className='premium-img-one'>
  <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6838dff109cf4aa0d96f64_image-row-02.jpg'></img>
</div>

</div>

<div className='premium-img-para-div'>

<div className='premium-img-one'>
    <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b683ebb5fc94c7452490bd2_image-row-01.jpg'></img>
</div>
<div className='premium-para-one'>
  <h2 className='premium-h2'><span className='premium-span-h1'>Ex tempor euismod sapientem ouis lexor pro.</span> Ad vix dicta iudico singulis, ius ex mollis veritus</h2>
  <br></br><br></br>
  <p className='premium-para-one-para'>Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</p>

</div>

</div>

<div className='premium-last-div'>

      <div className='premium-last-div-left'>
      <h6 style={col}>Party on -</h6>
      <h2 className='premium-h2'><span className='premium-span-h1'>Quas suscipit ad mea..</span>  Pri cu dico labores officiis odio principes complectitur ad sea.</h2>
      </div>

      <div className='premium-last-div-right'>
        <button className='premium-center-div-btn'>Get Started</button>
      </div>
      
      </div>

      

    </div>
  )
}

export default Premium
