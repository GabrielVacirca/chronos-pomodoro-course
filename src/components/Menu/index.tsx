import { House, Settings, History, SunIcon, MoonIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "light" | "dark";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes || 'dark';
     
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // Adiciona o tipo correto para o evento
  ) {
    event.preventDefault(); // Impede que o link seja seguido
    console.log("Theme changed");

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    console.log("O tema mudou para:", theme);
    localStorage.setItem("theme", theme); // Salva o tema atual no localStorage
    document.documentElement.setAttribute("data-theme", theme); // Atualiza o atributo data-theme do elemento <html> com o valor do tema atual

    return () => {
      // Função de limpeza que será executada antes do próximo efeito ou quando o componente for desmontado
      console.log("Cleanup: o tema anterior era:", theme);
    };
  }, [theme]); // executa apenas quando o valor do tema muda

  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLogo}>
        <House />
      </a>
      <a href="#" className={styles.menuLogo}>
        <History />
      </a>
      <a href="#" className={styles.menuLogo}>
        <Settings />
      </a>
      <a href="#" className={styles.menuLogo} onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
