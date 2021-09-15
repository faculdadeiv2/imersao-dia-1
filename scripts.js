const form = document.forms.valores;
// captura o formulario inteiro

const resultado = document.getElementById('resultado');
// captura o elemento span que receberá o resultado

document.querySelector('form').addEventListener('submit', function (evento) {
    // quando o formulario receber um submit ocorre a função 

    evento.preventDefault();
    // evita o recarregamento padrão da página no submit

    let valor1 = form.valor1.value;
    // captura o valor do primeiro input
    let valor2 = form.valor2.value;
    // captura o valor do segundo input

    resultado.innerText = `${somaValores(Number(valor1), Number(valor2))}`;
    // insere o resultado no elemento span

    form.valor1.value = '';
    // limpa os inputs
    form.valor2.value = '';

    form.valor1.focus();
    // coloca o foco no primeiro input para a inserção de novos valores
});

// função que retorna a soma de dois valores
function somaValores(num1, num2) {
    return num1 + num2;
};
