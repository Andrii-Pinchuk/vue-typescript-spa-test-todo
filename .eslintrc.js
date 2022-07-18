module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": ["error", {
      code: 100
    }],
    "quotes": ["error", "double", {
      allowTemplateLiterals: true
    }],
    "arrow-parens": ["error", "as-needed"],
    "semi": ["error", "always"],
    "@typescript-eslint/semi": "off",
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/no-empty-interface": "off",
    "padded-blocks": ["error", "never"],
    "object-curly-newline": ["error", {
      ObjectExpression: {
        minProperties: 1
      },
      ObjectPattern: {
        multiline: true
      },
      ImportDeclaration: "never",
      ExportDeclaration: {
        multiline: true, minProperties: 3
      }
    }],
    "lines-between-class-members": ["error", "always", {
      exceptAfterSingleLine: true
    }],
    "import/prefer-default-export": "off",
    "import/order": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "quote-props": ["error", "consistent-as-needed"],
    "prefer-destructuring": "off",
    "no-else-return": ["error", {
      allowElseIf: true
    }],
    "no-mixed-operators": "error",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-undef": "off",
    "no-trailing-spaces": ["error", {
      skipBlankLines: true
    }],
    "indent-class-properties/indent": "off",
    "no-useless-escape": "off",
    "no-useless-constructor": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-inferrable-types": "off"
  },

  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"]
      }
    }
  ]
};
