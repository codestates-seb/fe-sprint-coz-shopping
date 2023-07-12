import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.inner_span_wrap}>
          <span>개인정보 처리방침 | 이용 약관</span>
          <span>All rights reserved @ Codestates</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
