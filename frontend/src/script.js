// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Alternar entre diferentes seções de jogos
    const tabLinks = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.news-section');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Expandir/Colapsar detalhes da partida
    const matchItems = document.querySelectorAll('.match-item');

    matchItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.style.fontWeight === 'bold') {
                this.style.fontWeight = 'normal';
            } else {
                this.style.fontWeight = 'bold';
            }
        });
    });
});
