import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
    useEffect(() => {
        Aos.init({ duration:2000 });
     }, [])
    return(
        <div id="contact" className = "block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                <h2 data-aos="fade-up">Get in Touch</h2>
                 <p data-aos="fade-up">If you have any Questions Contact Us</p>
                </div>
                <Form
                data-aos="zoom-in-up"
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                >
                <Form.Item
                data-aos="slide-up"
                    name="fullname"
                    rules={[{ required: true, message: 'Please input Full Name!' }]}
                >
                    <Input placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                data-aos="slide-up"
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
                data-aos="slide-up"
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
                data-aos="slide-up"
                    name="message"
                >
                    <TextArea placeholder="Message" />
                </Form.Item>
                <Form.Item
                data-aos="slide-up"
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                >
                    <Checkbox data-aos="slide-up" >
                    I agree with terms and conditions.
                    </Checkbox>
                  </Form.Item>

                <Form.Item>
                    <div className="btnHolder">
                    <Button data-aos="fade-up" className="exp" htmlType="submit" >
                    Sumbit
                    </Button>
                    </div>
                </Form.Item>
                </Form>

            </div>
        </div>
    );
}

export default AppContact;