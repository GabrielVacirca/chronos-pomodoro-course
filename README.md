# ⏱️ Chronos Pomodoro

Aplicação web de gerenciamento de tempo baseada na **Técnica Pomodoro**, desenvolvida durante o Módulo 1 de React + TypeScript. O projeto permite iniciar ciclos de foco e descanso com contagem em segundo plano (Web Worker), acompanhar o histórico completo de tarefas com ordenação e status dinâmico, alternar entre tema claro e escuro e personalizar as durações dos ciclos.

---

## ✨ Funcionalidades

- **Cronômetro em segundo plano:** Contagem regressiva executada em uma thread separada via **Web Worker**, evitando atrasos quando a aba fica inativa, com atualização do título da aba (`document.title`) e alerta sonoro ao concluir o ciclo.
- **Ciclos Pomodoro inteligentes:** Alternância automática entre **Foco** (`workTime`), **Descanso curto** (`shortBreakTime`) e **Descanso longo** (`longBreakTime`) ao longo de 8 ciclos.
- **Histórico de tarefas (`History`):**
  - Exibição das tarefas salvas com duração, data formatada, status calculado (**Completa**, **Interrompida**, **Em progresso** ou **Abandonada**) e tipo de ciclo.
  - Ordenação interativa pelos cabeçalhos da tabela (**Tarefa**, **Duração** e **Data**).
  - Limpeza do histórico com caixa de confirmação personalizada.
- **Configurações (`Settings`):** Personalização dos tempos de foco e descanso com validação no HTML e no JavaScript.
- **Persistência e Tema:** Estado global e preferência de tema (`dark` / `light`) salvos no `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** + **React Compiler** (`babel-plugin-react-compiler`)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vite.dev/)**
- **[React Router](https://reactrouter.com/)** — navegação SPA entre páginas
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** — notificações e diálogo de confirmação customizado
- **[date-fns](https://date-fns.org/)** — formatação de datas e timestamps
- **[Lucide React](https://lucide.dev/)** — biblioteca de ícones
- **CSS Modules** + Variáveis CSS para temas claro/escuro
- **ESLint** + `typescript-eslint` + `eslint-plugin-react-hooks`

---

## 📂 Estrutura do Projeto

```text
src/
├── adapters/      # Encapsulamento de bibliotecas externas (showMessage com Toastify)
├── assets/        # Recursos estáticos (áudio de notificação)
├── components/    # Componentes reutilizáveis de UI (CountDown, MainForm, Menu, Dialog, etc.)
├── context/       # Estado global com Context API + useReducer (TaskContext)
├── models/        # Tipagens de domínio (TaskModel, TaskStateModel)
├── Pages/         # Páginas da aplicação (Home, History, Settings, AboutPomodoro, NotFound)
├── Routers/       # Configuração de rotas e ScrollToTop (MainRouter)
├── styles/        # Estilos globais e variáveis de tema (global.css, theme.css)
├── Templates/     # Layout base compartilhado entre páginas (MainTemplate)
├── utils/         # Funções utilitárias puras (formatDate, getTaskStatus, sortTasks, etc.)
└── workers/       # Web Worker do cronômetro e gerenciador Singleton
```

---

## 🧠 Conceitos de React, TypeScript e Arquitetura Aprendidos neste Módulo

### 1. Componentização e Composição
- Criação de componentes reutilizáveis e desacoplados (`Container`, `Heading`, `DefaultInput`, `DefaultButton`, `RouterLink`).
- Uso de `children` e templates de layout (`MainTemplate`) para evitar repetição estrutural entre páginas.
- Repasse de propriedades nativas com *rest props* (`...rest`) e `React.ComponentProps<"elemento">`.

### 2. Gerenciamento de Estado (Local vs. Global)
- **`useState` e Lazy Initialization:** Inicialização preguiçosa (`useState(() => ...)`) para ler dados do `localStorage` ou ordenar listas apenas na montagem inicial, evitando recálculos a cada re-renderização.
- **Context API + `useReducer`:** Centralização do estado global em `TaskContextProvider` com hook customizado (`useTaskContext`) e fluxo unidirecional via `dispatch(action)`.
- **Reducer como Função Pura & Imutabilidade:** O `taskReducer` apenas calcula e retorna um novo objeto de estado usando *spread operator* (`{ ...state, ... }`), mantendo efeitos colaterais (toasts, áudio, `localStorage`) fora do reducer.

### 3. Referências (`useRef`) e Formulários
- **Inputs Não Controlados vs. Controlados:** Uso de `useRef` + `defaultValue` em `MainForm` e `Settings` para ler valores apenas no `onSubmit`, evitando re-renderizações desnecessárias a cada tecla digitada.
- **`useRef` para valores mutáveis:** Armazenamento da referência da função de áudio (`playBeepRef`) sem disparar novas renderizações.
- **Validação Defensiva:** Prevenção de reload com `e.preventDefault()`, validação no HTML (`type="number"`) combinada com validação em JavaScript (`isNaN`, limites mínimos/máximos), acúmulo de erros e padrão **Early Return**.

### 4. Ciclo de Vida e Efeitos Colaterais (`useEffect`)
- Sincronização do estado React com sistemas externos: `localStorage`, `document.title`, atributo `data-theme` no `<html>` e `window.scrollTo`.
- **Função de Limpeza (*Cleanup*):** Uso de `return () => { ... }` com array de dependências vazio (`[]`) para fechar diálogos abertos (`showMessage.dismiss()`) ao desmontar a página.
- **Prevenção de Loops Infinitos e Renderizações em Cascata:** Uso de atualização funcional (`prevState => ...`) e entendimento da regra `react-hooks/set-state-in-effect` (estado derivado vs. estado duplicado).

### 5. Roteamento SPA
- Configuração de rotas declarativas com `BrowserRouter`, `Routes`, `Route` e rota coringa (`*`) para página `NotFound`.
- Componente `ScrollToTop` com `useLocation` para rolar ao topo em trocas de rota, e componente wrapper `RouterLink`.

### 6. TypeScript Aplicado ao React
- Modelagem de domínio (`TaskModel`, `TaskStateModel`) e `import type`.
- **Uniões Discriminadas (*Discriminated Unions*) + `enum`:** Tipagem estrita das ações com e sem `payload` em `taskActions.ts`.
- ***Utility Types* e Tipos Indexados:** Uso de `Pick<SortTasksOptions, "field">`, `keyof TaskStateModel["config"]` e `TaskStateModel["config"]` para manter uma fonte única de verdade nos tipos.
- Tipagem de eventos React (`React.FormEvent<HTMLFormElement>`, `React.MouseEvent<HTMLAnchorElement, MouseEvent>`).

### 7. Padrões de Projeto e JavaScript Moderno
- **Adapter Pattern:** Isolamento do `react-toastify` dentro de `src/adapters/showMessage.ts`, incluindo passagem de componente customizado (`Dialog`) com retorno booleano via `closeToast` + `onClose`.
- **Singleton Pattern:** `TimeWorkerManager.getInstance()` garantindo uma única instância do Web Worker na aplicação.
- **Ordenação Imutável:** Cópia de arrays com spread (`[...tasks]`), funções comparadoras numéricas (`a - b` / `b - a`), comparação alfabética com `localeCompare` e valores padrão de parâmetros.
- **Módulos e CSS:** Entendimento de módulos isolados (ex.: `react-toastify` vs. `react-toastify/unstyled`), CSS Modules com escopo local e alternância de temas via CSS custom properties.

---

## 🚀 Como Executar o Projeto

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Rodar a verificação de lint
npm run lint

# Gerar o build de produção (TypeScript + Vite)
npm run build
```
