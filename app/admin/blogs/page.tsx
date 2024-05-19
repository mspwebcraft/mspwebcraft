"use client";
import useBlog from "@/hooks/useBlog";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { Blog } from "@/types/blog";
import React from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogList = () => {
  const { fetchBlogs, deleteABlog } = useBlog();
  const { data: blogs } = fetchBlogs;
  const router = useRouter();

  const columns: ColDef<Blog>[] = [
    {
      headerName: "Date",
      field: "createdAt",
      cellRenderer: (row) => row.value.split("T")[0],
    },
    {
      headerName: "Title",
      field: "title",
    },
    {
      headerName: "Image",
      field: "image",
      cellRenderer: (row) => {
        return (
          <img
            src={row.value}
            alt="image"
            className="w-20 h-10 object-fill border rounded"
          />
        );
      },
    },
    {
      headerName: "Paragraph",
      field: "paragraph",
    },
    {
      headerName: "Written by",
      field: "author.name",
    },
    {
      headerName: "Actions",
      field: "_id",
      cellRenderer: (row) => {
        console.log(row.data);
        return (
          <div className="flex gap-4 mt-2 ">
            <PencilIcon
              color="blue"
              className="cursor-pointer"
              onClick={() => router.push("/admin/blogs/add",)}
            />
            <Trash2Icon
              color="red"
              className="cursor-pointer"
              onClick={() => deleteABlog.mutate(row?.data?._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={blogs} columnDefs={columns} />
    </div>
  );
};

export default BlogList;
