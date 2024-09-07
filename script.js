const listaTaxas = [3.74, 6.14, 6.89, 7.61, 8.35, 9.06, 9.89, 10.59, 11.29, 11.98, 12.67, 13.35];

function calcular() {
    const valorEmprestimo = parseFloat(document.getElementById('valor').value);
    const adicional = parseFloat(document.getElementById('adicional').value);
    const resultDiv = document.getElementById('result');
    const resDiv = document.getElementById('res');
    
    
    if (isNaN(valorEmprestimo) || isNaN(adicional)) {
        resultDiv.innerHTML = '<p>Por favor, insira valores válidos.</p>';
        resDiv.innerHTML = '<p>Por favor, insira valores válidos.</p>';
        return;
    }

    // CALCULO PARA RECEBER O VALOR
    let resultHTML = `<th>RECEBER o valor de: R$ ${valorEmprestimo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</th><table><tr><th>Parcela</th><th>Valor Parcela (R$)</th></th><th>Valor Total (R$)</th></tr>`;
    
    listaTaxas.forEach((taxa, index) => {
        const totalParcela = ((valorEmprestimo + adicional )/(1-(taxa / 100)))/(index+1);
        const total = ((valorEmprestimo + adicional )/(1-(taxa / 100)));
        resultHTML += `<tr><td>${index + 1}</td><td>${totalParcela.toFixed(2)}</td><td>${total.toFixed(2)}</td></tr>`;
    });
    

    resultHTML += '</table>';
    resultDiv.innerHTML = resultHTML;


     // CALCULO PASSANDO O VALOR

    let resHTML = `<th>PASSAR o valor de: R$ ${valorEmprestimo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</th><table><tr><th>Parcela</th><th>Valor Parcela (R$)</th><th>Valor Total (R$)</th></tr>`;

    listaTaxas.forEach((taxa, index) => {
        const totalParcela = ((valorEmprestimo))/(index+1);
        const total = ((valorEmprestimo)*(1-(taxa / 100)) - adicional);
        resHTML += `<tr><td>${index + 1}</td><td>${totalParcela.toFixed(2)}</td><td>${total.toFixed(2)}</td></tr>`;
    });

   
    resHTML += '</table>';
    resDiv.innerHTML = resHTML;









}



