import React,{useEffect} from "react";
// import "../Assets/css/Testimonial.css";
import style1 from  "../Assets/css/Testimonial.module.css";

function Testimonial() {
  useEffect(() => {
    
    // setTimeout(() => {
      
    

      var testim = document.getElementById(style1.testim),
      testimDots = Array.prototype.slice.call(
        document.getElementById(style1.testim_dots).children
      ),
      testimContent = Array.prototype.slice.call(
        document.getElementById(style1.testim_content).children
      ),
      testimLeftArrow = document.getElementById(style1.left_arrow),
      testimRightArrow = document.getElementById(style1.right_arrow),
      testimSpeed = 4500,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
    window.onload = function () {
      // Testim Script
      function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
          testimContent[k].classList.remove(style1.active);
          testimContent[k].classList.remove(style1.inactive);
          testimDots[k].classList.remove(style1.active);
        }
  
        if (slide < 0) {
          slide = currentSlide = testimContent.length - 1;
        }
  
        if (slide > testimContent.length - 1) {
          slide = currentSlide = 0;
        }
  
        if (currentActive != currentSlide) {
          testimContent[currentActive].classList.add(style1.inactive);
        }
        testimContent[slide].classList.add(style1.active);
        testimDots[slide].classList.add(style1.active);
  
        currentActive = currentSlide;
  
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
          playSlide((currentSlide += 1));
        }, testimSpeed);
      }
  
      testimLeftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
      });
  
      testimRightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
      });
  
      for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
          playSlide((currentSlide = testimDots.indexOf(this)));
        });
      }
  
      playSlide(currentSlide);
  
      // keyboard shortcuts
      document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
          case 37:
            testimLeftArrow.click();
            break;
  
          case 39:
            testimRightArrow.click();
            break;
  
          case 39:
            testimRightArrow.click();
            break;
  
          default:
            break;
        }
      });
  
      testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
      });
  
      testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;
  
        touchPosDiff = touchStartPos - touchEndPos;
  
        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);
  
        if (touchPosDiff > 0 + ignoreTouch) {
          testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
          testimRightArrow.click();
        } else {
          return;
        }
      });
      
    };
    
    // }, 5000);
  }, []);

  return (
    <>
      <section id={`${style1.testim}`} className={`${style1.testim}`}>
        <div className={`${style1.wrap}`}>
          <span id={style1.right_arrow} className={style1["arrow"]+" "+ style1["right"]+" "+ "fa"+" " +"fa-chevron-right"}></span>
          <span id={`${style1.left_arrow}`} className={style1["arrow"]+" "+ style1["left"]+" "+ "fa"+" " +"fa-chevron-left"}></span>
          <ul id={`${style1.testim_dots}`} className={style1.dots}>
            <li className={`${style1.dot} ${style1.active}`}></li>
            <li className={`${style1.dot}`}></li>
            <li className={`${style1.dot}`}></li>
            <li className={`${style1.dot}`}></li>
          </ul>
          <div id={`${style1.testim_content}`} className={`${style1.cont}`}>
            <div className={`${style1.active}`}>
              <div className={`${style1.img}`}>
                <img
                  src="http://im.rediff.com/movies/2014/jan/10hrithik-roshan15.jpg"
                  alt=""
                />
              </div>
              <h2>Lorem P. Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            <div>
              <div className={`${style1.img}`}>
                <img
                  src="https://images.news18.com/ibnlive/uploads/2022/01/267153613_635270220945415_6635835364397949857_n-1.jpg"
                  alt=""
                />
              </div>
              <h2>Mr. Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            <div>
              <div className={`${style1.img}`}>
                <img
                  src="https://www.google.com/search?q=hrithik+roshan&client=firefox-b-d&sxsrf=ALiCzsbT5u0wNQZXYCvUPU9HoIslbXglWg:1665121470243&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjcmffttM36AhXFpekKHay-DX0Q_AUoAnoECAEQBA&biw=1536&bih=731&dpr=1.25#imgrc=dNwxIQk7QrgPfM"
                  alt=""
                />
              </div>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            <div>
              <div className={`${style1.img}`}>
                <img
                  src="https://www.google.com/search?q=hrithik+roshan&client=firefox-b-d&sxsrf=ALiCzsbT5u0wNQZXYCvUPU9HoIslbXglWg:1665121470243&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjcmffttM36AhXFpekKHay-DX0Q_AUoAnoECAEQBA&biw=1536&bih=731&dpr=1.25#imgrc=dNwxIQk7QrgPfM"
                  alt=""
                />
              </div>
              <h2>Ms. Lorem R. Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

     
  
}

export default Testimonial;
