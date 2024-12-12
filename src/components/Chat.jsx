import "../styles/conversation.css";

function Chat() {
    return (
        <div className='chat-container'>
            <div className="message-container in">
                <p className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, rerum excepturi soluta natus debitis praesentium impedit perferendis itaque, animi velit ea sequi, minus repellendus ipsam. Earum suscipit fugit laudantium eius.
                </p>
            </div>
            <div className="message-container out">
                <p className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, rerum excepturi soluta natus debitis praesentium impedit perferendis itaque, animi velit ea sequi, minus repellendus ipsam. Earum suscipit fugit laudantium eius.
                </p>
            </div>
        </div>
    );
}

export default Chat;