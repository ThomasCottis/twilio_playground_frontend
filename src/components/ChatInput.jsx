import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import "../styles/conversation.css";

function ChatInput() {
    return (
        <div className="chat-input-container">
            <FontAwesomeIcon icon={faImage} size="2x" className="icon image-icon" />
            <input 
                type="text" 
                name="chat" 
                id="chat" 
                placeholder="Message" 
            />
            <FontAwesomeIcon icon={faPaperPlane} size="2x" className="icon send-icon" />
        </div>
    );
}

export default ChatInput;