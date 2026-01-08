const container = document.getElementById('container');

// 부모 노드
console.log("container.parentNode, container.parentElement");
console.log(container.parentNode);       // body
console.log(container.parentElement);    // body

// 자식 노드
console.log("container.childNodes");
console.log(container.childNodes);       // NodeList (텍스트 노드 포함)
console.log("container.children");
console.log(container.children);         // HTMLCollection (요소만)
console.log("container.firstChild, container.firstElementChild, container.lastChild, container.lastElementChild");
console.log(container.firstChild);       // 첫 번째 노드
console.log(container.firstElementChild); // 첫 번째 요소
console.log(container.lastChild);        // 마지막 노드
console.log(container.lastElementChild); // 마지막 요소

// 형제 노드
const h1 = container.querySelector('h1');
console.log("h1.nextSibling, h1.nextElementSibling, h1.previousSibling, h1.previousElementSibling");
console.log(h1.nextSibling);            // 다음 노드 (텍스트 노드일 수 있음)
console.log(h1.nextElementSibling);     // 다음 요소 (p.text)
console.log(h1.previousSibling);        // 이전 노드
console.log(h1.previousElementSibling); // 이전 요소

// 자식 노드 순회
console.log("for child of container.children");
for (let child of container.children) {
    console.log(child.tagName);
}

// 모든 노드 순회 (텍스트 노드 포함)
console.log("for node of container.childNodes");
for (let node of container.childNodes) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('요소:', node.tagName);
    } else if (node.nodeType === Node.TEXT_NODE) {
        console.log('텍스트:', node.nodeValue.trim());
    }
}

// 문서 정보
console.log("document infomations");
console.log(document.title);             // 문서 제목
console.log(document.URL);               // 현재 URL
console.log(document.domain);            // 도메인
console.log(document.documentElement);   // <html> 요소
console.log(document.body);              // <body> 요소
console.log(document.head);              // <head> 요소

// 문서 상태
console.log("document readyState");
console.log(document.readyState);        // "loading", "interactive", "complete"

// 문서 로드 완료 이벤트
document.addEventListener('DOMContentLoaded', function() {
    console.log(document.readyState + ' DOM이 완전히 로드 되었습니다!');
});

window.addEventListener('load', function() {
    console.log(document.readyState + ' 모든 리소스(폰트, 이미지, 아이콘 등등)가 로드 되었습니다!');
});