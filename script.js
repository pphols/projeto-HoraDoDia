function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  var dat = new Date()
  var min = dat.getMinutes();
  var txt = document.getElementById('txt');
  msg.innerHTML = `Agora são ${hora}:${min}`;

  if (hora >= 6 && hora < 13) {
    // bom dia
    img.src = 'img/manha.png';
    document.body.style.background = '#A9B9D9';
    txt.innerHTML = 'Bom dia! &#x1F305'
  } else if (hora >= 13 && hora <= 16){
    // boa tarde
    img.src = 'img/aTarde.png';
    document.body.style.background = '#BAB2BF';
    txt.innerHTML = 'Bom Tarde! &#x1F31E';
  } else if (hora >= 17 && hora <= 18){
    // boa tarde
    img.src = 'img/tarde.png';
    document.body.style.background = '#D9A577';
    txt.innerHTML = 'Bom Tarde! &#x1F304';
  }
  else if(hora >= 19 && hora <= 23){
    // boa noite
    img.src = 'img/noite.png';
    document.body.style.background = '#025E73';
    txt.innerHTML = 'Boa noite! &#x1F31C';
  } else{
    // boa madrugada
    img.src = 'img/madrugada.png';
    document.body.style.background = '#121617'
    txt.innerHTML = 'Boa madrugada! &#x1F306'
  }
}