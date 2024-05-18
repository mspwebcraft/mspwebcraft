import { ChildrenProp } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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

const layout = ({children}:ChildrenProp) => {
    
  return (
    <div className="flex min-h-screen w-full gap-4">
      <div className="min-h-screen w-[300px] bg-gray-200 dark:bg-gray-900">
        <div className="w-full">
          <Image
            src="/images/logo/logo-dark.png"
            width={200}
            height={50}
            alt="logo"
          />
        </div>
        {routes.map((route,i)=><Link className='block w-full p-3' href={route.path} key={i}>{route.name}</Link>)}
      </div>
      <div className="container py-4">{children}</div>
    </div>
  );
}

export default layout