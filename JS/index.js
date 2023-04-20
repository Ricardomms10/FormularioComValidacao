let botaoEnviar = document.getElementsByClassName('enviar');
    botaoEnviar[0].addEventListener('click', function(event) {
      event.preventDefault();
  
      let campos = document.getElementsByClassName('campo-obrigatorio');

      let obrigatorio = document.getElementsByClassName ("obrigatorio")
      let inputObrigatorio = obrigatorio[0]
      
      for (let i = 0; i < campos.length; i++) {
        let campoInput = campos[i];
        let campoDigitado = campoInput.value;
        let mensagem = campoInput.nextElementSibling;

        if (campoDigitado === '') {
          campoInput.style.borderColor = '#f52e2e';
          mensagem.classList.add('nao-preenchido')
        } else {
          campoInput.style.borderColor = '#00c22b';
          mensagem.classList.remove('nao-preenchido')
        }
      }
    })