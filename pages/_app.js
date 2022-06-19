import Head from 'next/head'

import "../styles/global.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#af52bf",
      main: "#9c27b0",
      dark: "#6d1b7b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f73378",
      main: "#f50057",
      dark: "#ab003c",
      contrastText: "#000",
    },
    neutral: {
      main: '#fff',
      contrastText: '#af52bf',
    },
  },
  typography: {
    fontFamily: [
      "Kanit",
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <title>หมอหมึก - JWC12</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
