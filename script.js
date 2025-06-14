document.querySelector('.switch').addEventListener('click', (e)=>{
            document.body.classList.toggle('light');
            const ball = document.querySelector('.ball');
            ball.classList.toggle('ball-move');
            
            // Alternar entre as imagens de fundo
            if(document.body.classList.contains('light')) {
                document.body.style.backgroundImage = "url('bg-desktop-light.jpg')";
            } else {
                document.body.style.backgroundImage = "url('bg-desktop.jpg')";
            }
        });
        
        
        // Efeito de carregamento dos cards
document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 200 * index);
});