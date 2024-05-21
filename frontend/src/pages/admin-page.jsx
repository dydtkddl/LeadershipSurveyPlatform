import { Helmet } from 'react-helmet-async';

import { AdminPage } from 'src/sections/adminpage/view_';

// ----------------------------------------------------------------------

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title> SignUp </title>
      </Helmet>

      <AdminPage />
    </>
  );
}
