import { resolveOnChange } from "antd/lib/input/Input";
import axios from "axios";
export async function getrequest() {
	return new Promise((resolve) => {
		axios.get('https://ansarcrm.iran.liara.run/MainApi/getForm?id=1000', {
			params: {
				ID: 1000
			}
		})
			.then(function (response) {
				resolve(response.data);
				//console.log(response.data);
			})
	})
}

export async function update(list) {
	return new Promise((resolve) => {
		axios.patch('https://ansarcrm.iran.liara.run/MainApi/setForm', list)
			.then(function (response) {
				resolve(response.data);
				console.log(response.data);
			});
	})
}
export async function postrequest(e){
	//not complete............

	
	// e.preventDesfault();
		// const userdata={Name:name , description:desc,prior:prio};
		// await axios.post('https://ansarcrm.iran.liara.run/MainApi/setForm',JSON.stringify(userdata)).then(result=>{console.log(result.data);});
}