import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Discover the ultimate collection of UI components tailored for contemporary websites. Elevate your design with sleek, intuitive elements that enhance user experience and aesthetics, ensuring your website stands out among the rest.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "MOHIT VERMA CO Founder & CEO of MSP WEBCRAFT",
      image: "/images/blog/user.jpeg",
      designation: "WEB DEVELOPER ",
    },
    tags: ["creative"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "MSP WEBCRAFT's Revolutionary UI Components",
    paragraph:
      "Explore  with MSP WEBCRAFT's groundbreaking UI components. Elevate your web presence and captivate audiences with our revolutionary design solutions, meticulously crafted to redefine user experiences and set new standards in modern web development.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "SUMIT AGGARWAL CO Founder & CMO of MSP WEBCRAFT",
      image: "/images/blog/author-02.png",
      designation: "Graphic Designer",
    },
    tags: ["computer"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "MSP WEBCRAFT's Top-Notch UI Solutions.",
    paragraph:
      "Discover unparalleled excellence in web design with MSP WEBCRAFT's top-tier UI solutions. Our commitment to innovation and precision ensures cutting-edge designs that empower your digital presence, setting benchmarks for superior user experiences across all platforms.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "PANKAJ KHUSAWA CO Founder & CTO of MSP WEBCRAFT",
      image: "/images/blog/author-03.png",
      designation: "MERN STACK DEV",
    },
    tags: ["design"],
    publishDate: "2023",
  },
];
export default blogData;
