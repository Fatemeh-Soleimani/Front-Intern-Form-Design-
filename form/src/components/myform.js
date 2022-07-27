import "./myform.css";
import { Form, Input, Button, Row, Col, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import FormItem from "antd/lib/form/FormItem";
function MyForm() {
	return <div><Form name='basic form' layout="vertical" size="middle">
		<h1 class="title">General Setting</h1>
		<Row gutter={[64, 40]}>
			<Col span={12} ><div>
				<Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
					<input className="name"></input>
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
						<TextArea class="desc-inp" showCount maxLength={1000} />
					</Form.Item>
				</div>
			</Col>
		</Row>


		<Row gutter={[64, 40]}>
			<Col span={12} >
				<div>
					<FormItem name="priority" label="Priority" required tooltip="This is a required field">
						<input class="prio-inp" placeholder="1000" />
					</FormItem>
				</div>
			</Col>
			<Col span={12} >
				<div>
					<FormItem label="Author" name="author">
						<p class="author">System</p>

					</FormItem>
				</div>
			</Col>
		</Row>
		<Row gutter={[64, 40]}>
			<Col span={12} >
				<div>
					<FormItem label="Created" name="create">
						<p class="lastm"><Date /></p>
					</FormItem>
				</div>
			</Col>

			<Col span={12} >
				<div>
					<FormItem label="Last modified" name="create">
						<p className="lastm"><Date /></p>
					</FormItem>
				</div>
			</Col>
		</Row>

	</Form>
	</div>;
}
export default MyForm;