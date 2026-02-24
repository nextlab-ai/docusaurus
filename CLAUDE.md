# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

NEXTLab의 netMeter 제품 사용자 매뉴얼을 위한 Docusaurus 기반 문서화 사이트입니다. 두 가지 제품 시리즈의 매뉴얼을 호스팅합니다:
- **N Series** (`docs/n-series/`): netMeterN1 및 관련 기기
- **C Series** (`docs/c-series/`): netMeterC1 및 관련 기기

사이트는 GitHub Pages를 통해 `docs.netmeter.io`에 배포됩니다.

## 개발 명령어

### 설정 및 개발
```bash
# 의존성 설치
yarn

# 로컬 개발 서버 시작 (http://localhost:3000에서 열림)
yarn start

# 프로덕션 빌드
yarn build

# 프로덕션 빌드를 로컬에서 제공
yarn serve

# Docusaurus 캐시 삭제
yarn clear
```

### 배포
```bash
# GitHub Pages에 배포 (빌드 후 docs.netmeter.io에 게시)
yarn deploy

# 배포 전 표준 git 워크플로우
git add .
git commit -m "매뉴얼 업데이트"
yarn deploy
```

## 아키텍처

### 멀티 제품 사이드바 구조

사이트는 Docusaurus의 멀티 사이드바 기능을 사용하여 제품 문서를 분리합니다:

1. **`docusaurus.config.js`의 설정**:
   - 각 제품 시리즈는 `type: "docSidebar"`와 고유한 `sidebarId`를 가진 navbar 항목을 가집니다
   - Navbar 항목: "N Series" (`netmeterNSeriesSidebar`)와 "C Series" (`netmeterCSeriesSidebar`)

2. **`sidebars.js`의 사이드바 매핑**:
   - 각 `sidebarId`는 특정 `dirName`에서 자동 생성된 사이드바에 매핑됩니다
   - `netmeterNSeriesSidebar` → `dirName: "n-series"` → `/docs/n-series/`
   - `netmeterCSeriesSidebar` → `dirName: "c-series"` → `/docs/c-series/`

3. **홈페이지 리다이렉트**:
   - 홈페이지 (`src/pages/index.js`)는 자동으로 `/docs/n-series/intro`로 리다이렉트됩니다
   - `useLayoutEffect` 훅을 통해 구현되었습니다

### 문서 구조

문서는 순서 지정을 위해 번호가 매겨진 폴더 규칙을 따릅니다:

```
docs/
├── n-series/
│   ├── 00_intro.md
│   ├── 01_StartGuides/
│   ├── 02_Features/
│   ├── 03_Settings/
│   └── 04_Miscellaneous/
└── c-series/
    ├── (유사한 구조)
```

#### 카테고리 시스템

- 각 폴더는 사이드바 카테고리를 설정하기 위한 `_category_.json` 파일을 포함합니다:
  ```json
  {
    "label": "표시될 이름",
    "position": 2,
    "link": {
      "type": "generated-index"
    }
  }
  ```

- `position` 필드는 사이드바에서의 순서를 제어합니다
- 폴더 명명 규칙: `XX_FolderName` (XX는 순서 지정을 위한 숫자 접두사)

#### 문서 파일

- 마크다운 파일(`.md`)은 개별 문서 페이지를 나타냅니다
- 각 파일은 순서를 제어하기 위해 `sidebar_position`이 포함된 frontmatter를 포함합니다:
  ```markdown
  ---
  sidebar_position: 1
  ---
  # 페이지 제목
  ```
- 첫 번째 `#` 헤딩이 사이드바 링크 텍스트가 됩니다
- 이미지는 각 문서 디렉토리 내의 `img/` 폴더에 저장됩니다

## 새 제품 문서 추가하기

새로운 제품 시리즈를 추가하려면:

1. **`docusaurus.config.js` 업데이트**: 고유한 `sidebarId`를 가진 새 navbar 항목 추가
2. **`sidebars.js` 업데이트**: `sidebarId`를 새 `dirName`에 매핑
3. **docs 폴더 생성**: `docs/` 아래에 해당 폴더 구조 생성
4. **`_category_.json` 추가**: 각 하위 폴더에 카테고리 파일 생성
5. **홈페이지 리다이렉트 업데이트** (선택사항): 새 제품이 기본값이 되어야 한다면 `src/pages/index.js` 수정

## 주요 설정 파일

- **`docusaurus.config.js`**: 메인 Docusaurus 설정
  - 사이트 메타데이터 (제목, 태그라인, URL)
  - Navbar 설정
  - Footer 링크
  - 테마 설정 (사이드바 동작, Prism 테마)

- **`sidebars.js`**: 사이드바 구조 및 문서 폴더에 대한 매핑 정의

- **`package.json`**: 사용 가능한 모든 스크립트와 의존성 정의
  - Homepage는 `https://nextlab-ai.github.io`로 설정
  - `docs.netmeter.io`를 위한 CNAME이 포함된 커스텀 배포 스크립트

## 번역 지원

Docusaurus는 i18n 지원으로 구성되어 있습니다 (`defaultLocale: "en"`). 현재는 영어만 활성화되어 있습니다. 언어를 추가하려면:

```bash
# 번역 파일 생성
yarn write-translations

# docusaurus.config.js에 로케일 추가
i18n: {
  defaultLocale: "en",
  locales: ["en", "ko"],
}
```
