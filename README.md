# DSPAUT 메인 웹사이트 (Main Website)

본 프로젝트는 **SEONGSANLAB Co., Ltd.**의 공식 제품 및 소프트웨어 소개를 위한 메인 웹사이트입니다. 정적 사이트 생성기인 **Astro**를 기반으로 구축되었으며, 성능 최적화와 다국어(한국어/영어) 지원, 그리고 체계적인 로직-UI 분리(Data/UI Separation) 아키텍처를 적용하고 있습니다.

---

## 🚀 프로젝트 아키텍처 (Project Structure)

과거 Astro 기본 템플릿 구조에서 벗어나, 유지보수성과 확장성을 극대화하기 위해 **데이터(Data)와 프레젠테이션(UI)이 완벽히 분리된 구조**를 채택했습니다.

```text
dspaut-main/
├── dist/                   # (자동 생성) 빌드(build) 완료된 최종 배포용 정적 웹사이트 파일들
├── node_modules/           # (자동 생성) npm 패키지 의존성 모듈들 (Git 업로드 제외)
├── Main_Images/            # 빌드 시 그대로 복사되는 정적 파일 (favicon, 3D 모델, 동영상 등)
├── Main_Source/
│   ├── assets/             # Astro 이미지 최적화를 거치는 로컬 원본 이미지
│   ├── components/         # 재사용 가능한 UI 모듈 (Hero, Footer, 3D Viewers 등)
│   ├── data/               # 💡 핵심: 하드코딩 방지를 위한 다국어 텍스트 및 메타 데이터 객체
│   │   ├── home/           # 메인 홈페이지 데이터 (en.ts, ko.ts)
│   │   ├── products/       # 하드웨어 장비 (B3, P5, EC 등)별 데이터
│   │   └── software/       # 소프트웨어 (DSVision, DSViewer, DSK)별 데이터
│   ├── layouts/            # 기본 HTML 뼈대 파일 (Layout.astro)
│   ├── pages/              # 라우팅 엔드포인트
│   │   ├── index.astro     # 영문 메인 페이지
│   │   ├── ko/             # 국문 페이지 라우팅 디렉토리
│   │   ├── products/       # 제품군 개별 페이지
│   │   └── software/       # 소프트웨어 개별 페이지
│   └── styles/             # 전역 스타일시트 (global.css)
├── docs/                   # 프로젝트 운영 및 개발을 위한 내부 SOP/매뉴얼
└── 메인_홈페이지_실행.bat     # 로컬 개발 환경 원클릭 실행 스크립트
```

### 🎯 주요 아키텍처 특징: 데이터-UI 분리 (Data/UI Separation)
모든 텍스트 자산 및 페이지별 구동 데이터는 `Main_Source/data/` 내부의 `.ts` 파일에서 정의됩니다. `Main_Source/pages/` 하위의 모든 페이지 컴포넌트(`*.astro`)는 내부에 텍스트를 직접 하드코딩하지 않으며, 이 데이터 파일을 Import하여 동적으로 화면을 렌더링합니다. 수정이 필요할 때는 UI 코드를 건드릴 필요 없이 `data/` 파일만 수정하면 됩니다.

---

## 🧞 명령어 가이드 (Commands)

프로젝트 루트 디렉토리에서 터미널을 열고 다음 명령어들을 실행할 수 있습니다.

| 명령어 | 설명 |
| :------------------------ | :----------------------------------------------- |
| **`메인_홈페이지_실행.bat`** | ⭐️ (권장) 에셋 정합성 검사를 수행한 후 자동으로 개발 서버를 실행합니다. |
| `npm install`             | 프로젝트 실행에 필요한 의존성 패키지를 설치합니다. |
| `npm run dev`             | 로컬 개발 서버를 실행합니다. (기본 포트: `localhost:3000`) |
| `npm run build`           | 실제 서버 배포를 위해 정적 파일들을 최적화하여 `./dist/` 폴더에 빌드합니다. |
| `npm run preview`         | `build` 명령어 수행 후 배포될 결과물을 로컬에서 미리 확인합니다. |

---

## 📚 참고 문서 (Documentation)
- **3D 인터랙티브 뷰어 SOP**: `docs/3d-video-viewer-sop.md` (제품 페이지 내 3D 모델 및 Video Texture 관리 표준 가이드)

---

## 🛠 새로운 콘텐츠 추가 가이드 (How to Add Content)

나중에 웹사이트에 새로운 페이지나 이미지를 추가하실 때는 다음 경로 규칙을 따라주시면 됩니다.

### 1. 이미지 및 에셋 추가하기
- **일반 이미지 (png, jpg, webp 등):** `Main_Source/assets/` 폴더 내 적절한 카테고리(`products`, `software` 등)에 넣습니다. (Astro가 자동으로 크기를 최적화해줍니다.)
  - *사용법:* 파일 안에서 `import myImage from '../../assets/img.png';` 형식으로 불러와 사용합니다.
- **용량이 큰 미디어 (동영상, 3D 모델, PDF 등):** `Main_Images/assets/` (예: `Main_Images/assets/videos/`) 폴더에 넣습니다. (최적화를 거치지 않고 원본 그대로 서비스됩니다.)
  - *사용법:* 파일 안에서 `/assets/videos/my-video.mp4` 처럼 절대 경로로 직접 입력하여 사용합니다.

### 2. 새로운 페이지 추가하기 (예: 신제품 'A1' 추가 시)
현재의 "데이터-UI 분리" 원칙에 따라 3단계로 진행합니다.
1. **데이터 파일 생성:** `Main_Source/data/products/a1/` 폴더를 만들고 그 안에 `en.ts`(영문 텍스트)와 `ko.ts`(국문 텍스트)를 작성합니다.
2. **영문 페이지 생성:** `Main_Source/pages/products/a1.astro` 파일을 생성하고 `en.ts` 데이터를 불러오도록 뼈대를 잡습니다.
3. **국문 페이지 생성:** `Main_Source/pages/ko/products/a1.astro` 파일을 생성하고 `ko.ts` 데이터를 불러오도록 뼈대를 잡습니다.
