import { ThemeProvider } from "next-themes";
import Layout from "@/components/layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
     <ThemeProvider attribute="class">
        <Layout>
        <Component {...pageProps} />
        </Layout>
     </ThemeProvider>
  )
}
