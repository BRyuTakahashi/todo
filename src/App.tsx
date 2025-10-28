import { BrowserRouter, Route, Routes } from "react-router";
import { PageComponents } from "./pages/PageComponents";
import { LayoutMain } from "./pages/LayoutMain";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={< LayoutMain />}>
          <Route path="/components" element={< PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


