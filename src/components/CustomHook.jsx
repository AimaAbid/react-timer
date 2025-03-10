import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";
export default function CustomHook() {
	let {
		setLocalSorage,
		getLocalStorage,
		editLocalStorage,
		deleteLocalStorage,
	} = useLocalStorage();
	
	let [keyIndex, setKeyIndex] = useState("");
	let [editKeyIndex, setEditKeyIndex] = useState("");
	let [value, setValue] = useState("");
	let [originalValue, setOriginalValue] = useState("");
	let [deleteKeyIndex, setDeleteKeyIndex] = useState("");

	function handleClick1() {
		setLocalSorage(originalValue);
	}

	function handleClick2() {
		getLocalStorage(`${keyIndex}`);
	}

	function handleEdit() {
		editLocalStorage(editKeyIndex, value);
	}
	function handleDelete() {
		deleteLocalStorage(deleteKeyIndex);
	}

	return (
		<div className="grid gap-2">
			<label>Enter the  value</label>
			<input
				type="text"
				onChange={(e) => {
					setOriginalValue(e.target.value);
				}}
				value={originalValue}
				className="border-2"
			/>
			<button
				onClick={handleClick1}
				className=" bg-purple-500 rounded-full px-4 py-2 text-white"
			>
				{" "}
				Set
			</button>
			<label>Enter the key to get the value</label>
			<input
				type="text"
				onChange={(e) => {
					setKeyIndex(e.target.value);
				}}
				value={keyIndex}
				className="border-2"
			/>
			<p className="bg-blue-200">{keyIndex}</p>
			<button
				className=" bg-pink-500 rounded-full px-4 py-2 text-white"
				onClick={handleClick2}
			>
				{" "}
				Get
			</button>
			<label>Enter the index of existing key that you want to edit</label>
			<input
				type="text"
				onChange={(e) => {
					setEditKeyIndex(e.target.value);
				}}
				value={editKeyIndex}
				className="border-2"
			/>

			<label>Enter the new value of existing key that you want to edit</label>
			<input
				type="text"
				onChange={(e) => {
					setValue(e.target.value);
				}}
				value={value}
				className="border-2"
			/>
			<button
				className=" bg-yellow-500 rounded-full px-4 py-2 text-white"
				onClick={handleEdit}
			>
				{" "}
				Edit
			</button>
			<label>Enter the key of the item you want to delete</label>
			<input
				type="text"
				onChange={(e) => {
					setDeleteKeyIndex(e.target.value);
				}}
				value={deleteKeyIndex}
				className="border-2"
			/>
			<button
				className=" bg-red-500 rounded-full px-4 py-2 text-white"
				onClick={handleDelete}
			>
				{" "}
				Delete
			</button>
		</div>
	);
}
