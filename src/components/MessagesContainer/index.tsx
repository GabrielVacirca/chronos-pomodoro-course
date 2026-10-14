import { Bounce, ToastContainer } from "react-toastify/unstyled";

type MessagesContainerProps = {
  children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainerProps) {
  // Componente para exibir mensagens de alerta, sucesso, erro, etc.
  return (
    <>
      {children}

      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
