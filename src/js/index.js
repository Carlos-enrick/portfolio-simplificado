
const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
btnMostrarProjetos.addEventListener('click', () => { 

    mostrarMaisProjetos();
    esconderBtn();
});






 
    


    




    


function esconderBtn() {
    btnMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');

    });
}

