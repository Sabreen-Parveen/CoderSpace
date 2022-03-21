import * as Amplify from "aws-amplify";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import awsconfig from "../src/config";
import AuthContextProvider from "../components/contexts/AuthContextProvider";
import Layout from "../components/UI/Layout";

Amplify.Amplify.configure(awsconfig);
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
