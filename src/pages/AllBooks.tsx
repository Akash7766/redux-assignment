import { PageHeader } from "@ant-design/pro-components";
import AllBookList from "../components/AllBookList";
import { bookData } from "../data/Books";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "antd";

const AllBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const handlePagination = (page: number, limit: number) => {
    setSearchParams({ page: page.toString(), limit: limit.toString() });
  };

  console.log(page, limit);
  return (
    <div className="pt-10">
      <PageHeader
        onBack={() => navigate(-1)}
        className="mb-5"
        title="All Books"
        key={1}
        extra={<Button>Add new book</Button>}
      />
      <AllBookList
        data={bookData}
        // loading={isLoading}
        pagination={{
          total: bookData?.length,
          current: Number(page || 1),
          pageSize: Number(limit || 10),
          onChange: handlePagination,
        }}
      />
    </div>
  );
};

export default AllBooks;
