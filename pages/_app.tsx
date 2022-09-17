import type { AppProps } from 'next/app';
import Head from 'next/head';
import globalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NEXTJS TEMPLATE</title>
      </Head>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
