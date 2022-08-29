const btnAdd = document.querySelector('#addStudent');
const btnVerifica = document.querySelector('#verify');


var ordemNumerica = document.querySelector('#ordenacao')

var linhaAluno = []


//VARIÁVEIS AUXILIARES
var num = 1
var somarNotas = 0 
var media = 0 


btnAdd.addEventListener('click', () => {
    criarAluno();
})

btnVerifica.addEventListener('click', () => {
    verifica(); 
})



var lista = []
var listaNum = []



//ARROW FUNCTION - CRIAR ALUNO 
const criarAluno = () => {
    const item = document.createElement('tr');
    item.classList.add("blinder_student");
    item.innerHTML = `
        <th id="ordenacao">${num++}</th>
        <th scope="row"><input type="text" class="input"></th>
        <th><input type="number" class="nota-1 input"></th>
        <th><input type="number" class="nota-2 input"></th>
        <th><input type="number" class="nota-3 input"></th>
        <th><input type="number" class="nota-4 input"></th>
        <th class="media">#</th>
        <th class="situacao">#</th>
    `
    document.getElementById('binderBody').appendChild(item); 
    linhaAluno.push(item)
    console.log(linhaAluno)

  

}

const verifica = () => {
    var outputMedia = document.querySelector(".media"); 
    var nota1 = document.querySelector(".nota-1").value;
    var nota2 = document.querySelector(".nota-2").value;
    var nota3 = document.querySelector(".nota-3").value;
    var nota4 = document.querySelector(".nota-4").value;
   
    
    lista.push(nota1, nota2, nota3, nota4);
    listaNum.length = 0

    for(let i = 0; i < lista.length; i++){
        listaNum.push(parseFloat(lista[i]));
    }
    

    //SOMAR NOTAS 
    for(let i = 0; i < listaNum.length; i++){
        somarNotas += listaNum[i];
    }
            
    // MÉDIA
    media = somarNotas / listaNum.length;   

    outputMedia.innerHTML = media;

    situacao(media);

    //ZERANDO VARIÁVEIS
    media = 0; 
    somarNotas = 0; 
    listaNum.length = 0; 
    lista.length = 0 
}





function situacao(media){
    var outputSituacao = document.querySelector('.situacao')
    if(media < 5.0){
       outputSituacao.innerHTML = "REPROVADO"
       outputSituacao.classList.add("reprovado")
       outputSituacao.classList.remove("recuperacao", "aprovado")
       
    }else if(media >= 5.0 && media < 8.0){
        outputSituacao.innerHTML = "RECUPERAÇÃO"
        outputSituacao.classList.add("recuperacao")
        outputSituacao.classList.remove("reprovado", "aprovado")
    } else if (media >= 8){
        outputSituacao.innerHTML = "APROVADO"
        outputSituacao.classList.add("aprovado")
        outputSituacao.classList.remove("recuperacao", "reprovado")

    }
}






// PEGAR AS NOTAS COMO NÚMERO.  
// DIVDIR E MOSTRAR MÉDIA E SITUÇÃO 
// REPLICAR ISSO PARA OS DEMAIS ALUNOS


