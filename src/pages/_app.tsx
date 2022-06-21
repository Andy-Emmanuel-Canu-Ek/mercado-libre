import type { AppProps } from 'next/app';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import environment from 'shared/constants/environment';
import '../styles/globals.css';
import { ReactElement } from 'react';
import Navbar from 'components/layouts/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const { bugsnagApiKey } = environment;

if (bugsnagApiKey && bugsnagApiKey !== '') {
  Bugsnag.start({
    apiKey: environment.bugsnagApiKey,
    plugins: [new BugsnagPluginReact()],
    releaseStage: process.env.releaseStage,
    enabledReleaseStages: ['production', 'staging'],
  });
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
