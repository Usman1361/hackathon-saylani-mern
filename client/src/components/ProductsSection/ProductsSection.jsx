import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { product1 } from "../SmallComponents/image";
import Products from "../Products/Products";
const ProductsSection = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", color: "white" }}
              >
                All Products
              </Typography>
            </Box>
          </Grid>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Grid
              mt={10}
              item
              xs={12}
              md={6}
              sx={{ display: "flex", flexDirection: "center" }}
            >
              <Box mr={2}>
                <Products
                  img={product1}
                  text="Sample"
                  detail="uhfhofhjsehhshlkhlkstkhl jiasjkjlr ijpafjifs"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsSection;
