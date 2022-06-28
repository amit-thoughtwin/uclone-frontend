import {
  Button, Checkbox, Col, Form, Input, Row, Typography,
} from 'antd';
import React from 'react';

const { Text } = Typography;

export default function Register() {
  return (
    <Row justify="space-around" align="middle" style={{ height: '100vh' }}>
      <Col span={6}>
        <Text strong>Sign up and start learning</Text>
        <Form layout="vertical">
          <Form.Item label="Full Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              Send me special offers, personalized recommendations, and learning
              tips
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ backgroundColor: '#a435f0', border: 'none' }} block>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div>
          <div>
            <span>
              By signing up, you agree to our Terms of Use and Privacy Policy
              {' '}
            </span>
          </div>
          <div>
            <span>Already have an account? Log In</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}
