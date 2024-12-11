import { useNavigate } from "react-router-dom";
import "../../styles/root.css";
import "../../styles/conversation.css";

function Conversation() {
    const navigate = useNavigate();

    const handleBackNavigation = () => {
        navigate("/");
    }

    return (
        <div id="conversation">
            <div className="container">
                <h1 className="title">
                    +13853352336
                </h1>
                <div className="chat-container">
                    <p className="subtitle">
                        Chats here
                    </p>
                </div>
                <button onClick={handleBackNavigation} className="button">
                    Back
                </button>
            </div>
        </div>
    );
}

export default Conversation;