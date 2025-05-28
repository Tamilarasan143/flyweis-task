"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import { GrArticle } from "react-icons/gr";
import { TbRefresh } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa";
import { usePathname, } from "next/navigation";
import Link from "next/link";
import ResponsiveAppBar from "@/components/appbar";
const drawerWidth = 240;
const menuItems = [
  {
    id: "article",
    label: "Article",
    href: `/dashboard/article`,
    icon: <GrArticle color="black" />,
    filledIcon: <GrArticle color="white" />,
  },
  {
    id: "auto-dealership",
    label: "Auto Dealership",
    href: `/dashboard/auto-dealership`,
    icon: <TbRefresh color="black" />,
    filledIcon: <TbRefresh color="white" />,
  },
  {
    id: "faq",
    label: "Faqs",
    href: `/dashboard/faq`,
    icon: <FaQuestion color="black"/>,
    filledIcon: <FaQuestion color="white" />,
  },
];
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const currentPath = usePathname();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ResponsiveAppBar sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}/>
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((text, index) => {
            const isActive = currentPath === text.href;
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  backgroundColor: isActive
                    ? (theme) => theme.palette.primary.main
                    : "",
                }}
              >
                <Link
                  href={text.href}
                  className="w-full rounded-lg"
                  passHref
                
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {isActive ? text.filledIcon : text.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: isActive ? "white" : "" }}
                      primary={text.label}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
export default DashboardLayout;
