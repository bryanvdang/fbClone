import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import { getSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  // if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

//context is the request for when someone wants to access the main page
export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
