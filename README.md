#  FIAP Elevator

##  a) Sobre o Projeto

O **FIAP Elevator** é um aplicativo desenvolvido para otimizar o uso dos elevadores dentro da FIAP.

###  Problema

Atualmente, quando um aluno deseja usar o elevador, ele precisa:

1. Ir até o local dos elevadores
2. Selecionar o andar desejado
3. Aguardar o elevador chegar (normalmente demora xD)

Isso gera **tempo de espera desnecessário**.

###  Solução

Com o app, o usuário pode:

* Solicitar o elevador **antes mesmo de chegar ao local**
* Fazer isso diretamente da sala de aula, por exemplo, a aula pode estar acabando e ele já chama o elevador para poupar tempo

### Funcionalidades

* Solicitar elevador remotamente
* Interface simples e intuitiva
* Acesso rápido ao botão de chamada

---

## b) Integrantes do Grupo

* **Amom Ianaguivara Brito** — RM: 565718
* **Victor Chen** — RM: 565363
* **Fernando Antônio** — RM: 562549

---

## c) Como Rodar o Projeto

### ✅ Pré-requisitos

Você precisa ter instalado:

* Node.js
* VS Code
* Android Studio
* Expo Go (no celular ou emulador)
* JavaScript (ambiente já incluso com Node)

---

### 📱 Configuração do Emulador

1. Abra o Android Studio
2. Crie um dispositivo virtual (Eu usei no meu pc o pixel 5, porém no pc da FIAP está instalado o pixel 4 então deve ir de boa também)
3. Inicie o emulador

---

### Passo a passo

```bash
# Clonar o repositório
git clone https://github.com/SEU-USUARIO/meu-app.git
OU
Você pode baixar o zip no meu repositório extrair e abrir o folder no vscode que funciona legal

# Entrar na pasta
cd meu-app

# Instalar dependências
npm install
```

---

### ⚠️ Possíveis erros e soluções

####  Erro de dependência, caso seu npm install de erro rode esse código abaixo

```bash
npm install --legacy-peer-deps
```

---

#### Erro de módulo não encontrado, caso o seu app no emulador abra em uma tela cheia de código vermelho rode isso

```bash
npx expo install expo-linking
```

---

#### Limpar cache do Expo

```bash
npx expo start -c
```

---

### Rodar o projeto

```bash
npx expo start
```

Depois:

* Pressione **"a"** para abrir no Android Emulator
  ou
* Escaneie o QR Code com o Expo Go

---

## d) Demonstração

*(Adicionar depois)*

* Prints das telas do app
* GIF ou vídeo demonstrando o funcionamento

---

## e) Decisões Técnicas

### Estrutura do Projeto

O projeto foi organizado utilizando o **Expo Router**, com separação de rotas:

* `(auth)` → telas de autenticação do login (eu precisei criar o auth para o login por causa das tabs do layout, já que na tela de login não é pra ter as tabs
* `(tabs)` → navegação principal com abas
* `_layout.js` → controle de navegação

---

### Hooks utilizados

* `useState` → controle de estados (inputs, login)
* `useRouter` → navegação entre telas

---

### Navegação

* Implementada com **Expo Router**
* Uso de **Tabs** para navegação principal
* Tela de login separada das abas (fluxo correto de autenticação)

---

## f) Próximos Passos

Com mais tempo, o grupo implementaria:

* Uma aba de alerta mais bonita e estilizada ao solicitar o elevador
* Uma tela de perfil mais personalizada:

  * Nome do aluno dinâmico 
  * Opção de adicionar foto de perfil (no vídeo demonstração aparece o meu nome, Amom, e a letra A como foto de perfil mas não é automatizado desse jeito eu mudei pelo código, essa seria uma proxima att e também poder por a foto que você quiser

---

## Tecnologias Utilizadas

* React Native
* Expo
* Expo Router
* JavaScript
* Android Studio (virtual device Pixel 5)

---
