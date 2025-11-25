// Objeto contendo todas as traduções para os idiomas suportados
const translations = {
    'pt-br': {
        'header_subtitle': 'Perfil profissional, portfólio de projetos e entrega de resultados',
        'about_me_title': 'Conheça um pouco mais',
        'about_me_bio': 'Desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Com experiência em desenvolvimento web front-end, estou sempre em busca de novos desafios e aprendizados para aprimorar minhas habilidades.',
        'skills_title': 'Habilidades',
        'skill_js': 'JavaScript',
        'skill_html': 'HTML5',
        'skill_css': 'CSS3',
        'skill_react': 'React',
        'skill_node': 'Node.js',
        'skill_sql': 'SQL',
        'skill_git': 'Git',
        'project1_title': 'projeto-Sistema-de-tarefas',
        'project1_desc': 'Um sistema de chamados para atribuição de tarefas a usuários, com autenticação via JWT. Desenvolvido com Node.js, Express e Prisma.',
        'project1_link': 'Ver no GitHub',
        'project2_title': 'CineStream',
        'project2_desc': 'Uma plataforma de streaming de filmes e séries, permitindo aos usuários pesquisar, assistir a trailers e organizar seus favoritos. Desenvolvido com React, consumindo a API do The Movie Database (TMDb).',
        'project2_link': 'Ver no GitHub',
        'project3_title': 'Meu-portf-lio',
        'project3_desc': 'O código-fonte deste portfólio. Construído com HTML, CSS e JavaScript para criar uma experiência de usuário limpa e responsiva.',
        'project3_link': 'Ver no GitHub',
        'contact_title': 'Contato',
        'contact_name': 'Nome',
        'contact_email': 'Email',
        'contact_message': 'Mensagem',
        'contact_submit': 'Enviar Mensagem',
        'contact_success': 'Obrigado pelo contato! Sua mensagem foi enviada com sucesso.',
        'project4_title': 'Projeto Conversação',
        'project4_desc': 'Um projeto voltado para a comunicação, que traduz textos de português para inglês e vice-versa, facilitando a conversação entre falantes dos dois idiomas.',
        'project4_link': 'Ver no GitHub',
        'footer_location': 'Brasil',
        'github_link': 'GitHub',
        'game_title': 'Mini-Jogo: Adivinhe o Número!',
        'game_instructions': 'Eu pensei em um número entre 1 e 100. Você tem 7 tentativas para adivinhar.',
        'game_placeholder': 'Digite seu palpite',
        'game_button': 'Adivinhar',
        'game_feedback_low': 'Muito baixo! Tente um número maior.',
        'game_feedback_high': 'Muito alto! Tente um número menor.',
        'game_feedback_win': 'Parabéns! Você acertou o número!',
        'game_feedback_lost': 'Fim de jogo! O número era ',
        'game_restart_button': 'Jogar Novamente'
    },
    'en': {
        'header_subtitle': 'Professional profile, project portfolio and delivery of results',
        'about_me_title': 'Learn a little more',
        'about_me_bio': 'Software developer passionate about creating innovative and efficient solutions. With experience in front-end web development, I am always looking for new challenges and learning opportunities to improve my skills.',
        'skills_title': 'Skills',
        'skill_js': 'JavaScript',
        'skill_html': 'HTML5',
        'skill_css': 'CSS3',
        'skill_react': 'React',
        'skill_node': 'Node.js',
        'skill_sql': 'SQL',
        'skill_git': 'Git',
        'project1_title': 'project-Task-System',
        'project1_desc': 'A ticketing system for assigning tasks to users, with JWT authentication. Developed with Node.js, Express, and Prisma.',
        'project1_link': 'View on GitHub',
        'project2_title': 'CineStream',
        'project2_desc': 'A movie and series streaming platform, allowing users to search, watch trailers, and organize their favorites. Developed with React, consuming The Movie Database (TMDb) API.',
        'project2_link': 'View on GitHub',
        'project3_title': 'My-Portfolio',
        'project3_desc': 'The source code for this portfolio website. Built with HTML, CSS, and JavaScript to create a clean and responsive user experience.',
        'project3_link': 'View on GitHub',
        'contact_title': 'Contact',
        'contact_name': 'Name',
        'contact_email': 'Email',
        'contact_message': 'Message',
        'contact_submit': 'Send Message',
        'contact_success': 'Thank you for your message! It has been sent successfully.',
        'project4_title': 'Conversation Project',
        'project4_desc': 'A project focused on communication, which translates texts from Portuguese to English and vice-versa, facilitating conversation between speakers of both languages.',
        'project4_link': 'View on GitHub',
        'footer_location': 'Brazil',
        'github_link': 'GitHub',
        'game_title': 'Mini-Game: Guess the Number!',
        'game_instructions': 'I thought of a number between 1 and 100. You have 7 attempts to guess.',
        'game_placeholder': 'Enter your guess',
        'game_button': 'Guess',
        'game_feedback_low': 'Too low! Try a higher number.',
        'game_feedback_high': 'Too high! Try a smaller number.',
        'game_feedback_win': 'Congratulations! You guessed the number!',
        'game_feedback_lost': 'Game over! The number was ',
        'game_restart_button': 'Play Again'
    }
    ,
    'es': {
        'header_subtitle': 'Perfil profesional, portafolio de proyectos y entrega de resultados',
        'about_me_title': 'Conoce un poco más',
        'about_me_bio': 'Desarrollador de software apasionado por crear soluciones innovadoras y eficientes. Con experiencia en desarrollo web front-end, siempre estoy en busca de nuevos desafíos y aprendizajes para mejorar mis habilidades.',
        'skills_title': 'Habilidades',
        'skill_js': 'JavaScript',
        'skill_html': 'HTML5',
        'skill_css': 'CSS3',
        'skill_react': 'React',
        'skill_node': 'Node.js',
        'skill_sql': 'SQL',
        'skill_git': 'Git',
        'project1_title': 'proyecto-Sistema-de-tareas',
        'project1_desc': 'Un sistema de tickets para asignar tareas a usuarios, con autenticación vía JWT. Desarrollado con Node.js, Express y Prisma.',
        'project1_link': 'Ver en GitHub',
        'project2_title': 'CineStream',
        'project2_desc': 'Una plataforma de streaming de películas y series que permite a los usuarios buscar, ver tráileres y organizar sus favoritos. Desarrollado con React, consumiendo la API de The Movie Database (TMDb).',
        'project2_link': 'Ver en GitHub',
        'project3_title': 'Mi-Portafolio',
        'project3_desc': 'El código fuente de este sitio web de portafolio. Construido con HTML, CSS y JavaScript para crear una experiencia de usuario limpia y responsiva.',
        'project3_link': 'Ver en GitHub',
        'contact_title': 'Contacto',
        'contact_name': 'Nombre',
        'contact_email': 'Correo Electrónico',
        'contact_message': 'Mensaje',
        'contact_submit': 'Enviar Mensaje',
        'contact_success': '¡Gracias por tu mensaje! Ha sido enviado con éxito.',
        'project4_title': 'Proyecto Conversación',
        'project4_desc': 'Un proyecto enfocado en la comunicación, que traduce textos de portugués a inglés y viceversa, facilitando la conversación entre hablantes de ambos idiomas.',
        'project4_link': 'Ver en GitHub',
        'footer_location': 'Brasil',
        'github_link': 'GitHub',
        'game_title': 'Mini-Juego: ¡Adivina el Número!',
        'game_instructions': 'He pensado en un número entre 1 y 100. Tienes 7 intentos para adivinar.',
        'game_placeholder': 'Escribe tu número',
        'game_button': 'Adivinar',
        'game_feedback_low': '¡Muy bajo! Intenta un número más grande.',
        'game_feedback_high': '¡Muy alto! Intenta un número más pequeño.',
        'game_feedback_win': '¡Felicidades! ¡Adivinaste el número!',
        'game_feedback_lost': '¡Juego terminado! El número era ',
        'game_restart_button': 'Jugar de Nuevo'
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

            // Adicionado: Traduz o atributo 'placeholder' se existir
            const placeholderKey = element.dataset.translatePlaceholder;
            if (placeholderKey && translations[language] && translations[language][placeholderKey]) {
                element.placeholder = translations[language][placeholderKey];
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
    const gameSection = document.getElementById('mini-game'); // Pega a seção do jogo

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

    // --- Lógica do Mini-Jogo "Adivinhe o Número" ---
    if (gameSection) {
        const gameForm = document.getElementById('game-form');
        const gameInput = document.getElementById('guess-input');
        const gameMessage = document.getElementById('game-message');
        const guessButton = gameForm.querySelector('button');
        const restartButton = document.getElementById('restart-game-btn');

        let targetNumber;
        let attempts;
        const maxAttempts = 7;

        const startGame = () => {
            targetNumber = Math.floor(Math.random() * 100) + 1;
            attempts = maxAttempts;
            gameMessage.className = 'game-feedback'; // Reseta as classes de cor
            gameMessage.textContent = '';
            gameInput.value = '';
            gameInput.disabled = false;
            guessButton.disabled = false;
            gameForm.classList.remove('hidden'); // Mostra o formulário
            restartButton.classList.add('hidden'); // Esconde o botão de reiniciar
            console.log(`Novo jogo iniciado. O número é ${targetNumber}`); // Dica para depuração
        };

        gameForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const guess = parseInt(gameInput.value, 10);
            const currentLang = localStorage.getItem('language') || 'pt-br';

            if (isNaN(guess) || guess < 1 || guess > 100) {
                // Se precisar de uma mensagem de erro para entrada inválida, adicione-a às traduções.
                gameMessage.textContent = "Por favor, insira um número válido entre 1 e 100.";
                return;
            }

            attempts--;

            if (guess === targetNumber) {
                gameMessage.classList.remove('lost');
                gameMessage.classList.add('win');
                gameMessage.textContent = translations[currentLang]['game_feedback_win'];
                gameInput.disabled = true;
                guessButton.disabled = true;
                gameForm.classList.add('hidden'); // Esconde o formulário
                restartButton.classList.remove('hidden'); // Mostra o botão de reiniciar
            } else if (attempts > 0) {
                gameMessage.classList.remove('win', 'lost');
                const feedbackKey = guess < targetNumber ? 'game_feedback_low' : 'game_feedback_high';
                gameMessage.textContent = translations[currentLang][feedbackKey] + ` (${attempts} tentativas restantes)`;
                gameMessage.style.color = 'var(--tertiary-color)'; // Cor neutra para dicas
            } else {
                gameMessage.classList.remove('win');
                gameMessage.classList.add('lost');
                gameMessage.textContent = translations[currentLang]['game_feedback_lost'] + targetNumber + '.';
                gameInput.disabled = true;
                guessButton.disabled = true;
                gameForm.classList.add('hidden'); // Esconde o formulário
                restartButton.classList.remove('hidden'); // Mostra o botão de reiniciar
            }
            gameInput.value = '';
            gameInput.focus();
        });

        // Adiciona o listener para o botão de reiniciar
        restartButton.addEventListener('click', startGame);

        // Inicia o jogo quando a página carrega
        startGame();
    }
    // --- Fim da Lógica do Mini-Jogo ---

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
// --- Lógica do Easter Egg (Konami Code) ---

// A sequência de teclas secreta
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let konamiIndex = 0; // Rastreia a posição do usuário na sequência

// Função que é chamada quando o código é inserido corretamente
const activateBarrelRoll = () => {
    document.body.classList.add('konami-mode'); // Adiciona a classe que ativa a animação

    // Remove a classe após a animação terminar (4 segundos) para retornar ao normal
    setTimeout(() => {
        document.body.classList.remove('konami-mode');
    }, 4000);
};

// Ouve os eventos de teclado em toda a página
document.addEventListener('keydown', (e) => {
    // Se a tecla pressionada for a correta na sequência
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++; // Avança na sequência
        // Se a sequência inteira foi digitada
        if (konamiIndex === konamiCode.length) {
            activateBarrelRoll(); // Ativa o efeito!
            konamiIndex = 0; // Reseta para que possa ser feito novamente
        }
    } else {
        konamiIndex = 0; // Se a tecla errada for pressionada, reseta a contagem
    }
});
