
import React from 'react';
import { Stack, Typography, useTheme } from "@mui/material";

interface ProductCardProps {
  product: Post;
  onClick?: () => void;
  showAuthor?: boolean;
  onClickAuthor?: () => void;
}

const ProductCard = ({product, onClick, showAuthor = false, onClickAuthor}: ProductCardProps) => {

  const theme = useTheme();


  return (
    <Stack sx={{ flexDirection: 'row', gap: 2, p: 2, boxShadow: theme.shadows[1] }} onClick={onClick}>
      <Stack sx={{ flex: '1 1 auto', gap: 2 }}>
        <Stack>
          <Typography variant="h6" sx={{textOverflow: 'ellipsis', overflow: 'hidden', display: 'block', lineHeight: 1.2}}>{product.title}</Typography>
          <Typography variant="body2" color={"sandybrown"}>{product.body}</Typography>
        </Stack>

        {showAuthor && <Typography textAlign={"right"} onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClickAuthor?.();
        }}>Author: {product.userId}</Typography>}
      </Stack>
    </Stack>
  );
};

export default ProductCard;