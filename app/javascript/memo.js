function post (){
  //リクエストを送信する処理
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true); //リクエストの内容を指定
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('turbo:load', post);