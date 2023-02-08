function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()//com 4 dígitos
    let txtAno = document.querySelector('#txtano')
    let anoNascimento = txtAno.value
    let resposta = document.querySelector('#resposta')

    if(anoNascimento.length == 0 || anoNascimento > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let idade = Number(anoAtual - anoNascimento)
        let genero = document.getElementsByName('genero')
        if( genero[0].checked){
            genero = 'mulher'
        } else {genero = 'homem'}

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', './assets/img/img-tarde.jpg')

        resposta.innerHTML = `${genero} com ${idade} anos`
        resposta.appendChild(img)
    }

}

