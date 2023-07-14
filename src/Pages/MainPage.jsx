import Footer from "../Footer";
import { styled } from "styled-components";

const ContentSection = styled.section`
  width: 1280px;
  height: 694px;
`;

function MainPage() {
  return (
    <ContentSection>
      <Footer></Footer>
    </ContentSection>
  );
}
export default MainPage;
