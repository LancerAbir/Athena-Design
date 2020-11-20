import './App.css';
//** Import React Router */
import { BrowserRouter, Switch, Route } from "react-router-dom";
//** Import Pages Components */
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Pricing from './components/Pages/Pricing/Pricing';
import OurTeam from './components/Pages/OurTeam/OurTeam';
import NotFound from './components/Pages/NotFound';

function App() {
	return (
        <BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/services" component={Services} />
				<Route exact path="/pricing" component={Pricing} />
				<Route exact path="/ourTeam" component={OurTeam} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
    );
}

export default App;
