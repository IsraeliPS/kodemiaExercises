let imagenes=[
"https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg",
"https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
"https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440",
"https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos-1280x720.jpg",
"https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5fc8bee05cafe83492ff9283/parrafo.jpg"
]


/*
function avanzar (){
    // posActual>=imagenes.length-1?posActual=0: posActual++
    if(posActual>=imagenes.length-1)
        $("#avanzar").prop('disabled', true)
    else{
        $("#avanzar").prop('disabled', false)
        $("#retroceder").prop('disabled', false)
        posActual++
    }
    renderizarImage()
}

function retroceder(){
    // posActual<=0?posActual=imagenes.length-1:posActual--
    if(posActual<=0)
        $("#retroceder").prop('disabled', true)    
    else{
        $("#retroceder").prop('disabled', false)
        $("#avanzar").prop('disabled', false)
        posActual--
    }
    renderizarImage()
}

function renderizarImage(){
    $('#imagen').css("background-image", `url(${imagenes[posActual]})`)
}

$("#avanzar").click(()=>avanzar())

$("#retroceder").click(()=>retroceder())

renderizarImage()
*/

let posActual=0

const setImgSrc = (src) => {
    $(".imagen img").attr("src", src).fadeTo('slow', 0, () => {
        $(".imagen img").attr("src", src).fadeTo('slow', 1)
    })
}

const setButtonsState = () => {
    // estamos en la primara imagen
    posActual === 0
        ? $("#retroceder").prop("disabled", true)
        : $("#retroceder").prop("disabled", false)

    // cuando identifiquemos la ultima imagen
    if (posActual === imagenes.length - 1){
        $("#avanzar").prop("disabled", true)
        // $(".add-images").removeClass("d-none")
        $(".form-url").show()
    }
    else{
        $("#avanzar").prop("disabled", false)
        $(".form-url").hide()
        // $(".add-images").addClass("d-none")
    }
}

// https://picsum.photos/id/237/200/300
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NepR_7V9liupFROKsnkYbOVIbc8wVKiWBu5K3LlUp4JgC5xFL3HpnBJT1QN8NMfWDq0&usqp=CAU

const forward = () => {
    posActual++
    let src = imagenes[posActual]
    setImgSrc(src)
    setButtonsState()
}

const backward = () => {
    posActual--
    let src = imagenes[posActual]
    setImgSrc(src)
    setButtonsState()
}

const addImage=()=>{
    let url=$("#urlimage").val()
    imagenes.push(url)
    posActual++
    setImgSrc(url)
    $("#urlimage").val("")
}

$("#avanzar").click(forward)
$("#retroceder").click(backward)
$(".add-url").click(addImage)
setButtonsState()

$(".form-url").hide()
/*
let anterior, actual
$(".form-check-input").click((event)=>{
    let classSelected=$(".radioButtons input[type='radio']:checked")
    console.log(classSelected)
    actual=`col-12 d-flex mx-auto ${event.target.name}`
    $("#figura").removeClass().addClass(actual)
    anterior?$("#figura").removeClass(anterior):anterior=actual
    
    console.log(actual)
    let text=$(event.target).data
})*/