#!/usr/bin/env node

import { program } from "commander"
import chalk from "chalk";
import inquirer from "inquirer";
import { expressFileGenerator } from "./expressFileGenerator.js";

program.version("1.0.0").description("File Structure Generator")

program.action(() => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "Framework",
                message: "Choose a framework",
                choices: [
                    'Express.js',
                ]
            },
            {
                type: "input",
                name: "dir_name",
                message: "Enter directory name?",
            }
        ])
        .then((answers) => {
            const selectedFramework = answers.Framework
            const dirName = answers.dir_name
            if(selectedFramework === 'Express.js')
            {
                expressFileGenerator(dirName)
            }
        });
})

program.parse(process.argv);