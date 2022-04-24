# wanted_pre_onboarding 사전 과제

### 배포

https://pre-onboarding-lazysky.vercel.app/

## 공통

### 구현

- 재사용성과 확장성을 고려해서 렌더링에 쓰일 데이터 및 초기 상태는 `App`에서 관리하도록 했다.
- 공통으로 쓰이는 스타일 컴포넌트는 따로 관리하였다. (`components/Shape.js`)
- 이벤트 핸들러 네이밍 컨벤션을 따르려 노력했다. (https://jaketrent.com/post/naming-event-handlers-react)

### 어려웠던/아쉬운 점

- 아직 렌더링 최적화를 진행하지 못했다.
- 반응형을 고려하지 않았다.
- 리액트 환경엔 이미 너무 좋은 컴포넌트 라이브러리가 많아 관련 라이브러리들의 사용법을 익히기에 급급했는데(도움없이도 할 수 있을 거란 근자감이 있었다.), 막상 도움없이 하려니 영 쉽지 않았다. 

## Toggle.js

![Toggle](/docs/Toggle.gif)

### 구현

- 예시에서는 각 버튼을 누르는 것처럼 보이지만 이름이 `Toggle`이라 아무 곳이나 눌러도 변경되도록 하였다.
- Toggle은 `boolean` 값을 상태로 하는 것이 바람직하다고 판단했으나 예시에서의 `기본`과 `상세` 중 어느 하나가 `true`라고 하기엔 애매한 부분이 있어 관련 상태를 `isDetailSelected`라고 명명하였다.
- 액티브 상태인 토글 아이템이 무엇인지 알려주는 `FocusCircle`은 `position` `props`를 받게 했다.

## Tab.js

![Tab](/docs/Tab.gif)

### 구현

- `previousTabIndex`는 렌더링과 직접적으로 관련있는 부분이 아니라 상태 관리의 대상이 아닌 거 같은데 애니메이션을 구현하려다 보니 다소 억지스럽게 상태로 선언하게 되었다.
  - `keyframe`에 이전 인덱스를 전달해주기 위해 고안한 방식이다.
  - 상태로 놓지 않으면(`handleClickTab` 안에서 `previousTabIndex = activeTabIndex`하는 식으로) 비동기로 동작하는 `setState`의 특성상 원하는 시점의 `activeTabIndex`가 값으로 들어가지 않는다. 
### 어려웠던/아쉬운 점

- 슬라이드 애니메이션을 구현하는데 상당히 애를 먹었다. 알고 있던 사실이지만 css에 매우 부족함을 새삼 느꼈다. 반성하건대 돌이켜보니 `animation`은 베껴쓰기 밖에 안해온 거 같다.

## Slider.js

![Slider](/docs/Slider.gif)

### 구현

- `input[type="range"]`를 통해 구현했다.

### 어려웠던/아쉬운 점

- 슬라이드가 움직임에 따라 `Progress`의 진행도가 칠해지게 하는 게 퍽 어려웠는데 `linear-gradient` 속성을 이용하여 해결할 수 있었다. 처음 활용해본 것은 물론 이런 식으로 이용한다는 건 이전 같으면 생각지도 못할 것 같아(gradient라는 이름 탓에 이렇게 직선으로 구분하는 용법이 있는 줄 몰랐다.) 꽤나 뿌듯했다.
## Input.js

![Input](/docs/Input.gif)

### 구현

- `inputValues`를 객체 값으로 설정하고 `handleChangeInputs`에서 `e.target.name`으로 `value`를 업데이트 하게 하여 이후에 다른 `input` 필드를 갖게 될 가능성을 고려했다. (e.g., 회원가입에 필요한 정보 등) 
- 이메일 유효성 검사는 정규 표현식을 이용했다.
- 예시를 참고하여 이메일 값이 입력되지 않았을 땐 `ErrorMessage`를 렌더링하지 않는다.

### 어려웠던/아쉬운 점

- 어려웠던 점이라고 하기엔 애매한데 `onBlur` 이벤트 리스너의 이름을 찾는데 (심지어 원래 알고 있는데) 한참이 걸렸다. 적절한 구글링 키워드를 빠르게 찾아내는 능력이 부족한 거 같다. 

## Dropdown.js

![Dropdown](/docs/Dropdown.gif)

### 구현

- `searchText`에 따라 필터링되는 `searchResults`를 렌더링하는 방식으로 검색 필터링을 구현하였다. (`handleChangeSearchText`)

## TODO

- 렌더링 최적화(메모이제이션)
  - 아쉽지만 제출시기 가산점만큼의 기술 점수 향상이 있는지 알 수가 없어 `push`는 미뤄두기로 했다.
