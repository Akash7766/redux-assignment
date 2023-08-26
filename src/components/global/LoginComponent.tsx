"use client";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <Row className="h-full" align="middle" justify="center">
      <Col sm={24} md={10} lg={12}>
        <div
          className="h-full hidden md:flex justify-center items-center"
          // style={{
          //   background: `url(${IMAGES.AuthBg})`,
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'round',
          // }}
        >
          <img
            className="max-w-[500px]"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            alt="auth-thumb"
          />
        </div>
      </Col>
      <Col sm={24} md={14} lg={12}>
        <div className="flex justify-center py-10">
          <div className="xl:w-1/2 md:w-3/4 sm:w-full sm:p-6 md:p-0">
            <div className="mb-10 text-center">
              {/* <img className="mx-auto mb-8" src="/images/logo.png" alt="logo" /> */}
              <h2 className="text-2xl font-semibold">
                Welcome Back Please Login
              </h2>
            </div>
            <Form size="large">
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input prefix={<MdEmail />} placeholder="Email" type="email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    // min: 6,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password prefix={<MdLock />} placeholder="Password" />
              </Form.Item>
              <div className="flex justify-between mb-6">
                <Checkbox>Remember me</Checkbox>
                <Link to="/">Forgot password</Link>
              </div>
              <Form.Item>
                <Button
                  block
                  //   loading={loginFn.isLoading}
                  type="primary"
                  htmlType="submit"
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LoginComponent;
