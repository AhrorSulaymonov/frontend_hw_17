import React from "react";
import { Route, Routes } from "react-router";
import { HomePageTag } from "./app.style";
import Layout from "./layout";
import MainPage from "./pages/main";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
