# NEW TEMPLATE NEXTJS

**`Stack`**

- [x] YarnBerry (Zero-Install)
- [x] NextJS
- [x] Typescript
- [x] Eslint
- [x] Prettier
- [x] Emotion

---

**`Nextjs`**

```bash
yarn create next-app <folder-name> --typescript
```

```bash
yarn set version stable
```

<br />

**`Eslint`**

```bash
yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser simple-import-sort/imports
```

<br />

**`Prettier`**

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

<br />

**`Babel`**

```bash
yarn add -D babel-eslint eslint-plugin-babel
```

---

**`Yarn Berry`**

```bash
yarn plugin import typescript
```

```bash
yarn dlx @yarnpkg/sdks vscode
```

<br />

**`@emotion`**

```bash
yarn add @emotion/styled @emotion/react
```

```bash
yarn add -D @emotion/babel-plugin
```

---

**`Config : Eslint`**

```json
{
  "plugins": ["@typescript-eslint", "simple-import-sort", "prettier"],
  "extends": [
    "next",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": ["node_modules/", ".next/*"],
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0,
    "no-unused-vars": "off",
    "no-undef": "off",
    "/no-useless-escape": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "useTabs": false
      }
    ],
    "indent": ["error", 2],
    "@typescript-eslint/no-empty-interface": "off",
    "no-empty-interface": "off"
  },
  "globals": {
    "React": "writable"
  },
  "overrides": [
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-empty-interface": "off"
      }
    },
    {
      "files": "*.json",
      "parserOptions": {
        "parser": "json"
      }
    },
    {
      "files": ["**/*.js", "**/*.ts", "**/*.tsx"],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              ["^react$", "^next", "^@"],
              ["^[a-z]"],
              ["^~"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.s?css$"],
              ["^\\u0000"]
            ]
          }
        ]
      }
    }
  ]
}
```

<br />

**`Config : Prettier`**

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "eslintIntegration": true,
  "endOfLine": "auto",
  "parser": "typescript",
  "useTabs": false,
  "arrowParens": "always"
}
```

<br />

**`Config : Tsconfig`**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "paths": {
      "@/pages/*":["pages/*"],
      "@/styles/*":["styles/*"]
    },
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators" : true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "jsxImportSource": "@emotion/react",
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

```

<br />

**`Config : Babelrc`**

```json
{
  "presets": ["next/babel"],
  "plugins": [
    "@emotion",
    ["@babel/plugin-proposal-decorators",
      {
        "legacy" : true 
      }
    ]
  ]
}

```

<br />

**`Config : Next`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
module.exports = nextConfig;
```

---