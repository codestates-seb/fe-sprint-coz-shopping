import styled from "styled-components";
export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 2; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const ModalBtn = styled.button`
  background-color: grey;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn)`
  background-color: #4000c7;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  border-radius: 10%;
  background-color: white;
`;
const ProductImg = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 10%;
  content: url(${(props) => props.url};);
  cursor: pointer;
  z-index: 1;
`;

export default function Modal({ url, url2, isOpen, setIsOpen }) {
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={clickHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ProductImg url={url ? url : url2} onClick={clickHandler} />
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
}
