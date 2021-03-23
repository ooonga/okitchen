// 링크 속성 막기
const allClickEvent = document.querySelectorAll('a[href="#"]');
for(var i = 0; i < allClickEvent.length; i++) {
  allClickEvent[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}
// 상단 검색창 입력시 라벨 제거
const searchInput = document.querySelector('#search_info'),
      searchLabal = document.querySelector('#search_name');
searchInput.addEventListener('keydown',function() {
  searchLabal.innerText="";
});
// 상단 카테고리 메뉴 드랍 다운 실행
const categoryDrops = document.querySelector('.drops'),
      dropsParent = categoryDrops.parentNode,
      onMouseCategory = dropsParent.firstChild;

const ONDROPS_CN = 'on_Drops';

onMouseCategory.addEventListener("mouseenter", function(){
  categoryDrops.classList.add(ONDROPS_CN);
});
dropsParent.addEventListener("mouseleave", function(){
  categoryDrops.classList.remove(ONDROPS_CN);
});
// 상단으로 돌아가기 버튼
const TOP_BTN = document.querySelector('.btn_top');
const ACTIVETOP_CN = 'active_btnTop';
// 버튼 보이기 & 숨기기
function moveScroll() {
  if( window.scrollY>500 ) {
    TOP_BTN.classList.add(ACTIVETOP_CN);
  } else {
    TOP_BTN.classList.remove(ACTIVETOP_CN);
  }
}
window.addEventListener('scroll', moveScroll);
// 상단 이동
TOP_BTN.addEventListener('click', function() {
  window.scrollTo (
    {
      top:0,
      behavior: 'smooth'
    }
  );
});
