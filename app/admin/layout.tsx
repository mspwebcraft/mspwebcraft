import NavLink from "@/components/Common/NavLink";
import { ChildrenProp } from "@/types";
import Image from "next/image";
import React from "react";

const routes = [
  {
    name: "Blogs",
    path: "/admin/blogs",
  },
  {
    name: "Add New Blog",
    path: "/admin/blogs/add",
  },
];

const layout = ({ children }: ChildrenProp) => {
  return (
    <div className="flex min-h-screen w-full gap-4">
      <div className="min-h-screen w-[300px] border-r border-gray-200 shadow-md bg-gray-white dark:bg-gray-dark dark:border-gray-700">
        <div className="w-full">
          <Image
            src="/images/logo/logo-dark.png"
            width={200}
            height={50}
            alt="logo"
          />
        </div>
        {routes.map((route, i) => (
          <NavLink
            className="block w-full p-3 transition-all duration-150 hover:bg-purple-500 hover:text-white"
            activeClassName={"bg-purple-500 text-white"}
            href={route.path}
            key={i}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
      <div className="container py-4">{children}</div>
    </div>
  );
};

export default layout;
