import styles from "../styles/Header.module.css";
import logo from "../assets/로고.png"
import name from "../assets/쇼핑몰 이름.png"
import burger from "../assets/햄버거 버튼.png"
function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo_wrap}>
          <div className={styles.inner_logo_image_wrap}>
            <img src={logo} alt="코드스테이츠_이미지" />
          </div>
          <div className={styles.inner_logo_text_wrap}>
            <img src={name} alt="코드스테이츠_텍스트" />
          </div>
        </div>

        <div>
          <img src={burger} alt="버거메뉴" />
        </div>
      </div>
    </header>
  );
}
export default Header;
