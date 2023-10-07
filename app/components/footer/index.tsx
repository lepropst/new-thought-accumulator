import { cn } from "@/lib/cn";
import { HTMLAttributes, forwardRef } from "react";


const Footer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("absolute bottom-0 flex-col self-stretch flex ", className)}
    ref={ref}
    {...props}
  />
));
export default Footer;
Footer.displayName = "Header";
