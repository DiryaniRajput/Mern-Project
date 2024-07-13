import React from 'react'
import './Pricing.css'

const Pricing = () => {

  const col = {
    color: 'green',  
  };

  return (
    <div className='pricing-main-container'>
      <div className='pricing-header'>
        <div className='pricing-header-center'>
          <h6>Pricing - </h6>
          <h1 className='pricing-h1'>Expect only the best meals from us.</h1>
          <p>At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur</p>
        </div>
      </div>

      <div className='pricing-third-div'>
        <span className='pricing-text-span'>We offer multiple options.</span>
        <h2 id='pricing-third-div-h2'> Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea.</h2>
      </div>

      <div className="pricing-card-row">
        <div className="pricing-party-card">
          <div className="pricing-party-card-content">
            <h2 className="pricing-party-card-title">Small Party</h2>
            <div className="pricing-party-card-price">
              <span className="pricing-price-amount">150</span>
              <span className="pricing-price-currency">USD</span>
            </div>
            <p className="pricing-party-card-description">
              Et nominavi necessitatibus per. In eos libris inimicus, pri novum viris quaerendum at.
            </p>
            <hr className="pricing-divider" />
            <ul className="pricing-party-card-features">
              <li>0-50 Guests</li>
              <li>Non-alcoholic beverages</li>
              <li>Snacks</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <br /><br /><br /><br /><br /><br />
            </ul>
          </div>
          <div className="pricing-party-card-action">
            <button className="pricing-get-started-button">Get Started</button>
          </div>
        </div>

        <div className="pricing-party-card">
          <div className="pricing-party-card-content">
            <h2 className="pricing-party-card-title">Medium Party</h2>
            <div className="pricing-party-card-price">
              <span className="pricing-price-amount">350</span>
              <span className="pricing-price-currency">USD</span>
            </div>
            <p className="pricing-party-card-description">
              Cu sit case consequat complectitur. An putant dolorem ceteros quo. Modo omnesque constituto cu cum.
            </p>
            <hr className="pricing-divider" />
            <ul className="pricing-party-card-features">
              <li>50-100 Guests</li>
              <li>Non-alcoholic beverages</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <br /><br /><br />
            </ul>
          </div>
          <div className="pricing-party-card-action">
            <button className="pricing-get-started-button">Get Started</button>
          </div>
        </div>

        <div className="pricing-party-card">
          <div className="pricing-party-card-content">
            <h2 className="pricing-party-card-title">Large Party</h2>
            <div className="pricing-party-card-price">
              <span className="pricing-price-amount">750</span>
              <span className="pricing-price-currency">USD</span>
            </div>
            <p className="pricing-party-card-description">
              Civibus sententiae ea sea, te ius tritani fuisset. Ei quas putant vel. Ad odio scripta pri.
            </p>
            <hr className="pricing-divider" />
            <ul className="pricing-party-card-features">
              <li>100-200 Guests</li>
              <li>Non-alcoholic beverages</li>
              <li>Snacks</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li><br />
            </ul>
          </div>
          <div className="pricing-party-card-action">
            <button className="pricing-get-started-button">Get Started</button>
          </div>
        </div>
      </div>

      <div className='pricing-fifth-div'>
        <div className='pricing-card'>
          <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='pricing-round-img'></img>
          <h4 className='pricing-card-h1'>Pro ad constituto</h4>
          <p className='pricing-card-para'>Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.</p>
        </div>

        <div className='pricing-card'>
          <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='pricing-round-img'></img>
          <h4 className='pricing-card-h1'>Eam commodo</h4>
          <p className='pricing-card-para'> Ne his fabellas efficiendi. Eum te rebum accusamus, et omnium option.</p>
        </div>

        <div className='pricing-card'>
          <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='pricing-round-img'></img>
          <h4 className='pricing-card-h1'>Reormidans eis</h4>
          <p className='pricing-card-para'>Maluisset imperdiet ea vel. Justo doctus dissentiet in nec.</p>
        </div>

        <div className='pricing-card'>
          <img src='https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b6b4d581ea16a02747f850c_icon-fact.svg' className='pricing-round-img'></img>
          <h4 className='pricing-card-h1'>Fabellas efficiendi</h4>
          <p className='pricing-card-para'>Ut sea saperet expetendis, in virtute detraxit quo dipiscing efficiendi nam ea.</p>
        </div>
      </div>

      <div className='pricing-second-div'>
        <h3 className='pricing-h2'> <span className='pricing-span-h1'>Got a question about our pricing model? </span>Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an.</h3>
      </div>

      <div className='pricing-seventh-div'>
        <div className='pricing-left-one'>
          <h5 className='pricing-right-one-h1'>Usu tractatos accommodare ei pri alii invidunt eu?</h5>
          <p className='pricing-right-one-para'>Molestiae adolescens his cu, ius facete scripta ad, ea ferri fastidii iudicabit pri. Vim id soleat aliquip adipisci, at qui discere denique salutatus, no appareat abhorreant quo.</p>
        </div>
        <div className='pricing-right-one'>
          <h5 className='pricing-right-one-h1'>Mel nostro fabellas tractatos in?</h5>
          <p className='pricing-right-one-para'>Eam soluta noluisse lobortis no, eos in nibh patrioque. Decore populo detracto eu has. Viderer prodesset expetendis ei mel. Graeco invidunt vel et, vis postea feugiat splendide at, velit voluptaria has ex. Suas numquam te cum. Eam eius democritum adipiscing te, wisi facilisi et qui.</p>
        </div>
        <div className='pricing-left-one'>
          <h5 className='pricing-right-one-h1'>Mei ne eirmod omittam adipisci?</h5>
          <p className='pricing-right-one-para'>Id sed labores dolorum veritus, falli aeque id vis. Aliquip aperiri facilisis ei eam, an eos agam vivendo platonem. Quo volumus scaevola te. Mei invenire erroribus ne, at sit diam docendi. Vix cu aeque molestiae, sed no persius nusquam postulant.</p>
        </div>
        <div className='pricing-right-one'>
          <h5 className='pricing-right-one-h1'>No facilis molestie mei. Alia malis dolor nam ea?</h5>
          <p className='pricing-right-one-para'>Viderer molestiae vim id, equidem oportere consulatu eu nam. Et solum verterem eleifend nam. Doming latine scriptorem ex nec, alii equidem vis eu.</p>
        </div>

        <div className='pricing-left-one'>
          <h5 className='pricing-right-one-h1'>Usu tractatos accommodare ei pri alii invidunt eu?</h5>
          <p className='pricing-right-one-para'>Molestiae adolescens his cu, ius facete scripta ad, ea ferri fastidii iudicabit pri. Vim id soleat aliquip adipisci, at qui discere denique salutatus, no appareat abhorreant quo.</p>
        </div>
        <div className='pricing-right-one'>
          <h5 className='pricing-right-one-h1'>Mel nostro fabellas tractatos in?</h5>
          <p className='pricing-right-one-para'>Eam soluta noluisse lobortis no, eos in nibh patrioque. Decore populo detracto eu has. Viderer prodesset expetendis ei mel. Graeco invidunt vel et, vis postea feugiat splendide at, velit voluptaria has ex. Suas numquam te cum. Eam eius democritum adipiscing te, wisi facilisi et qui.</p>
        </div>

        <div className='pricing-left-one'>
          <h5 className='pricing-right-one-h1'>Usu tractatos accommodare ei pri alii invidunt eu?</h5>
          <p className='pricing-right-one-para'>Molestiae adolescens his cu, ius facete scripta ad, ea ferri fastidii iudicabit pri. Vim id soleat aliquip adipisci, at qui discere denique salutatus, no appareat abhorreant quo.</p>
        </div>
        <div className='pricing-right-one'>
          <h5 className='pricing-right-one-h1'>Mel nostro fabellas tractatos in?</h5>
          <p className='pricing-right-one-para'>Eam soluta noluisse lobortis no, eos in nibh patrioque. Decore populo detracto eu has. Viderer prodesset expetendis ei mel. Graeco invidunt vel et, vis postea feugiat splendide at, velit voluptaria has ex. Suas numquam te cum. Eam eius democritum adipiscing te, wisi facilisi et qui.</p>
        </div>
      </div>

      <div className='pricing-last-div'>
        <div className='pricing-last-div-left'>
          <h6 style={col}>Party on -</h6>
          <h2 className='pricing-h2'><span className='pricing-span-h1'>Quas suscipit ad mea..</span>  Pri cu dico labores officiis odio principes complectitur ad sea.</h2>
        </div>
        <div className='pricing-last-div-right'>
          <button className='pricing-center-div-btn'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
