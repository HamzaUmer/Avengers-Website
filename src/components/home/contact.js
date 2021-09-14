import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
    return(
        <div id="contact" className = "block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                <h2>Get in Touch</h2>
                 <p>If you have any Questions Contact Us</p>
                </div>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                >
                <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: 'Please input Full Name!' }]}
                >
                    <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                >
                    <Input
                    placeholder="Email Address"
                    />
                </Form.Item>
                <Form.Item
                    name="telephone"
                >
                    <Input placeholder="Telephone" />
                </Form.Item>
                <Form.Item
                    name="subject"
                >
                    <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item
                    name="message"
                >
                    <TextArea placeholder="Message" />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                >
                    <Checkbox >
                    I agree with terms and conditions.
                    </Checkbox>
                  </Form.Item>

                <Form.Item>
                    <Button style={{ background: "#5a1891", borderColor:"#4c107c"}} htmlType="submit" className="login-form-button">
                    Sumbit
                    </Button>
                </Form.Item>
                </Form>

            </div>
        </div>
    );
}

export default AppContact;