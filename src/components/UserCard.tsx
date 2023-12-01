import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";

interface UserCardProps {
  user: User;
  onClick?: () => void;
}

const UserCard = ({ user, onClick }: UserCardProps) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{ flexDirection: "row", gap: 2, p: 2, boxShadow: theme.shadows[1] }}
      onClick={onClick}
    >
      <Stack sx={{ flex: "1 1 auto", gap: 2 }}>
        <Stack>
          <Typography
            variant="h6"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "block",
              lineHeight: 1.2,
            }}
          >
            {user.name}
          </Typography>
          <Typography variant="body2" color={"sandybrown"}>
            {user.email}
          </Typography>
        </Stack>
        <Typography textAlign={"right"}>Author: {user.id}</Typography>
      </Stack>
    </Stack>
  );
};

export default UserCard;
