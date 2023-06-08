import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {RoutesPaths} from './routes';
import Loader from "../components/loader/Loader";

const HomePage = lazy(() => import("../components/HomePage"));
const SearchAddress = lazy(() => import("../components/SearchAddress"));

function AppRouter() {

    return (
        <Suspense fallback={<Loader/> }>
            <Routes>
                <Route element={<HomePage/>} path={RoutesPaths.News}/>
                <Route element={<SearchAddress/>} path={RoutesPaths.SearchAddress}/>
            </Routes>
        </Suspense>

    );
}

export default AppRouter;
