import b3catalogenpdfUrl from '@contents/docs/b3-catalog-en.pdf?url';
import b3catalogkopdfUrl from '@contents/docs/b3-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const b3Data = {
  meta: {
    title: "DEEPSOUND B3 | 휴대용 위상배열 초음파(PAUT) 비파괴 검사 장비",
    description: "(주)성산연구소의 초경량 휴대용 PAUT 장비 DEEPSOUND B3를 소개합니다. 1.4kg 미만 초경량 디자인, 16CH/64PR 채널 구성, 실시간 용접 결함 시각화 완벽 지원."
  },
  hero: {
    badge: "기동성 특화 휴대용 PAUT",
    title: "DEEPSOUND B3",
    subtitle: "현장 특화 초경량 바디",
    description: "DEEPSOUND B3는 검사 정밀도를 타협하지 않으면서도 극대화된 현장 기동성을 실현하도록 설계된 초경량 휴대용 위상배열 초음파(PAUT) 탐상 시스템입니다. 배터리를 포함하고도 단 1.4kg에 불과하여 고소 비계 작업, 로프 액세스, 협소 구역 등 작업자의 민첩성과 안전이 요구되는 환경에서 최상의 성능을 발휘합니다.",
    buttons: {
      quote: "도입 문의",
      catalog: "국문 카탈로그 받기 (PDF)"
    }
  },
  quickSpecs: [
    { value: "1.4 kg", label: "배터리 탑재 무게" },
    { value: "16CH/64PR", label: "PAUT 채널 구성" },
    { value: "7\" 터치 LCD", label: "정전식 멀티터치" },
    { value: "최대 30 kHz", label: "펄스 반복 주파수 (PRF)" }
  ],
  features: [
    {
      badge: "ULTRA PORTABILITY",
      title: "극대화된 현장 기동성: 1.4kg 미만의 한계 돌파",
      description: "현장 비파괴 검사 시 장비의 경량화는 피로도 감소뿐 아니라 작업 안전과 직결됩니다. DEEPSOUND B3는 스마트 배터리를 포함하고도 단 1.4kg(장비 본체만 1kg 미만)에 불과하여 고소 작업이나 로프 액세스 상황에서도 완벽히 한 손 그립으로 흔들림 없이 조작이 가능합니다.",
      bullets: [
        "**한 손 제어 최적화:** 안정적인 핸드헬드 조작이 가능하도록 무게 밸런스를 맞춘 컴팩트 폼팩터입니다.",
        "**7인치 대화면 터치패널:** 우수한 시인성의 1024×600 고정밀 정전식 터치 모니터로 정밀 메뉴 이동 및 실시간 렌더링 확인이 쉽습니다.",
        "**배터리 간편 탈착:** 장시간 외부 출장 검사도 다운타임 없이 신속하게 교체할 수 있는 스마트 배터리를 탑재해 최대 4시간 연속 계측이 가능합니다."
      ]
    },
    {
      badge: "INSPECTION POWER",
      title: "정밀 비파괴 계측 및 고급 시각화 솔루션",
      description: "초소형 보드 규격임에도 정밀 빔포밍 연산 회로를 내장해 미세한 크랙 및 균열을 명확하게 분해하여 스캔합니다. 플래그십 P5 모델과 100% 동일한 수집 알고리즘 및 유저인터페이스(UI)를 적용하여 뛰어난 신뢰성을 보장합니다.",
      bullets: [
        "**용접부 시각화 기술 탑재:** 현장에서 실제 용접 배관부 형상(V, Double V 등)과 열영향부(HAZ)를 스크린에 오버레이 투영해 결함 위치를 즉각 추적합니다.",
        "**다중 그룹 동시 수집:** 최대 4개의 독립 채널 그룹을 할당해 PAUT와 TOFD를 단일 엔코더 스캔으로 통합 계측할 수 있습니다.",
        "**초고속 데이터 처리:** 최대 30kHz PRF 지원으로 빠른 스캐너 스피드 조건에서도 프레임 손실 없는 밀도 높은 데이터 캡처를 실현합니다.",
        "**직관적인 캘리브레이션:** 현장에서 음속(Velocity), 웨지 지연(Wedge Delay), TCG 보정 마법사를 지원해 높은 데이터 일관성을 제공합니다."
      ],
      imageCaption: "P5 소프트웨어 엔진 100% 호환"
    }
  ],
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "DEEPSOUND B3 기기 인터페이스 및 포트 맵",
    description: "신속한 현장 결함 검출을 위해 설계된 B3 하드웨어는 상단의 전용 프로브 포트와 하우징 후면 덮개 안쪽의 표준 통신 단자 인터페이스를 통합 제공합니다.",
    left: {
      title: "기기 상단 연결부 (센서 및 프로브 인터페이스)",
      items: [
        { label: "IPEX 160핀 커넥터", desc: "고밀도 위상배열 초음파(PAUT) 프로브를 안전하게 밀착 고정하는 메인 연결 단자입니다." },
        { label: "BNC UT 커넥터 2포트", desc: "일반 초음파 송수신 탐촉자 연결을 담당하는 단독 BNC 포트입니다." },
        { label: "인코더 / Aux 단자", desc: "수동/자동 스캐너 엔코더 신호를 받아 주행 거리 및 데이터를 동기화합니다." }
      ]
    },
    right: {
      title: "기기 후면 연결부 (표준 입출력 및 전원)",
      items: [
        { label: "기가비트 이더넷 (RJ45)", desc: "외부 PC 원격 제어 및 고속 데이터 전송을 위한 무손실 유선 LAN 포트입니다." },
        { label: "표준 USB 3.0 & Micro USB", desc: "고속 계측 데이터 파일 내보내기 및 시스템 펌웨어 업데이트를 지원합니다." },
        { label: "Micro HDMI & DC 전원 단자", desc: "스크린 미러링 디스플레이 출력 및 DC 12V 전원 케이블을 통한 핫스왑 배터리 충전 포트입니다." }
      ]
    }
  },
  technicalSpecs: {
    title: "하드웨어 상세 사양 (Specifications)",
    categories: [
      {
        name: "일반 및 기계적 사양 (General & Mechanical)",
        rows: [
          { label: "무게 (배터리 포함)", value: "1.4 Kg (스마트 배터리 1팩 장착 기준), 본체 단독 1.0 Kg 미만" },
          { label: "모니터 디스플레이", value: "7인치 광시야각 LCD [1024 x 600], 정전식 멀티 터치스크린" },
          { label: "배터리 구동 시간", value: "스마트 외장 리튬 이온 배터리 장착 기준 최대 4시간 연속 현장 구동" }
        ]
      },
      {
        name: "초음파 계측 및 구성 사양 (Acoustic & Configuration)",
        rows: [
          { label: "위상배열(PA) 하드웨어 구성", value: "16CH/64PR 하드웨어 물리 채널" },
          { label: "유효 디지털 주파수", value: "100 MHz" },
          { label: "최대 펄스 반복 주파수 (PRF)", value: "최대 30 kHz" },
          { label: "샘플 해상도", value: "16 bit" },
          { label: "기본 지원 스캔 기법", value: "선형(Linear), 섹터(Sectorial), 일반 1-Ch UT, TOFD (최대 4그룹 동시 계측 지원)" }
        ]
      },
      {
        name: "입출력 포트 (Connectivity)",
        rows: [
          { label: "연결 커넥터 및 단자", value: "USB 3.0 포트 x1, Micro HDMI 모니터 출력 x1, 2축 스캐너 인코더 입력 포트 x1" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND B3 다운로드 센터",
    items: [
      { title: "영문 브로슈어/카탈로그", type: "PDF · 2.8MB", file: b3catalogenpdfUrl },
      { title: "국문 브로슈어/카탈로그", type: "PDF · 2.8MB", file: b3catalogkopdfUrl },
      { title: "DSViewer 매뉴얼", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "다운로드"
  },
  contact: {
    title: "DEEPSOUND B3 기기 도입 및 상담 문의",
    description: "아래 연락처 정보와 검사 요구사양(배관 두께, 프로브 주파수 등)을 남겨주시면, 담당 기술 부서에서 신속히 견적 및 상세 솔루션 상담 연락을 드리겠습니다.",
    labels: {
      name: "이름/담당자명",
      company: "회사/연구소명",
      email: "이메일 주소",
      message: "계측 장비 요구 사항 및 상세 문의 내용"
    },
    placeholder: "사용 목적(고소 배관 검사, 협소부 두께 계측 등) 또는 필요하신 센서 프로브/웨지 사양을 기술해 주세요...",
    button: "상담 및 견적 신청 제출"
  }
};
