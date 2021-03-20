// 메인 비주얼 슬라이드 이벤트
function mainVisualSlideShow () {
  const sliderContainer = document.querySelector('.main_visual'),
        slider = sliderContainer.querySelector('.slider'),
        slide = slider.querySelectorAll('.slides');
  const slideCount = slide.length;
  const PREV_BTN = sliderContainer.querySelector('.btn_slidePrev'),
        NEXT_BTN = sliderContainer.querySelector('.btn_slideNext'),
        HANDLE_BTN = sliderContainer.querySelector('.btn_slideAuto');
  let currentIndex = 0;
  const ANIMATE_CN = 'animated',
        HANDLEBUTTON_CN = 'active';
  // 슬라이드 아이템 생성
  function cloneSlide() {
    let firstSlide = slider.firstElementChild.cloneNode(true);
    slider.appendChild(firstSlide);
    for(let i = slideCount-1; i >= 0; i--) {
      let lastSlide = slide[i].cloneNode(true);
      slider.prepend(lastSlide);
    }
  };
  // 슬라이드 아이템 왼쪽 정렬
  function alignLeftSlide() {
    cloneSlide();
    let newSlide = slider.querySelectorAll('.slides'),
        newCount = newSlide.length;
    for(let i = 0; i < newCount; i++) {
      newSlide[i].style.left = i * 100 + '%';
    }
    // 슬라이드 아이템 위치값 초기화
    slider.style.transform = 'translateX(' + slideCount * -100 + '%)';
    slider.style.left = currentIndex;
    slider.classList.add(ANIMATE_CN);
  };
  alignLeftSlide();
  // 슬라이드 번호 정보
  function slideNumber() {
    let numbering = sliderContainer.querySelector('.count');
    if( currentIndex >= 0 ) {
      numbering.innerText = currentIndex+1;
      if(currentIndex === slideCount) {
        numbering.innerText = 1;
      }
    } else {
      numbering.innerText = currentIndex+slideCount+1;
    }
  };
  // 수동 슬라이드
  function moveSlider(index) {
    slider.style.left = -100*index+'%';
    currentIndex = index;
    if(currentIndex === slideCount || currentIndex === -slideCount){
      setTimeout(function(){
        slider.classList.remove(ANIMATE_CN);
        slider.style.left = '0px';
        currentIndex = 0;
      }, 1000);
    }
    slider.classList.add(ANIMATE_CN);
    slideNumber();
  };
  // 이전으로
  PREV_BTN.addEventListener('click', function(){
    clearInterval(setTimer);
    HANDLE_BTN.innerHTML = '<span>시작</span>';
    HANDLE_BTN.classList.add(HANDLEBUTTON_CN);
    moveSlider( currentIndex-1 )
  });
  // 다음으로
  NEXT_BTN.addEventListener('click', function(){
    clearInterval(setTimer);
    HANDLE_BTN.innerHTML = '<span>시작</span>';
    HANDLE_BTN.classList.add(HANDLEBUTTON_CN);
    moveSlider( currentIndex+1 )
  });
  // 자동 슬라이드
  function autoMoveSlider(index) {
    index = currentIndex+1;
    slider.style.left = -100*index+'%';
    currentIndex ++;
    if(currentIndex === slideCount || currentIndex === -slideCount){
      setTimeout(function(){
        slider.classList.remove(ANIMATE_CN);
        slider.style.left = '0px';
        currentIndex = 0;
      }, 1000);
    }
    slider.classList.add(ANIMATE_CN);
    slideNumber();
  };
  setTimer = setInterval(autoMoveSlider, 5000);
  // 정지 & 다시 시작
  function autoButton() {
    const hasClass = HANDLE_BTN.classList.contains(HANDLEBUTTON_CN);
    if(!hasClass) {
      clearInterval(setTimer);
      HANDLE_BTN.innerHTML = '<span>시작</span>';
      HANDLE_BTN.classList.add(HANDLEBUTTON_CN);
    } else {
      HANDLE_BTN.innerHTML = '<span>정지</span>';
      HANDLE_BTN.classList.remove(HANDLEBUTTON_CN);
      setTimer = setInterval(autoMoveSlider, 5000);
    }
  };
  HANDLE_BTN.addEventListener('click',autoButton);
}
mainVisualSlideShow();

// section 01 오른쪽 박스 슬라이드 이벤트
function kidsSlideShow() {
  const sliderContainer = document.querySelector('.kids'),
        slide = sliderContainer.querySelectorAll('.slides');
  const slideCount = slide.length;
  const SHOW_CN = 'showing';
  const PREV_BTN = sliderContainer.querySelector('.btn_slidePrev'),
        NEXT_BTN = sliderContainer.querySelector('.btn_slideNext');
  let currentIndex = 0;
  // 슬라이드 번호 정보
  function updateNumder() {
    let numbering = sliderContainer.querySelector('.count');
    numbering.innerText = currentIndex;
  }
  // 자동 슬라이드
  function autoMiniSlide() {
    for(let i = 0; i <slideCount; i++) {
      slide[i].classList.remove(SHOW_CN);
    }
    currentIndex++;
    if(currentIndex > slideCount) {
        currentIndex = 1;
      }
      slide[currentIndex-1].classList.add(SHOW_CN);
      setTimeout(autoMiniSlide,4500);
      updateNumder();
  }
  autoMiniSlide();
  // 수동 슬라이드
  function btnMiniSlide(index) {
    currentIndex = index;
    if( index > slideCount ) {
      currentIndex = 1;
    }
    if( index < 1 ) {
      currentIndex = slideCount;
    }
    for( let i = 0; i < slideCount; i++) {
      slide[i].classList.remove(SHOW_CN);
    }
    slide[currentIndex-1].classList.add(SHOW_CN);
    updateNumder();
  }
  // 이전으로
  PREV_BTN.addEventListener('click',function(){
    btnMiniSlide(currentIndex-1);
  });
  // 다음으로
  NEXT_BTN.addEventListener('click',function(){
    btnMiniSlide(currentIndex+1);
  });
}
kidsSlideShow();

function tipsSlideShow() {
  const sliderContainer = document.querySelector('.tips'),
        slider = sliderContainer.querySelector('.slider'),
        slide = sliderContainer.querySelectorAll('.slides'),
        slideCount = slide.length;
  const PREV_BTN = sliderContainer.querySelector('.btn_slidePrev'),
        NEXT_BTN = sliderContainer.querySelector('.btn_slideNext');
  const ANIMATE_CN = 'animatedLittleFast';
  let containerWidth = sliderContainer.offsetWidth,
      slideWidth = slide[0].offsetWidth,
      margin = containerWidth - ((slideWidth*3)+((containerWidth*1.5/100)*4)),
      totalWidth = slideWidth + margin;
  let currentIndex = 0;
  // 슬라이드 복사
  function cloneSlide() {
    // 앞으로 3개 복사
    for(let i=0; i<slideCount; i++) {
      let appendSlide = slide[i].cloneNode(true);
      slider.appendChild(appendSlide);
    }
    // 뒤로 3개 복사
    for(let i=slideCount-1; i>=0; i--) {
      let prependSlide = slide[i].cloneNode(true);
      slider.prepend(prependSlide);
    }
  }
  cloneSlide();
  // 슬라이드 왼쪽 정렬
  function floatLeft() {
    let newSlide = slider.querySelectorAll('.slides'),
        newCount = newSlide.length;
    for( let i = 0; i < newCount; i++) {
      newSlide[i].style.left = i * totalWidth + 'px';
    }
    slider.style.transform = 'translateX('+totalWidth*-slideCount+'px)';
    slider.style.left = '0px';
    slider.classList.add(ANIMATE_CN);
  } 
  floatLeft();
  // min - width 1024px 슬라이드 사이즈 조절
  window.addEventListener('resize', function () {
    const mql = window.matchMedia('(min-width:1024px)');
    if(mql.matches === true) {
      window.location.reload();
      floatLeft();
    } else {
      floatLeft();
    }
  });
  // 수동 슬라이드
  function tipsSlide(index) {
    slider.style.left = -index * totalWidth + 'px';
    currentIndex = index;
    if(currentIndex === slideCount || currentIndex === -slideCount) {
      setTimeout(function(){
        slider.classList.remove(ANIMATE_CN);
        slider.style.left = '0px';
        currentIndex = 0;
      },700);
    }
    slider.classList.add(ANIMATE_CN);
  }
  // 이전으로
  PREV_BTN.addEventListener('click', function () {
  tipsSlide(currentIndex-1);
  });
  // 다음으로
  NEXT_BTN.addEventListener('click', function () {
    tipsSlide(currentIndex+1);
  });
  // 자동 슬라이드
  function tipsAutoSlide(index) {
    index = currentIndex+1;
    slider.style.left = -index*totalWidth+'px';
    currentIndex++;
    if(currentIndex === slideCount) {
      setTimeout(function(){
        slider.classList.remove(ANIMATE_CN);
        slider.style.left = '0px';
        currentIndex = 0;
      },700);
    }
    slider.classList.add(ANIMATE_CN);
  }
  setInterval(tipsAutoSlide, 4000);
}
tipsSlideShow();