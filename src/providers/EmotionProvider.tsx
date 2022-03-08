import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';

import createEmotionCache from "../utils/createEmotionCache";

interface EmotionProviderProps {
  children: React.ReactNode;
  emotionCache: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/**
 * @component EmotionProvider
 * @argument0 {React.ReactNode} children
 * @argument1 {EmotionCache} emotionCache
 * @description Wraps the children with the Emotion cache provider.
 */
const EmotionProvider = ({
  children,
  emotionCache,
}: EmotionProviderProps): JSX.Element => {
  emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {children}
    </CacheProvider>
  );
};

export default EmotionProvider;
