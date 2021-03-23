// 레시피 json 연결
function onloadResipeList() {
  const xhrURL = "../json/recipeList.json";
  const xhr = new XMLHttpRequest();
  xhr.open('get', xhrURL);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && xhr.status === 200) {
      let jsonObj = xhr.response;
      showRecipe(jsonObj);
    }
  }
  // html 생성
  function showRecipe(jsonObj) {
    const recipeWrap = document.querySelector("#recipe");
    let newRecipe = jsonObj.newRecipe;
    for(let i=0; i<newRecipe.length; i++) {
      let divItem = document.createElement('div');
      divItem.className = 'item';
      // 이미지 출력
      let divThumb = document.createElement('div');
      divThumb.className = 'thumb';
      let a = document.createElement('a');
      a.href = '#';
      a.innerHTML = '<img src="'+newRecipe[i].imgs+'"/>';
      // 텍스트 출력
      let divInfo = document.createElement('div');
      divInfo.className = 'info';
      let ulRecipeTag = document.createElement('ul');
      ulRecipeTag.className = 'recipeTag';
      let newTags = newRecipe[i].tags;
      for(let j=0; j<newTags.length; j++) {
        let li = document.createElement('li');
        li.innerHTML = '<span>'+newTags[j]+'</span>'
        ulRecipeTag.appendChild(li);
      }
      let title = document.createElement('h4');
      title.innerHTML = '<a href="#">'+newRecipe[i].title+'</a>';
      //html 정렬
      divThumb.appendChild(a);
      divInfo.appendChild(ulRecipeTag);
      divInfo.appendChild(title);
      divItem.appendChild(divThumb);
      divItem.appendChild(divInfo);
      recipeWrap.appendChild(divItem);
    }
  }
}
onloadResipeList();