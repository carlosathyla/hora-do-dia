function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    
    if (hora >= 0 && hora < 6) {
        //Boa madrugada
        img.src = 'images/madrugada1.png'
        document.body.style.background = "#e0e0e0"
        msg.innerHTML = `Bom Madrugada! Agora sao ${hora} h e ${minutos} min`
    } else if (hora >= 6 && hora < 12) {
        img.src = 'images/manha1.png'
        document.body.style.background = "#ead56c"
        msg.innerHTML = `Bom dia! Agora sao ${hora} h e ${minutos} min`
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'images/tarde1.png'
        document.body.style.background = "#fc7f03"
        msg.innerHTML = `Bom tarde! Agora sao ${hora} h e ${minutos} min`
    } else {
        //Boa noite
        img.src = 'images/noite1.png'
        document.body.style.background = "#3d1c33"
        msg.innerHTML = `Bom noite! Agora sao ${hora} h e ${minutos} min`
    }
}

