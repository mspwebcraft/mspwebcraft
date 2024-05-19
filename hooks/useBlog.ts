"use client";
import fetchApi from "@/lib/axios";
import { Blog } from "@/types/blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useBlog = () => {
  const queryClient = useQueryClient();

  const fetchBlogs = useQuery({
    queryKey: ["fetch-blogs"],
    queryFn: () => fetchApi<Blog[]>("GET", "/api/blogs"),
  });

  const addBlog = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: (blog: any) => fetchApi("POST", "/api/blogs", blog),
    onSuccess: (res: { message: string }) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["fetch-blogs"] });
    },
    onError:(err:any)=>{
        toast.error(err.message)
    }
  });

  const deleteABlog = useMutation({
    mutationKey: ["delete-blog"],
    mutationFn: (id: string) => fetchApi("DELETE", `/api/blogs/${id}`),

    onSuccess: (res: { message: string }) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["fetch-blogs"] });
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  return { fetchBlogs, addBlog, deleteABlog };
};

export default useBlog;
