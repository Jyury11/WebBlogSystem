module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "parserOptions": {
        "ecmaVersion": 2017
      },
    "rules": {
        "indent": [
            "error",
            2,
            {"SwitchCase" : 1}
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error", {
                "vars": "all",
                "args": "node"
            }
        ],
        "no-console": [
            "off"
        ]
    }
};
