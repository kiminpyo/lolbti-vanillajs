# +++에브리타임 커뮤니티에 첫 공유(2022.08.01~)
<div style="display: 'flex';">
<img src="https://user-images.githubusercontent.com/93189402/182034387-d374c9c9-e202-47ff-a4e6-8bd539c405a1.png" style="width:400px;"/>
<img src="https://user-images.githubusercontent.com/93189402/182034455-8dcdf157-8f26-4cf4-be82-df19a5e8d3c5.png" style="width:400px;"/>
</div>

현재 200명정도의 방문자가 다녀갔습니다.

**여러 피드백이 들어와 추가적인 수정 후 다른 커뮤니티에 공유 예정입니다**

# 프로젝트 정보

**Project Name: lol.b.t.i**

**project excution period: 2022.07.25~2022.07.30**

**site: <a href="https://whatisyourlolbti.netlify.app/">Lolbti</a>(https://whatisyourlolbti.netlify.app/)**

**editor: vscode**

---
# 프로젝트 설명

**League of Legend이용자들을 위한 성격별로 알아보는 Test(11가지 문항)입니다.**

**Test의 결과값과 함께 카카오톡 공유하기를 통해 게임의 이용자들 모두 가볍게 이용할 수 있게 만들었습니다.**

## +++추가로 하고싶었던 부분

**개발도 중요하지만 개발자가 만든 것은 누군가의 평가가 곧 결과로 직결된다고 생각합니다.**

**처음로딩이 느리다거나, 뭔가 에러가 난다거나, 폰에서 화질이 깨진다는 등의 문제점이 곧 개발자들의 역량을 키우는 요소들이 되었고, 피드백을 받은 것들을 점검할 수 있는 경험을 가지고 싶었습니다**

---
# 사용한 라이브러리 및 API, CDN 등
- fontAwesome
- googleFonts
- kakao Api
- normalize.css
- netlify(hosting-site)
- bootstrap

---
# 세부정보

### 1.메인화면  ->  테스트
- 유저의 특성을 고려해 모바일에 최적화가 되어있으나, labtop까지 반응형 처리
- 실제 게임 내에서 사용하는 이미지들만 사용 
- html페이지는 하나로 만들고 css의 display요소를 js로 이용해 fade-in/ fade-out의 다른 페이지처럼 구현
- css keyframes로 animation 요소를 생성 (페이지별로 똑같이 적용되는 것들)
- test 항목별로 이루어지는 동적인 요소들 Js로 생성 후 css 적용 및 dummy data에 맞게끔 적용

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/93189402/181820266-ded849b1-1d2f-48a7-b093-48e87a4fc916.gif)

### 2. 테스트  ->  결과 창
- 총 11개의 항목에 대해 사용자가 클릭한 항목들을 담아 사용자에게 가장 적합한 포지션을 보여줌
- 선택한 값들에 대한 총합을 구하고, 100%를 기준으로 1등부터 마지막 등수까지 산출


![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/93189402/181820049-b6bebf77-b975-4e42-b9d4-750fba7a9699.gif)

### 3. 공유

- kakao api를 사용해 공유기능 활성화 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/93189402/181824783-9056e96f-efe4-452e-9e7f-b6f3f1ec74fc.png)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/93189402/181824920-574667d8-cc17-461d-8355-9c467a644939.png)

---

### 4. 2022.07.31+

**js나 css가 html태그 내에 들어가 있는 부분/Js함수선언과 표현식을 표현식으로 통일할 예정입니다.**
**html5 웹표준에 최대한 맞추기 위한 준비 중입니다(SEO에 최적화된 태그들을 공부 중)**
**현재 이미지 사진 관련해 저작권문의가 끝나면 netlify를 이용해 통계를 분석할 계획입니다.**
**이용자 수에 따라 ver.2 만들예정**

# 도움이 된 사이트

- https://dillinger.io/ (readme preview)
- https://github.com/dev-dain/10-things-test (구성에 대한 부분을 참고했습니다.)
- https://www.w3schools.com/ (css property들을 Js로 변환하는데 이용)
- https://app.netlify.com/ (serverless로 배포하는데 이용)


# 기술적인 부분

제 <a href="https://velog.io/@kip">기술블로그</a> 에 추가예정입니다.

### html
- openGraph이용법 (meta tag)
- kakao Api 및 CDN
### css
- animation과 keyframes
- 기본적인 틀(flex구조, font-size)
- bootstrap grid 
### js
- events 적용 
- dom에 접근해 css 및 html 생성
- setTimeout과 setInterval을 이용한 css의 속성 제어
- for .. in 과 같은 반복문을 통해 질문지 생성 및 사용자의 값들에 대한 통계 로직 
- kakao api를 통한 공유 및 공 유시 생성되는 default값들에 대한 기본정보 수정
