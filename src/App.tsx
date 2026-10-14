// PascalCase
// Precisa começar com letra maiúscula
// Ex: HeaderHeading ou ExemploDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./Pages/Home";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
