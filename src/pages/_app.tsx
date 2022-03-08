import "../styles/globals.css";

import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";

import EmotionProvider from "../providers/EmotionProvider";
import MaterialUIProvider from "../providers/MaterialUIProvider";
import RtkProvider from "../providers/RtkProvider";

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache,
  pageProps,
}: MyAppProps): JSX.Element => {
  return (
    <EmotionProvider emotionCache={emotionCache}>
      <RtkProvider>
        <MaterialUIProvider>
          <Component {...pageProps} />
        </MaterialUIProvider>
      </RtkProvider>
    </EmotionProvider>
  );
};

export default MyApp;
