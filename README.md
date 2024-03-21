# Guide
## 목차
- 시작하기
- Navigation bar 만들기 (추후 매뉴얼에 제품이 추가된다면)
- 제품 Side bar 만들기
- 매뉴얼 문서 작성하기
- 배포하기

## 시작하기
1. 터미널에 `yarn` 작성, 엔터
  ```
  yarn
  ```
2. 수정사항을 실시간으로 확인 가능한 로컬 서버 열기
  ```
  yarn start
  ```
  - 명령어 실행이 완료되면 http://localhost:3000 주소의 링크를 `ctrl + click`
  - 수정사항을 저장하면 로컬 서버에서 실시간으로 확인 가능

## Navigation bar 만들기 (추후 매뉴얼에 제품이 추가된다면)
1. 파일 위치 `/docusaurus.config.js`
  ```js
  themeConfig: {
    ...
    navbar: {
      ...
      items: [
          ...
          // 여기서부터
          {
            type: "docSidebar", // 수정 X
            sidebarId: "netmeterSidebar", // sidebar 이름 짓기
            position: "left", // navigation 버튼 위치
            label: "User Manual", // 버튼 문구
          },
          // 여기까지 수정하고 복사/붙여넣기 해주세요
        ],
      ...
    },
    ...
  }
  ```
2. `/sidebars.js`
  - sidebarId가 testSideBar라면 여기서는 `testSideBar: [{ type: "autogenerated", dirName: "." }]`
  - dirName은 /docs 폴더에 만들고있는 이 사이드바가 어느 문서에 위치할지에 대한 경로
    - testSideBar는 test라는 폴더 문서에 만든다면, `dirName: "./test"`
  ```js
  const sidebars = {
    ...
    위에 이름 지은 sidebarId: [{ type: "autogenerated", dirName: "." }],
  };
  ```
3. `/docs/test` **예시** 폴더를 만들어서 문서를 작성 navigation bar 버튼 생성 끝

## 제품 Side bar 만들기
1. 위 순서대로 했다면 이제 `폴더`와 `파일`만 만들면 끝
2. 예시로, 위에서 만든 사이드바의 dirName에 바라보고 있는 경로에 폴더 또는 파일 생성
3. 폴더: 사이드바에서 하위 드롭다운 카테고리를 만들 경우
  - 폴더 안에 `_category_.json` 파일 생성
    ```json
    {
      "label": "Getting - Started", // 상위 카테고리(드롭다운) 이름
      "position": 3, // 사이드바에서 몇번째에 위치할지 순서
      "link": {
        "type": "generated-index" // 수정 X
      }
    }
    ```
4. 파일: 사이드바에 파일의 첫번째 `#` 타이틀 제목이 사이드바에 표시됨

## 매뉴얼 문서 작성하기
1. `파일이름.md` 파일(문서) 생성
2. 사이드바 순서
  - 최상단에 사이드바에서 몇번째에 위치할지 순서 기입
    ```json
    ---
    sidebar_position: 1
    ---
    ```
3. 사이드바에 표시될 문서 이름
  - `# 문서 이름 예시`처럼 작성
4. 사진 첨부하기
  - `![Docs Version Dropdown](./img/docsVersionDropdown.png)`
  - 대괄호: 이미지의 이름
  - 소괄호: 이미지 경로 (해당 문서가 있는 폴더에 `img`폴더를 만들어서 이 안에 이미지 넣어 사용)
>이 외에 마크다운 문법은 링크 참고 [마크다운 문법](https://www.heropy.dev/p/B74sNE#h2_%EB%AC%B8%EB%B2%95)

## 배포하기
[netmeter 매뉴얼](nextlab-ai.github.io/docusaurus/)에 배포하는 방법 (터미널 입력, 복사 붙여넣기)
1. `git add .`
2. `git commit -m '매뉴얼 업데이트'`
3. `yarn deploy`
끝

push test via IDE