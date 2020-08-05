function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    var hora = 09
    if (hora < 12){
        // bom dia
        img.src = 'MANHA.png'
        document.body.style.background = 'rgb(187, 111, 17)'
    } else if (hora < 18){
        // boa tarde
        img.src = 'TARDE.png'
        document.body.style.background = 'rgb(200, 51, 4)'
    } else{
        //boa noite
        img.src = 'NOITE.png'
        document.body.style.background = 'rgb(21, 39, 49)'
    }
}

