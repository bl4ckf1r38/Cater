// Lista de imagens
const imagens = [];
for (let i = 1; i <= 28; i++) {
    imagens.push(`imagens/imagem${i}.jpeg`);
}

let index = 0;
const galleryImage = document.getElementById('galleryImage');
const thumbnailsContainer = document.getElementById('thumbnails');

function atualizarMiniaturaSelecionada() {
    const thumbnails = thumbnailsContainer.querySelectorAll('img');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('thumbnail-selected');
        } else {
            thumb.classList.remove('thumbnail-selected');
        }
    });
}

function mostrarImagem(posicao) {
    index = posicao;
    galleryImage.src = imagens[index];
    atualizarMiniaturaSelecionada();
}

document.getElementById('nextButton').addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
});

document.getElementById('prevButton').addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem(index);
});

// Criar miniaturas
imagens.forEach((imagem, i) => {
    const thumb = document.createElement('img');
    thumb.src = imagem;
    thumb.addEventListener('click', () => {
        mostrarImagem(i);
    });
    thumbnailsContainer.appendChild(thumb);
});

// Inicializa selecionando a primeira miniatura
atualizarMiniaturaSelecionada();

// Troca automática (opcional)
setInterval(() => {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
}, 3000);

// Botão de fechar - Voltar para a tela de boas-vindas
document.getElementById('closeButton').addEventListener('click', () => {
    window.location.href = 'welcome.html'; // Troca para a tela de boas-vindas
});