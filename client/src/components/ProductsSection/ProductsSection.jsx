import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { product1 } from "../SmallComponents/image";
import Products from "../Products/Products";
import { url } from "../../utils.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ProductsSection = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/product`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        console.log(product.images[0]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <Box sx={{ backgroundColor: "#121120" }}>
      <Container maxWidth="xl">
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
          {product.map(({ name, price, description, images, _id }) => (
            <Grid
              mt={10}
              item
              xs={12}
              md={4}
              sx={{ display: "flex", flexDirection: "center" }}
            >
              <Box mr={2}>
                <Products
                  img={`${url}/${images[0]}`}
                  text={name}
                  detail={description}
                  id={_id}
                  price={price}
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
