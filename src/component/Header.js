import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <button className="title">
                    <img className="logo" src='../로고.png' />
                    <span>COZ Shopping</span>
                </button>
            </Link>
            <button className="menu">
                <img src='../햄버거 버튼.png' />
            </button>
        </header>
    )
}