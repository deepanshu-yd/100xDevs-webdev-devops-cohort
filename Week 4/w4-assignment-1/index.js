const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split(' ').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();

// to count run --> node index.js count /home/deepanshu/Projects/...<txt-filepath>
// OR npm run start count "/home/deepanshu/Projects/100xDevs-webdev-devops-cohort/Week 4/w4-assignment-1/test.txt"

// blackbox overview -> import all the dependencies >> program name and details, if putting on npm registry >> command datails and action that tells system how to do the process >> runs the program using program.parse()