import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login";
import CRUD from "./components/CRUD";
import ResetPassword from "./components/ResetPassword"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-blogs" element={<MyBlogs />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/crud" element={<CRUD />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
