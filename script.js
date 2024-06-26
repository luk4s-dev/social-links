function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light');
    // } else {
    //     html.classList.add('light');
    // }

    html.classList.toggle("light");

    const img = html.querySelector('#profile img')
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/gs-avatar.jpg');
    } else {
        img.setAttribute('src', './assets/gs-avatar.jpg');
    }
}