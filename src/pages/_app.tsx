import '../styles/global.css';

import { createInstance, OptimizelyProvider } from '@optimizely/react-sdk';
import type { AppProps } from 'next/app';

const optimizely = createInstance({
  sdkKey: 'XKkRw1SWTRnp5WXmVMYdB',
});

const userId = Math.floor(
  Math.random() * (1000000 - 100000) + 100000
).toString();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <OptimizelyProvider optimizely={optimizely} user={{ id: userId }}>
    <Component {...pageProps} />
  </OptimizelyProvider>
);

export default MyApp;
