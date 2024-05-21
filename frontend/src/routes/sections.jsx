import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

// lazy suspense 사용
export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const AdminLoginPage = lazy(() => import('src/pages/admin-login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const AdminSignupPage = lazy(() => import('src/pages/admin-signup'));
export const AdminPage = lazy(() => import('src/pages/admin-page'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const SurveyPage = lazy(() => import('src/pages/survey-form'));

export const ResultPage = lazy(() => import('src/pages/survey-result'));
export const AdminResultPage = lazy(() => import('src/pages/admin-survey-result'));
export const ResultListPage = lazy(() => import('src/pages/survey-result-list'));

export const HomePage = lazy(() => import('src/pages/app_'));
// ----------------------------------------------------------------------

export default function Router() {
  const isLoggedIn = localStorage.getItem("token") || false
  console.log(isLoggedIn)
  const isLoggedInadmin = localStorage.getItem("admin") || false
  console.log(isLoggedInadmin)
  console.log("로그인 여부", isLoggedIn)
  const adminonlyallowpath = ["/adminpage",
  "/adminpage/LeadershipSurveyResult"  ,
  "/adminpage/InclusiveLeadershipSurveyResult"  ,
  "/adminpage/JMLeadershipEvaluationSurveyResult"  ,
  "/adminpage/UN17GoalResult"  ,
  "/adminpage/",
  "/adminpage/LeadershipSurveyResult/"  ,
  "/adminpage/InclusiveLeadershipSurveyResult/"  ,
  "/adminpage/JMLeadershipEvaluationSurveyResult/"  ,
  "/adminpage/UN17GoalResult/"  ,
  // "/signin",
  ]
  const allowpath  = ['/signin',"/signin/",'/adminsignin']
  const disallowgeneral = ['/home', '/about']
  const disallowresult  = ["/LeadershipSurveyResult"  ,
                          "/InclusiveLeadershipSurveyResult"  ,
                          "/JMLeadershipEvaluationSurveyResult"  ,
                          "/SelfCheckResult"  ,
                          "/SelfAwarenessResult"  ,
                          "/DifficultInEmotionResult"  ,
                          "/UN17GoalResult"  ,
                          "/EntrepreneurshipmindsetSurveyResult"]  
  const disallowsurvey = ["/"
                          ,"/PersonalInformationSurvey"
                          ,"/UN17Goal"
                          ,"/InclusiveLeadershipSurvey"
                          ,"/JMLeadershipEvaluationSurvey"
                          ,"/LeadershipSurvey"]
  const disallowedPaths = disallowgeneral + disallowresult + disallowsurvey
  const adminonlyallowpath2 = adminonlyallowpath + ["/signin" ]
  console.log(window.location.pathname)
  if (isLoggedIn){
    if ((isLoggedIn === isLoggedInadmin)){
      console.log(111)
      if (!adminonlyallowpath2.includes(window.location.pathname) || window.location.pathname === "/"){
        window.location.href = '/adminpage';
        console.log(2111)
      }
      console.log(111)
    }else{
      if (allowpath.includes(window.location.pathname)){
        window.location.href = '/';
      }if (adminonlyallowpath.includes(window.location.pathname)){
        window.location.href = '/';
      }
    }
  }
  if (!isLoggedIn){
    if (disallowedPaths.includes(window.location.pathname)){
    window.location.href= '/signin';
    }
    if (adminonlyallowpath.includes(window.location.pathname)){
      window.location.href= '/signin';
    }
  }

  
 
  const routes = useRoutes([
    {
      element: (
        // 대시보드 레이아웃 여기에 헤더, 네브바 다 있음
        <DashboardLayout>
          <Suspense>
            <Outlet /> 
            {/* 중첩 라우팅해주는 Outlet 함수 */}
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '', element: <HomePage /> , index: true },
        {path : "reference", element: <IndexPage /> },
        // { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
        // 설문조사 라우트
        { path: "PersonalInformationSurvey", element: <SurveyPage surveyname = "PersonalInformationSurvey" /> },
        { path: "UN17Goal", element: <SurveyPage surveyname = "UN17Goal" /> },
        { path: "LeadershipSurvey", element: <SurveyPage surveyname = "LeadershipSurvey" /> },
        { path: "InclusiveLeadershipSurvey", element: <SurveyPage surveyname = "InclusiveLeadershipSurvey" /> },
        { path: "JMLeadershipEvaluationSurvey", element: <SurveyPage surveyname = "JMLeadershipEvaluationSurvey" /> },
        // 결과 라우트
        { path: "Results/PersonalInformationSurveyResult", element: <ResultPage surveyname = "PersonalInformationSurvey" /> },
        { path: "Results/JMLeadershipEvaluationSurveyResult", element: <ResultPage surveyname = "JMLeadershipEvaluationSurvey" /> },
        { path: "Results/InclusiveLeadershipSurveyResult", element: <ResultPage surveyname = "InclusiveLeadershipSurvey" /> },
        { path: "Results/LeadershipSurveyResult", element: <ResultPage surveyname = "LeadershipSurvey" /> },
        { path: "Results/UN17GoalResult", element: <ResultPage surveyname = "UN17Goal" /> },
        { path: "Results", element: <ResultListPage /> },

      ],
    },
    {
      path: 'signin',
      element: <LoginPage />,
    },
    {
      path: 'adminsignin',
      element: <AdminLoginPage />,
    },
    {
      path: 'adminpage',
      element: <AdminPage />,
    },
    // { path: "adminpage/PersonalInformationSurveyResult", element: <ResultPage surveyname = "PersonalInformationSurvey" /> },
    { path: "adminpage/JMLeadershipEvaluationSurveyResult", element: <AdminResultPage surveyname = "JMLeadershipEvaluationSurvey" /> },
    { path: "adminpage/InclusiveLeadershipSurveyResult", element: <AdminResultPage surveyname = "InclusiveLeadershipSurvey" /> },
    { path: "adminpage/LeadershipSurveyResult", element: <AdminResultPage surveyname = "LeadershipSurvey" /> },
    { path: "adminpage/UN17GoalResult", element: <AdminResultPage surveyname = "UN17Goal" /> },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    // {
    //   path: 'adminsignup',
    //   element: <AdminSignupPage />,
    // },
   
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
