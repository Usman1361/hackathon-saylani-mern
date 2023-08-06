import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Loading from "../components/SmallComponents/Loading";

const Dashboard = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      <Loading loading={loader} />
      <h1>DashBoard</h1>
    </>
  );
};

export default Dashboard;
