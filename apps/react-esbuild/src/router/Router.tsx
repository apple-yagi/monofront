import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const IndexPage = lazy(() => import('@/pages/index'));
const AboutPage = lazy(() => import('@/pages/about'));

const Loading = () => <p>Loading...</p>;

export const Router = () => (
  <BrowserRouter basename='/esbuild'>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/index.html' element={<IndexPage />} />
        <Route path='/about.html' element={<AboutPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
