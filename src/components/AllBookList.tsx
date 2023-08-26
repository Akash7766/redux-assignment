import { Button, PaginationProps, Popconfirm, Space, Table } from "antd";
import { IBooks } from "../data/Books";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import type { ColumnsType } from "antd/es/table";
interface IProps {
  data?: IBooks[];
  loading?: boolean;
  pagination?: PaginationProps;
}
const AllBookList: React.FC<IProps> = ({ data, pagination }) => {
  const dataSource = data?.map((x) => ({
    key: x?.title,
    id: x?.title,
    title: x?.title,
    author: x?.author,
    genre: x?.genre,
    publicationDate: x?.publicationDate,
  }));

  const columns: ColumnsType<IBooks> = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "publicationDate",
      dataIndex: "publicationDate",
      key: "publicationDate",
    },

    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: () => (
        <Space>
          <Button
            style={{ fontSize: 20, borderRadius: 5 }}
            // onClick={async () => {
            //   const data = await SectionService.filterById(id);
            //   setUpdateItem(data?.data);
            // }}
          >
            <AiFillEdit />
          </Button>

          <Popconfirm
            title="Are you sure to delete it?"
            // onConfirm={() =>
            //   getAccess(["FORBIDDEN"], () => deleteSection.mutate(id))
            // }
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button
              danger
              type="primary"
              style={{ fontSize: 20, borderRadius: 5 }}
            >
              <AiFillDelete />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        // loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
      />
    </div>
  );
};

export default AllBookList;
