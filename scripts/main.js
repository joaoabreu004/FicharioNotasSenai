
//VARIÁVEIS GLOBAIS


const btnAdd = document.querySelector('#addStudent');
const btnVerifica = document.querySelector('#verify');


var qtdNotas = 4;
var media = 0;
var somarNotas = 0;
var bancoDados = [];
var id = 0;
var btnExcluir = []; 
var listaNum = [];
var estudante; 

// ===========================================


// EVENTOS COM CLICKS
btnAdd.addEventListener('click', () => {
    criarAluno(); 
});


btnVerifica.addEventListener('click', () => {
    verifica();
});


// ===========================================


//ARROW FUNCTIONS

//- CRIAR ALUNO 
const criarAluno = () => {
    const item = document.createElement('tr');
    item.classList.add("blinder_student");
   
    id++

    item.innerHTML = `
        <button class="deleteStudent"><i class="fa-solid fa-square-xmark"></i></button>
        <td id="${id}-aluno">${id}</td>
        <td scope="row"><input type="text" class="nome${id}"></td>
        <td><input type="number" class="nota${id}-1"></td>
        <td><input type="number" class="nota${id}-2"></td>
        <td><input type="number" class="nota${id}-3"></td>
        <td><input type="number" class="nota${id}-4"></td>
        <td class="media${id}">#</td>
        <td class="situacao${id}">#</td>
    `

    document.getElementById('binderBody').appendChild(item);
    btnExcluir = document.querySelectorAll(".deleteStudent"); 
    btnExcluir.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove(parent);
            if(id > 0){
                id--
            }
        });  

       
    })
    


}


//ARROW FUNCTION - VERIFICAR SITUAÇÕES DOS ALUNOS
const verifica = () => {
    for (let aluno = 1; aluno <= id; aluno++) {

        media = 0; 
        somarNotas = 0; 
        listaNum.length = 0; 
        var outputMedia = document.querySelector(`.media${aluno}`);
        var nota1 = Number(document.querySelector(`.nota${aluno}-1`).value);
        var nota2 = Number(document.querySelector(`.nota${aluno}-2`).value);
        var nota3 = Number(document.querySelector(`.nota${aluno}-3`).value);
        var nota4 = Number(document.querySelector(`.nota${aluno}-4`).value);
        var nome = document.querySelector(`.nome${aluno}`).value;

        listaNum.push(nota1, nota2, nota3, nota4);


        //SOMAR NOTAS 
        for (let i = 0; i < listaNum.length; i++) {
            somarNotas += listaNum[i];
        }

        // MÉDIA
        media = somarNotas / 4;

        outputMedia.innerHTML = media;

        var outputSituacao = document.querySelector(`.situacao${aluno}`);
        if (media < 5.0) {
            outputSituacao.innerHTML = "REPROVADO";
            outputSituacao.classList.add("reprovado");
            outputSituacao.classList.remove("recuperacao", "aprovado");
    
        } else if (media >= 5.0 && media < 8.0) {
            outputSituacao.innerHTML = "RECUPERAÇÃO";
            outputSituacao.classList.add("recuperacao");
            outputSituacao.classList.remove("reprovado", "aprovado");
        } else if (media >= 8) {
            outputSituacao.innerHTML = "APROVADO";
            outputSituacao.classList.add("aprovado");
            outputSituacao.classList.remove("recuperacao", "reprovado");
        }
    }
}








