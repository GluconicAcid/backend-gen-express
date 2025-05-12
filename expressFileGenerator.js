import fs from 'fs/promises'

const currentDirectory = process.cwd();

export const expressFileGenerator = async (dir_name) => {
    try {
        await fs.mkdir(`${currentDirectory}/${dir_name}`, { recursive: true })
        await fs.mkdir(`${currentDirectory}/${dir_name}` + '/src', { recursive: true })
        await fs.mkdir(`${currentDirectory}/${dir_name}` + '/src/controllers', { recursive: true })
        await fs.mkdir(`${currentDirectory}/${dir_name}` + '/src/routers', { recursive: true })
        await fs.mkdir(`${currentDirectory}/${dir_name}` + '/src/models', { recursive: true })
        await fs.mkdir(`${currentDirectory}/${dir_name}` + '/src/middlewares', { recursive: true })
        await fs.mkdir(`${currentDirectory}/${dir_name}` + '/src/db', { recursive: true })
        await fs.writeFile(`${currentDirectory}/${dir_name}` + '/src' + '/index.js', "")
        await fs.writeFile(`${currentDirectory}/${dir_name}` + '/src' + '/app.js', "")
        await fs.writeFile(`${currentDirectory}/${dir_name}` + '/src/db' + '/db.js', "")
    } catch (error) {
        console.log("Error creating directory:", error);
    }
}