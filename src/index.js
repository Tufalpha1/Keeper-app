import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../src/components/App';
import Test from './routes/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<App />} />
       <Route path="/test" element={<Test />} />
     </Routes>
    </BrowserRouter>
);