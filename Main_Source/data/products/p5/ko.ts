import p5catalogenpdfUrl from '@contents/docs/p5-catalog-en.pdf?url';
import p5catalogkopdfUrl from '@contents/docs/p5-catalog-ko.pdf?url';
import dsviewermanualpdfUrl from '@contents/docs/dsviewer-manual.pdf?url';

export const p5Data = {
  meta: {
    title: "DEEPSOUND P5 | 휴대용 위상배열 초음파(PAUT) 비파괴 검사 장비",
    description: '(주)성산연구소의 프리미엄 휴대용 PAUT 장비 DEEPSOUND P5를 소개합니다. 12.1인치 대화면, 32CH/128PR 채널 구성, 실시간 TFM/FMC 계측 및 멀티 그룹 검사 완벽 지원.'
  },
  hero: {
    badge: "플래그십 휴대용 PAUT",
    title: "DEEPSOUND P5",
    subtitle: "고성능 PAUT & TOFD 시스템",
    description: "DEEPSOUND P5는 고해상도 결함 검출을 위해 설계된 프리미엄 휴대용 위상배열 초음파(PAUT) 탐상 장비입니다. 현장 장갑 착용 시에도 정밀한 조작을 지원하는 12.1인치 광시야각 감압식 터치 스크린과 대기 시간 없는 초고속 처리 성능, 실시간 TFM/FMC 원시 데이터(Raw Data) 획득 엔진을 갖춰 가장 가혹한 비파괴 검사(NDT) 환경에 적합한 최상의 신뢰성을 제공합니다.",
    buttons: {
      quote: "견적 문의 및 상담",
      catalog: "카탈로그 다운로드 (PDF)"
    }
  },
  quickSpecs: [
    { value: "32CH/128PR", label: "PAUT 채널 구성" },
    { value: "12.1인치 터치", label: "감압식 디스플레이" },
    { value: "최대 30 kHz", label: "초고속 펄스 주파수" },
    { value: "PAUT + TOFD", label: "멀티 그룹 동시 검사" }
  ],
  features: [
    {
      badge: "PROCESSING VELOCITY",
      title: "대기 시간 없는 신속한 조작 & 최대 30kHz PRF 지원",
      description: "DEEPSOUND P5는 일반적인 NDT 장비들과 차별화되는 최적화된 하드웨어 동작 엔진을 탑재하여 현장에서 시스템 지연(Latency)이 없는 실시간 터치 반응을 제공합니다. 최대 30kHz의 높은 PRF(펄스 반복 주파수)를 기본 제공하여, 자동 인코더 스캐너 기기와 연동 시 고속 데이터 획득을 끊김 없이 안정적으로 구동합니다. 깊이 변환 제어 및 초점 법칙 각도 재계산이 실시간으로 부드럽게 구현됩니다.",
      bullets: [
        "데이터 유실 및 프레임 드랍이 없는 고밀도 실시간 신호 처리",
        "현장 조건에 맞춰 최대 30kHz까지 폭넓게 선택 가능한 PRF 대역",
        "섹터 스캔(Sectorial) 및 선형 스캔(Linear) 스티칭의 실시간 렌더링"
      ]
    },
    {
      badge: "IMAGE QUALITY",
      title: "초고해상도 빔 집속 기술 및 실시간 TFM / FMC 기능",
      description: "독자 설계된 정밀 빔포밍 하드웨어를 통해 결함 감지 신호의 선명한 종방향 분해능(Axial Resolution)을 제공하므로, 미세하게 밀집해 있는 인접 결함들도 명확히 개별 분리하여 식별할 수 있습니다. 차세대 계측 기법인 실시간 Total Focusing Method(TFM) 및 Full Matrix Capture(FMC) 획득 모듈을 제공하여, 연구 기관 및 주요 파트너사의 R&D 핵심 데이터로 추출 및 활용할 수 있도록 raw 파일 출력을 완벽히 지원합니다.",
      bullets: [
        "근접 결함 분해능을 극대화한 고해상도 빔포커싱 구현",
        "API 전용 포트를 통한 TFM/FMC 로데이터 파일의 자유로운 내보내기",
        "부식 부위 두께 차이를 컬러 코딩으로 표시하는 C-scan 부식 매핑 기본 탑재"
      ]
    },
    {
      badge: "REMOTE OPERATIONS",
      title: "기가비트 이더넷 기반 실시간 원격 제어 연동",
      description: "DEEPSOUND P5의 초고속 이더넷 원격 연결 기능을 활용하면, 접근이 어렵거나 위험한 산업 현장에 장비를 배치하고 안전한 통제실 내부의 데스크톱 또는 노트북 PC의 대화면으로 실시간 계측 프로그램을 원격 구동하여 무선/유선 제어를 수행할 수 있습니다. 분석 속도 및 컴퓨팅 리소스가 많이 요구되는 연구 작업에서도 진가를 발휘합니다.",
      bullets: [
        "실시간 유선 기가비트 LAN 원격 통신 연동",
        "고온, 고압, 좁은 통로 등 유해하고 위험한 필드 계측 작업에 필수적"
      ]
    }
  ],
  interfaceShowcase: {
    badge: "NDT SOFTWARE UI",
    title: "정밀 진단을 위한 실시간 분석 인터페이스",
    description: "DSPAUT 시스템은 비파괴 검사 전문가를 위한 고밀도 데이터 표현 방식을 지원하며, 야외 현장 반사를 방지하는 대비가 높은 어두운 테마 UI를 적용하여 뛰어난 시인성을 보장합니다.",
    screens: [
      {
        title: "실시간 두께 및 부식 맵핑 뷰",
        description: "재료의 감육 및 부식 상태를 측정하는 C-scan 두께 매핑 인터페이스입니다. 데모 시편에 음각된 \"DSPAUT\" 글자의 깊이 변화를 감지하여 컬러 코드로 표시하는 C-scan과 함께, A-scan 및 B-scan 단면을 동시에 제공하여 정밀한 두께 측정을 지원합니다."
      },
      {
        title: "멀티 그룹 PAUT + TOFD 동시 분석 뷰",
        description: "서로 다른 초점 각도를 지닌 두 개의 섹터 스캔(S-Scan)과 균열 깊이를 고밀도로 파악할 수 있는 TOFD(회절 시간선 측정) 스캔을 단일 화면에 동시에 띄워 교차 검증의 정밀도를 향상시킵니다."
      }
    ]
  },
  interfaceMap: {
    badge: "HARDWARE INTERFACE",
    title: "직관적인 기기 하드웨어 인터페이스 맵",
    description: "DEEPSOUND P5는 다양한 센서 프로브와 정밀 인코더와의 완벽한 연동성을 보장합니다. TC-ZIF 타입 또는 IPEX 타입 선택에 맞추어 맞춤 설계된 포트를 확인하세요.",
    left: {
      title: "기기 좌측 연결부 (센서 및 인코더 인터페이스)",
      items: [
        { label: "IPEX 160핀 커넥터", desc: "MiniDLP IPEX 160핀 규격의 프로브 안전 체결 연결 커넥터입니다." },
        { label: "3축 고정밀 인코더 포트 (D-sub 15핀)", desc: "자동 또는 수동 배관 스캐너의 인코더 정보를 직접 받아 스캔 거리를 트래킹합니다." },
        { label: "LEMO 00 UT 커넥터 2포트", desc: "독립적인 펄스 송수신을 담당하는 레모 00 단독 초음파 신호 포트입니다." }
      ]
    },
    right: {
      title: "기기 우측 연결부 (표준 입출력 및 전원)",
      items: [
        { label: "외부 입출력 포트 (USB, HDMI, LAN)", desc: "USB 메모리 데이터 추출, 모니터 복제 출력 및 네트워크 원격 제어를 수행합니다." },
        { label: "DC 전원 입력 단자", desc: "기기 전원 공급 및 핫스왑식 내장 배터리 충전을 위한 DC 입력 포트입니다." }
      ]
    }
  },
  applications: {
    badge: "APPLICATIONS",
    title: "주요 NDT 검사 적용 산업 분야",
    description: "DEEPSOUND P5는 까다로운 검사 조건의 핵심 산업 부문에서 정밀성과 높은 신뢰성을 발휘하여 설비의 안전성과 규격 준수를 보장합니다.",
    items: [
      { title: "발전설비 & 고온 배관", desc: "발전소 고압 증기배관 및 가스관 용접부 결함 탐지, 배관 응력 부식 균열(SCC) 및 열 피로 결함의 실시간 정밀 진단." },
      { title: "조선 & 해양 플랜트", desc: "선체 후판 용접부(Butt-weld) 완전 용입부 검사, 복잡한 곡면 관통부 연결관 구조 결함 전면 다중 채널 모니터링." },
      { title: "석유화학 & 저장 탱크", desc: "정유 플랜트 압력 용기, 증류 열 교환기 및 대형 저장 기둥 벽면 잔존 두께 계측 및 부식 분포 C-scan 매핑." },
      { title: "항공우주 & 신소재", desc: "탄소 섬유 강화 플라스틱(CFRP) 기체 구조부, 허니컴 샌드위치 복합 신소재의 내부 기포(Void) 및 층간 박리(Delamination) 분석." }
    ]
  },
  technicalSpecs: {
    title: "하드웨어 상세 사양 (Specifications)",
    categories: [
      {
        name: "일반 및 기계적 사양 (General & Mechanical)",
        rows: [
          { label: "외형 크기 (W x H x D)", value: "340 x 257 x 147 mm" },
          { label: "무게 (배터리 포함)", value: "5.9 Kg (내장 배터리 3개 장착 기준)" },
          { label: "모니터 디스플레이", value: "12.1인치 광시야각 LCD [1280 x 800], 장갑 터치 가능한 감압식 스크린" },
          { label: "전원 공급 및 배터리", value: "12V 5A 어댑터; 리튬 이온 48Wh 배터리 3팩 핫스왑 지원 (최대 4시간 구동)" }
        ]
      },
      {
        name: "초음파 계측 및 구성 사양 (Acoustic & Configuration)",
        rows: [
          { label: "위상배열(PA) 하드웨어 구성", value: "32CH/128PR 하드웨어 물리 채널" },
          { label: "유효 디지털 주파수", value: "100 MHz" },
          { label: "최대 펄스 반복 주파수 (PRF)", value: "최대 30 kHz" },
          { label: "펄서 전압 및 파형", value: "25V ~ 160V (5V 간격 조절); 양극성 바이폴라 펄스; 폭 50ns ~ 2,000ns" },
          { label: "리시버 게인 조절 범위", value: "0 dB ~ 90 dB" },
          { label: "리시버 주파수 대역폭", value: "0.5 MHz ~ 20 MHz (정밀 16-bit 해상도 샘플링)" },
          { label: "기본 지원 스캔 기법", value: "선형(Linear), 섹터(Sectorial), 일반 1-Ch UT, TOFD, 실시간 TFM/FMC (옵션)" }
        ]
      },
      {
        name: "연결 포트 및 사용 환경 (Connectivity & Environmental)",
        rows: [
          { label: "프로브 연결 커넥터", value: "MiniDLP IPEX 160핀 커넥터 x1 (UT Lemo 2포트 포함)" },
          { label: "스캐너 인코더 연결", value: "3축 인코더 입력 단자 (D-sub 15핀 3열)" },
          { label: "기타 데이터 포트", value: "기가비트 이더넷 x1, HDMI 비디오 출력 x1, USB 2.0 x1" },
          { label: "보관 및 작동 온도", value: "동작 온도: 0 ~ 60℃; 보관 온도 범위: -20 ~ 80℃" }
        ]
      }
    ]
  },
  resources: {
    title: "DEEPSOUND P5 다운로드 센터",
    items: [
      { title: "영문 브로슈어/카탈로그", type: "PDF · 1.5MB", file: p5catalogenpdfUrl },
      { title: "국문 브로슈어/카탈로그", type: "PDF · 1.6MB", file: p5catalogkopdfUrl },
      { title: "DSViewer 매뉴얼", type: "PDF · 1.8MB", file: dsviewermanualpdfUrl }
    ],
    button: "다운로드"
  },
  contact: {
    title: "DEEPSOUND P5 기기 도입 및 상담 문의",
    description: "아래 연락처 정보와 검사 요구사양(프로브 주파수, 채널 등)을 남겨주시면, 담당 기술 부서에서 신속히 견적 및 상세 솔루션 상담 연락을 드리겠습니다.",
    labels: {
      name: "이름/담당자명",
      company: "회사/연구소명",
      email: "이메일 주소",
      message: "계측 장비 요구 사항 및 상세 문의 내용"
    },
    placeholder: "사용 목적(용접부 검사, 부식 매핑 등) 또는 필요하신 센서 프로브/웨지 사양을 기술해 주세요...",
    button: "상담 및 견적 신청 제출"
  }
};
