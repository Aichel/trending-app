import Header from "./header";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <title>Trending App</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
