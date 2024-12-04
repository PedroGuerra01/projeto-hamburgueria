const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

document.addEventListener("DOMContentLoaded", () => {
    // Variáveis de produtos
    const loadMoreButton = document.getElementById('loadMore');
    const produtoLista = document.querySelector('.produto-lista');

    // Produtos adicionais para carregar
    const maisProdutos = [
        {
            img: "img/produto4.jpg",
            nome: "Salgadinho Crocante",
            descricao: "Crocante e delicioso, perfeito para um lanche rápido.",
        },
        {
            img: "img/produto5.jpg",
            nome: "Salada Fresca",
            descricao: "Salada fresca e saudável para acompanhar seu pedido.",
        },
        {
            img: "img/produto6.jpg",
            nome: "Refrigerante Gelado",
            descricao: "Refrigerante gelado para complementar sua refeição.",
        },
    ];

    // Função para adicionar novos produtos à lista
    const carregarMaisProdutos = () => {
        maisProdutos.forEach(produto => {
            const divProduto = document.createElement('div');
            divProduto.classList.add('produto');
            divProduto.innerHTML = `
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <button class="detalhes-btn">Ver Detalhes</button>
            `;
            produtoLista.appendChild(divProduto);
        });

        // Esconde o botão depois de carregar mais produtos
        loadMoreButton.style.display = "none";
    };

    // Adiciona um ouvinte de evento ao botão de "Carregar Mais Produtos"
    loadMoreButton.addEventListener('click', carregarMaisProdutos);

    // Exemplo de abrir detalhes ao clicar no botão de cada produto
    const detalhesButtons = document.querySelectorAll('.detalhes-btn');
    detalhesButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Detalhes do produto!');  // Substitua por um modal ou ação de detalhamento real
        });
    });
});
