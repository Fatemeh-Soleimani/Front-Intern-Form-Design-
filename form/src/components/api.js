import { resolveOnChange } from "antd/lib/input/Input";
import axios from "axios";
export async function getrequest() {
	return new Promise((Resolve) => {
		axios.get('https://ansarcrm.iran.liara.run/MainApi/getForm?id=1000')
			.then(function (response) {
				Resolve(response.data);
			})
			.catch(function(error){
				console.log(error.message);
				
			})
			
	})
}

export async function update(list) {
	return new Promise((Resolve) => {
		axios.patch('https://ansarcrm.iran.liara.run/MainApi/setForm', list)
			.then(function (response) {
				Resolve(response.data);
				console.log(response.data);
			})
			.catch(function(error){
				console.log(error.message);
				
			})
	})
}
// export async function postrequest(e){
// 	//not complete............
//  	e.preventDesfault();
		
// 		await axios.post('',JSON.stringify({
// 			user:e,
// 		}))
// }