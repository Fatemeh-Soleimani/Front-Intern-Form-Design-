import React, { setState, useEffect } from 'react';
import "./myform.css";
import { Form, Input, Button, Row, Col, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import FormItem from "antd/lib/form/FormItem";
import { useState } from "react";
import axios from "axios";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { getrequest, postrequest, update } from "./api.js";

function MyForm() {
	let [values, setvalues] = useState([]);
	const [httpError, setHttpError] = useState();
	useEffect(() => {
		const response = getrequest().then((listOfValue) => {

			values = JSON.parse(JSON.stringify(listOfValue));
			setvalues(listOfValue.result);
			console.log(values)
		})
		
		// .catch(error=>{
		// 	setHttpError(error.message)
		// });

	}, []);
	

	const handleFormSubmit = () => {

		const list1 = {
			id: this.state.lists[0]._id,
			params: {
				name: values.Name,
				desc: values.Description,
				priority: values.Priority,
				author: values.Author,
				created: values.Created,
				lastModified: values.LastModified,
				state: values.State,
			}
		};
		//postrequest(list1);
		update(list1).then((list1) => {
			console.log(list1)
			this.setState({ values: list1 });
		});
		console.log(list1);
	}

	const [name, setname] = useState('');
	const [desc, setdesc] = useState('');
	const [prio, setprio] = useState('');
	// const [author, setauthor] = useState('');
	// const [create, setcreate] = useState('');
	// const [lastm, setlastm] = useState('');


	const handlename = (event) => {
		// this.setState({name: event.target.value })
		const Name = event.target.value;
		console.log(Name);
		setname(Name);
	}
	const handledesc = (event) => {
		const description = event.target.value;
		console.log(description);
		setdesc(description);
	}
	const handleprio = (event) => {
		const prior = event.target.value;
		console.log(prior);
		setprio(prior);
	}
	// const 
	// const submituser = async (e) => {
	// 	//not complete....
	// 	postrequest(e)

	// }
// if(httpError){
// 	return(
// 		<section >
//         <p>{httpError}</p>
//       </section>
// 	)
// }
	return (
		values.map((inp) => (

			<Form className='basic_form' layout="vertical" size="middle" onSubmit={handleFormSubmit}>
				<h1 class="title">General Setting</h1>
				<Row gutter={[64, 40]}>
					<Col span={12} ><div>
						<Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
							<input name="name" className="name" onChange={(e) => handlename(e)} placeholder={inp.name}></input>
						</Form.Item></div></Col>
					<Col span={12} ><div>
						<Form.Item label="State" name="state">

							<Switch className="sw-button" autofocus="true" checkedChildren="is enabled" unCheckedChildren="not enabled" defaultChecked />

						</Form.Item></div></Col>

				</Row>
				<Row gutter={[64, 40]}>
					<Col span={24} >
						<div>
							<Form.Item label="Description" >
								<TextArea class="desc-inp" name="desc_inp" showCount maxLength={1000} onChange={(e) => handledesc(e)} value={inp.desc}>
								</TextArea>
							</Form.Item>
						</div>
					</Col>
				</Row>


				<Row gutter={[64, 40]}>
					<Col span={12} >
						<div>
							<FormItem name="priority" label="Priority" required tooltip="This is a required field">
								<input class="prio-inp" onChange={(e) => handleprio(e)} placeholder={inp.priority} />
							</FormItem>
						</div>
					</Col>
					<Col span={12} >
						<div>
							<FormItem label="Author" name="author">
								<p class="author" >{inp.author}</p>

							</FormItem>
						</div>
					</Col>
				</Row>
				<Row gutter={[64, 40]}>
					<Col span={12} >
						<div>
							<FormItem label="Created" name="create">
								<p class="create">{inp.created}</p>
							</FormItem>
						</div>
					</Col>

					<Col span={12} >
						<div>
							<FormItem label="Last modified" name="lastm">
								<p className="lastm">{inp.lastModified}</p>
							</FormItem>
						</div>
					</Col>
				</Row>
				<Row gutter={[64, 40]}>
					<Col span={24} >
						<div>
							<Form.Item >
								<button class="submitbutton" type="submit" >submit</button>
							</Form.Item>
						</div>
					</Col>
				</Row>
			</Form>

		))
	)
};
export default MyForm;

