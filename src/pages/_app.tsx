import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react';
import EmotionProvider from '../providers/EmotionProvider';
import MaterialUIProvider from '../providers/MaterialUIProvider';

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
      <MaterialUIProvider>
        <Component {...pageProps} />
      </MaterialUIProvider>
    </EmotionProvider>
  );
};

export default MyApp
