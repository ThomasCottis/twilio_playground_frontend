import NavbarGenericComponent from "../NavbarGenericComponent";
import Chat from "../Chat";
import ChatInput from "../ChatInput";
import "../../styles/root.css";
import "../../styles/conversation.css";

function Conversation() {
    return (
			<>
				<NavbarGenericComponent />
				<div id='conversation'>
					<div className='conversation-container'>
						<h1 className='title'>+13853352336</h1>
						<Chat />
						<ChatInput />
					</div>
				</div>
			</>
		);
}

export default Conversation;