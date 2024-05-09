 
        const nomes = [];

        function adicionarNome() {
            const nome = prompt("Digite um nome:");
            if (nome) {
                nomes.push(nome);
                atualizarTabela();
            }
        }

        function atualizarTabela() {
            const tabelaNomes = document.getElementById("tabelaNomes").getElementsByTagName('tbody')[0];
            tabelaNomes.innerHTML = "";

            nomes.forEach((nome) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${nome}</td>`;
                tabelaNomes.appendChild(tr);
            });
        }