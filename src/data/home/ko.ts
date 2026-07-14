export const homeData = {
  metadata: {
    title: "(주)성산연구소 (SEONGSANLAB) - 초음파 비파괴검사(NDT) 전문 브랜드 DSPAUT",
    description: "(주)성산연구소(SEONGSANLAB)의 정밀 초음파 비파괴검사(NDT) 전문 브랜드 DSPAUT. 고정밀 휴대용 PAUT 장비(P5/B3) 및 전용 분석 소프트웨어(DSVision/DSViewer) 솔루션을 제공합니다."
  },
  hero: {
    badge: "초음파 비파괴검사 전문 브랜드: DSPAUT",
    title: "하드웨어와 소프트웨어가 융합된 <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-blue-400\">통합 NDT 솔루션 플랫폼</span>",
    description: "(주)성산연구소가 직접 연구·개발해 온 DSPAUT는 휴대용 PAUT 장비부터 다채널 랙마운트 시스템, 전용 데이터 획득(Acquisition) 및 분석 소프트웨어까지 현장 기술자들을 위한 통합 비파괴검사 솔루션을 제공합니다.",
    slides: {
      p5: {
        badge: "NDT 장비 사양",
        lcd: "12.1\" LCD",
        title: "DEEPSOUND P5",
        desc: "NDT 현장 엔지니어들의 요구사항을 반영하여 가혹한 측정 환경에서도 뛰어난 조작 편의성과 신속한 반응 속도를 제공합니다.",
        specs: ["PAUT", "TOFD", "멀티그룹"],
        swBadge: "Acquisition 소프트웨어",
        swState: "실시간 측정 중",
        swTitle: "DSVision",
        swThickness: "두께 측정: 24.5mm",
        swSens: "신호 진폭: 88% FSH"
      },
      b3: {
        badge: "최상의 가성비 모델",
        lcd: "고효율 다기능",
        title: "DEEPSOUND B3",
        desc: "실시간 수집에 필요한 핵심 기능을 중심으로 가성비를 극대화하였으며, 합리적인 도입 비용으로 프리미엄 P5급의 데이터 신뢰성을 보장합니다.",
        specs: ["가성비 특화", "고정밀 계측", "P5 연동"],
        swBadge: "컴팩트 측정 UI",
        swState: "대기 중",
        swTitle: "DSVision Mini",
        swGain: "게인 조절: 42.0 dB",
        swRange: "측정 범위: 100 mm"
      },
      t3: {
        badge: "휴대용 UT & TOFD 장비",
        lcd: "0.9kg",
        title: "DEEPSOUND T3",
        desc: "0.9kg 초경량 본체에 7인치 터치스크린을 통합하여, 협소부 검사 시 현장 기동성과 측정 효율성을 극대화합니다.",
        specs: ["1인 조작", "7.0\" 터치", "UT & TOFD 지원"],
        swBadge: "TOFD 신호 분석기",
        swState: "스캔 진행 중",
        swTitle: "DSVision TOFD",
        swScanner: "스캐너 상태: 동작 중",
        swSpeed: "스캔 속도: 50mm/s"
      },
      suite: {
        badge: "통합 분석 소프트웨어",
        lcd: "Multi-Scan",
        title: "DSViewer Suite",
        desc: "A, B, C-scan 데이터를 종합적으로 관리 및 분석하고 다차원 스캔 이미지 저장 및 CSV 형식 출력을 지원합니다.",
        specs: ["멀티 스캔 분석", "스캔 이미지 저장", "CSV 데이터 출력"],
        swBadge: "오프라인 데이터 분석기",
        swState: "스캔 분석 중",
        swTitle: "DSViewer 분석 프로그램",
        swFlaws: "결함 크기: L=12.4mm",
        swCoords: "결함 심도: Y=45.2mm"
      }
    }
  },
  quickBar: {
    tech: {
      title: "독자 기술력",
      desc: "H/W 및 S/W 자체 연구개발"
    },
    precision: {
      title: "고정밀 검사",
      desc: "PAUT 및 TOFD 멀티채널"
    },
    support: {
      title: "신속한 지원",
      desc: "B2B 포털 & 맞춤형 SDK 지원"
    },
    links: {
      hardware: "장비 라인업",
      software: "NDT 소프트웨어",
      support: "기술 지원 포털"
    }
  },
  hardware: {
    badge: "DSPAUT HARDWARE SYSTEM",
    title: "정밀 비파괴검사(NDT) 하드웨어 시스템",
    description: "휴대용 단독 PAUT 탐상 장비부터 대규모 자동화 시스템 연동을 위한 랙마운트형 OEM 보드까지, 정밀 초음파 계측을 위한 제품군을 소개합니다.",
    tabs: {
      portable: "휴대용 PAUT 및 일반 UT 장비 (Portable)",
      system: "랙마운트 시스템 보드 (OEM System)",
      accessories: "변환 어댑터 & 액세서리 (Accessories)"
    },
    portableList: {
      p5: {
        badge: "프리미엄 모델",
        title: "DEEPSOUND P5",
        desc: "12.1인치 고해상도 디스플레이와 신속한 부팅 및 지연 없는 반응 속도를 구현하여 조작성을 극대화하였습니다. 다양한 산업 현장에서 정밀한 결함 검출 성능을 제공합니다.",
        specs: [
          { label: "화면 사양", value: "12.1\" LCD" },
          { label: "하드웨어 채널", value: "32CH/128PR" },
          { label: "검사 기법", value: "PAUT + TOFD" },
          { label: "전용 프로그램", value: "DSVision 내장" }
        ],
        learnMore: "자세히 보기 ➔",
        learnMoreHref: "/ko/products/p5/",
        quote: "도입 문의"
      },
      b3: {
        badge: "최상의 가성비",
        title: "DEEPSOUND B3",
        desc: "배터리 탑재 시 2kg 미만의 초경량 설계로 휴대성을 확보하였습니다. 컴팩트한 바디 구조에 높은 도입 효율성을 제공하며, 프리미엄 P5 모델과 호환되는 수집 엔진을 탑재하였습니다.",
        specs: [
          { label: "장비 무게", value: "< 2.0kg (배터리 포함)" },
          { label: "하드웨어 채널", value: "16CH/64PR" },
          { label: "편의성", value: "컴팩트 설계" },
          { label: "투자 효율", value: "가성비 최우수" }
        ],
        learnMore: "자세히 보기 ➔",
        learnMoreHref: "/ko/products/b3/",
        quote: "도입 문의"
      },
      t3: {
        badge: "휴대용 UT & TOFD 장비",
        title: "DEEPSOUND T3",
        desc: "0.9kg 초경량 설계와 7인치 터치스크린을 결합하여 현장 기동성을 확보하였습니다. 한 손 조작이 가능하며 TOFD 검사 솔루션을 기본 탑재하여 협소부 검사 시 높은 효율성을 제공합니다.",
        specs: [
          { label: "장비 무게", value: "0.9kg (초경량)" },
          { label: "화면 크기", value: "7.0\" 터치 LCD" },
          { label: "검사 기법", value: "일반 UT + TOFD" },
          { label: "기동성", value: "한 손 조작 가능" }
        ],
        learnMore: "자세히 보기 ➔",
        learnMoreHref: "/ko/products/t3/",
        quote: "도입 문의"
      }
    },
    system: {
      badge: "랙마운트형 OEM 시스템 보드",
      title: "DEEPSOUND R5 시스템 보드",
      desc: "산업용 19인치 표준 랙에 장착이 가능하도록 설계된 R5 보드입니다. 최대 32개의 송수신(PR) 채널, 128 소자 어퍼처 및 4채널 독립 UT 포트를 제공합니다. 전용 I/O 제어 포트를 통한 다중 보드 동기화를 지원하여 맞춤형 공장 자동화 스캐너 시스템 구축을 위한 최적의 기반을 제공합니다.",
      specs: ["19\" 랙 마운트 가능", "32CH/128PR 다채널", "4채널 독립 UT", "SDK API 호환"],
      learnMore: "자세히 보기 ➔",
      learnMoreHref: "/ko/products/r5/",
      cta: "R5 사양 및 OEM 문의"
    },
    accessoriesList: {
      probe: {
        badge: "변환 어댑터",
        title: "Probe Converter: DEEPSOUND ZTO",
        desc: "타사 탐촉자 활용 시 센서 인프라 전체의 교체 부담을 덜어주는 어댑터입니다. 가볍고 튼튼한 알루미늄 바디와 정밀한 핀 맵 매핑으로 원활한 초음파 데이터 획득을 지원합니다.",
        specLabel: "IPEX 160p ↔ TC-ZIF 260p 변환",
        learnMore: "자세히 보기 ➔",
        learnMoreHref: "/ko/products/zto/",
        cta: "도입 문의"
      },
      scanners: {
        badge: "변환 어댑터",
        title: "Encoder Converter: DEEPSOUND EC",
        desc: "스캐너 엔코더 규격 불일치로 인한 신호 끊김 현상을 간편하게 해결하는 인코더 변환 어댑터입니다. 알루미늄 하우징으로 제작되어 뛰어난 내구성을 자랑합니다.",
        specLabel: "D-sub ↔ Lemo 타입 변환",
        learnMore: "자세히 보기 ➔",
        learnMoreHref: "/ko/products/ec/",
        cta: "도입 문의"
      }
    }
  },
  software: {
    badge: "NDT SOFTWARE WORKFLOW",
    title: "데이터 취득(Acquisition)부터 오프라인 분석(Analysis) 및 맞춤형 SDK 연동까지",
    description: "(주)성산연구소는 초음파 데이터를 실시간으로 정밀 수집하는 필드 획득 프로그램, 결함 데이터를 국제 규격에 맞춰 진단하는 분석 소프트웨어, 그리고 사용자 맞춤형 시스템 연동을 지원하는 SDK 개발 도구까지 통합 워크플로우를 제공합니다.",
    acquire: {
      badge: "실시간 데이터 취득",
      title: "DSVision",
      desc: "휴대용 위상배열 초음파(PAUT) 장비에 최적화된 실시간 데이터 수집 및 시각화 소프트웨어입니다. A/B/C/S-Scan 실시간 이미징 및 멀티 그룹 검출 기능으로 가혹한 현장에서도 정밀한 필드 테스트를 완벽히 지원합니다.",
      thickness: "두께 측정: 24.5mm",
      sens: "신호 진폭: 88% FSH",
      type: "장비 내장형 SW",
      cta: "자세히 보기 ➔"
    },
    analysis: {
      badge: "오프라인 분석",
      title: "DSViewer Analysis",
      desc: "현장에서 계측 완료된 데이터 파일을 정밀 분석하는 PC 전용 분석 소프트웨어입니다. 마우스 드래그를 이용한 결함 크기 및 깊이 분석 기능과 분석 화면의 고해상도 이미지 저장 기능을 제공합니다.",
      pos: "위치 측정: Y=45.2mm",
      flawSize: "결함 크기: L=12.4mm",
      flawBadge: "결함 검출",
      type: "PC용 분석 SW (오프라인)",
      cta: "자세히 보기 ➔"
    },
    sdk: {
      badge: "소프트웨어 개발 키트",
      title: "DSPAUT SDK (DSK)",
      desc: "자사 하드웨어 및 OEM 시스템 연동을 위한 라이브러리(SDK)입니다. 파트너 기업이나 대학 연구실 등에서 간편하게 맞춤형 획득 프로그램을 직접 개발할 수 있도록 C# 예제 및 API를 제공합니다.",
      codeComment: "// SEONGSANLAB DSK API 예제",
      codeLines: [
        "DSK_InitDevice(DEVICE_ID_P5);",
        "DSK_StartAcquisition();",
        "float thickness = DSK_GetThickness();"
      ],
      type: "개발 라이브러리 / API",
      cta: "자세히 보기 ➔"
    }
  },
  supportHub: {
    badge: "SEONGSANLAB FIELD PROOF & SUPPORT HUB",
    title: "현장 기술 실증 및 기술 지원 허브",
    description: "(주)성산연구소는 필드 실증(Field Proven)을 통해 검증된 초음파 NDT 기술력(PAUT)을 기반으로, 장비의 원활한 도입과 안정적인 운용을 돕기 위해 최신 기술 자료와 통합 기술 포털을 제공합니다.",
    videoBadge: "LIVE FIELD SCAN VIDEO",
    videoTitle: "실제 현장에서 가동되는 DSPAUT 기술 실증",
    videoSpecs: [
      { label: "하드웨어 채널", value: "32CH/128PR 활성 어퍼처 지원" },
      { label: "초음파 기법", value: "PAUT 및 TOFD 멀티 기술" },
      { label: "운용 프로그램", value: "DSVision 실시간 데이터 수집" },
      { label: "데이터 분석", value: "DSViewer 오프라인 분석 및 이미지 저장" }
    ],
    resourceHub: {
      badge: "INTEGRATED RESOURCE HUB",
      title: "통합 자료실 바로가기",
      desc: "DSPAUT 장비(P5, T3 등)를 제어하고 데이터를 획득·분석할 수 있는 최신 소프트웨어(DSVision) 및 개발자용 라이브러리(SDK)를 한곳에서 안전하게 다운로드하세요.",
      cta: "통합 자료실 이동 ➔"
    },
    portal: {
      badge: "SEONGSAN SUPPORT PORTAL",
      title: "기술 지원 포털 바로가기",
      desc: "장비 설명서, 최신 펌웨어/소프트웨어 패치, 기기 교정 신청 및 실무 스터디 자료를 모두 갖춘 전용 포털 사이트로 즉시 이동합니다.",
      cta: "기술 지원 포털 열기 (새 창) ➔"
    }
  },
  contact: {
    badge: "엔지니어링 & 솔루션 도입 문의",
    title: "(주)성산연구소 기술 지원 및 영업 문의",
    description: "장비 도입 단가, 소프트웨어 라이선스 신청, 혹은 초음파 검사 기법(PAUT/TOFD)에 대한 전문 상담이 필요하시면 아래 양식을 작성해 주십시오.",
    form: {
      name: {
        label: "작성자 성함 *",
        placeholder: "예: 홍길동",
        error: "성함을 입력해 주십시오."
      },
      company: {
        label: "회사명 *",
        placeholder: "예: ㈜성산비파괴검사",
        error: "회사명을 입력해 주십시오."
      },
      email: {
        label: "회사용 공식 이메일 *",
        placeholder: "name@company.com",
        errorEmpty: "이메일 주소를 입력해 주십시오.",
        errorInvalid: "유효한 이메일 형식이 아닙니다 (예: name@company.com)."
      },
      country: {
        label: "국가 / 지역 *",
        placeholder: "예: 대한민국",
        error: "국가 또는 지역을 입력해 주십시오."
      },
      inquiryType: {
        label: "문의 유형 *",
        error: "문의 유형을 선택해 주십시오.",
        placeholderOption: "-- 문의 항목을 선택해 주십시오 --",
        options: [
          { value: "quote", label: "DSPAUT 장비 견적 요청 (P5 / B3 / T3 / R5)" },
          { value: "manual", label: "제한 자료(매뉴얼 / 소프트웨어 패치) 권한 부여 요청" },
          { value: "technical", label: "초음파 계측 제어 및 엔지니어링 기술 상담" },
          { value: "partner", label: "국내외 대리점 개설 및 제휴 제안" }
        ]
      },
      message: {
        label: "문의 내용 상세 *",
        placeholder: "검사 대상을 명시하시거나 필요한 기술적 요건을 구체적으로 기재해 주시면 신속하게 답변 드리겠습니다.",
        errorEmpty: "문의 내용을 입력해 주십시오.",
        errorLength: "더 상세한 답변을 위해 최소 10자 이상 기재해 주십시오."
      },
      consent: {
        label: "본인은 (주)성산연구소가 제공하는 고객 지원 및 기술 영업 상담을 목적으로 개인정보처리방침에 의거하여 본인의 개인정보를 수집 및 처리하는 것에 동의합니다. *",
        error: "개인정보 수집 및 처리 동의에 체크하셔야 전송 가능합니다.",
        linkText: "[개인정보처리방침 보기]"
      },
      submit: {
        label: "기술 및 솔루션 도입 문의 전송",
        loading: "전송 중..."
      }
    },
    modal: {
      success: {
        title: "문의가 접수되었습니다",
        message: "성산연구소에 관심을 가져주셔서 감사합니다.<br/>입력하신 이메일(<strong>{email}</strong>)로 담당 엔지니어가 24시간 이내에 구체적인 기술 검토 의견서 및 답변을 회신드리겠습니다.",
        simulationTitle: "문의가 성공적으로 전송되었습니다 (시뮬레이션)",
        simulationMsg: "B2B 기술 영업 문의 시뮬레이션 전송이 완료되었습니다.<br/><br/><strong>[입력 정보 요약]</strong><br/>• 성함: {name}<br/>• 회사명: {company}<br/>• 이메일: <strong>{email}</strong><br/>• 문의유형: {category}<br/><br/>실제 프로덕션 배포 단계에서 정식 API 키로 교체하시면 실제 담당자 메일로 문의 내용이 발송됩니다."
      },
      error: {
        title: "전송에 실패하였습니다",
        message: "네트워크 연결 불안정 또는 오류로 인해 전송이 완료되지 않았습니다.<br/>공식 기술 영업 채널로 즉시 문의 주시면 신속히 조치하겠습니다.<br/><br/>• 메일 문의: <strong>info@dspaut.com</strong><br/>• 에러 내용: {error}"
      },
      close: "확인"
    }
  }
};
