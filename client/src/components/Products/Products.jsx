import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Products = (props) => {
  return (
    <Box
      height={400}
      width={350}
      sx={{ border: "2px solid #795548", borderRadius: "8px" }}
    >
      <Box
        mt={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontFamily: "Oswald",
        }}
      >
        <img src={props.img} height={200} width={200} alt="product1" />
      </Box>
      <Box mt={3}>
        <Typography
          sx={{
            textAlign: "center",
            color: "red",
            fontFamily: "Roboto Condensed",
          }}
          variant="h6"
        >
          {props.text}
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "white" }}
          variant="body2"
        >
          {props.detail}
        </Typography>
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ marginRight: "10px" }}
            variant="outlined"
            color="primary"
          >
            View More
          </Button>
          <Button variant="contained" color="success">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
