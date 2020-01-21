const prettier = {
    "prettier/prettier": [
        "error",
        {
            semi: true,
            trailingComma: "all",
            singleQuote: false,
            printWidth: 80,
            tabWidth: 4,
        },
    ],
};

module.exports = {
    overrides: [
        {
            files: ["*.js"],
            plugins: ["prettier"],
            extends: ["eslint:recommended", "plugin:prettier/recommended"],
            parserOptions: {
                ecmaVersion: 11,
            },
            env: {
                browser: true,
                amd: true,
                node: true,
            },
            rules: {
                ...prettier,
            },
        },
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "eslint:recommended",
                "plugin:prettier/recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "prettier/@typescript-eslint",
            ],
            rules: {
                ...prettier,
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowExpressions: true,
                        allowTypedFunctionExpressions: true,
                    },
                ],
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    {
                        functions: false,
                        classes: false,
                        variables: false,
                        typedefs: false,
                    },
                ],
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        argsIgnorePattern: "^_",
                    },
                ],
                "@typescript-eslint/explicit-member-accessibility": ["error"],
                "@typescript-eslint/require-await": "off",
            },
        },
    ],
};
