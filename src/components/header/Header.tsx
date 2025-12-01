"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { useState, useEffect } from "react";

import styles from "./Header.module.css";

const navItems = [
  { title: "About Us", path: "/about" },
  { title: "Events", path: "/events" },
  { title: "Get Involved", path: "/donate" },
  { title: "Access Information", path: "/areas" },
  { title: "Newsletter", path: "/contact" },
  { title: "Store", path: "/store" },
 
 
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Flag to render client-only
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Only mark as mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const drawer = (
    <Box className={styles.drawer}>
      <IconButton className={styles.drawerClose} onClick={handleDrawerToggle}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <List className={styles.drawerList}>
        {navItems.map((item) => (
          <ListItem key={item.title} className={styles.drawerItem}>
            <Link href={item.path} className={styles.drawerLink}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <Box className={styles.headerWrapper}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <div className={styles.leftSection}>
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                className={styles.menuButton}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Link href="/" className={styles.logo}>
              WABA
            </Link>
          </div>

          {!isMobile && (
            <div className={styles.navCenter}>
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className={styles.navLink}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <div className={styles.rightSection}>
            <IconButton className={styles.cartButton}>
              <ShoppingBasketIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ className: styles.drawerPaper }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
