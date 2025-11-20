// Objeto contendo todas as traduções para os idiomas suportados
const translations = {
    'pt-br': {
        'header_subtitle': 'Saiba um pouco sobre mim e veja alguns projetos',
        'about_me_title': 'Sobre Mim',
        'about_me_bio': 'Desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Com experiência em desenvolvimento web full-stack, estou sempre em busca de novos desafios e aprendizados para aprimorar minhas habilidades.',
        'skills_title': 'Habilidades',
        'skill_js': 'JavaScript',
        'skill_html': 'HTML5',
        'skill_css': 'CSS3',
        'skill_react': 'React',
        'skill_node': 'Node.js',
        'skill_sql': 'SQL',
        'project1_title': 'projeto-Sistema-de-tarefas',
        'project1_desc': 'Um sistema de chamados para atribuição de tarefas a usuários, com autenticação via JWT. Desenvolvido com Node.js, Express e Prisma.',
        'project1_link': 'Ver no GitHub',
        'project3_title': 'Meu-portf-lio',
        'project3_desc': 'O código-fonte deste portfólio. Construído com HTML, CSS e JavaScript para criar uma experiência de usuário limpa e responsiva.',
        'project3_link': 'Ver no GitHub',
        'contact_title': 'Contato',
        'contact_name': 'Nome',
        'contact_email': 'Email',
        'contact_message': 'Mensagem',
        'contact_submit': 'Enviar Mensagem',
        'contact_success': 'Obrigado pelo contato! Sua mensagem foi enviada com sucesso.',
        'footer_location': 'Brasil', // Mantido no final
        'github_link': 'GitHub'
    },
    'en': {
        'header_subtitle': 'Learn a little about me and see some projects',
        'about_me_title': 'About Me',
        'about_me_bio': 'Software developer passionate about creating innovative and efficient solutions. With experience in full-stack web development, I am always looking for new challenges and learning opportunities to improve my skills.',
        'skills_title': 'Skills',
        'skill_js': 'JavaScript',
        'skill_html': 'HTML5',
        'skill_css': 'CSS3',
        'skill_react': 'React',
        'skill_node': 'Node.js',
        'skill_sql': 'SQL',
        'project1_title': 'project-Task-System',
        'project1_desc': 'A ticketing system for assigning tasks to users, with JWT authentication. Developed with Node.js, Express, and Prisma.',
        'project1_link': 'View on GitHub',
        'project3_title': 'My-Portfolio',
        'project3_desc': 'The source code for this portfolio website. Built with HTML, CSS, and JavaScript to create a clean and responsive user experience.',
        'project3_link': 'View on GitHub',
        'contact_title': 'Contact',
        'contact_name': 'Name',
        'contact_email': 'Email',
        'contact_message': 'Message',
        'contact_submit': 'Send Message',
        'contact_success': 'Thank you for your message! It has been sent successfully.',
        'footer_location': 'Brazil', // Mantido no final
        'github_link': 'GitHub'
    }
    ,
    'es': {
        'header_subtitle': 'Aprende un poco sobre mí y ve algunos proyectos',
        'about_me_title': 'Sobre Mí',
        'about_me_bio': 'Desarrollador de software apasionado por crear soluciones innovadoras y eficientes. Con experiencia en desarrollo web full-stack, siempre estoy en busca de nuevos desafíos y aprendizajes para mejorar mis habilidades.',
        'skills_title': 'Habilidades',
        'skill_js': 'JavaScript',
        'skill_html': 'HTML5',
        'skill_css': 'CSS3',
        'skill_react': 'React',
        'skill_node': 'Node.js',
        'skill_sql': 'SQL',
        'project1_title': 'proyecto-Sistema-de-tareas',
        'project1_desc': 'Un sistema de tickets para asignar tareas a usuarios, con autenticación vía JWT. Desarrollado con Node.js, Express y Prisma.',
        'project1_link': 'Ver en GitHub',
        'project3_title': 'Mi-Portafolio',
        'project3_desc': 'El código fuente de este sitio web de portafolio. Construido con HTML, CSS y JavaScript para crear una experiencia de usuario limpia y responsiva.',
        'project3_link': 'Ver en GitHub',
        'contact_title': 'Contacto',
        'contact_name': 'Nombre',
        'contact_email': 'Correo Electrónico',
        'contact_message': 'Mensaje',
        'contact_submit': 'Enviar Mensaje',
        'contact_success': '¡Gracias por tu mensaje! Ha sido enviado con éxito.',
        'footer_location': 'Brasil', // Mantido no final
        'github_link': 'GitHub'
    }
};

// Variável global para controlar o intervalo da animação de digitação
let typingInterval; // Variável para controlar o intervalo da digitação

// Função que cria o efeito de "digitação" para um elemento de texto
const typeWriter = (element, text, speed = 75) => { // A velocidade padrão é de 75ms por caractere
    // Limpa qualquer animação de digitação anterior para evitar sobreposição
    if (typingInterval) {
        clearInterval(typingInterval);
    }

    let i = 0;
    element.innerHTML = ''; // Limpa o texto inicial
    element.classList.add('typing'); // Adiciona a classe para mostrar o cursor piscando

    // Inicia um intervalo para adicionar um caractere de cada vez
    typingInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            // Remove o cursor 1 segundo após o término da digitação
            setTimeout(() => element.classList.remove('typing'), 1000);
        }
    }, speed);
};

// Função para definir o idioma da página com base na seleção
const setLanguage = (language) => {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[language] && translations[language][key]) {
            const text = translations[language][key];
            // Aplica o efeito de digitação apenas ao subtítulo do cabeçalho
            if (key === 'header_subtitle') {
                typeWriter(element, text);
            } else {
                element.innerHTML = text;
            }
        }
    });
    // Define o atributo 'lang' do HTML para acessibilidade e SEO
    document.documentElement.lang = language;
};

// --- Lógica para Animação de Elementos ao Rolar (Reveal) ---
let revealObserver;

// Função para observar novos elementos que devem ser revelados
const observeElements = () => {
    const elementsToReveal = document.querySelectorAll('.reveal:not(.visible)');
    elementsToReveal.forEach(element => {
        if (revealObserver) {
            revealObserver.observe(element);
        }
    });
};
// --- Fim da Lógica de Animação ---

// Evento que é disparado quando o conteúdo do DOM é totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langSelect = document.getElementById('lang-select');
    const backToTopButton = document.getElementById('back-to-top-btn');
    const contactForm = document.getElementById('contact-form');

    // --- Configuração do Tema (Claro/Escuro) ---
    // Função para aplicar o tema ao body
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    };

    // Listener para o clique no botão de alternância de tema
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        const newTheme = isLight ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Define o tema inicial: 1º localStorage, 2º preferência do sistema, 3º padrão (escuro)
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersLight) {
        applyTheme('light');
    } else {
        applyTheme('dark'); // Padrão
    }

    // --- Configuração do Idioma ---
    // Função para definir o idioma inicial
    const setInitialLanguage = () => {
        // Prioridade: 1º localStorage, 2º idioma do navegador, 3º padrão (pt-br)
        let initialLang = localStorage.getItem('language');
        if (!initialLang) {
            const browserLang = navigator.language.toLowerCase();
            const supportedLangs = Object.keys(translations);
            const shortLang = browserLang.split('-')[0];

            initialLang = supportedLangs.includes(browserLang) ? browserLang : // Tenta correspondência exata (ex: "pt-br")
                          supportedLangs.includes(shortLang) ? shortLang :   // Tenta correspondência parcial (ex: "en")
                          'pt-br'; // Padrão
        }
        langSelect.value = initialLang;
        setLanguage(initialLang);
    };

    setInitialLanguage();

    // Listener para a mudança no seletor de idiomas
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        localStorage.setItem('language', selectedLang);
        setLanguage(selectedLang);
    });

    // --- Lógica do Botão "Voltar ao Topo" ---
    // Listener para o clique no botão
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Efeito de rolagem suave
        });
    });

    // --- Lógica do Formulário de Contato ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o recarregamento da página

            const form = e.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const formData = new FormData(form);
            
            // Desabilita o botão para evitar envios múltiplos
            submitButton.disabled = true;

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Cria e exibe a mensagem de sucesso
                    const successMessage = document.createElement('p');
                    successMessage.className = 'form-status-message';
                    const currentLang = localStorage.getItem('language') || 'pt-br';
                    successMessage.textContent = translations[currentLang]['contact_success'];
                    form.parentNode.insertBefore(successMessage, form.nextSibling);
                    form.reset(); // Limpa o formulário
                    form.style.display = 'none'; // Opcional: esconde o formulário
                } else {
                    // Lida com erros (pode ser expandido)
                    alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
                    submitButton.disabled = false; // Reabilita o botão em caso de erro
                }
            }).catch(error => {
                alert('Ocorreu um erro de rede. Verifique sua conexão e tente novamente.');
                submitButton.disabled = false; // Reabilita o botão em caso de erro
            });
        });
    }

    // --- Configuração da Animação de Rolagem (Intersection Observer) ---
    // Cria um observador que dispara quando um elemento entra na tela
    revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('visible');

                // Animate progress bars if they exist within the revealed element
                const progressBars = target.querySelectorAll('.progress-bar-fill'); // Seleciona as barras de progresso
                if (progressBars.length > 0) {
                    progressBars.forEach(bar => {
                        bar.style.width = bar.dataset.progress;
                    });
                }

                observer.unobserve(target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Start animation when 10% of the element is visible
    });

    // Observe initial elements
    observeElements(); // Inicia a observação dos elementos na página
    // --- Fim da Configuração da Animação de Rolagem ---

    // --- Lógica para Ocultar o Cabeçalho ao Rolar ---
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 300; // Pixels to scroll before showing the button

    // Listener para o evento de rolagem da janela
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Rolando para baixo: esconde o cabeçalho
            if (scrollTop > header.offsetHeight) {
                header.classList.add('header-hidden');
            }
        } else {
            // Rolando para cima: mostra o cabeçalho
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Atualiza a última posição de rolagem

        // Mostra ou oculta o botão "Voltar ao Topo" com base na posição de rolagem
        if (scrollTop > scrollThreshold) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    // --- End Hide Header on Scroll ---
});
