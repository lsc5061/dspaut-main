export const ztoData = {
  meta: {
    title: "DEEPSOUND ZTO | 타사 탐촉자 호환용 프로브 컨버터",
    description: "타사 표준 Phased Array 탐촉자를 DSPAUT 장비에 원활하게 결합하십시오. 수입 제품 대비 30~40% 저렴한 단가와 알루미늄 외장 내구성 제공."
  },
  hero: {
    badge: "비파괴 하드웨어 호환성 솔루션",
    title: "DEEPSOUND ZTO",
    subtitle: "휴대용 프로브 컨버터",
    description: "기존에 보유하고 계신 탐촉자 자산을 보호하고, 장비가 바뀔 때마다 초음파 센서를 새로 구매해야 했던 불편을 완벽하게 해결하십시오. (주)성산연구소가 자체 개발한 DEEPSOUND ZTO는 타사 표준 규격의 IPEX 160핀 탐촉자를 DSPAUT 전용 260핀 ZIF 계측기 포트와 원활하게 연결해 주는 프리미엄 컴팩트 어댑터입니다.",
    buttons: {
      quote: "도입 및 사양 문의",
      specs: "기술 사양 확인"
    }
  },
  quickSpecs: [
    { value: "240 g", label: "가볍고 컴팩트한 설계" },
    { value: "IPEX 160p", label: "입력 포트 (Female)" },
    { value: "TC-ZIF 260p", label: "출력 포트 (Male)" },
    { value: "알루미늄 AL", label: "충격에 강한 하우징" }
  ],
  features: [
    {
      badge: "높은 경제성 및 유연성",
      title: "검증된 센서는 그대로 사용하고,\n계측 장비만 빠르게 업그레이드",
      description: "맞춤형 Phased Array 탐촉자는 교체 비용이 매우 큽니다. DEEPSOUND ZTO는 컴팩트하고 유연한 케이블 일체형 아키텍처로 제작되어 공간이 협소하고 환경이 열악한 현장에서도 매우 뛰어난 사용 편의성을 제공합니다.",
      bullets: [
        "**획기적인 예산 절감:** 비싼 해외 수입 제품이나 신규 탐촉자 구매 대비 약 30%~40% 저렴한 단가로 동일한 신호 감도 획득이 가능합니다.",
        "**안전한 내구성:** 아노다이징 코팅 처리된 금속 쉴드 바디로 제작되어, 현장의 외부 충격으로부터 내부 회로를 견고하게 보호합니다.",
        "**폭넓은 활용성:** 기존에 보유한 다양한 사양의 타사 프로브 테스트 및 장치 다변화에 최적의 대안입니다."
      ],
      card: {
        title: "(주)성산연구소 원천 기술",
        description: "(주)성산연구소는 2011년부터 축적해 온 독자적인 PAUT 초음파 진단 설계 기술을 보유하고 있습니다. DEEPSOUND ZTO는 정밀한 임피던스(50 Ω) 정렬과 내부 정밀 동축 회로 차폐 기술을 통해 신호 반사 및 간섭을 최저 수준으로 관리합니다.",
        specs: [
          { label: "제조사 및 제조국", value: "(주)성산연구소 · 대한민국" },
          { label: "신호 차폐 등급", value: "동축 이중 차폐(Double Shielded) 회로" }
        ]
      },
      connectors: {
        plug: "래치 락 인터페이스 (260P)",
        adapter: "어댑터 모듈 (ZTO-260P)"
      }
    }
  ],
  technicalSpecs: {
    title: "Technical Specifications (기술 사양)",
    categories: [
      {
        name: "신호 및 전기적 성능",
        rows: [
          { label: "신호 감쇄율 (Attenuation)", value: "< 0.2 dB (5 MHz 기준, 0.5-15 MHz 대역 호환)" },
          { label: "임피던스 (Impedance)", value: "50 Ω 표준 매칭" },
          { label: "최대 매핑 소자 수", value: "128 소자 대응 (16:64, 32:128 등 완벽 호환)" }
        ]
      },
      {
        name: "기계 사양 및 커넥터",
        rows: [
          { label: "입력 포트 (탐촉자 연결부)", value: "IPEX minidock 160핀 (Omniscan 등 타사 표준 규격, Female)" },
          { label: "출력 포트 (계측기 연결부)", value: "TC-ZIF 260핀 (DSPAUT 오리지널 매핑, Male)" },
          { label: "하우징 소재", value: "정밀 CNC 가공 아노다이징 알루미늄 (AL)" },
          { label: "제품 크기 (Dimensions)", value: "84.6 mm (가로) × 67.3 mm (세로) × 25.4 mm (두께)" },
          { label: "중량 (Weight)", value: "240g (휴대형 소형 규격)" }
        ]
      }
    ]
  },
  connectionFlow: {
    badge: "CONNECTION FLOW",
    title: "DEEPSOUND ZTO 연결 흐름 및 외관 사시도",
    description: "탐촉자 및 센서의 입출력 신호를 매핑해주는 어댑터의 다이어그램 구성 및 프리미엄 외관 설계입니다.",
    diagramLabel: "P5 계측 장비 결합 예시",
    perspectiveLabel: "Product Perspective View",
    note: "* 해당 3D 시각 자료는 실제 제품의 내부 동축 쉴드 구조와 와이어 커플링 유닛 배치를 모사한 기술 렌더링입니다."
  },
  contact: {
    title: "DEEPSOUND ZTO 도입 문의",
    description: "보유 중인 타사 탐촉자의 제조사 및 모델명, 그리고 연결하려는 DSPAUT 장비 모델명을 입력해 주시면 기술 지원팀에서 견적 및 맞춤 매핑 가능 여부를 검토하여 회신 드리겠습니다.",
    labels: {
      name: "이름 *",
      company: "회사명 *",
      email: "회사 이메일 주소 *",
      message: "문의 내용 (보유 중인 탐촉자 모델명 등) *"
    },
    placeholder: "예: Olympus 5L64-A12 탐촉자를 보유 중이며, DEEPSOUND B3 모델에 연결해 검사하고자 합니다...",
    button: "문의하기"
  }
};
