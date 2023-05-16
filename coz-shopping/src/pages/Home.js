import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지</p>
            <Link to="/about">hi</Link>
            <img src={process.env.PUBLIC_URL + 'images/icon/codestates_icon.svg'}/>
        </div>
    );
};

export default Home;