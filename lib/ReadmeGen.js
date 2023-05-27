class MarkDown {
    static generateRandom(data){
        return `
        # ${answers.title}

        ## Table of Content
            - [Project Description] (#Description)
            - [Usage](#Usage)
            - [Contributing](#Contributing)
            - [Installation](#Installation)
            -[Questions](#Questions)
            -[Lincese](#License)

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
            ${answers.license}

        `
    }
}

module.export = MarkDown