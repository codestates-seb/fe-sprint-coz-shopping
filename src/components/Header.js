import styles from "../styles/Header.module.css";
function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo_wrap}>
          <div className={styles.inner_logo_image_wrap}>
            <img src="#" alt="코드스테이츠_이미지" />
          </div>
          <div className={styles.inner_logo_text_wrap}>
            <img src="#" alt="코드스테이츠_텍스트" />
          </div>
        </div>

        <div className="burgerMenu">
          <img src="#" alt="버거메뉴" />
        </div>
      </div>
    </header>
  );
}
export default Header;
