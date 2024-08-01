## 소개

- YTS API를 이용하여 영화 정보를 불러와 보여주는 웹사이트입니다.

## 실행 방법
```bash
$ pnpm install # 의존성 설치

$ pnpm dev # 개발 서버 실행
```

## 기술 스택
- Next.js(app directory)

- Recoil

      Facebook에서 만든 상태 관리 라이브러리이고, Atomic Pattern으로 간단하게 상태 관리를 위해 사용

- tailwindcss
p
      편리한 반응형 스타일 작업을 위해 사용

- @mui/material

      디자인 구성 편의를 위해 사용

- @tanstack/react-query

      호출한 API 캐싱 및 데이터 관리

- react-window

      리스트 최적화를 위해 사용