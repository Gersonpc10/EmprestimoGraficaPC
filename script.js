const listaTaxas = [3.74, 6.14, 6.89, 7.61, 8.35, 9.06, 9.89, 10.59, 11.29, 11.98, 12.67, 13.35];

function calcular() {
    const valorEmprestimo = parseFloat(document.getElementById('valor').value);
    const adicional = parseFloat(document.getElementById('adicional').value);
    const resultDiv = document.getElementById('result');
    
    
    if (isNaN(valorEmprestimo) || isNaN(adicional)) {
        resultDiv.innerHTML = '<p>Por favor, insira valores válidos.</p>';
        return;
    }

    let resultHTML = '<table><tr><th>Parcela</th><th>Valor Parcela (R$)</th></th><th>Valor Total (R$)</th></tr>';
    
    listaTaxas.forEach((taxa, index) => {
        const totalParcela = ((valorEmprestimo + adicional )/(1-(taxa / 100)))/(index+1);
        const total = ((valorEmprestimo + adicional )/(1-(taxa / 100)));
        resultHTML += `<tr><td>${index + 1}</td><td>${totalParcela.toFixed(2)}</td><td>${total.toFixed(2)}</td></tr>`;
    });
    
    resultHTML += '</table>';
    resultDiv.innerHTML = resultHTML;










}



