let title = document.querySelector("#title");

// narrowing 하는 방법 (1)
if (title != null) {
  title.innerHTML = "반가워요";
}

// narrowing 하는 방법 (2) 가장 많이 사용
if (title instanceof Element) {
  title.innerHTML = "반가워요";
}

// narrowing 하는 방법 (3)
let title2 = document.querySelector("#title") as Element;
title2.innerHTML = "반가워요";

// narrowing 하는 방법 (4)
if (title?.innerHTML) {
  title.innerHTML = "반가워요";
}

// narrowing 하는 방법 (5)
// tsconfig.json 에서  strickNullChecks:false로 변경해준다.

// HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

let button = document.querySelector("#button");
button?.addEventListener("click", function () {
  console.log("yes");
});
