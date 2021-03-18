
// 링크 속성 막기
const allA = document.querySelectorAll('a[href="#"]');
for(var i = 0; i < allA.length; i++) {
  allA[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}

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

//상단으로 돌아가기 버튼
const btnTop = document.getElementById('btn_top');
const ACTIVETOP_CN = 'active_btnTop';