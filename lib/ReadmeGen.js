class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            GNUGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_V3-blue.svg)](https://www.gnu.org/licenses/Igp1-3.0)',
            ISC: '[! [License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
         }
    return badges[license]
}
  
static renderLicenseLink(license) {
    const licenseLinks = {
        ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
        MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
        GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gp1-3.0/)'
    }
    return licenseLinks[license]
}

static renderLicenseSection(license){
    if(license) {
        return `Licensed under the ${this.renderLicenseLink(license)} license.`
    } else 
        return ''
    }


static generateReadme(answers){
        return `

# ${answers.title}
    
${this.renderLicenseBadge(answers.license)}

## Table of Content
- [Project Description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [Lincese](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation 
${answers.contributing}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)}
    `
    }
}

module.exports = MarkDown