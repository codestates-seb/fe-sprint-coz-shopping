import styled from "styled-components";
import FilterTab from "../components/FilterTab";

const Section = styled.section`
  display: "flex";
  margin: auto;
  flex-direction: column;
  justify-content: "center";
  align-items: "center";
  margin-top: 12px;
  margin-left: 76px;
  margin-right: 76px;
`;
export default function Products() {
  return (
    <Section>
      <FilterTab />
    </Section>
  );
}
