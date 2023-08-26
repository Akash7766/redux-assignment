import { Button, Card, Form, Input, Select, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase.init";
import { useCreateBookMutation } from "../redux/books/bookSlice";
import { IBooks } from "../types/books.interface";
import { useNavigate } from "react-router-dom";

const AddNewBook = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [user] = useAuthState(auth);
  const [createBook, { isLoading: createLoading }] = useCreateBookMutation();
  const handleSubmit = async (values: IBooks) => {
    try {
      values.author = user?.email as string;
      await createBook(values);
      form?.resetFields();
      navigate("/all-books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      // className="auth-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: `url(${IMAGES.LightBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card
        style={{
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 0 20px #0815420d",
          borderRadius: 10,
        }}
      >
        {/* <img
            style={{ maxWidth: 180, margin: '20px auto', display: 'block' }}
            src={IMAGES.Logo}
            alt=""
          /> */}
        <Typography.Title
          level={2}
          style={{ textAlign: "center", marginBottom: 30 }}
        >
          Add new book
        </Typography.Title>
        <Form
          name="normal_book"
          className="book-form"
          initialValues={{ remember: true }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="title"
            rules={[
              { required: true, message: "Please input your title!" },
              { type: "string", message: "Invalid Email" },
            ]}
          >
            <Input type="title" size="large" placeholder="book title" />
          </Form.Item>
          <Form.Item
            name="genre"
            rules={[
              { required: true, message: "Please input your genre!" },
              { type: "string", message: "Invalid Email" },
            ]}
          >
            <Select placeholder="Select a Genre">
              <Select.Option value="Fiction">Fiction</Select.Option>
              <Select.Option value="Story">Story</Select.Option>
              <Select.Option value="Sports">Sports</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              loading={createLoading}
              size="large"
              style={{ display: "block", width: "100%" }}
              type="primary"
              htmlType="submit"
            >
              Add new
            </Button>
          </Form.Item>
          {/* Or <a href="/">book now!</a> */}
        </Form>
      </Card>
    </div>
  );
};

export default AddNewBook;
