import NavBar from "./component/NavBar";
import Header from "./img/header.png"
import template1 from "./img/template1.svg"
import template2 from "./img/template2.svg"
import template3 from "./img/template3.svg"
import template4 from "./img/template4.svg"
import template5 from "./img/template5.svg"
import template6 from "./img/template6.svg"
import template7 from "./img/template7.svg"
import template8 from "./img/template8.svg"
import template9 from "./img/template9.svg"
import template10 from "./img/template10.svg"
import template11 from "./img/template11.svg"
import template12 from "./img/template12.svg"
import template13 from "./img/template13.svg"
import template14 from "./img/template14.svg"
import template15 from "./img/template15.svg"
import template16 from "./img/template16.svg"
import template17 from "./img/template17.svg"
import template18 from "./img/template18.svg"
import template19 from "./img/template19.svg"
import template20 from "./img/template20.svg"
import template21 from "./img/template21.svg"
import laptop from "./img/laptop.png"
import web from "./img/web.svg"
import uiux from './img/ui:ux.svg'
import seo from "./img/seo.svg"
import insta1 from './img/insta1.svg'
import insta2 from './img/insta2.svg'
import insta3 from './img/insta3.png'
import insta4 from './img/insta4.svg'
import insta5 from './img/insta5.svg'
import btn1 from "./img/btn1.svg"
import btn2 from "./img/btn2.svg"
import icon1 from "./img/icon1.svg"
import icon2 from "./img/icon2.svg"
import icon3 from "./img/icon3.svg"
import icon4 from "./img/icon4.svg"
import Frame from "./img/end.svg"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="header">
        <img className="header_img" src={Header} alt="" />
        <div className="header_txt">
          <div className="header_subtitle">
          WE ARE Atelier Creative Agency
          </div>
          <p className="header_title">
          Unique UI Kit Template for Creative Agencies
          </p>
          <button className="header_btn">VIEW LAYOUTS</button>
        </div>
      </div>

      <div className="template">
        <h5 className="template_subtitle">Our Core Layouts</h5>
        <h3 className="template_title">Template Pages</h3>
      </div>

      <div className="template_pages">
        <div className="template_page1">
          <img src={template1} alt="" />
          <img src={template2} alt="" />
          <img src={template3} alt="" />
        </div>
        <div className="template_page2">
          <img src={template4} alt="" />
          <img src={template5} alt="" />
          <img src={template6} alt="" />
        </div>
        <div className="template_page3">
          <img src={template7} alt="" />
          <img src={template8} alt="" />
          <img src={template9} alt="" />
        </div>
        <div className="template_page4">
          <img src={template10} alt="" />
          <img src={template11} alt="" />
          <img src={template12} alt="" />
        </div>
        <div className="template_page5">
        <img src={template13} alt="" />
        <img src={template14} alt="" />
        <img src={template15} alt="" />
        </div>
        <div className="template_page6">
        <img src={template16} alt="" />
        <img src={template17} alt="" />
        <img src={template18} alt="" />
        </div>
        <div className="template_page7">
        <img src={template19} alt="" />
        <img src={template20} alt="" />
        <img src={template21} alt="" />
          
        </div>

        <img className="laptop" src={laptop} alt="" />
        </div>


        <div className="section">
          <h6 className="section_subtitle">Our Core Features</h6>
          <h3 className="section_title">Our Services</h3>

          <div className="squares">
            <div className="square1">
              <img src={web} alt="" />
              <h3 className="square_title">Web Design</h3>
              <p className="square_txt1">Suspendisse varius enim in</p>
              <p className="square_txt2">cursus id rutrum imperdiet. eros elementum
              <br />
              tristique.</p>
              </div>

              <div className="square2">
              <img src={uiux} alt="" />
              <h3 className="square_title">UI/UX Design</h3>
              <p className="square_txt1">Suspendisse varius enim in</p>
              <p className="square_txt2">cursus id rutrum imperdiet. eros elementum
              <br />
              tristique.</p>
            </div>

            <div className="square3">
              <img src={seo} alt="" />
              <h3 className="square_title">SEO & Marketing</h3>
              <p className="square_txt1">Suspendisse varius enim in</p>
              <p className="square_txt2">cursus id rutrum imperdiet. eros elementum
              <br />
              tristique.</p>
            </div>
          </div>

          <div className="bordder">
          <div className="border"></div>
          <div className="section2">
            <img src={insta1} alt="" />
            <img src={insta2} alt="" />
            <img src={insta3} alt="" />
            <img src={insta4} alt="" />
            <img src={insta5} alt="" />
          </div>
          </div>


          <div className="section3">
          <h4 className="section3_title">
          Subscribe to Atelier Newsletter
            </h4>  
            <p className="section3_txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="section3_buttons">

              <img className="section3_btn1" src={btn1} alt="" />
              <img className="section3_btn2" src={btn2} alt="" />
            </div>
            <div className="icons">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={icon4} alt="" />
            </div>
          <div className="border"></div>
          <img src={Frame} alt="" />

          </div>
          </div>

      </div>


  );
}

export default App;
