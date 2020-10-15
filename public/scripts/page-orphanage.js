const options = {
    dragging: false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollwheelZoom:false,
    zoomControl:false
}

//create map
const map = L.map('mapid', options).setView([-12.2575618,-38.9692045], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170,2]
})

//create and add marker

L.marker([-12.2575618,-38.9692045],{icon:icon}).addTo(map);

/*image gallery*/
function selectImage(event){
    //console.log(event.currenttarget) event.currenttarget é o botão que está ativando o evento
    //console.log("mensagem!")
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    //console.log(buttons)
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagem
    imageContainer.src = image.src
    //adicionar a classe .active para este botao
     button.classList.add("active")

}
