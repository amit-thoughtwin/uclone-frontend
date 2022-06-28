import {
  Button, Col, Form, Input, Row, Typography,
} from 'antd';
import React from 'react';
import {
  AppleOutlined, FacebookOutlined, GoogleOutlined, LockOutlined, MailOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

export default function Login() {
  return (
    <Row justify="space-around" align="middle" style={{ height: '100vh' }}>
      <Col span={6}>
        <Text strong>Log In to Your Udemy Account!</Text>
        <Button style={{ textAlign: 'initial', marginBottom: '24px' }} block>
          <FacebookOutlined />
          Continue with Facebook
        </Button>
        <Button style={{ textAlign: 'initial', marginBottom: '24px' }} block>
          <GoogleOutlined />
          Continue with Google
        </Button>
        <Button style={{ textAlign: 'initial', marginBottom: '24px' }} block>
          <AppleOutlined />
          Continue with Apple
        </Button>
        <Form layout="vertical">

          <Form.Item
            name="Email"
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ backgroundColor: '#a435f0', border: 'none' }}
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
