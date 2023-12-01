"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Shop as ShopIcon,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

interface BottomRouterProps {}

const BottomRouter = (props: BottomRouterProps) => {
  const pathname = usePathname();
  const router = useRouter();

  console.log({ pathname }, pathname?.replace("/en/", ""));

  return (
    <BottomNavigation
      showLabels
      value={pathname?.replace("/en/", "")}
      onChange={(e, value: "marketplace" | "posts" | "shops") => {
        switch (value) {
          case "marketplace": {
            router.replace("/marketplace");
            break;
          }
          case "posts": {
            router.replace("/posts");
            break;
          }
          case "shops": {
            router.replace("/shops");
            break;
          }
          default: {
          }
        }
      }}
    >
      <BottomNavigationAction
        label="Marketplace"
        icon={<PersonIcon />}
        value={"marketplace"}
      />
      <BottomNavigationAction
        label="Posts"
        icon={<EmailIcon />}
        value={"posts"}
      />
      <BottomNavigationAction
        label="Shops"
        icon={<ShopIcon />}
        value={"shops"}
      />
    </BottomNavigation>
  );
};

export default BottomRouter;
