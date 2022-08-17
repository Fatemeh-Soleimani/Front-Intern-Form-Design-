import "./myform.css";
import { Form, Input, Button, Row, Col, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import FormItem from "antd/lib/form/FormItem";
import { useState } from "react";
import axios from "axios";
import { OmitProps } from "antd/lib/transfer/ListBody";
// const [users, setUsers] = useState([]);
async function getrequest(){
	axios.get('https://ansarcrm.iran.liara.run/MainApi/getForm?id=1000', {
		params: {
		  ID: 1000
		}
	  })
	  .then(function (response) {
		
		console.log(response.data);
	  });
	}
	
function MyForm() {

	getrequest();
	const [name,setname]=useState('');
	const [desc,setdesc]=useState('');
	const [prio,setprio]=useState('');
	const [author,setauthor]=useState('');
	const [create,setcreate]=useState('');
	const [lastm,setlastm]=useState('');
	

const handlename=(event)=>{
	// this.setState({name: event.target.value })
	const Name=event.target.value;
	console.log(Name);
	setname(Name);
}
const handledesc=(event)=>{
	const description=event.target.value;
	console.log(description);
	setname(description);
}
const handleprio=(event)=>{
	const prior=event.target.value;
	console.log(prior);
	setname(prior);
}
const submituser=async(e)=>{
	
	e.preventDesfault();
	const userdata={Name:name , description:desc,prior:prio};
	await axios.post('https://ansarcrm.iran.liara.run/MainApi/setForm',JSON.stringify(userdata)).then(result=>{console.log(result.data);});
	
}
	return <div><Form onSubmit={submituser} name='basic form' layout="vertical" size="middle">
		<h1 class="title">General Setting</h1>
		<Row gutter={[64, 40]}>
			<Col span={12} ><div>
				<Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
					<input name="name" className="name" onChange={(e)=>handlename(e)} ></input>
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
						<TextArea class="desc-inp" name="desc_inp" showCount maxLength={1000} onChange={(e)=>handledesc(e) }>
						</TextArea>
					</Form.Item>
				</div>
			</Col>
		</Row>


		<Row gutter={[64, 40]}>
			<Col span={12} >
				<div>
					<FormItem name="priority" label="Priority" required tooltip="This is a required field">
						<input class="prio-inp" placeholder="1000" onChange={(e)=>handleprio(e)}/>
					</FormItem>
				</div>
			</Col>
			<Col span={12} >
				<div>
					<FormItem label="Author" name="author">
						<p class="author" >System</p>

					</FormItem>
				</div>
			</Col>
		</Row>
		<Row gutter={[64, 40]}>
			<Col span={12} >
				<div>
					<FormItem label="Created" name="create">
						<p class="create">Saturday, October 15, 2019,18:45:23</p>
					</FormItem>
				</div>
			</Col>

			<Col span={12} >
				<div>
					<FormItem label="Last modified" name="lastm">
						<p className="lastm">Saturday, October 15, 2019,18:45:23</p>
					</FormItem>
				</div>
			</Col>
		</Row>
		<Row gutter={[64, 40]}>
			<Col span={24} >
				<div>
					<Form.Item >
						<button class ="submitbutton" type="submit" >submit</button>
					</Form.Item>
				</div>
			</Col>
		</Row>
	</Form>
	</div>;
}
export default MyForm;

