<<<<<<< HEAD
// --- MENU MOBILE ---
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// ABRIR MENU MOBILE
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
    if (overlay) overlay.style.display = 'block'
})

// FECHAR MENU MOBILE (clicando no menu em si)
menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('abrir-menu')
        if (overlay) overlay.style.display = 'none'
    }
})

// FECHAR MENU MOBILE (clicando no overlay)
if (overlay) {
    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
        overlay.style.display = 'none'
    })
}

// --- SCROLL SUAVE (desktop + mobile) ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        let href = this.getAttribute('href')
        if (!href || href === '#') return

        let id = href.slice(1)
        let target = document.getElementById(id)

        if (target) {
            e.preventDefault()
            let offset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0
            let top = target.getBoundingClientRect().top + window.pageYOffset - offset

            window.scrollTo({ top: top, behavior: 'smooth' })

            // Fecha o menu mobile após clicar no link
            menu.classList.remove('abrir-menu')
            if (overlay) overlay.style.display = 'none'
        }
    })
})

// --- EMAILJS (envio do formulário) ---
emailjs.init("YW_DcLh8a6LD_2Oer") // sua chave pública

const form = document.getElementById('meu-formulario')
if (form) {
    form.addEventListener('submit', function(event){
        event.preventDefault()

        emailjs.sendForm('service_xux7n82', 'template_v267asf', this)
        .then(() => {
            alert('Email enviado com sucesso!')
            form.reset()
        }, (err) => {
            alert('Erro ao enviar email: ' + JSON.stringify(err))
        })
    })
}

=======
// --- MENU MOBILE ---
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// ABRIR MENU MOBILE
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
    if (overlay) overlay.style.display = 'block'
})

// FECHAR MENU MOBILE (clicando no menu em si)
menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('abrir-menu')
        if (overlay) overlay.style.display = 'none'
    }
})

// FECHAR MENU MOBILE (clicando no overlay)
if (overlay) {
    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir-menu')
        overlay.style.display = 'none'
    })
}

// --- SCROLL SUAVE (desktop + mobile) ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        let href = this.getAttribute('href')
        if (!href || href === '#') return

        let id = href.slice(1)
        let target = document.getElementById(id)

        if (target) {
            e.preventDefault()
            let offset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0
            let top = target.getBoundingClientRect().top + window.pageYOffset - offset

            window.scrollTo({ top: top, behavior: 'smooth' })

            // Fecha o menu mobile após clicar no link
            menu.classList.remove('abrir-menu')
            if (overlay) overlay.style.display = 'none'
        }
    })
})

// --- EMAILJS (envio do formulário) ---
emailjs.init("YW_DcLh8a6LD_2Oer") // sua chave pública

const form = document.getElementById('meu-formulario')
if (form) {
    form.addEventListener('submit', function(event){
        event.preventDefault()

        emailjs.sendForm('service_xux7n82', 'template_v267asf', this)
        .then(() => {
            alert('Email enviado com sucesso!')
            form.reset()
        }, (err) => {
            alert('Erro ao enviar email: ' + JSON.stringify(err))
        })
    })
}

>>>>>>> a9667aded465219d24764d0b26075d864906393b
