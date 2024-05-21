import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view_';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Surveys </title>
      </Helmet>

      <AppView />
    </>
  );
}
