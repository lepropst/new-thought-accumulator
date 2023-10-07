import { HTMLAttributes, forwardRef } from "react";

const Header = forwardRef<
HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <div className="w-screen h-8 bg-red-500" ref={ref} {...props}>{props.children}</div>);

Header.displayName = "Header";
export default Header
