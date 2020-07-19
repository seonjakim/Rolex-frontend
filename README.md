# Rolex 프로젝트 소개 \_ FrontEnd

롤렉스 시계 스토리와 제작과정 및 롤렉스 시계 제품들을 소개하고 원하는 옵션을 선택하여 나만의 롤렉스 시계 설정하기 등을 제공하는 Rolex 클론 프로젝트

## 개발 인원 및 기간

- 기간 : 10일(4월 23일 ~ 5월 1일)
- Front-end Members: 김선자(김지희), 이민석, 이원철
- [백엔드 GitHub](https://github.com/wecode-bootcamp-korea/Rolex-backend)

## 데모 영상

링크: https://www.youtube.com/watch?v=Ot07xkJm12s

## 목적

- 실제 협업에서 쓰이는 Scrum, Sprint Meeting, Stand Up Meeting 방식 경험
- Front-End와 Back-End 간의 협업을 통해 커뮤니케이션의 중요성 이해
- 롤렉스 홈페이지의 다양한 애니메이션과 UI를 React, Sass 이용 구현

## 적용 기술 및 구현 기능

### 적용 기술

- JavaScript
- React
- Sass
- RESTful API

### 구현 기능

#### 회원가입, 로그인 페이지

- 회원가입 및 로그인 (Bcrypt 암호화 및 JWT Access Token 전송) 기능 구현
- 회원가입 유효성 검사 기능 구현
- 로그인 검증을 통한 좋아요 기능(클릭/취소/리스트)

#### 모두보기 페이지

- DAY-DATE 제품 list 페이지네이션
- DAY-DATE 제품 옵션에 따른 중복 필터링 구현
- 토글 버튼 상태에 따라 제품 List layout 변경

#### 설정하기 페이지

- DAY-DATE의 모든 제품에 따른 조합에 따른 상세 정보(가격, 설정 조합, 설명글 및 이미지)를 보여주는 슬라이드 이미지 페이지 구현
- DAY-DATE 제품 단계별 옵션에 따른 시계 조합 보여주기 기능 구현
- 각 단계별 조합에 따른 제품 상세페이지 이동 구현
- 각 단계별 조합 페이지에서 이전 단계로 돌아갔을 때 선택 조합 저장하는 기능 구현
