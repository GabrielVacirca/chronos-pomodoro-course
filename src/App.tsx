// PascalCase
// Precisa começar com letra maiúscula
// Ex: HeaderHeading ou ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router/internal/react-server-client";
import { NotFound } from "./Pages/NotFound";
import { AboutPomodoro } from "./Pages/AboutPomodoro";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            <Route path="/about-pomodoro/" element={<AboutPomodoro />}></Route>

            <Route path="*" element={<NotFound />}></Route>
              <Home />
            </Route>
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
