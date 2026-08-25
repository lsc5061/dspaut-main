export const ecData = {
  meta: {
    title: "DEEPSOUND EC | 커넥터 타입 변환용 엔코더 컨버터",
    description: "스캐너 엔코더 규격 불일치로 인한 신호 끊김 현상을 해결하십시오. 가볍고 튼튼한 알루미늄 하우징의 DEEPSOUND EC 컨버터 스펙 및 카탈로그 확인."
  },
  hero: {
    badge: "스캐너 동기화 및 핀 매핑 솔루션",
    title: "DEEPSOUND EC",
    subtitle: "인코더 커넥터 변환기",
    description: "인코더를 추가 구매할 필요 없이 단 하나의 컨버터로 현장의 인코더 연동 문제를 완벽히 해결하십시오. (주)성산연구소가 개발한 DEEPSOUND EC는 스캐너 인코더의 커넥터 타입과 계측기의 입력 포트 규격 차이를 극복해 주는 고성능 알루미늄 변환 어댑터입니다.",
    buttons: {
      quote: "도입 및 사양 문의",
      specs: "기술 사양 확인"
    }
  },
  quickSpecs: [
    { value: "100 g", label: "가볍고 컴팩트한 설계" },
    { value: "300 mm", label: "케이블 표준 길이" },
    { value: "Lemo Type", label: "출력 포트 (To Instrument)" },
    { value: "알루미늄 AL", label: "견고한 메탈 케이스" }
  ],
  features: [
    {
      badge: "주요 강점",
      title: "뛰어난 내구성의 알루미늄 바디",
      description: "단단하게 고정할 수 있는 D-SUB 나사 고정식 설계와 체결이 간편한 Lemo 타입 체결 방식을 조화시켰습니다. 보관 및 이동이 간편한 핸드 그립 사이즈로 개발되어 현장 엔지니어들의 신뢰를 받고 있습니다.",
      bullets: [
        "**편리한 휴대 및 보관:** 주머니에 들어가는 작은 크기로 설계되어 비파괴 검사 가방에 부담 없이 보관할 수 있습니다.",
        "**자유로운 선택:** 단 하나의 인코더 컨버터 어댑터를 사용하여 다양한 규격의 타사 인코더 센서를 자유롭게 연결해 줍니다.",
        "**알루미늄 케이스 보호:** 일반 플라스틱 어댑터와 달리, 알루미늄 외장으로 마감하여 공사 현장과 스캐닝 환경에서 높은 내구성을 선사합니다."
      ],
      card: {
        title: "(주)성산연구소의 차별화된 기술력",
        description: "(주)성산연구소는 2011년부터 축적된 독자 노하우를 바탕으로 대한민국 최초의 산업용 PAUT 검사 장비를 공급해 왔습니다. DEEPSOUND EC는 스캐너 펄스의 정확성을 해치지 않고 계측기에 그대로 전송하여 신뢰할 수 있는 비파괴 검사 화상을 형성합니다.",
        specs: [
          { label: "제조사 및 제조국", value: "(주)성산연구소 · 대한민국" },
          { label: "주문 후 제작 기일", value: "약 3~4일의 제작 기간 소요" }
        ]
      },
      connectors: {
        lemo: "LEMO 타입 커넥터 (12핀)",
        dsub: "D-SUB 타입 커넥터 (15핀)"
      }
    }
  ],
  technicalSpecs: {
    title: "Technical Specifications (기술 사양)",
    categories: [
      {
        name: "신호 및 전기적 성능",
        rows: [
          { label: "엔코더 신호 유형", value: "TTL Incremental (A/B 위상 정렬)" },
          { label: "최대 주파수 대역폭", value: "500 kHz (고속 크롤러 스캐너 완벽 펄스 매핑)" }
        ]
      },
      {
        name: "기계 사양 및 환경 강도",
        rows: [
          { label: "입력 포트 (Port Input)", value: "D-SUB type (스캐너 연결 측)" },
          { label: "출력 포트 (Port Output)", value: "LEMO type (계측기/장비 연결 측)" },
          { label: "하우징 소재", value: "CNC 정밀 가공 아노다이징 알루미늄 (AL)" },
          { label: "케이블 길이 (Cable Length)", value: "300 mm" },
          { label: "중량 (Weight)", value: "100g (초경량 변환 장치)" }
        ]
      }
    ]
  },
  connectionFlow: {
    badge: "CONNECTION FLOW",
    title: "DEEPSOUND EC 연결 흐름 및 외장 설계",
    description: "인코더와 계측기 간의 연결 경로 및 컨버터 외형 구조를 보여줍니다.",
    diagramLabel: "인코더 컨버터 연결 흐름도",
    perspectiveLabel: "제품 외관 뷰",
    note: "* 해당 흐름도는 스캐너 엔코더 센서 신호가 계측기로 변환 및 인가되는 흐름을 모사합니다."
  },
  contact: {
    title: "DEEPSOUND EC 도입 문의",
    description: "현장 검사 시 사용할 스캐너 및 연결하고자 하는 DSPAUT 계측기 모델을 하단 폼에 남겨 주시면, 핀 맵 매핑 설계팀에서 최적화 규격을 조합하여 견적과 함께 연락 드리겠습니다.",
    labels: {
      name: "이름 *",
      company: "회사명 *",
      email: "회사 이메일 주소 *",
      message: "문의 내용 (스캐너 모델 및 커넥터 규격 등) *"
    },
    placeholder: "예: Olympus Cobra 스캐너(DB15 수 단자)의 인코더 입력을 DEEPSOUND P5 모델에 연결하여 스캔하려고 합니다...",
    button: "문의하기"
  }
};
