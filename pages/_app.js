import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider>
      <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
