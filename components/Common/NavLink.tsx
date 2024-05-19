"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, activeClassName, className, ...rest }) => {
  const pathname = usePathname();
  const isActive = pathname == href;
  const newClassName = `${isActive ? activeClassName : ""} ${className}`;
  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};
export default NavLink;
