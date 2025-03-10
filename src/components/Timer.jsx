import { useState, useEffect } from "react";
import Clock from "../assets/clock.png";

export default function Timer() {
	const [timer, setTimer] = useState({ hrs: 0, mins: 0, sec: 0 });
	const [isTimerOn, changeTimer] = useState(false);

	useEffect(() => {
		let interval;
		if (isTimerOn) {
			interval = setInterval(() => {
				setTimer((prev) => {
					let { sec, mins, hrs } = prev;
					sec++;
					if (sec === 60) {
						sec = 0;
						mins++;
					}
					if (mins === 60) {
						mins = 0;
						hrs++;
					}
					return { hrs, mins, sec };
				});
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isTimerOn]);

	function toggleTimer() {
		changeTimer((prev) => !prev);
	}

	function handleReset() {
		setTimer({ hrs: 0, mins: 0, sec: 0 });
		changeTimer(false);
	}

	return (
		<section className="flex flex-col items-center justify-center min-h-screen p-4 bg-orange-50">
			<div className="relative w-full max-w-md">
				{/* Timer Display Above Image */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 text-center bg-stone-300 p-3 rounded-md shadow-md ">
					<div className="text-black  orbitron">
						{String(timer.hrs).padStart(2, "0")} :
						{String(timer.mins).padStart(2, "0")} :
						{String(timer.sec).padStart(2, "0")}
					</div>
				</div>

				{/* Clock Image */}
				<img src={Clock} className="w-full object-cover" alt="Clock" />

				{/* Buttons Below Image */}
				<div className="flex justify-center gap-4 mt-4">
					<button
						className="bg-purple-200 px-6 py-2 rounded-3xl shadow-md "
						onClick={toggleTimer}
					>
						{isTimerOn ? "Pause" : "Start"}
					</button>
					<button
						className="bg-yellow-200 px-6 py-2 rounded-3xl shadow-md "
						onClick={handleReset}
					>
						Reset
					</button>
				</div>
			</div>
		</section>
	);
}
