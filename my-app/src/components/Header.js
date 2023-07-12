import "./header.css"


export default function Header() {
    return (
    <heade className="header-container">
        <div className="logo-container">
            <div className="logo-img">
                <img src="logo.png" alt="logo" /> 
            </div>
            <span className="logo-title">COZ Shopping</span>
        </div>
        <img src="icon.png" alt="hamburger menu" />
    </heade>
    );
}