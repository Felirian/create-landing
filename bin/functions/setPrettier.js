const fs = require("fs");

const setPrettier = () => {
  console.log("🎨 Setting up Prettier...");
  if (!fs.existsSync(".prettierrc")) {
    fs.writeFileSync(
      ".prettierrc",
      JSON.stringify(
        {
          "jsxSingleQuote": true,
          "printWidth": 100,
          "semi": true,
          "tabWidth": 2,
          "trailingComma": "es5",
          "singleQuote": true,
          "useTabs": true,
          "bracketSpacing": true,
          "endOfLine": "lf",
          "overrides": [
            {
              "files": ".json",
              "options": {
                "tabWidth": 2
              }
            }
          ]
        },
        null,
        2
      ),
      'utf-8'
    );
  }
}

module.exports = setPrettier;