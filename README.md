# Calculadora com React Native e Expo

Este repositório apresenta uma aplicação de calculadora simples, desenvolvida como parte de um curso da Udemy. O projeto utiliza **React Native** com **Expo** e implementa as operações básicas de soma, subtração, multiplicação e divisão.

## Características

- Interface amigável e responsiva.
- Operações matemáticas básicas:
  - Soma
  - Subtração
  - Multiplicação
  - Divisão
- Projeto estilizado com cores suaves para melhor experiência do usuário.

## Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento do aplicativo.
- **Expo**: Plataforma para simplificar o desenvolvimento, a compilação e o deploy de aplicativos.

## Paleta de Cores

| Cor          | Hexadecimal | Uso                             |
|--------------|-------------|---------------------------------|
| Cinza Claro  | `#F0F0F0`   | Fundo dos botões                |
| Cinza Escuro | `#888`      | Fundo display                   |
| Branco       | `#FFF`      | Texto                           |
| Laranja      | `#FA8231`   | Destaque dos botões de operação |

## Como Executar o Projeto

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados.
2. Clone o repositório:
   ```bash
   git clone https://github.com/xllcarlos/expo-calculator.git
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd expo calculator
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o aplicativo:
   ```bash
   npx expo start
   ```
6. Escaneie o QR Code com o aplicativo **Expo Go** (disponível para Android e iOS) para visualizar a aplicação no seu dispositivo.

## Estrutura do Projeto

```
expo-calculator/
├── assets/          # Recursos como imagens e ícones
├── components/      # Componentes reutilizáveis
│   ├── Button.tsx      # Componente Botão
│   └── Display.tsx     # Componente Display
├── screens/         # Telas do aplicativo
├── App.tsx          # Arquivo principal
├── package.json     # Configurações e dependências do projeto
└── README.md        # Documentação
```

---

Desenvolvido com apreço por Carlos ツ durante um curso da Udemy para aprimorar habilidades em React Native e Expo!