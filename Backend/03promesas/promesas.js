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

const randomNumber = (min, max) => { return Math.floor(Math.random() * (max - min) + 1 )}

// preparación del frappe

/*const preparar = (fruits, liquid, holder, toppings) => {
    // 1. Colocar orden (2 seg)
    setTimeout(() => {
        console.log("Order placed");
        // 2. Cortar fruta (2 seg)
        setTimeout(() => {
        console.log(`${fruits} choped`);
        // 3. Añadir agua y hielo (1 seg)
        setTimeout(() => {
            console.log(`${liquid} added`);
            // 4. Iniciar la máquina (1 seg)
            setTimeout(() => {
            console.log(`machine started`);
            // 5. Seleccionar contenedor (1 seg)
            setTimeout(() => {
                console.log(`${holder} selected`);
                // 6. Seleccionar toppings (3 seg)
                setTimeout(() => {
                console.log(`${toppings} selected`);
                // 7. Servir frappe (2 seg)
                setTimeout(() => {
                    console.log(`frappe served`);
                }, 2000);
                }, 3000);
            }, 1000);
            }, 1000);
        }, 1000);
        }, 2000);
    }, 2000);
};*/

const colocarOrden = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`se tomo la orden ${iceNumber}`)
            resolve(iceNumber)
        }, 2000);

    })
};

const cortarFruta = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`se corto la fruta ${stocks.fruits[0]}`)
            console.log(`se corto la fruta ${stocks.fruits[randomNumber(1,4)]}`)
            resolve(iceNumber)
        }, 2000);
    })
};

const colocarHielosYAgua = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(iceNumber)
        }, 1000);
    });
};

const iniciarMaquina = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(iceNumber)
        }, 1000);
    });
};

const seleccionarContenedor = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`seleccionando contenedor para la bebida ${iceNumber}`)
            resolve(iceNumber)
        }, 1000);
    });
};

const seleccionarTopping = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`seleccionando topping para la bebida ${iceNumber}`)
            resolve(iceNumber)
        }, 1000)
    });
};

const servirFrappe = (iceNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`bebida ${iceNumber} servida`)
            resolve(iceNumber)
        }, 1000);
    })
};

colocarOrden(4)
    .then(cortarFruta)
    .then(colocarHielosYAgua)
    .then(iniciarMaquina)
    .then(seleccionarContenedor)
    .then(seleccionarTopping)
    .then(servirFrappe)
    .catch((error) => {
        console.error("error", error)
    })
    .finally(() => {
        console.log("Bebida terminada 😃")
    })



/*
const preparar = (fruits, liquid, holder, topping) => {
    colocarOrden(() => {
        console.log("seleccionar orden")
        cortarFruta(() => {
            console.log(`${fruits} cortada`)
            colocarHielosYAgua(() => {
                console.log(`se agrego ${liquid}`)
                iniciarMaquina(() => {
                    console.log("iniciando la maquina")
                    seleccionarContenedor(() => {
                        console.log(`${holder} seleccionado`)
                        seleccionarTopping(() => {
                            console.log(`${topping} seleccionado`)
                            servirFrappe(()=>{
                                console.log("Bebida servida 😃")
                            })
                        })
                    })
                })
            })
        })
    })
}

preparar(stocks.fruits[0],stocks.liquid[0],stocks.holder[0],stocks.toppings[0]);
preparar(stocks.fruits[1],stocks.liquid[1],stocks.holder[1],stocks.toppings[1]);
preparar(stocks.fruits[2],stocks.liquid[0],stocks.holder[2],stocks.toppings[1]);
preparar(stocks.fruits[3],stocks.liquid[1],stocks.holder[0],stocks.toppings[0]);*/