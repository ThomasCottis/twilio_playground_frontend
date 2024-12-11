import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/conversation");
    }

    return (
        <div id='home'>
            <div className='home-container'>
                <h1 className="title">
                    Welcome to the twilio demo
                </h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem magnam accusamus nemo cum maiores sed iste explicabo debitis, nostrum quas id voluptatem aliquid qui recusandae veniam cupiditate saepe asperiores!
                </p>
                <button onClick={handleNavigation} className="button">
                    Try me!
                </button>
            </div>
        </div>
    );
}

export default Home;