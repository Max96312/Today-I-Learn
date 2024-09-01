# DOM이란?
```javascript
interface Document : Node
```
interface이며, Node interface를 상속받는다.

# Host Environment
```html
<ul id="group">
    <li id="one">1번</li>
    <li id="two">2번</li>
</ul>
```
```javascript
const group = document.getElementById("group");
const list = group.getElementsByTagName("li");
console.log(list[Symbol.toStringTag]);

for(let element of list) {
    console.log(element.id);
};
```
1. const group = document.getElementById("group");
1) id 속성값이 group인 엘리먼트를 오브젝트로 생성하여 반환
2) Document 인터페이스가 document 오브젝트로 빌트인된 것은 Host Environment 때문입니다.

2. const list = group.getElementsByTagName("li");
1) <ul id=group>에 속하면서 태그 이름이 <li>인 엘리먼트를 오브젝트로 생성하고
2) 반환되는 오브젝트에 설정하여 반환합니다.

3. console.log(list[Symbol.toStringTag]);
1) list 변수에 설정된 오브젝트 이름은 HTMLCollection이며
2) HTMLCollection 오브젝트는 DOM에서 제공합니다.

4. list[Symbol.toStringTag] 형태로 사용하려면
1) list 오브젝트에 Symbol.toStringTag가 있어야 하며 사전에 list 오브젝트에 설정하는 처리를 해야 합니다.
2) 그런데, 사전 처리도 없이 바로 사용하였으며 이것은 Host Environment 때문입니다.

5. const list = group.getElementsByTagName("li");에서
1) 자바스크립트로 실행할 수 있는 오브젝트를 반환하며
2) 오브젝트에 Symbol.toStringTag가 설정됩니다.

6. for(let element of list) { console.log(element.id); };
1) list의 HTMLCollection 오브젝트를
2) 자바스크립트의 for-of 문에서 바로 사용할 수 있는 것은 Host Environment 때문입니다.

js의 number, array object 등 모든 object는 builtin object이다.
즉, 사전 처리를 하지 않아도 number, array object에서 바로 사용할 수 있다.

js는 Host 환경에서의 Object이다.

# 함수 실행 단계

자바스크립트의 언어적 관점 Host -
자바스크립트의 프로그래밍적 관점 object, properties

+ 함수function 실행 단계
  + 호출 전: 함수 실행을 위한 기반 환경 설정
  + 함수 호출: 함수를 호출하여 함수 실행
+ 함수 실행을 위한 기반 환경 설정
  + function(함수) 오브젝트로 생성
  + 스코프 설정 (-> 정적 스코프)
  + 이 단계의 키워드는 오브젝트, 프로퍼티
  + object의 properteis 로 설정 함수의 이름 프로퍼티 키 펑션 오브젝트가 프로젝트의 값
+ 함수를 호출하여 함수 실행
  + 함수가 실행되는 환경을 만들고
  + 함수 블록의 코드를 실행합니다.
  + 이 단계의 키워드는 실행 콘텍스트Execution Context