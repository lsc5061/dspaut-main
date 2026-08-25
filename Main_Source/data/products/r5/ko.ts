import r5catalogenpdfUrl from '@contents/docs/r5-catalog-en.pdf?url';
import r5catalogkopdfUrl from '@contents/docs/r5-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const r5Data = {
  meta: {
    title: "DEEPSOUND R5 | 자동화 및 연구용(R&D) 고성능 위상배열 초음파(PAUT) 시스템 보드",
    description: "(주)성산연구소의 고성능 OEM 랙마운트 PAUT 엔진 DEEPSOUND R5를 소개합니다. 19인치 표준 랙마운트 지원, 32CH/128PR 다채널 확장성, 전용 DSK API/SDK 제공."
  },
  hero: {
    badge: "공장 자동화 및 연구소(R&D) 특화 엔진",
    title: "DEEPSOUND R5",
    subtitle: "랙마운트형 고성능 OEM 보드",
    description: "DEEPSOUND R5는 공장 자동화 제조 생산 라인 및 고등 학수 R&D 환경에 통합되도록 최적화 설계된 최고 사양의 19인치 랙마운트형 위상배열 초음파(PAUT) 시스템 보드입니다. 성산연구소의 초고속 전하 수집 아키텍처와 뛰어난 데이터 입출력 제어 포트를 제공하여 자동화 설비 전수 검사 및 심층 R&D 프로그램 구축에 완벽한 기반을 제공합니다.",
    buttons: {
      quote: "R5 사양 및 OEM 도입 문의",
      catalog: "국문 카탈로그 받기 (PDF)"
    }
  },
  quickSpecs: [
    { value: "19\" Rack", label: "랙마운트 표준 슬롯" },
    { value: "32CH/128PR", label: "PAUT 채널 사양" },
    { value: "최대 30 kHz", label: "최대 PRF 주파수" },
    { value: "DSK 제공", label: "C# API" }
  ],
  features: [
    {
      badge: "SCALABLE ARCHITECTURE",
      title: "우수한 산업용 확장성: 19인치 표준 랙마운트 보드 설계",
      description: "공장의 기존 자동화 패널 랙 캐비닛에 조립하여 다수의 보드를 수직 적층 운용할 수 있습니다. 랙 구조 내 독립적인 전력 제어와 함께 내부에 자체 단독 PC를 탑재하고 있어 복잡한 연결 장치 없이 모니터를 직접 HDMI 포트에 물려 검사 시스템을 가동할 수 있습니다.",
      bullets: [
        "**19인치 랙 표준 호환성:** 표준 장비 랙에 마운팅하여 다채널 시스템을 컴팩트하고 깔끔하게 레이아웃할 수 있습니다.",
        "**임베디드 PC 단독 구동:** 슬림한 프레임 내부에 계측 PC 시스템이 내장되어 외부 컨트롤 디바이스를 주렁주렁 연결할 필요가 없습니다.",
        "**멀티 채널 동기화 확장:** 공장 컨베이어 라인 및 용접 전수 조사 자동화 구조에 맞춤형으로 32ch 보드 단위를 연동 및 확장합니다."
      ]
    },
    {
      badge: "C# SYSTEM INTEGRATION",
      title: "강력한 다채널 신호 연산 및 유연한 C# DSK 개발 라이브러리",
      description: "DEEPSOUND R5는 다채널 초음파 탐상 신호의 정밀한 연산과 가공을 위한 고성능 하드웨어 아키텍처를 제공합니다. 32CH/128PR 위상배열 초음파(PAUT)와 4채널 일반 초음파(Conventional UT)에서 입력되는 방대한 신호를 병목 없이 실시간으로 연산하며, 공장 자동화 프로그램 및 커스텀 검사 시스템 개발을 위한 C# 전용 DSK API/SDK를 완벽하게 지원합니다.",
      bullets: [
        "**32CH/128PR 하드웨어 성능:** 리니어 스캔, 섹터 스캔 및 일반 단일 초음파 스캔 신호를 손실 없이 처리합니다.",
        "**C# 기반 DSK SDK 라이브러리:** 닷넷(.NET) 환경에 최적화된 API 클래스를 통해 설비 제어 알고리즘과 전용 UI 화면을 신속하게 구축할 수 있습니다.",
        "**실시간 이더넷 데이터 스트리밍:** 계측된 초음파 원시 데이터(Raw Data)를 1Gbps LAN 대역폭을 통해 원격 PC로 실시간 지연 없이 전송합니다."
      ],
      codeSnippet: {
        filename: "dsk_api_example.cs",
        code: `using System;
using DEEPSOUND;

// Initialize R5 OEM Board via DSK
DSK.InitDsk();
bool isReady = DSK.InitDevice();

if (isReady) {
    // Configure hardware parameters
    DSK.SetGain(45.0);
    DSK.SetPulseVoltage(120);
    
    // Apply parameters to hardware
    DSK.UploadAllParameters();
}`
      }
    }
  ],
  applications: {
    badge: "KEY APPLICATIONS",
    title: "주요 적용 산업 분야",
    description: "DEEPSOUND R5 Phased Array 엔진은 대량 생산 자동화 라인의 인라인 검사와 독자적인 NDT 연구 개발 플랫폼에 최적화되어 있습니다.",
    items: [
      {
        icon: "🏭",
        title: "인라인 자동화 전수 검사",
        desc: "산업용 로봇 암 및 팩토리 컨베이어 벨트와 연동되어 자동차 부품, 철강 구조물, 튜브 파이프 등의 자동 용접 품질 검사를 24시간 중단 없이 수행합니다."
      },
      {
        icon: "✈️",
        title: "항공우주 및 복합재 검사",
        desc: "수조(Water-Immersion) 및 고정밀 갠트리(Gantry) 스캐너 시스템과 결합하여 카본 복합소재(CFRP)나 항공 동체 날개의 미세 균열 및 박리를 C-scan으로 초고해상도로 이미징합니다."
      },
      {
        icon: "🔬",
        title: "NDT R&D 및 커스텀 연구",
        desc: "대학 연구실 및 시스템 통합(SI) 기업을 위해 완전 개방된 DSK SDK를 제공하여, 독자적인 알고리즘 테스트 및 사용자 정의 비파괴 탐상 프로그램을 유연하게 프로그래밍할 수 있습니다."
      },
      {
        icon: "🚄",
        title: "철도 및 교통 인프라 검사",
        desc: "철도 차량의 차륜, 차축(Axle), 그리고 선로 자체의 균열 검사를 위해 고속 주행식 자동 검사 센서 어셈블리와 다채널로 동기화되어 결함을 정밀 스캔합니다."
      }
    ]
  },
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "DEEPSOUND R5 하드웨어 인터페이스 및 포트 맵",
    description: "DEEPSOUND R5의 전면 패널에는 위상배열(PAUT) 및 일반 초음파 탐상 프로브 커넥터가 배치되어 있으며, 후면 패널에는 고속 통신, 전원 및 다축 인코더 연동을 위한 I/O 포트가 구성되어 있습니다.",
    left: {
      title: "전면부 패널 (센서 커넥터 및 제어)",
      items: [
        { label: "위상배열 초음파(PAUT) 고밀도 커넥터", desc: "최대 32CH/128PR 사양의 Phased Array 프로브를 직접 장착하여 다채널 실시간 빔 포커싱 스캔을 수행합니다." },
        { label: "4채널 일반 초음파(Conventional UT) 포트", desc: "두께 계측 및 TOFD(Time-Of-Flight Diffraction) 검사를 위한 4개의 독립 수발신 LEMO 00 단자입니다." },
        { label: "전원 스위치 및 LED 상태 표시등", desc: "백라이트 전원 푸시 버튼과 시스템 자가진단 및 통신 상태를 표시하는 3개의 LED 인디케이터입니다." }
      ]
    },
    right: {
      title: "후면부 패널 (I/O, 디스플레이 및 고속 통신)",
      items: [
        { label: "DB25 다기능 I/O 및 인코더 단자", desc: "최대 3축(3-Axis) 인코더 하드웨어 입력 및 외부 모션 제어 스캐너 동기화용 트리거 핀을 제공합니다." },
        { label: "듀얼 모니터 출력 (HDMI & VGA)", desc: "실시간 스캔 뷰어(DSVision) 및 제어 프로그램을 외부 디스플레이로 송출하기 위한 비디오 포트입니다." },
        { label: "기가비트 이더넷 및 USB 3.0", desc: "원시 데이터 실시간 전송을 위한 LAN 연결 및 하드웨어 라이브러 연동용 USB 포트입니다." }
      ]
    }
  },
  technicalSpecs: {
    title: "하드웨어 상세 사양 (Specifications)",
    categories: [
      {
        name: "일반 및 기계적 사양 (General & Mechanical)",
        rows: [
          { label: "장비 형태 분류", value: "19인치 표준 랙마운트형 멀티보드 설계" },
          { label: "PC 시스템 사양", value: "임베디드 단독 구동형 산업용 PC 내장" },
          { label: "내장 운영체제", value: "Windows Embedded / Linux OS 지원" }
        ]
      },
      {
        name: "초음파 계측 및 구성 사양 (Acoustic & Configuration)",
        rows: [
          { label: "위상배열(PA) 하드웨어 구성", value: "32CH/128PR 물리 채널" },
          { label: "일반 초음파 (Conventional UT)", value: "4 채널 지원 (LEMO 00 단자)" },
          { label: "펄서 주파수 및 전압", value: "바이폴라 펄스 타입 (25V ~ 190V 어드저스터블)" },
          { label: "유효 디지털 주파수", value: "100 MHz" },
          { label: "최대 펄스 반복 주파수 (PRF)", value: "최대 30,000 Hz (30 kHz)" },
          { label: "샘플 해상도", value: "16 bit" },
          { label: "개발 프로그램 지원", value: "전용 DSK (API/SDK), 커스텀 UI 및 연산 라이브러리 연동" }
        ]
      },
      {
        name: "입출력 포트 및 응용 분야 (Connectivity & Applications)",
        rows: [
          { label: "연결 커넥터 및 단자", value: "초고속 기가비트 LAN 포트, HDMI 영상 출력, USB 3.0 포트, 3축 인코더 입력 단자" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND R5 다운로드 센터",
    items: [
      { title: "영문 브로슈어/카탈로그", type: "PDF · 1.4MB", file: r5catalogenpdfUrl },
      { title: "국문 브로슈어/카탈로그", type: "PDF · 1.5MB", file: r5catalogkopdfUrl },
      { title: "DSViewer 매뉴얼", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "다운로드"
  },
  contact: {
    title: "DEEPSOUND R5 기기 도입 및 상세 상담 문의",
    description: "아래 연락처 정보와 필요하신 검사 사양(배관 규격, 주파수 등)을 남겨주시면, 담당 기술 부서에서 신속히 견적 및 상세 솔루션 상담 연락을 드리겠습니다.",
    labels: {
      name: "이름/담당자명",
      company: "회사/연구소명",
      email: "이메일 주소",
      message: "계측 장비 요구 사항 및 상세 문의 내용"
    },
    placeholder: "사용 목적(로봇 암 인라인 자동 스캔, 복합소재 전수 검사 수조 장비 등) 또는 필요하신 센서 프로브/웨지 사양을 기술해 주세요...",
    button: "상담 및 견적 신청 제출"
  }
};
