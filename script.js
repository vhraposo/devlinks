function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    // todo o código acima pode ser substituido por : 
    html.classList.toggle('light')

    // image change in light mode
    const img = document.querySelector("#profile img")
    
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    }else{
        img.setAttribute('src', './assets/avatar.png')
    }


}