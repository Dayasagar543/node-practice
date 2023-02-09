//globals -no window !!!

//__dirname     -path to current directory
//__filename    - filename
//require       - function to use modules (common jS)
//module -  info about current module (file)
//process   -info aabout env where the program is being executed.

console.log(__dirname);
console.log(__filename);

let value = () => {
    console.log("hellow world")
   setTimeout(value, 3000);
};

value();
 