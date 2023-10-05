const fs = require('fs')
const path = require('path')

const logsDirectory = 'logs'


if(fs.existsSync(logsDirectory)){
    const filesToDelete = fs.readdirSync(logsDirectory)
    if (filesToDelete.length > 0){
        console.log('Files to delete')
        filesToDelete.forEach((file) => {
            console.log(`delete files...${file}`)
            fs.unlinkSync(path.join(logsDirectory, file))

        })
    }
    fs.rmdirSync(logsDirectory)
    console.log(`${logsDirectory} directory has been removed.`)

}else{
    console.log(`${logsDirectory} directory does not exist.`)
}

// Creation of logs

if(!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory)
    console.log(`${logsDirectory} directory has been made.`)
}

// This will change the current working directory to logs

process.chdir(logsDirectory)
console.log(`changed current working directory to ${logsDirectory}`)

for(let x = 0;x<=9;x++){
    const fileName = `logs${x}.txt`
    const fileContent = 'This is some sample text.'

    fs.writeFileSync(fileName, fileContent)
    console.log(`${fileName}`)
}




