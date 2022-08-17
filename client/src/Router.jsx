// react router guards package docs
// https://www.npmjs.com/package/react-router-guards?activeTab=readme

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListUsers from './pages/listUsers/ListUsers'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
