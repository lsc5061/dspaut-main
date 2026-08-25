export const dskData = {
  meta: {
    title: "DSPAUT SDK (DSK) | C# 초음파 애플리케이션 개발 라이브러리 및 API",
    description: "(주)성산연구소의 고성능 초음파 소프트웨어 개발 키트 DSPAUT SDK (DSK)를 소개합니다. C# 및 .NET 8.0 기반의 고속 프레임 데이터 수집, 실시간 S-Scan 변환 및 다축 엔코더 정렬 지원."
  },
  hero: {
    badge: "C# / .NET 8.0 & .NET Framework 4.5.2 공식 지원",
    title: "DSPAUT SDK (DSK)",
    subtitle: "C# 초음파 제어 라이브러리",
    description: "DSPAUT SDK (DSK)는 자사의 고성능 위상배열 초음파(PAUT) 장비군(DEEPSOUND P5, B3, R5 등)의 계측 엔진을 소프트웨어 단에서 직접 핸들링하고, 실시간 초음파 수집 데이터를 맞춤형으로 획득 및 가공할 수 있도록 설계된 C# 전용 개발 키트입니다. `SVDSK.dll` 어셈블리와 직관적인 API 예제를 제공합니다.",
    buttons: {
      inquire: "SDK 라이선스 문의",
      support: "기술 지원 포털 이동"
    },
    image: {
      caption: "App: 10-SimplePAUT 종합 계측 모듈",
      status: "Active"
    }
  },
  quickSpecs: [
    { value: "using DSPAUT;", label: "단일 네임스페이스 및 어셈블리" },
    { value: "Rx Callback Frame", label: "실시간 프레임 수집용 콜백 메서드" },
    { value: "CalcSScanImage", label: "실시간 S-Scan 이미지 스캔 변환" },
    { value: "Scan/Index Encoder", label: "자동 탐상을 위한 다축 엔코더 제어" }
  ],
  features: [
    {
      badge: "LIBRARY STRUCTURE",
      title: "직관적인 SDK 참조 추가 및 개발 구조",
      description: "Windows 10 환경에서 Visual Studio 2017 이상을 활용하여 누구나 손쉽게 초음파 검사용 소프트웨어를 빌드할 수 있습니다. 메인 라이브러리인 `SVDSK.dll`과 공통 모듈인 `DskCommon`을 프로젝트 참조(Reference)에 등록하고, 빌드 출력 경로(`../Bin/Release_x86`)에서 기동하도록 설계되었습니다. 실행 경로 상위 디렉토리에 `CommonResource`가 구성되어 리소스 독립성이 보장됩니다.",
      bullets: [
        "C# .NET 8.0(및 4.5.2) 개발 환경 완벽 지원",
        "using DSPAUT; 네임스페이스 및 SVDSK.dll을 통한 다이렉트 디바이스 제어",
        "실시간 디버깅 및 문제 추적을 위한 Log2console 시스템 유기적 연동"
      ],
      reverseLayout: true
    },
    {
      badge: "PHYSICAL LEVEL CONTROLS",
      title: "하위 레벨 물리 파라미터 및 게이트 설정",
      description: "초음파 탐촉자 구동을 위한 펄서-수신기 하드웨어를 소프트웨어 레벨에서 세밀하게 제어할 수 있습니다. 게인(Gain), 디지털 주파수 변환(Digitizing Index), PRF(펄스 반복 주파수), 송신 전압(Voltage: 25V ~ 200V)을 변경하며, 특히 Bipolar 펄스 파형 제어를 적용하여 감쇠가 극심한 부위에 결함 검출력을 높이는 Burst Count(1~5회) 설정 기능도 제공합니다.",
      bullets: [
        "독립적인 3개 인터페이스 게이트(Gate A / B / I)의 실시간 위치, 범위, 임계값 제어",
        "송수신 엘리먼트 정렬(Transmitter/Receiver Start-Stop) 및 프로브 주파수 대역 필터 제어",
        "다중 Vector 데이터를 묶는 Channel Group 구조 및 Rx 콜백을 통한 데이터 고속 전달"
      ],
      reverseLayout: false
    }
  ],
  tutorials: {
    badge: "DSK TUTORIALS",
    title: "핵심 개발 튜토리얼 5종 패키지",
    description: "DSK 설치 즉시 Visual Studio에서 실행할 수 있는 실무용 샘플 코드입니다. 기초적인 하드웨어 기동부터 고난이도의 PAUT 데이터 가공 및 모니터링 기능까지 순차적으로 정렬되어 있습니다.",
    items: [
      {
        id: "TUTORIAL 01",
        title: "01-InitDevice",
        subtitle: "장치 초기화 및 실시간 데이터 수신",
        description: "`InitDsk` 및 `InitDevice` 함수를 통해 초음파 하드웨어를 기동하고, 수집 채널을 활성화하여 데이터를 전송받는 기본 구조입니다. `Dsk.Freeze` 및 `UnFreeze` 프로퍼티를 사용하여 데이터 획득 흐름을 일시 정지하거나 복구하는 제어를 수행합니다.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 02",
        title: "02-SScan",
        subtitle: "실시간 S-Scan 이미지 스캔 변환",
        description: "수신된 데이터 행렬을 모니터 화면 크기에 적합한 부채꼴 좌표의 2D 이미지로 맵핑하는 스캔 변환(Scan Conversion) 예제입니다. `GetSScanWidth`/`Height`로 이미지 치수를 수집하고 `CalcSScanImage` 함수를 통해 2D byte 그래픽 배열을 연산합니다.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 03",
        title: "03-AScan",
        subtitle: "특정 벡터 A-Scan 파형 렌더링",
        description: "설정된 빔 각도(Vector) 중 검사자가 선택한 특정 인덱스 위치의 초음파 신호 진폭을 실시간으로 추출합니다. 추출한 신호 배열을 바탕으로 모니터링 화면에 비트맵 기반의 선형 A-Scan 그래프를 정교하게 드로잉합니다.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 04",
        title: "04-Inspection",
        subtitle: "다축 엔코더 정렬 및 이동 동기 탐상",
        description: "자동화 갠트리 및 기계식 수동 스캐너 축과 동기화하여 데이터를 수집하는 환경을 구축합니다. `SetScanEncoder`를 통해 스캔 시작/종료 한계점, 진행 스텝(Step) 및 해상도를 입력하고, 엔코더가 연산한 축 이동 거리(mm) 상태값을 화면에 트래킹합니다.",
        colSpan: 1
      },
      {
        id: "TUTORIAL 10",
        title: "10-SimplePAUT",
        subtitle: "파라미터 Setup JSON 저장 및 종합 모니터링",
        description: "모든 개별 조작 함수가 완전한 GUI 프로그램으로 집약된 튜토리얼의 최종 단계입니다. 파라미터 설정을 손쉽게 불러오고 저장하는 `JsonFile2Object` 직렬화 구현, 다중 게이트 판정값 출력, A/B/C/S-Scan을 유기적으로 렌더링하는 핵심 기술들을 가이드합니다.",
        colSpan: 2
      }
    ]
  },
  codeSection: {
    badge: "C# 개발 코드 가이드",
    title: "단 몇 줄의 코드로 구현하는",
    subtitle: "초음파 물리 제어 루틴",
    description: "C# SDK 어셈블리는 복잡하고 까다로운 하드웨어 제어 파이프라인을 매우 직관적으로 단순화합니다. 초기화 함수 호출 및 실시간 수신용 콜백 바인딩만으로 즉각적인 데이터 제어 루틴을 수립할 수 있습니다.",
    steps: [
      {
        number: "Step 1",
        title: "using DEEPSOUND 네임스페이스 추가",
        description: "C# 프로그램 진입점 및 어셈블리에 라이브러리 사용을 선언합니다."
      },
      {
        number: "Step 2",
        title: "초기화 및 장치 가동",
        description: "`InitDsk()` 및 `InitDevice()`를 순차 기동하여 디바이스 제어권을 획득합니다."
      },
      {
        number: "Step 3",
        title: "SetCallBackFrame 바인딩",
        description: "위치 좌표 정보와 동기화된 실시간 프레임 획득 콜백 메서드를 바인딩합니다."
      }
    ],
    codeMeta: {
      path: "DskTutorial / Program.cs",
      lang: "C# (.NET 8.0)"
    }
  },
  contact: {
    title: "DSPAUT SDK (DSK) 도입 및 연동 문의",
    description: "DSK SDK 라이선스 도입, 맞춤형 개발 지원 또는 OEM 장비 연동 기술 상담이 필요하시면 정보를 입력해 주십시오. 담당 엔지니어가 신속히 답변 드리겠습니다.",
    labels: {
      name: "성함",
      company: "회사명",
      email: "이메일 주소",
      message: "문의 사항 및 요구 조건"
    },
    placeholder: "연동 대상 장비(P5, B3 등), 개발하고자 하는 C# 애플리케이션 요구사항 또는 문의 사항을 입력해 주십시오...",
    button: "DSK SDK 도입 문의 제출"
  }
};
