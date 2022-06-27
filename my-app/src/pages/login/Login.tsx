import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

export const Login = () => {
  return (
    <Row justify="space-around" align="middle" >
      <Col span={6}>
        <h3>Sign up and start learning</h3>
        <Form layout="vertical">
          <Form.Item>
            <Input placeholder="Full Name" defaultValue="Full Name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email" defaultValue="Email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Password" defaultValue="Password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              Send me special offers, personalized recommendations, and learning
              tips
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button style={{ color: '#1890FF' }} block>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div>
          <div>
            <span>
              By signing up, you agree to our Terms of Use and Privacy Policy{" "}
            </span>
          </div>
          <div>
            <span>Already have an account? Log In</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};
