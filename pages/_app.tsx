import "../styles/globals.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "rc-dropdown/assets/index.css";
import "katex/dist/katex.min.css";
import "@algolia/autocomplete-theme-classic";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";

const theme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!localStorage.getItem("hlc")) {
      document.body.innerHTML = "";
    }
  }, []);
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
