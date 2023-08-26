import { PageHeader } from "@ant-design/pro-components";
import AllBookList from "../components/AllBookList";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "antd";
import { useGetBooksQuery } from "../redux/books/bookSlice";

const AllBooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const { data, isLoading } = useGetBooksQuery({});

  console.log(data);

  const handlePagination = (page: number, limit: number) => {
    setSearchParams({ page: page.toString(), limit: limit.toString() });
  };

  return (
    <div className="pt-10">
      <PageHeader
        onBack={() => navigate(-1)}
        className="mb-5"
        title="All Books"
        key={1}
        extra={
          <Button onClick={() => navigate("/add-new-book")}>Add New</Button>
        }
      />
      <AllBookList
        data={data?.data}
        loading={isLoading}
        pagination={{
          total: data?.length,
          current: Number(page || 1),
          pageSize: Number(limit || 10),
          onChange: handlePagination,
        }}
      />
    </div>
  );
};

export default AllBooks;
