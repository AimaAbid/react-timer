import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CalendarPage2 from "./components/CalendarPage2";
import Accordian from "./components/Accordian";
import CustomHook from "./components/CustomHook";
import Menu from "./components/menu";
import Timer from "./components/Timer";

export default function App() {
	return (
		<>
			{/* <Header/>
		<AllProductsList/>
		<Footer/> */}
			{/* <Layout/> */}

			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/calendar" element={<CalendarPage2 />}></Route>
				<Route path="/accordian" element={<Accordian />}></Route>
				<Route path="/hook" element={<CustomHook />}></Route>
				<Route path="/menu" element={<Menu />}></Route>
				<Route path="/timer" element={<Timer />}></Route>
			</Routes>
		</>
	);
}
