document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const videoUpload = document.getElementById('videoUpload').files[0];
    const pdfUpload = document.getElementById('pdfUpload').files[0];

    if (videoUpload && pdfUpload) {
        const uploadList = document.getElementById('uploadList');

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <strong>Vídeo:</strong> ${videoUpload.name}
                <br>
                <video width="200" height="480" controls>
                    <source src="${URL.createObjectURL(videoUpload)}" type="${videoUpload.type}">
                </video>
            </div>
            <div>
                <strong>PDF:</strong> <a href="${URL.createObjectURL(pdfUpload)}" target="_blank">${pdfUpload.name}</a>
            </div>
            <div>
                <strong>Anotações:</strong>
                <textarea rows="4" cols="50" placeholder="Faça suas anotações aqui..."></textarea>
            </div>
        `;

        uploadList.appendChild(listItem);

        // Adiciona evento de click para ampliar o vídeo
        listItem.querySelector('video').addEventListener('click', function() {
            const modal = document.getElementById('modal');
            const modalVideo = document.getElementById('modalVideo');
            modalVideo.src = this.querySelector('source').src;
            modal.style.display = 'block';
        });
    }
});

// Fecha o modal ao clicar no 'x'
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalVideo').pause();
    document.getElementById('modalVideo').currentTime = 0;
});

// Fecha o modal ao clicar fora do vídeo
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.getElementById('modalVideo').pause();
        document.getElementById('modalVideo').currentTime = 0;
    }
});
