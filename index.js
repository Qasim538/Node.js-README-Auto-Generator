const inquirer = require('inquirer')


// App Questions

const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'project title',
    },

    {
        type: 'input',
        name: 'description',
        message: 'project description',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'project usage',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'contribution info',
    },

    {
        type: 'input',
        name: 'email',
        message: 'for question(email)',
    },

    {
        type: 'input',
        name: 'github',
        message: 'for question(github)',
    },

    {
        type: 'list',
        name: 'license',
        message: 'License',
        choices:['MIT', 'ISC', 'GNULPv3'],
        filter(val) {
            return val.tolowerCase();
        }
    },

    
]

// run query function

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers)
        return answers
    })

    .catch((error) => { 
        console.log(error)
    })
}

runQuery()

