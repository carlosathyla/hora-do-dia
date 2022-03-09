function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 10
    msg.innerHTML = `Agora sao ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 6) {
        //Boa madrugada
        img.src = 'https://carlosathyla.github.io/hora-do-dia/images/madrugada1.png'
        document.body.style.background = "#e0e0e0"
        alert('Boa madrugada')
    } else if (hora >= 6 && hora < 12) {
        //Bom dia
        img.src = 'https://carlosathyla.github.io/hora-do-dia/images/manha1.png'
        document.body.style.background = "#ead56c"
        alert('Bom dia')
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'https://carlosathyla.github.io/hora-do-dia/images/tarde1.png'
        document.body.style.background = "#fc7f03"
        alert('Boa tarde')
    } else {
        //Boa noite
        img.src = 'https://carlosathyla.github.io/hora-do-dia/images/noite1.png'
        document.body.style.background = "#3d1c33"
        alert('Boa noite')
    }
}

