import type { NextPage } from "next";
import Router from "next/router";
import React, { useEffect } from "react";

const Home: NextPage = (props) => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/repositories");
    }
  }, [props]);

  return (
    <>
    </>
  );
};

export default Home;
