const licenseArr = ['None', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return '';
  } else if (license === licenseArr[1]) {
    return '![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-green)';
  } else if (license === licenseArr[2]) {
    return '![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-green)';
  } else if (license === licenseArr[3]) {
    return '![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-green)';
  } else if (license === licenseArr[4]) {
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green)';
  } else if (license === licenseArr[5]) {
    return '![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue)';
  } else if (license === licenseArr[6]) {
    return '![MIT License](https://img.shields.io/badge/license-MIT%20License-blue)';
  } else if (license === licenseArr[7]) {
    return '![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-green)';
  } else if (license === licenseArr[8]) {
    return '![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-green)';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return '';
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license === licenseArr[3]) {
    return `[${licenseArr[3]}](https://choosealicense.com/licenses/lgpl-3.0/)`;
  } else if (license === licenseArr[4]) {
    return `[${licenseArr[4]}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license === licenseArr[5]) {
    return `[${licenseArr[5]}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === licenseArr[6]) {
    return `[${licenseArr[6]}](https://choosealicense.com/licenses/mit/)`;
  } else if (license === licenseArr[7]) {
    return `[${licenseArr[7]}](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (license === licenseArr[8]) {
    return `[${licenseArr[8]}](https://choosealicense.com/licenses/unlicense/)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return '';
  } else if (license === licenseArr[1]) {
    return `Check out more info about ${licenseArr[1]} at `;
  } else if (license === licenseArr[2]) {
    return `Check out more info about ${licenseArr[2]} at `;
  } else if (license === licenseArr[3]) {
    return `Check out more info about ${licenseArr[3]} at `;
  } else if (license === licenseArr[4]) {
    return `Check out more info about ${licenseArr[4]} at `;
  } else if (license === licenseArr[5]) {
    return `Check out more info about ${licenseArr[5]} at `;
  } else if (license === licenseArr[6]) {
    return `Check out more info about ${licenseArr[6]} at `;
  } else if (license === licenseArr[7]) {
    return `Check out more info about ${licenseArr[7]} at `;
  } else if (license === licenseArr[8]) {
    return `Check out more info about ${licenseArr[8]} at `;
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#License)
  - [How to Contribute](#How to Contribute)
  - [Tests](#Tests)
  - [Questions?](#Questions?)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions?
  My GitHub page is located at github.com/${data.github}
  You can email me at ${data.email}


`;
}

module.exports = generateMarkdown;
