import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const IndexPage = lazy(
  () => import(/* webpackChunkName: "IndexPage" */ '@/pages/index'),
);
const AboutPage = lazy(
  () => import(/* webpackChunkName: "AboutPage" */ '@/pages/about'),
);

const Loading = () => <p>Loading...</p>;

export const Router = () => (
  <BrowserRouter basename='/webpack'>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/index.html' element={<IndexPage />} />
        <Route path='/about.html' element={<AboutPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
