import React from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ResultPage from "./pages/ResultPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  )
}
export default App
