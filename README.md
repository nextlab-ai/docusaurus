# Guide
### 폴더 구조
```md
--Example--

nextlab docusaurus
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```
- /blog/ : 블로그 형식의 마크다운 문서가 저장되는 폴더이다.
- /docs/ : 기본적인 마크다운 문서가 저장되는 폴더이다. (사이드바에 나타나는 문서의 순서는 sidebar.js 에서 설정할 수 있다.)
- /src/ : 페이지 설정이나 기능 및 스타일링을 커스터마이징할 수 있는 소스 폴더이다.
- /static/ : 정적인 파일이 위치되는 곳으로, 이곳에 있는 파일들은 빌드시에 build 디렉토리로 복사된다. 즉, 이미지를 추가할때에 경로를 `/img/some-image.jpg` 등으로 사용할 수 있다.
- /docusaurus.config.js : docusaurus 사이트의 설정을 하는 파일이다. 테마 설정, preset, plugin 등등을 모두 설정할 수 있다.
- sidebars.js : 문서 페이지에 나타나는 사이드 바의 순서를 명시하는 파일이다. 이를 docusaurus.config.js 에서 불러와서 presets 또는 plugin 에 설정하는 방식으로 사용한다.

### 문서 작성하는 법
<img width="339" alt="스크린샷 2024-02-29 13 50 27" src="https://github.com/nextlab-ai/docusaurus/assets/150635549/b14cad84-d50b-46e6-820c-1abae6d5831b">

폴더 경로: `/docs/사이드바 이름/하위 목록이름.md`
- 이미지 빨강박스 -> 사이드바 이름 (ex. `/tutorial_basics`)
- 이미지 보라박스 -> 하위 목록이름 (ex. `create_a_page.md`)

- **`파일 이름.md`**
  - 사이드바 순서 정하기
    ```md
    // 최상단에 작성
    ---
    sidebar_position: 원하는 순서 숫자 기입
    ---
    ```
  - 내용 작성 마크다운 문법 활용 ([문법 가이드](https://www.heropy.dev/p/B74sNE#h2_%EB%AC%B8%EB%B2%95))
    - 예시: [마크다운](https://github.com/facebook/docusaurus/blob/main/examples/classic/docs/intro.md?plain=1), [결과물](https://github.com/facebook/docusaurus/blob/main/examples/classic/docs/intro.md)
    - 결과물에서 상단 `sidebar_position` 표는 실제로 안보입니다
