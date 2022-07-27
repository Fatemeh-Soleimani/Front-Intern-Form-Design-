import { Form, Input, Button, Row, Col, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import FormItem from "antd/lib/form/FormItem";
function MyForm() {
	return <div><Form name='basic form' layout="vertical" size="middle">
		<Row gutter={[64, 40]}>
			<Col span={12} ><div>
				<Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
					<input ></input>
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
						<TextArea showCount maxLength={1000} />
					</Form.Item>
				</div>
			</Col>
		</Row>


		<Row gutter={[64, 40]}>
			<Col span={12} >
				<div>
					<FormItem name="priority" label="Priority" required tooltip="This is a required field">
						<input />
					</FormItem>
				</div>
			</Col>
			<Col span={12} >
				<div>
					<FormItem label="Author" name="author">
						<p>system</p>

					</FormItem>
				</div>
			</Col>
		</Row>
		<Row gutter={[64, 40]}>
			<Col span={12} >
				<div>
					<FormItem label="Created" name="create">
						<p><Date /></p>
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