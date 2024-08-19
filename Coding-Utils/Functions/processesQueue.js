const sleep = require("./Sleep");
const isArray = require("./arraysChecker");
const isFunction = require("./functionChecker");

async function processesQueue(processes, delay) {
    let array = isArray(processes);
    let isValid;

    if(!array) throw new Error("First parameter not valid, must be a Array");
    if(processes.length == 0) throw new Error("First parameter not valid, minimum 1 process must be provided ");
    processes.forEach(p => {
        isValid = isFunction(p);
        if(!isValid) throw new Error("One or more elements of the processes array is not a Function not a Void"); 
    });
    let pr = null;
    processes.forEach(async p => {
        await sleep(delay);
        console.log(p)
        await sleep(delay);
    })
}

function f1() {
    console.log("Hola");
}
function f2() {
    console.log("mundo");
}
let obj = {
    final: () => {
        console.log("Soy...un genio");
    }
}

processesQueue([f1,f2,obj.final], 2000);