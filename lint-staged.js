module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings=0",
    "react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests",
    () => "tsc --skipLibCheck --noEmit",
    "eslint --cache --fix",
  ],
  "*.{js,jsx,ts,tsx,json,css,js}": ["prettier --write"],
};
