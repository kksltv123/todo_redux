# MY TOdo List
-------
## TECH
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=react_router&logoColor=white"/>
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

-------

## 기술 구현 특징
- ReactJS Redux 사용하여 전역 스토어 데이터 관리
- ReactJS Router 사용하여 상세 페이지 구현
- react-id-generator 사용하여 아이디 적용
- TodoList 추가, 완료, 취소, 삭제, 상세페이지 구현

## 컨포넌트 구조
*src/*
- index.js_____________________________// Provider store={store}
- App.js
- shared/route_________________________// 페이지별 url 관리
- redux/config/congigStore_____________// 리덕스 스토어
- redux/modules/todos__________________// 전역 데이터 관리
- pages/TodoList____________// 페이지별 컨포넌트 구성
- pages/TodoDetail________// 상세 Todo 확인 + 목록으로(뒤로가기) 버튼 구현
- components/layout/Layout
- components/header/Header
- components/form/Form____// 타이틀, 텍스트 입력 및 추가하기 구현
- components/list/List____// Todo 박스 배열 생성
- components/todo/Todo__// Todo 상태값 변경 가능(완료, 취소, 삭제 기능 및 상세 페이지 이동)

## 컨포넌트 별 기능 구현 내용 및 이유
- Form에서 입력한 Title 및 body 값은 useState 활용하여 입력값 저장, Action Creator 에 입력값을 담고 리듀서로 dispatch
- 추가하기 버튼 클릭 시, 입력한 Title, Text 값과 함께 ID값, isDone(완료 여부) 내용 Redux 활용한 전역에 저장 추가하기, 삭제하기, 완료하기, 취소하기 기능은 전역 스토어에서 관리
- List에서 전역으로 저장된 데이터값 불러오기 및 isDone(완료 여부)에 따라 Working,, Done에 데이터 불러오기(map 메서드 이용/&& 조건부 렌더링)
- Todo에서 취소하기, 완료하기, 삭제하기 버튼이벤트 실행 -> 전역에서 함수 동작하여 필요한 데이터만 Todo에 전달
- Router 활용하여 상세 페이지 연동(useNavigate, useParams)
- Detail 페이지 렌더링 시 useEffect() 안에 dispatch 함수를 ref로 관리해 불필요한 렌더링 제거
