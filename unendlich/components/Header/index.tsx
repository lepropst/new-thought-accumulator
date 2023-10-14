import React, { RefObject, forwardRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

export type HeaderRef = HTMLDivElement;
export interface HeaderProps
   {
  menus?: { trigger: React.ReactNode;
    content?: React.ReactNode;
}[];
  routes: string[];
}
const MenuItem = ({trigger, content}:{ trigger: React.ReactNode;
    content: React.ReactNode;
}) => {
  return (
    <NavigationMenuItem>
      {trigger}
      {content}
    </NavigationMenuItem>
  );
};
const Header = forwardRef<HeaderRef, HeaderProps>(
  ({ routes, menus, ...props }, ref) => (
    <div ref={ref} {...props}>
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((e, i) => (
            <NavigationMenuItem key={`${i}-${e}`}>{e}</NavigationMenuItem>
          ))}
          {menus && menus.map((e, i) => (
            <MenuItem trigger={e.trigger}content={e.content} key={`${i}-${e}`} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
);
Header.displayName = "Header"
export default Header;
