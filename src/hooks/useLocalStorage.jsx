export default function useLocalStorage() {
	let indx = 1;

    
	function setLocalSorage(item) {
		localStorage.setItem(`item_${indx}`, item);
		alert(localStorage.getItem(`item_${indx}`));
		indx++;
	}

	async function getLocalStorage(keyIndexFromFrontend) {
		let response = await localStorage.getItem(`item_${keyIndexFromFrontend}`);
		alert("response is " + response);
	}

	function editLocalStorage(keyIndexFromFrontend, value) {
		if (localStorage.getItem(`item_${keyIndexFromFrontend}`) !== null) {
			localStorage.setItem(`item_${keyIndexFromFrontend}`, value);
			alert(
				"response is " + localStorage.getItem(`item_${keyIndexFromFrontend}`)
			);
		} else {
			alert("Key does not exist in local storage");
		}
	}

	function deleteLocalStorage(keyIndexFromFrontend) {
        
		if (localStorage.getItem(`item_${keyIndexFromFrontend}`) !== null) {
			localStorage.removeItem(`item_${keyIndexFromFrontend}`);

            if (localStorage.getItem(`item_${keyIndexFromFrontend}`) === null){
                alert("item with id "+ keyIndexFromFrontend+" is removed successfully");

            }
            else{
                alert("Some error try again :(");
            }
		
		
		} else {
			alert("Key does not exist in local storage");
		}
	}
	return { setLocalSorage, getLocalStorage, editLocalStorage,deleteLocalStorage };
}
