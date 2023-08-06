import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Products from "../Products/Products";
import { product2 } from "../SmallComponents/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { url } from "../../utils";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  // Function to handle incrementing the quantity of an item
  const handleIncrement = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      return updatedItems;
    });
  };

  // Function to handle decrementing the quantity of an item
  const handleDecrement = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
      }
      return updatedItems;
    });
  };
  useEffect(() => {
    const id = localStorage.getItem("cart");
    axios
      .get(`${url}/product/${id}`)
      .then((response) => {
        // setProducts(response.data);
        console.log(response.data);
        setCartItems(response.data);
        // console.log(product.images[0]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <Box sx={{ backgroundColor: "#121120" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "center", color: "white" }}
              variant="h4"
            >
              Shopping Cart
            </Typography>
          </Grid>
          <Grid
            item
            container
            mt={5}
            sx={{
              display: "flex",

              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Image</TableCell>
                    <TableCell sx={{ color: "white" }}>Title</TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Details
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Quantity
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems?.map(({ name, description, price, images }) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        <img
                          src={`${url}/${images[0]}`}
                          alt=""
                          width={100}
                          hight={100}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        {name}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {description}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        <TextField
                          type="number"
                          variant="outlined"
                          size="small"
                          sx={{ color: "white", backgroundColor: "white" }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: "10px" }}
            >
              OrderNow
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
