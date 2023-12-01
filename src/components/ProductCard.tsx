"use client";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  post: Post;
  onClick?: () => void;
  showAuthor?: boolean;
}

const ProductCard = (props: ProductCardProps) => {
  const { post, showAuthor = false } = props;

  const router = useRouter();

  const theme = useTheme();

  return (
    <Stack
      sx={{ flexDirection: "row", gap: 2, p: 2, boxShadow: theme.shadows[1] }}
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
            onClick={() =>
              router.push(`/anthor/${post.userId}/post/${post.id}`)
            }
          >
            {post.title}
          </Typography>
          <Typography variant="body2" color={"sandybrown"}>
            {post.body}
          </Typography>
        </Stack>
        {showAuthor ? (
          <Button
            variant="text"
            onClick={() => router.push(`/anthor/${post.userId}`)}
          >
            Author: {post.userId}
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default ProductCard;
