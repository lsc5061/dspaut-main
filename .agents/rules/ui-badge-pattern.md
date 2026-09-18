# 공통 UI 컴포넌트: 글래스모피즘 네온 뱃지 (Glassmorphism Neon Badge)

이 규칙은 뱃지(Badge) 및 라벨(Label) 디자인 시, 전체적인 일관성을 유지하고 고급스러운(Premium) 느낌을 전달하기 위해 사용되는 패턴을 정의합니다.

## 발동 조건
- 사용자가 "뱃지를 추가해줘", "라벨 디자인을 적용해줘", "카드 태그를 달아줘"와 같이 UI 컴포넌트에 뱃지/라벨을 추가하거나 수정할 것을 요청할 때 자동으로 발동합니다.
- 새로운 제품 카드(Product Card)나 소프트웨어 섹션을 생성할 때, 강조가 필요한 텍스트에 뱃지를 적용할 경우 발동합니다.

## 적용 룰 (Design System Rules)
1. **기본 테마 (Neon Glow + Glassmorphism):**
   - 뱃지는 밋밋한 단색 배경(예: 불투명 검정 `bg-slate-950`)이나 회색 텍스트(`text-slate-400`) 사용을 지양합니다.
   - 제품이나 카테고리를 나타내는 뱃지는 **반투명 배경(opacity 10%)**과 **반투명 테두리(opacity 20%)**를 적용하여 글래스모피즘(유리 질감)을 구현합니다.
   
2. **공통 CSS 클래스 템플릿:**
   ```html
   <!-- 기본형 (Primary Cyan 기반) -->
   <span class="text-xs font-bold font-sans tracking-wide bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/20 px-2.5 py-1 rounded-md uppercase inline-block mb-2">뱃지 이름</span>
   ```

3. **속성 상세:**
   - 텍스트: `text-xs font-bold font-sans tracking-wide uppercase`
   - 배경: `{컬러}/10` (예: `bg-primary-cyan/10`)
   - 테두리: `border border-{컬러}/20` (예: `border-primary-cyan/20`)
   - 패딩 및 여백: `px-2.5 py-1 rounded-md inline-block`
   - 주요 컬러 변형 (상황에 따라 변경 가능):
     - 기본 (Primary): `primary-cyan` (강조할 제품/일반 제품)
     - 블루 (TOFD/특수): `blue-400`
     - 그린 (Software/SDK): `green-400`
     - 옐로우 (특정 라인업): `yellow-500`

이 규칙을 통해 모든 컴포넌트가 일관성 있는 트렌디한 **사이버네틱 무드**를 유지할 수 있도록 하세요.
