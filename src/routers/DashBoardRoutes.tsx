import React from 'react'
import { NotFoundScreen } from '../screens/NotFoundScreen/NotFoundScreen';
import { DepartScreen } from '../screens/DepartScreen/DepartScreen';
import { DepartDetail } from '../screens/DepartDetail/DepartDetail';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export const DashBoardRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} /> 
                <Route path="/depart" element={<DepartScreen/>} /> 
                <Route path="/depart/:id" element={<DepartDetail/>} /> 
                <Route path="*" element={<NotFoundScreen />} /> 
            </Routes>
        </BrowserRouter>
    )
}
