import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img className="logo" src='src/image/logo.png' />
                <span className="title">COZ Shopping</span>
            </Link>
            <button className="menu">
                {/* <img src='src/image/햄버거 버튼.png' /> */}
            </button>
        </header>
    )
}