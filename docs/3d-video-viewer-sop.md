# 3D Interactive Video Viewer Implementation Standard Operating Procedure (SOP)

이 문서는 DEEPSOUND 웹사이트(P5, B3, T3 등)의 제품 라인업에 3D 인터랙티브 모델 및 실시간 비디오 텍스처(Three.js + Canvas VideoTexture) 뷰어를 빠르게 확장·구현하기 위한 **표준 개발 절차서(SOP) 및 기술 파이프라인 가이드**입니다.

---

## 📌 1. Blender 에셋 전처리 표준 (Blender Asset Pipeline)

### 1.1 LCD 메쉬 UV Unwrapping (Project from View - Bounds)
1. **Blender 실행 및 .glb/.gltf 로드**: CAD에서 내보낸 장비 3D 모델(.glb)을 Blender로 임포트합니다.
2. **디스플레이 메쉬 선택**: 화면 영상을 투사할 LCD 디스플레이 패널 메쉬(예: `ASUS2FF828A10EJP_43`)를 선택합니다.
3. **카메라 정면 정렬**: Numpad `1` (또는 `View` -> `Viewpoint` -> `Front`)을 눌러 디스플레이 화면 정면을 봅니다.
4. **UV Unwrapping 실행**: `Edit Mode` (`Tab`) 진입 -> 전체 선택 (`A`) -> `U` 키 -> **`Project from View (Bounds)`** 선택.
   * `Bounds` 옵션을 통해 2D 비디오 텍스처가 디스플레이 전체 여백 없이 100% 꽉 차게 1:1 매핑됩니다.
5. **불필요한 커버 메쉬 가림/제거**: LCD 화면 앞을 덮고 있던 기존 무색 glass/white cover 메쉬가 있다면 삭제하거나 이름에 `LCD` 접두어를 붙여 코드에서 가림 처리합니다.

### 1.2 실물 제품 톤 매트(Matte) Base Color 세팅
- **Base Color**: 실물 제품의 은은한 라이트 그레이 / 다크 메탈릭 회색 톤(`RGB: 0.25, 0.25, 0.27`) 지정.
- **Roughness (거칠기)**: `0.45` ~ `0.60` (과도한 반사광 방지)
- **Metallic (금속성)**: `0.10` ~ `0.20` (차분한 질감)

---

## 📌 2. Three.js VideoTexture 매핑 표준 패턴

### 2.1 별도 Plane 없이 GLB 내 LCD 메쉬 직접 매핑 (Direct Material Assignment)
허공에 붕 뜨거나 360도 회전 시 유격이 생기는 별도 `PlaneGeometry` overlay 판을 생성하지 않고, **GLB 모델 내부의 UV 언랩된 LCD 메쉬 재질에 `videoTexture`를 직접 바인딩**합니다.

```javascript
// THREE.VideoTexture 설정
let videoTexture = null;
if (videoElem) {
  videoTexture = new THREE.VideoTexture(videoElem);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBAFormat;
  videoTexture.encoding = THREE.sRGBEncoding;
  
  // 텍스처 방향 보정 표준: 상하 반전 속성만 유지 (flipY = false)
  videoTexture.flipY = false;
  // (주의: repeat.x = -1 또는 wrapS 등의 좌우 반전 코드는 블렌더 UV 전처리 완료 모델에서 절대 사용 금지)
}

// GLTFLoader 내 직접 매핑 패턴
p5ModelGroup.traverse((child) => {
  if (child.isMesh) {
    if (
      child.name === 'ASUS2FF828A10EJP_43' || 
      child.name === 'ASUS2FF828A18EJP_43' || 
      child.name.endsWith('_43')
    ) {
      child.material = new THREE.MeshBasicMaterial({
        map: videoTexture,
        side: THREE.FrontSide // 뒷면 회전 시 비디오 투과 방지 (Backface Culling)
      });
      child.visible = true;
    } else if (child.name.toUpperCase().includes('LCD')) {
      // 기존 기본 흰색 덮개 메쉬 가림 처리
      child.visible = false;
    }
  }
});
```

---

## 📌 3. Three.js Scene 조명 및 노출 최적화 표준 (Tone Mapping & Lighting)

3D 모델이 하얗게 뜨는 과노출(Whiteout) 및 빛 반사를 차단하고, 실물 사진처럼 차분하고 고급스러운 은은한 톤을 연출하기 위한 **표준 조명 수치**입니다.

### 3.1 렌더러 노출 및 톤 매핑 (ACESFilmicToneMapping)
```javascript
// ACESFilmicToneMapping & Exposure 설정
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.85; // (0.8 ~ 0.9 권장)
```

### 3.2 조명 강도 표준 세팅 (Lighting Standard)
```javascript
// 1. AmbientLight (환경광): 0.4 ~ 0.5 수치로 하얗게 뜨는 방지
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 2. Main DirectionalLight (주 직사광): 0.6 ~ 0.8 수치
const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight1.position.set(5, 8, 5);
dirLight1.castShadow = true;
scene.add(dirLight1);

// 3. Secondary DirectionalLight (보조 림라이트): 0.3 ~ 0.4 수치
const dirLight2 = new THREE.DirectionalLight(0x00e5ff, 0.4);
dirLight2.position.set(-5, -2, -5);
scene.add(dirLight2);
```

---

## 📌 4. HTML5 Video Element & 캐시 초기화 표준

### 4.1 HTML5 Video 태그 필수 속성
브라우저 자동재생 정책(Autoplay Policy)을 준수하면서 모바일/데스크톱 모두에서 부드럽게 재생되도록 모든 속성을 명시합니다.

```html
<video 
  id="p5-screen-video" 
  src="/assets/videos/p5_dsvision_screen.mp4" 
  autoplay 
  muted 
  loop 
  playsinline 
  preload="auto" 
  crossorigin="anonymous"
  style="display: none;"
></video>
```

### 4.2 캐시 초기화 (Cache-Busting URL)
새로 업데이트된 `.glb` 3D 에셋 모델이 브라우저에 구 버전으로 캐싱되는 현상을 완벽 차단하기 위해 타임스탬프 파라미터를 추가하여 로드합니다.

```javascript
const loader = new THREE.GLTFLoader();
loader.load(
  '/assets/models/deepsound-p5.glb?v=' + Date.now(),
  (gltf) => {
    // 3D 모델 추가 및 텍스처 바인딩 로직
  }
);
```

---

## 📌 5. 재사용 가능한 Astro 컴포넌트 표준 템플릿

새로운 장비 라인업(예: `B3ThreeVideoViewer.astro`, `T3ThreeVideoViewer.astro`) 추가 시 아래 템플릿의 모델/동영상 경로 및 대상 LCD 메쉬 이름만 변경하여 즉시 확장할 수 있습니다.

```astro
---
interface Props {
  className?: string;
}
const { className = "" } = Astro.props;
---

<div class={`relative bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm shadow-2xl overflow-hidden group flex flex-col items-center justify-center min-h-[380px] ${className}`}>
  
  <video 
    id="product-screen-video" 
    src="/assets/videos/product_screen.mp4" 
    autoplay muted loop playsinline preload="auto" crossorigin="anonymous" 
    style="display: none;"
  ></video>

  <div id="product-three-canvas-container" class="w-full h-[360px] sm:h-[400px] rounded-xl cursor-grab active:cursor-grabbing relative z-0"></div>

  <div id="product-3d-loading-bar" class="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 bg-slate-900/90 border border-slate-700 text-slate-300 text-xs px-4 py-1.5 rounded-full backdrop-blur-md flex items-center space-x-2 shadow-lg transition-opacity duration-500">
    <span class="w-3 h-3 border-2 border-primary-cyan border-t-transparent rounded-full animate-spin"></span>
    <span>Loading 3D Model...</span>
  </div>
</div>

<script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script is:inline src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
<script is:inline src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-three-canvas-container');
    const loadingBar = document.getElementById('product-3d-loading-bar');
    const videoElem = document.getElementById('product-screen-video');

    if (!container || !window.THREE) return;

    // Autoplay Fallback
    const startVideo = () => { if (videoElem) { videoElem.muted = true; videoElem.play().catch(() => {}); } };
    startVideo();
    window.addEventListener('click', startVideo, { once: true });

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0.1, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // VideoTexture
    let videoTexture = null;
    if (videoElem) {
      videoTexture = new THREE.VideoTexture(videoElem);
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      videoTexture.encoding = THREE.sRGBEncoding;
      videoTexture.flipY = false;
    }

    // Load Model
    new THREE.GLTFLoader().load('/assets/models/product-model.glb?v=' + Date.now(), (gltf) => {
      const model = gltf.scene;
      model.rotation.x = Math.PI / 2;

      model.traverse((child) => {
        if (child.isMesh && child.name.includes('_43')) {
          child.material = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.FrontSide });
        }
      });

      scene.add(model);
      if (loadingBar) loadingBar.style.opacity = '0';
    });

    function animate() {
      requestAnimationFrame(animate);
      if (videoTexture && videoElem && !videoElem.paused) videoTexture.needsUpdate = true;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
</script>
