import WomanPic from "/assets/WomanPicture.jpg";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
	const navigate = useNavigate();

	function handleNavigate() {
		navigate("/calendar");
	}
	return (
		<div className="css-color relative ">
			<div className="container p-8  md:px-48 md:mx-auto  relative">
				<div className="flex gap-2 py-24">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#8b1dbf"
						viewBox="0 0 256 256"
					>
						<path d="M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
					</svg>
					<p className="text-lg">Calendar.io</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2   ">
					<div className="">
						<p className="text-4xl font-bold mt-10">Welcome Back!</p>
						<p className="text-slate-600 text-lg my-2">
							Its time to organize your day!
						</p>

						<p className="text-slate-600 text-sm my-2 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							cupiditate ad provident nemo assumenda nobis eaque porro quia
							perferendis aspernatur. Quam perspiciatis dolorum ut tempore
							quaerat et dicta quasi consectetur, saepe illum.
						</p>
					</div>
					<div className="relative">
						<div className="relative">
							<img
								src={WomanPic}
								className="object-contain md:object-cover "
								alt=""
							/>
						</div>

						<div className="absolute left-1/2 transform -translate-x-1/2  bottom-0" onClick={handleNavigate}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="64"
								height="64"
								fill="#942abb"
								viewBox="0 0 256 256"
							>
								<path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
