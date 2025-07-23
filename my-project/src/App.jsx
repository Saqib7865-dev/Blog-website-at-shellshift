import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login";
import CRUD from "./components/CRUD";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="bg-slate-100 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createBlog" element={<CreateForm />} />
        <Route path="/updateBlog/:id" element={<UpdateForm />} />
        <Route path="/private" element={<PrivateRoutes />}>
          <Route path="/private/crud" element={<CRUD />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
