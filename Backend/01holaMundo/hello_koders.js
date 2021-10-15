// let koderName="Israel";
let koderName=process.env.KODERNAME;
console.log("Iniciando ejecucion");

if (koderName){
    console.log(`Hola ${koderName}`);
}
else{
    console.log(`Hola Koder`);
}

console.log(`Terminando ejecución...`);