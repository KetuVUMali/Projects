import { Route, Routes } from 'react-router-dom'
import AdminRouting from './Routing/AdminRouting'

function App() {
  return (
    <Routes>
     
      <Route path="/" element={<div>Route add " /admin "</div>} />
      <Route path="/admin/*" element={<AdminRouting />} />
    </Routes>
  );
}

export default App
