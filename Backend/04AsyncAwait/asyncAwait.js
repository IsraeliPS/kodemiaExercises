// Preparar un frappe
// 1. Colocar orden (2 seg)
// 2. Cortar fruta (2 seg)
// 3. Añadir agua y hielo (1 seg)
// 4. Iniciar la máquina (1 seg)
// 5. Seleccionar contenedor (1 seg)
// 6. Seleccionar toppings (3 seg)
// 7. Servir frappe (2 seg)

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

const randomNumber = (min, max) => { return Math.floor(Math.random() * (max - min) + 1) }

// preparación del frappe
const colocarOrden = async (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`se tomo la orden ${iceNumber}`)
            resolve(iceNumber)
        }, 1000);

    })
};

const cortarFruta = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`se corto la fruta ${stocks.fruits[randomNumber(1, 4)]}`)
            resolve()
        }, 2000);
    })
};

const colocarHielosYAgua = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Se agrego ${stocks.liquid[randomNumber(1, 2)]}`)
            resolve()
        }, 1000);
    });
};

const iniciarMaquina = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Se incio la maquina")
            resolve()
        }, 1000);
    });
};

const seleccionarContenedor = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Contenedor para la bebida ${stocks.holder[randomNumber(1, 3)]}`)
            resolve()
        }, 1000);
    });
};

const seleccionarTopping = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Topping para la bebida ${stocks.toppings[randomNumber(1, 2)]}`)
            resolve()
        }, 1000)
    });
};

const servirFrappe = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`bebida servida`)
            resolve()
        }, 1000);
    })
};

async function main() {
    await colocarOrden(1);
    await cortarFruta();
    await colocarHielosYAgua();
    await iniciarMaquina();
    await seleccionarContenedor();
    await seleccionarTopping();
    await servirFrappe();
}

main()