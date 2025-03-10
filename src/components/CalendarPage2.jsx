import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CalendarStyle.css";

export default function CalendarPage2() {
	const [holidays, setHolidays] = useState([]);
	const [date, setDate] = useState(new Date());
	const [selectedHoliday, setSelectedHoliday] = useState(null);

	useEffect(() => {
		fetchHolidays();
	}, [date]);

	async function fetchHolidays() {
		let fetchedData = await axios.get(
			`https://calendarific.com/api/v2/holidays?api_key=oUH7vQajGvqRcpGCw1TB686dXljeYGzR&country=IN&year=${date.getFullYear()}`
		);
		let processedFetchedData = fetchedData.data.response.holidays;
		setHolidays(processedFetchedData);
	}

	function getHolidayForDate(date) {
		return holidays.find((holiday) => {
			const holidayDate = new Date(holiday.date.iso);
			return (
				holidayDate.getMonth() === date.getMonth() &&
				holidayDate.getDate() === date.getDate() &&
				holidayDate.getFullYear() === date.getFullYear()
			);
		});
	}

	function getHolidayInfo(value) {
		const holiday = getHolidayForDate(value);
		if (holiday) {
			setSelectedHoliday(holiday);
		} else {
			setSelectedHoliday(null);
		}
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen background-color-css p-4">
			<Calendar
				className="max-w-sm bg-white shadow-lg p-4 rounded-lg"
				onChange={setDate}
				onClickDay={getHolidayInfo} 
				value={date}
				tileContent={({ date }) => {
					const holiday = getHolidayForDate(date);
					return holiday ? (
						<div className="text-sm text-red-500 font-semibold">
							{holiday.name}
						</div>
					) : null;
				}}
			/>
			{selectedHoliday && (
				<div className="mt-4 p-4 bg-white shadow-md rounded-lg max-w-md">
					<h2 className="text-lg font-bold text-blue-700">
						{selectedHoliday.name}
					</h2>
					<p className="text-gray-700">{selectedHoliday.description}</p>
				</div>
			)}
		</div>
	);
}
