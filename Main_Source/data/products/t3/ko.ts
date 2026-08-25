import t3catalogenpdfUrl from '@contents/docs/t3-catalog-en.pdf?url';
import t3catalogkopdfUrl from '@contents/docs/t3-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const t3Data = {
  meta: {
    title: "DEEPSOUND T3 | 휴대용 일반 초음파(UT) 및 TOFD 비파괴 검사 장비",
    description: "(주)성산연구소의 초경량 휴대용 UT/TOFD 장비 DEEPSOUND T3를 소개합니다. 0.9kg 초경량 디자인, 7인치 터치 모니터, TOFD 및 정밀 두께/결함 계측 완벽 지원."
  },
  hero: {
    badge: "초경량 일반 UT & TOFD 탐상기",
    title: "DEEPSOUND T3",
    subtitle: "한계 극복 초경량 정밀 계측",
    description: "DEEPSOUND T3는 기존 산업용 비파괴 검사 장비의 무게 장벽을 허무는 동급 최강의 휴대용 Conventional 초음파 탐상기(UT)입니다. 배터리를 포함하고도 단 0.9kg에 불과한 혁신적인 초경량 바디와 정밀 인코더 인터페이스를 내장하여, 고소 비계 작업 및 협소부에서 한 손으로 안전하게 TOFD 및 두께 계측 임무를 완수할 수 있습니다.",
    buttons: {
      quote: "도입 문의",
      catalog: "국문 카탈로그 다운로드 (PDF)"
    }
  },
  quickSpecs: [
    { value: "0.9 kg", label: "스마트 배터리 탑재 무게" },
    { value: "3,000 Hz", label: "최대 PRF 주파수" },
    { value: "7\" 터치 LCD", label: "고휘도 정전식 패널" },
    { value: "UT & TOFD", label: "핵심 검사 솔루션" }
  ],
  features: [
    {
      badge: "FEATHERWEIGHT DESIGN",
      title: "놀라운 0.9kg 무게: 동급 최강의 초경량 컴팩트 설계",
      description: "장시간 현장 계측 및 스캔 시 작업자가 느끼는 물리적 피로도를 극적으로 줄였습니다. 스마트 배터리를 포함하고도 단 0.9kg의 깃털 같은 무게로 마감하여 비계 구조물에 매달리거나 협소한 파이프 갤러리 내부에서도 한 손으로 안정적으로 파지하고 수치 조절을 처리할 수 있습니다.",
      bullets: [
        "**한 손 계측 최적화:** 신체 부담을 혁신적으로 덜어주어 기동성과 검사 효율성을 강화합니다.",
        "**7인치 고해상도 모니터:** 햇빛 아래에서도 또렷한 1024×600 정전식 터치 모니터로 A-Scan 그래프를 정밀 뷰잉합니다.",
        "**우수한 실시간 연속성:** 47.52Wh 지능형 배터리를 탑재해 1회 완충 기준 최대 5시간 연속 작업을 지원합니다."
      ]
    },
    {
      badge: "PRECISION IMAGING",
      title: "전문가용 일반 UT 및 차세대 TOFD 계측 이미징",
      description: "DEEPSOUND T3는 정밀 두께 측정과 결함 분석에 초점을 맞추어 설계되었습니다. 기기 자체에 2축 엔코더 입력 포트가 내장되어 있어 현장에서 스캐너와 연동하여 신뢰성 높은 고해상도 TOFD 원시 이미지 데이터를 기록하고 저장할 수 있습니다.",
      bullets: [
        "**실시간 TOFD 스캔:** 수동/자동 엔코더 연동을 통하여 스크린상에 결함 징후를 추적 기록(B-Scan 수집)합니다.",
        "**고밀도 파형 전송:** 3,000Hz PRF 대역 및 16-bit 샘플링 연산으로 미세 신호 노이즈를 억제하여 우수한 펄스 경계를 출력합니다.",
        "**게이트 매핑 및 캘리브레이션:** 속도(Velocity), 웨지 지연(Wedge Delay), DAC 곡선 생성 및 2축 엔코더 설정 마법사 탑재."
      ]
    }
  ],
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "DEEPSOUND T3 하드웨어 인터페이스 및 포트 맵",
    description: "DEEPSOUND T3의 상단부에는 초음파 센서 및 인코더 연결 포트가, 우측 패널에는 전원 및 데이터 전송을 위한 통신 인터페이스가 배치되어 있습니다.",
    left: {
      title: "상단 연결부 (센서 프로브 및 인코더 단자)",
      items: [
        { label: "듀얼 BNC UT 커넥터", desc: "Conventional UT 및 TOFD 검사용 수발신 프로브 연결을 위해 최적화된 BNC 포트입니다." },
        { label: "인코더 / Aux 인터페이스", desc: "검사 거리 계측 및 자동/수동 스캐너 동기화를 위한 다기능 인코더 입력 포트입니다." }
      ]
    },
    right: {
      title: "우측 패널부 (입출력 및 전원 단자)",
      items: [
        { label: "기가비트 이더넷 (RJ45)", desc: "원격 PC 제어 및 초고속 검사 데이터 실시간 동기화를 위한 네트워크 포트입니다." },
        { label: "표준 USB 3.0", desc: "신속한 데이터 백업, 리포트 추출 및 시스템 펌웨어 업데이트를 지원합니다." },
        { label: "DC 12V 전원 입력 단자", desc: "어댑터 전원 상시 공급 및 내장 스마트 배터리 충전을 위한 전원 잭입니다." }
      ]
    }
  },
  technicalSpecs: {
    title: "하드웨어 상세 사양 (Specifications)",
    categories: [
      {
        name: "일반 및 기계적 사양 (General & Mechanical)",
        rows: [
          { label: "장비 형태 분류", value: "휴대용 초음파 탐상기 (Portable Conventional UT)" },
          { label: "무게 (배터리 포함)", value: "0.9 Kg" },
          { label: "모니터 디스플레이", value: "7인치 광시야각 LCD [1024 x 600], 정전식 멀티 터치스크린" },
          { label: "배터리 구동 시간", value: "47.52Wh 스마트 배터리 탑재 기준 최대 5시간 연속 구동" }
        ]
      },
      {
        name: "초음파 계측 및 구성 사양 (Acoustic & Configuration)",
        rows: [
          { label: "최대 펄스 반복 주파수 (PRF)", value: "최대 3,000 Hz (3 kHz)" },
          { label: "샘플 해상도", value: "16 bit" },
          { label: "펄서 주파수 및 전압", value: "바이폴라 펄스 타입 (25V ~ 160V 어드저스터블)" },
          { label: "기본 지원 스캔 기법", value: "Conventional UT, TOFD (A-Scan, B-Scan, C-Scan 기법 지원)" }
        ]
      },
      {
        name: "입출력 포트 (Connectivity)",
        rows: [
          { label: "연결 커넥터 및 단자", value: "2축 인코더 입력 단자 x1, 기가비트 LAN 포트 x1, USB 3.0 포트 x1" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND T3 다운로드 센터",
    items: [
      { title: "영문 브로슈어/카탈로그", type: "PDF · 2.1MB", file: t3catalogenpdfUrl },
      { title: "국문 브로슈어/카탈로그", type: "PDF · 2.2MB", file: t3catalogkopdfUrl },
      { title: "DSViewer 매뉴얼", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "다운로드"
  },
  contact: {
    title: "DEEPSOUND T3 기기 도입 및 상담 문의",
    description: "아래 연락처 정보와 필요하신 검사 사양(배관 규격, 주파수 등)을 남겨주시면, 담당 기술 부서에서 신속히 견적 및 상세 솔루션 상담 연락을 드리겠습니다.",
    labels: {
      name: "이름/담당자명",
      company: "회사/연구소명",
      email: "이메일 주소",
      message: "계측 장비 요구 사항 및 상세 문의 내용"
    },
    placeholder: "사용 목적(고소 파이프 용접 검사, 협소 구역 두께 계측 등) 또는 필요하신 센서 프로브/웨지 사양을 기술해 주세요...",
    button: "상담 및 견적 신청 제출"
  }
};
