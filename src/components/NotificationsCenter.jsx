import { useSelector } from "react-redux";
import styled from "styled-components";
import Toast from "./Toast";

const Container = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  position: fixed;
  z-index: 999999;
  bottom: 12px;
  right: 12px;
`;

export default function NotificationsCenter() {
  const Notifications = useSelector((state) => state.Notifications.value);
  return (
    <Container>
      {Notifications.map((el, i) => (
        <Toast
          key={i}
          text={el.message}
          dismissTime={el.dismissTime}
          img={el.img}
        />
      ))}
    </Container>
  );
}
