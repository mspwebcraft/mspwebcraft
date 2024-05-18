"use client";

import Input from "@/components/ui/Input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Textarea from "@/components/ui/Textarea";
import JoditEditor from "jodit-react";

const BlogSchema = z.object({
  title: z.string().min(3, "Title is required."),
  paragraph: z.string().min(3, "Short Description is required."),
  image: z.string().min(3, "Image is required."),
  tags: z.string().min(3, "Tags is required."),
  html: z.string().min(1, "Content of blog is required."),
});

type Blog = z.infer<typeof BlogSchema>;

const AddBlog = () => {
  const { handleSubmit, control, watch, setValue } = useForm<Blog>({
    resolver: zodResolver(BlogSchema),
  });
  const inputs = [
    { name: "title", placeholder: "Enter the title of blog" },
    { name: "image", placeholder: "Enter the url of image" },
    { name: "tags", placeholder: "Enter the tags related to blog" },
  ];
  return (
    <div className="rounded-xl border p-4">
      <h1 className="my-4 mb-8 text-center text-3xl font-bold text-black dark:text-white">
        Add New Blog
      </h1>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="grid grid-cols-2 gap-4 md:gap-4">
          {inputs.map(({ name, placeholder }, i) => (
            <Controller
              key={i}
              control={control}
              name={name as keyof Blog}
              render={({ field: { onChange }, formState: { errors } }) => (
                <Input
                  onChange={onChange}
                  placeholder={placeholder}
                  error={errors[name as keyof Blog]?.message}
                />
              )}
            />
          ))}
          <Controller
            control={control}
            name="tags"
            render={({ field: { onChange } }) => (
              <Textarea
                placeholder="Enter Short description about blog"
                rows={1}
                onChange={onChange}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="html"
          render={({ field: { onChange } }) => (
            <Textarea
              placeholder="write content of the blog"
              rows={4}
              textareaClass="my-4"
              onChange={onChange}
            />
          )}
        />

        <button className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
