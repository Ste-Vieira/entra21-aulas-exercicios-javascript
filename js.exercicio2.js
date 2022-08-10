let criarParagrafo = document.createElement("a")
criarParagrafo.href = "https://www.google.com"
criarParagrafo.textContent = "JAVASCRIPT PURO - Paragrafo criado que direciona para um site de pesquisa"
let alguel_id = document.getElementById("criar_aqui")
alguel_id.append(criarParagrafo)

document.body.append(criarParagrafo)



