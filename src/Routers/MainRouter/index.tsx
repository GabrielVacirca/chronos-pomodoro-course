import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AboutPomodoro } from "../../Pages/AboutPomodoro";
import { NotFound } from "../../Pages/NotFound";
import { Home } from "../../Pages/Home";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Pathname:", pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
