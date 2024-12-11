import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Conversation from './components/pages/Conversation';
import "./styles/root.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarGenericComponent from './components/NavbarGenericComponent';

function App() {
	return (
		<div className='app-container'>
			<NavbarGenericComponent />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/conversation" element={<Conversation />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
