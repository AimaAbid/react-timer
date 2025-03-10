//minus= <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path></svg>
//plus=<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
import { useState } from "react";

export default function Accordian() {
	let accordianItems = [
		{
			title: "  Lorem ipsum dolor",
			description:
				"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni minus totam expedita quas exercitationem alias.",
			button: false,
		},
		{
			title: "  Lorem ipsum dolor",
			description:
				"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni minus totam expedita quas exercitationem alias.",
			button: false,
		},
		{
			title: "  Lorem ipsum dolor",
			description:
				"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni minus totam expedita quas exercitationem alias.",
			button: false,
		},
		{
			title: "  Lorem ipsum dolor",
			description:
				"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni minus totam expedita quas exercitationem alias.",
			button: false,
		},
		{
			title: "  Lorem ipsum dolor",
			description:
				"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni minus totam expedita quas exercitationem alias.",
			button: false,
		},
		{
			title: "  Lorem ipsum dolor",
			description:
				"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni minus totam expedita quas exercitationem alias.",
			button: false,
		},
	];
	let arrayOfButtons = accordianItems.map((item) => item.button);
	const [buttonArray, setButtonArray] = useState(arrayOfButtons);

	function handleButton(index) {
		let tempButtonArray = [...buttonArray];
		let prevButton = tempButtonArray[index];
		tempButtonArray[index] = !prevButton;
		setButtonArray(tempButtonArray);

		// let prevButton = button;
		// setButton(!prevButton);
	}

	return (
		<div className="container ">
			<div>
				{accordianItems.map((item, index) => {
					return (
						<div key={index}>
							<div className="p-1    border-2  border-1 max-w-sm">
								<div className="flex justify-between">
									<div className="text-xl font-bold">{item.title}</div>
									<div onClick={() => handleButton(index)}>
										{buttonArray[index] ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="32"
												height="32"
												fill="#000000"
												viewBox="0 0 256 256"
											>
												<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="32"
												height="32"
												fill="#000000"
												viewBox="0 0 256 256"
											>
												<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
											</svg>
										)}
									</div>
								</div>
								{/* {buttonArray[index] ? (
									<div>{item.description}</div>
								) : (
									<div></div>
								)} */}

								<div
									className={`overflow-hidden transition-all duration-1000 ${
										buttonArray[index]
											? "max-h-40 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									{item.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
