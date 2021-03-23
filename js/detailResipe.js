// 영양정보 알아보기 버튼 이벤트
  const OPEN_BTN = document.querySelector('.btn_nutri'),
        CLOSE_BTN = document.querySelector('.btn_close'),
        activeNutri = document.querySelector('.mini_nutri'),
        ACTIVE_CN = 'active';
  OPEN_BTN.addEventListener('click',function(){
    activeNutri.classList.add(ACTIVE_CN);
  });
  CLOSE_BTN.addEventListener('click',function(){
    activeNutri.classList.remove(ACTIVE_CN);
  });
// 레시피 관련 제품 마우스 오버 이벤트
  const showImage = document.querySelectorAll('.over_img'),
        ON_CN = 'on';
  for ( let i=0; i < showImage.length; i++) {
    let getParent = showImage[i].parentNode;
    getParent.addEventListener('mouseenter', function(e){
      let target = e.target.lastElementChild;
      target.classList.add(ON_CN);
    });
    getParent.addEventListener('mouseleave', function(e){
      let target = e.target.lastElementChild;
      target.classList.remove(ON_CN);
    });
  }
// 하단 슬라이더
function subSlider() {
  const slideContainer = document.querySelector('.sub_slider'),
        slider = slideContainer.querySelector('.slider'),
        slide = slider.querySelectorAll('.slides');
  const PREV_BTN = document.querySelector('.btn_subPrev'),
        NEXT_BTN = document.querySelector('.btn_subNext');
  const ANIMATE_CN = 'animated';
  let currentIndex = 0;
  for(let i=0; i<slide.length; i++) {
    slide[i].style.left = i*100+'%';
  }
  slider.style.left = '0px';
  slider.classList.add(ANIMATE_CN);
  PREV_BTN.style.opacity =0.5;
  // 수동 슬라이더
  function moveSlider(index) {
    slider.style.left = -index*100+'%';
    currentIndex = index;
      if( currentIndex === 1) {
        PREV_BTN.style.opacity = 1;
        NEXT_BTN.style.opacity = 0.5;
    } else {
      PREV_BTN.style.opacity = 0.5;
      NEXT_BTN.style.opacity = 1;
    }
    console.log(currentIndex, index);
  }
  // 버튼 이전으로
  PREV_BTN.addEventListener('click',function(){
    if(currentIndex === 0){
      return false
    }
    moveSlider(currentIndex-1);
  });
  // 버튼 다음으로
  NEXT_BTN.addEventListener('click',function(){
    if(currentIndex === 1){
      return false
    }
    moveSlider(currentIndex+1);
  });
}
subSlider();