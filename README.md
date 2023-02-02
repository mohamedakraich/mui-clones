## ReactJS Playground

#### Install Node.js via binary archive on Linux?

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
- `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
- `source ~/.profile`
- `nvm install --lts`

### Yarn install

- `corepack enable` (sudo npm install -g corepack)
- `corepack prepare yarn@stable --activate`
- `yarn --version`
- `yarn set version stable`

### Repo Setup

- yarn create next-app --typescript reactjs_playground
- yarn add @mui/material @emotion/react @emotion/styled
- yarn add @fontsource/roboto
- yarn add @mui/icons-material

## Editor Setup VSCode

- https://yarnpkg.com/getting-started/editor-sdks#neovim-native-lsp
- Run `yarn dlx @yarnpkg/sdks vscode`
- Open any TypeScript file
- Press ctrl+shift+p
- Choose "Select TypeScript Version"
- Pick "Use Workspace Version"

