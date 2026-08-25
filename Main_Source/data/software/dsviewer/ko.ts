export const dsviewerData = {
  meta: {
    title: "DSViewer | 오프라인 위상배열 초음파(PAUT) 데이터 분석 소프트웨어",
    description: "(주)성산연구소의 오프라인 데이터 분석 소프트웨어 DSViewer를 소개합니다. 고해상도 A/B/C/D/S-scan 다중 뷰어, 정밀 결함 사이징 및 오프라인 교정 기능 지원."
  },
  hero: {
    badge: "PC 전용 오프라인 데이터 분석 SW",
    title: "DSViewer",
    subtitle: "오프라인 데이터 분석",
    description: "DSViewer는 현장에서 획득 및 저장 완료된 초음파 검사 로데이터 파일(.dat, .raw)을 분석하는 PC 전용 소프트웨어입니다. 자유롭게 조율 가능한 다중 스캔 뷰어(A/B/C/D/S-Scan), 정밀 크로스하어 커서 측정, 부식 매핑 전용 컬러 컨트롤 기능들을 활용하여 검사 데이터를 신속하고 완벽하게 시각화 및 문서화합니다.",
    buttons: {
      download: "DSViewer 무료 다운로드 (자료실)",
      support: "기술 지원 포털 이동"
    },
    tabs: [
      { label: "부식 C-스캔" },
      { label: "용접 분석" },
      { label: "다채널 계측" },
      { label: "커서 및 게이트" }
    ]
  },
  quickSpecs: [
    { value: "원시 로데이터", label: "드래그 앤 드롭 파일 로드" },
    { value: "데이터 바", label: "스캔 위치별 데이터 실시간 동기화" },
    { value: "정밀 사이징", label: "결함 크기 및 깊이 측정" },
    { value: "다중 스캔 뷰", label: "다차원 초음파 신호 동시 분석" }
  ],
  features: [
    {
      badge: "DATA VISUALIZATION",
      title: "오프라인 2D C-스캔 및 부식 지형 매핑",
      description1: "현장 장비에서 획득하여 USB 등으로 복사된 원시 로데이터 파일(.dat, .raw)을 PC로 가져와 마우스 드래그 앤 드롭만으로 초고속 로딩합니다. 신호 진폭(Amplitude) 또는 전파 시간(Time of Flight) 값을 기준으로 다채로운 2D 컬러 맵을 시각화하여, 부식 영역의 지형도 분석이나 소재 내부 결함을 한눈에 분석합니다.",
      description2: "부식 검사(Corrosion)에 적합한 전용 컬러 맵 분석을 제공합니다. 진폭(A%) 또는 위치(A/, B/, A/-B/, Position)를 기반으로 컬러 코딩 방식을 전환할 수 있으며, 색상 변화 기준 범위(Min/Max, Linear/Reverse)를 미세 조정하여 강도나 두께의 미세한 편차를 시각적으로 극대화하여 도출할 수 있습니다.",
      bullets: [
        "기가바이트 단위의 대용량 초음파 로데이터 파일도 지연 없이 렌더링",
        "부식 정밀 측정을 위한 Corrosion 전용 컬러 팔레트 및 대비 최적화 제어",
        "데이터 획득 장비의 원시 파일 헤더 매개변수 정보 자동 획득 및 재해석"
      ],
      reverseLayout: true
    },
    {
      badge: "SCAN LAYOUTS",
      title: "다중 스캔 뷰 레이아웃 및 5가지 눈금자",
      description1: "A-scan, B-scan, C-scan, D-scan, 그리고 부채꼴 스윕 영상인 S-scan(Sectorial) 화면을 동시에 검토할 수 있는 다중 스캔 디스플레이 대시보드를 제공합니다. 레이아웃 배치는 사용자의 분석 편의에 맞춰 자유롭게 조절(A-B-C 레이아웃 등)할 수 있어 현장 계측과 오프라인 연구에 최적의 환경을 보장합니다.",
      description2: "결함의 물리적 위치 좌표를 오차 없이 식별하기 위해 전용 눈금자(Rulers)가 각 축별로 개별 색상 코딩되어 제공됩니다: 스캔 축(Scan - Blue), 인덱스 축(Index - Green), 진폭 축(Amplitude - Yellow), 초음파 음로 거리(Sound Path - Pink), 실제 수직 깊이(True Depth - Purple).",
      bullets: [
        "A / B / C / D / S-scan 등의 다차원 초음파 신호 복합 오버레이 및 시각화",
        "실시간 5축 눈금자 컬러 코딩 시스템으로 분석 에러와 계산 과정 완전 배제",
        "양면 듀얼 및 멀티 채널 프로브 데이터의 채널별 데이터 정렬 지원"
      ],
      reverseLayout: false
    },
    {
      badge: "MEASUREMENT & TOLERANCE",
      title: "정밀 결함 사이징 및 3-Gate 수치 정밀 분석",
      description1: "화면상에 내장된 수평/수직 기준선(Reference) 및 측정선(Measurement) 크로스하어 커서를 조작하여, 검출된 결함의 물리적인 크기(가로 폭 및 높이)를 화면상에서 정량적으로 즉석 사이징합니다.",
      description2: "신호 모니터링을 위한 독립적인 게이트(Gate A, B, I) 3개를 제공합니다. C-scan 상에서 게이트 영역 내의 최대 진폭 데이터를 투영하여 볼 수 있으며, 내장된 Measure Tool을 통해 게이트별 진폭(A%, B%, I%), 음로 거리(SA, SB, SI), 깊이(DA, DB, DI), 기준 투영 거리(PA, PB, PI), 그리고 두 게이트 간의 상대적 편차(Δ) 값을 소수점 단위로 자동 산출합니다.",
      bullets: [
        "크로스하어 마우스 포인팅 드래그로 결함 위치와 크기를 정밀 측정",
        "독립적인 A / B / I 인터페이스 게이트 및 트리거 설정",
        "%, SA/SB/SI, DA/DB/DI, 편차 정보가 포함된 전용 수치 측정 계측기 기능 제공"
      ],
      reverseLayout: true
    },
    {
      badge: "CALIBRATION & DATA EXPORT",
      title: "화면 줌 제어 및 분석 로데이터 오프라인 교정",
      description1: "미세 결함 집중 구역을 분석하기 위해 Zoom mode를 클릭하고 마우스 드래그를 통해 즉시 화면을 줌 확대합니다. 또한 마우스 휠 조작을 통한 유기적인 확대/축소 및 Ctrl 키 드래그 이동을 기본 지원하여 상세 판독의 효율성을 극대화합니다.",
      description2: "원시 파일을 손상시키지 않고 분석 단계에서 보정값을 보조할 수 있습니다. 오프라인 상태에서 Wedge delay, 음속(Velocity), TOFD 동기화 등 핵심 교정 수치(Calibration)를 재입력하면, 이미지를 가공하지 않고 눈금자(Ruler) 배율에만 실시간 보정값을 매핑합니다. 분석 완료 후 각 스캔 창 화면을 단 한 번의 클릭으로 개별 PNG 이미지 파일로 저장(캡처)하여 문서화에 즉시 활용할 수 있습니다.",
      bullets: [
        "마우스 휠 조작 및 드래그 줌 확대 기능으로 정밀 판독 지원",
        "Wedge delay, 음속(Velocity), TOFD 동기화 등 오프라인 보정값 반영 교정 툴",
        "각 스캔 보기 화면별 개별 PNG 이미지 추출 및 파일 저장"
      ],
      reverseLayout: false
    }
  ],
  contact: {
    title: "DSViewer 솔루션 도입 문의",
    description: "DSViewer 라이선스 도입 견적 상담이나 기술 영업 지원이 필요하시면 정보를 입력해 주십시오. 담당 엔지니어가 신속히 답변 드리겠습니다.",
    labels: {
      name: "성함",
      company: "회사명",
      email: "이메일 주소",
      message: "문의 사항 및 요구 조건"
    },
    placeholder: "도입 수량, 분석 대상 로데이터 형식, 또는 구체적인 요구 사항을 입력해 주십시오...",
    button: "DSViewer 도입 문의 제출"
  }
};
