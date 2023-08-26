import { bookData } from "../data/Books";
import { Card, Col, Row } from "antd";

const Home = () => {
  return (
    <div className="pt-10">
      <Row gutter={[20, 20]}>
        {bookData?.map((item) => {
          return (
            <Col key={item?.title} xs={24} md={12} lg={8}>
              <Card title={item?.title}>
                <div className="flex justify-between mb-4">
                  <h3>Author : {item?.author}</h3>
                  <h3>Genre : {item?.genre}</h3>
                </div>
                <p>Published date : {item?.publicationDate}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
