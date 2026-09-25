function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');
    const isLightMode = html.classList.contains('light');

    img.setAttribute(
        'src',
        isLightMode ? './assets/Avantar.jpg' : './assets/Bushido1.png'
    );
}