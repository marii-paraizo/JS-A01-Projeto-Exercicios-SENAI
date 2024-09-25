/* ------------ ATIVIDADE 1 ------------
Nenhum campo pode ser enviado vazio;
Os campos String devem conter pelo menos 5 caracteres;
Os campos 'Quantidade' e 'Valor unitário' devem ser positivos;
A Div 'mensagem-erro' deve estar sempre oculta.Ela só deve ser exibida quando o usuário preencher 
algum valor inválido nos inputs.Informar a mensagem de erro dentro da Div.Exemplo "O campo nome não pode estar vazio!";*/

/******* Criando função para validar dados *********/
function validarDados() {
    // Obtendo os dados digitados pelo usuário
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let unitario = frmRegistro.inVal.value;

    // Função para exibir mensagens e erro
    function mensagemErro(mensagem){
        // Variável para manipular div erro
        let mensagemErro = document.getElementById('mensagem-erro'); 
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = 'block'
    }
   
    if (data.trim() == ''){
        mensagemErro('O campo "Data" não pode estar vazio');
        frmRegistro.inData.focus();
        return false;
    }

    if (nome.trim() == '' || nome.trim().length < 5){
        mensagemErro('O campo "Nome" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inCli.focus();
        return false;
    }

    if (telefone.trim() == '' || telefone.trim().length < 5){
        mensagemErro('O campo "Telefone" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inFone.focus();
        return false;
    }

    if (email.trim() == '' || email.trim().length < 5){
        mensagemErro('O campo "E-mail" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inMail.focus();
        return false;
    }

    if (produto.trim() == '' || produto.trim().length < 5){
        mensagemErro('O campo "Nome do produto" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inProd.focus();
        return false;
    }

    if (quantidade.trim() == '' || quantidade.trim() < 0){
        mensagemErro('O campo "Quantidade" não pode estar vazio e não deve ser negativo');
        frmRegistro.inQtd.focus();
        return false;
    }

    if (unitario.trim() == '' || unitario.trim() < 0){
        mensagemErro('O campo "Valor unitário" não pode estar vazio e não deve ser negativo');
        frmRegistro.inVal.focus();
        return false;
    }

}


/* ------------ ATIVIDADE 2 ------------
Insira na Div 'canvas' abaixo a quantidade de imagens informada
pelo usuário. As imagens devem conter a class 'imagens'.*/
function gerarImagens() {
    const quantidade = document.getElementById('inQtdImg').value;
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; 

    for (let i = 0; i < quantidade; i++) {
        const imagem = document.createElement('imagem');
        imagem.src = 'img/logo.png'; 
        imagem.className = 'imagens';
        canvas.appendChild(imagem);
    }
}

/* ------------ ATIVIDADE 3 ------------
Implemente o interruptor abaixo para acender e apagar a lâmpada. As imagens estão na pasta 'img'.*/


function lampada(){
    // Criar variável para a imagem 'Dinos'
    let imagem = document.getElementById('lampada')
    let caminho = imagem.src; // Caminho completo (pastas/ nome arquivo)
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);

    // Fazendo a troca de imagem
    if(arquivo == 'acesa.jpg' || arquivo == ''){
        imagem.src = 'img/apagada.jpg';
    }
    else {
        imagem.src = 'img/acesa.jpg';
    }
}

/* ------------ ATIVIDADE 4 ------------
Com base nos valores informados pelo usuário, 
implemente a calculadora abaixo para determinar:

Percentual de desconto (%);
Valor do desconto (R$);
Valor líquido do pedido (R$):
Valor do pedido >= R$ 500 ===> Desconto de 0,5%
Valor do pedido >= R$ 1000 ===> Desconto de 0,8%
Valor do pedido >= R$ 1500 ===> Desconto de 1,0%
Valor do pedido >= R$ 2000 ===> Desconto de 1,5%.*/

function Calcular(){
    let ValorPedido = document.getElementById('inValorPedido').value;
    /*let Desconto = document.getElementById('inPercDesc');
    let Valorliquido = document.getElementById('inValFinal');*/

    if(ValorPedido >= 500){
        document.getElementById('inPercDesc').value = ValorPedido * 0,5/100;
        document.getElementById('inValFinal').value = ValorPedido + desconto;
    }
}