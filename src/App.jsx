import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<>
			<div className="px-24">
				<Navbar />
				<Home />
			</div>
		</>
	);
}

export default App;
