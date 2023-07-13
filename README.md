# 쇼핑사이트 만들기

자바스크립트, 리액트와 라이브러리를 사용해서 쇼핑리스트 구현해보기

## Motivation

추상화

## Method and results

First, introduce and motivate your chosen method, and explain how it contributes to solving the research question/business problem.

Second, summarize your results concisely. Make use of subheaders where appropriate.

## Repository overview

```
fe-sprint-coz-shopping
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ img
│  │  ├─ Polygon.png
│  │  ├─ bookmark.png
│  │  ├─ gift.png
│  │  └─ logo.png
│  ├─ index.html
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.jsx
   ├─ components
   │  ├─ AlertToast.jsx
   │  ├─ BookmarkBtn.jsx
   │  ├─ DropdownMenu.jsx
   │  ├─ FilteringBtn.jsx
   │  ├─ Footer.jsx
   │  ├─ Header.jsx
   │  ├─ ItemCard.jsx
   │  └─ Modal.jsx
   ├─ index.js
   └─ pages
      ├─ BookmarkPage.jsx
      ├─ MainPage.jsx
      └─ ProductListPage.jsx

```

## Running instructions

Explain to potential users how to run/replicate your workflow. If necessary, touch upon the required input data, which secret credentials are required (and how to obtain them), which software tools are needed to run the workflow (including links to the installation instructions), and how to run the workflow.

## More resources

Point interested users to any related literature and/or documentation.

## About

Explain who has contributed to the repository. You can say it has been part of a class you've taken at Tilburg University.

## 발생한 문제

1. 헤더가 2번 렌더링된다.
   - 원인 : 라우터에 헤더 컴포넌트가 있어서 2번 렌더링

```
function App() {
   return (
      <>
       <BrowserRouter>
         <MainPage />
           <Routes>
             <Route path="/" element={<MainPage/>}></Route>
             <Route path="/productlistpage" element={<ProductListPage/>}></Route>
             <Route path="/bookmarkpage" element={<BookmarkPage/>}></Route>
           </Routes>
        </BrowserRouter>
      </>
);
}
```

- 해결방안 :
  - 라우터에 exact라는 props를 작성하고 element를 component로 변경
  - exact : prop를 작성한 경로일때만 컴포넌트가 렌더링
  ```
  function App() {
  return (
    <>
      <BrowserRouter>
        <MainPage />
        <Routes>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/productlistpage" component={ProductListPage}></Route>
          <Route path="/bookmarkpage" component={BookmarkPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  }
  ```
