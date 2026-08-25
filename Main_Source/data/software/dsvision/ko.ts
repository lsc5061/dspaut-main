export const dsvisionData = {
  meta: {
    title: "DSVision | 실시간 위상배열 초음파(PAUT) 데이터 수집 및 분석 소프트웨어",
    description: "(주)성산연구소의 실시간 위상배열 초음파(PAUT) 데이터 수집 및 분석 소프트웨어 DSVision을 소개합니다. 고해상도 A/B/C/S-scan 이미징, 가이드식 자동 교정 마법사, 용접부 오버레이 및 부식 매핑 지원."
  },
  hero: {
    badge: "장비 내장형 실시간 수집 SW",
    title: "DSVision",
    subtitle: "실시간 초음파 데이터 수집 & 분석",
    description: "DSVision은 위상배열 초음파 탐상(PAUT) 및 TOFD 비파괴 검사를 위한 실시간 데이터 수집 및 정밀 분석 소프트웨어입니다. 휴대용 하드웨어 장비(P5, B3 등)에 내장되어 작동하며, 현장 검사자들의 편의를 극대화한 직관적인 UI와 초고속 신호 처리 성능을 바탕으로 섹터(Sectorial) 및 선형(Linear) 스캔 집속 신호를 라이브로 시각화합니다.",
    buttons: {
      quote: "소프트웨어 문의",
      support: "기술 지원 포털 이동"
    }
  },
  quickSpecs: [
    { value: "A/B/C/S-Scan", label: "실시간 이미징 매핑" },
    { value: "최대 30 kHz", label: "펄스 반복 주파수 (PRF)" },
    { value: "PAUT & TOFD", label: "멀티 그룹 동시 수집" },
    { value: "가이드식 자동 교정", label: "자동 캘리브레이션 마법사" }
  ],
  tabs: {
    badge: "SCANNING MODES",
    title: "Linear 및 Sectorial 스캔 이미징 모드",
    description: "고속 Linear(선형) 어레이 스캔과 다양한 각도의 Sectorial(섹터) 스윕 스캔 모드를 자유롭게 전환하며, 용접부 검사, 부식 매핑 및 각종 구조물 계측 기하학에 완벽하게 대응합니다.",
    linear: {
      title: "볼륨 분석용 고속 Linear 어레이 스캔",
      description1: "Linear Scanning(선형 스캔)은 위상배열 프로브의 소자(Element)들을 일정 그룹씩 순차적으로 펄싱하여 고정된 빔 각도로 평행 스윕하는 기법입니다. 스캔 경로 전체에 걸쳐 균일한 물리적 초음파 감도와 일관된 빔 폭을 제공합니다.",
      description2: "리니어 스캔 구성을 통해 실시간으로 시편 내부 단면을 나타내는 **B-scan(측면 뷰)** 및 표면 전반의 결함 분포를 표현하는 **C-scan(평면 뷰)** 데이터를 컴파일하여 결함의 기하학적 삼차원 위치와 범위를 명확히 규명합니다.",
      bullets: [
        "순차적 전자 어퍼처 제어를 통한 평행 스캔",
        "실시간 B-scan & C-scan 데이터 통합 매핑",
        "배관 부식 매핑 및 철판 등의 면적 검사에 최적화",
        "스캔 영역 전 구간 균일한 측정 에너지 유지"
      ]
    },
    sectorial: {
      title: "다각도 Sectorial 빔 스윕 및 실시간 용접부 오버레이",
      description1: "Sectorial Scanning(섹터 스캔)은 위상 지연 알고리즘을 활용하여 단일 프로브 위치에서 각도 범위를 촘촘하게 스위핑(예: 30° ~ 80°)하는 대표적인 위상배열 검사 방식입니다. 복잡한 용접부 구조물의 다양한 결함 반사각에 효과적으로 대응합니다.",
      description2: "소프트웨어 내장 **용접부 오버레이(Weld Overlay)** 기능과 연동하여 S-scan 단면 상에 용접 개선 형상(V형, X형 등)과 열영향부(HAZ) 라인을 실시간으로 오버레이합니다. 반사 지점 마커(Leg: B0, T1, B2)가 함께 매핑되어 결함 신호가 용접부 루트 또는 개선면에 위치하는지 직관적으로 해석합니다.",
      bullets: [
        "미세 각도 분해능 기반의 부채꼴 스캔",
        "실시간 용접 개선 단면 형상 및 열영향부 영역 시각화",
        "반사 도달 거리 스킵 마커 (Leg B0, T1, B2, T3) 추적",
        "Weld 균열 및 용융 불량 등의 신속한 경계면 크기 판독"
      ]
    }
  },
  multibeam: {
    badge: "MULTI-BEAM SYSTEM",
    title: "멀티 그룹 및 다채널 통합 구성",
    description: "단일 프로브의 기본 PAUT 검사부터 대형 스캐너와 인코더를 결합한 고도화된 다채널 연동 모니터링까지 계측 영역을 단계적으로 확장합니다.",
    cards: [
      {
        badge: "Standard Mode",
        title: "단일 그룹 PAUT (1-GP)",
        description: "하나의 위상배열 프로브를 활성화하여 다각도 부채꼴 스윕 스캔을 구동합니다. 일반적인 용접 구조물 결함의 정밀 진단 및 빔 가이던스 확인을 위한 표준 계측 모드입니다.",
        footer: "기본 1개 프로브 매핑 레이아웃",
        status: "1-Group ✔"
      },
      {
        badge: "Dual Technique",
        title: "PAUT 및 TOFD 동시 계측 (2-GP)",
        description: "위상배열 스캔과 Conventional TOFD(회절시간차법) 스캔 파형을 한 화면에 조율하여 모니터링합니다. 볼륨결함 탐지와 미세 균열 단부의 정밀 사이징 계측을 원패스로 수행합니다.",
        footer: "동시 병렬 기법 동기화 수집",
        status: "2-Group ✔"
      },
      {
        badge: "Complex Scan",
        title: "다중 채널 스캐너 통합 제어",
        description: "용접부 양면 듀얼 프로브 스캐너나 다채널 랙마운트 시스템의 위치 이동 궤적을 통합 매핑합니다. 다중 신호를 정렬하고 인코더 좌표를 동기화하여 연속적인 프로필을 그립니다.",
        footer: "인코더 연동 4그룹 레이아웃 확장",
        status: "Multi-Group ✔"
      }
    ]
  },
  premium: {
    badge: "PREMIUM HIGH-RESOLUTION IMAGING",
    title: "실시간 TFM (Total Focusing Method) \n & FMC (Full Matrix Capture) 기술",
    description: "기존 Phased Array 빔 포밍 기법은 정해진 소자 그룹의 물리적 초점 거리에 국한되는 한계가 있었습니다. TFM 기술은 프로브의 모든 소자 조합(Full Matrix Capture)으로부터 획득한 원시 데이터를 활용하여 관심 영역 내의 **모든 화소(Pixel) 단위에 개별적인 수렴 초점**을 가상으로 계산하여 배치합니다. 하단 탭을 통해 고정밀 TFM 스캔 화면과 전통적인 PAUT S-Scan 화면의 분해능 차이를 직관적으로 비교할 수 있습니다.",
    galleryLabel: "TFM & PAUT 교정 갤러리"
  },
  measurement: {
    badge: "MEASUREMENT & TOLERANCE",
    title: "정밀 사이징용 측정 커서 및 임계값 게이트 제어",
    description1: "화면상에 내장된 수평/수직 정밀 크로스하어 커서를 조작하여 검출된 결함의 가로 폭, 세로 깊이를 즉석에서 실시간 판독합니다. 독립적인 게이트(Gate A, B, I)를 지원하며 각 게이트별 트리거 알림 및 측정을 처리합니다.",
    description2: "게이트의 신호 취득 방식은 **Peak 및 Edge** 검출 모드를 지원합니다. 특히 **Edge(에지) 검출 모드**는 부식 지도 매핑(C-scan) 시 임계 에코의 첫 지점을 안정적으로 홀딩하여 신호 강도 감쇠나 리플로 인한 수치 튐(Jitter) 현상을 차단하고 완벽한 두께 분포 데이터를 제공합니다.",
    bullets: [
      "용도에 맞춤화된 3개 게이트(Gate A, B, I) 설정 지원 (I 게이트를 통한 표면 신호 동기화)",
      "두께 변화 계측의 수치 급변 현상을 방지하는 신호 에지 홀드 기법",
      "실시간 정보 패널 측정값 출력: 진폭(%), Primary(P), 깊이(D), 사운드 패스(S)",
      "Gate A와 B 사이의 상대 수치 차이(%, D, S) 자동 계산 및 정밀 커서 측정"
    ],
    labels: {
      cursor: "정밀 측정 커서 분석 (ΔH, ΔV)",
      keypad: "키패드를 통한 게이트 설정 오버레이"
    }
  },
  contact: {
    title: "DSVision 솔루션 도입 문의",
    description: "DSVision 라이선스 도입 견적 상담이나 기술 영업 지원이 필요하시면 정보를 입력해 주십시오. 담당 엔지니어가 신속히 답변 드리겠습니다.",
    labels: {
      name: "성함",
      company: "회사명",
      email: "이메일 주소",
      message: "문의 사항 및 요구 조건"
    },
    placeholder: "도입 수량, 연동 대상 장비, 또는 구체적인 요구 사항을 입력해 주십시오...",
    button: "DSVision 도입 문의 제출"
  }
};
