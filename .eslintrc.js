module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
	    "plugin:react/recommended",
	    "plugin:@typescript-eslint/recommended",
	    "prettier" // Add this line!
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "camelcase": "error",
        "spaced-comment": "error",
        "quotes": ["error", "single"],
        "no-duplicate-imports": "error"
    }
}