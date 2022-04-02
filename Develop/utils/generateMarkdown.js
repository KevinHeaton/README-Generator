// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'GNU AGPLv3') {
    return '![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-green)';
  } else if (license === 'GNU GPLv3') {
    return '![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-green)';
  } else if (license === 'GNU LGPLv3') {
    return '![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-green)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green)';
  } else if (license === 'Apache License 2.0') {
    return '![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue)';
  } else if (license === 'MIT License') {
    return '![MIT License](https://img.shields.io/badge/license-MIT%20License-blue)';
  } else if (license === 'Boost Software License 1.0') {
    return '![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-green)';
  } else if (license === 'The Unlicense') {
    return '![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-green)';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
