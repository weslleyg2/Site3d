(function () {
    'use strict';
    let $portuguese = document.querySelector(".br");
    let $english = document.querySelector(".en");

    $portuguese.addEventListener("click", portuguese);
    $english.addEventListener("click", english);

    function portuguese() {
        // Cabeçalho
        document.querySelector(".home").textContent = "Inicio";
        document.querySelector(".about").textContent = "Sobre";
        document.querySelector(".knowledge").textContent = "Conhecimentos";
        document.querySelector(".projects").textContent = "Projetos";
        document.querySelector(".certificates").textContent = "Certificados";
        document.querySelector(".contact").textContent = "Contatos";
        document.querySelector(".language-selected").textContent = "Português";
        document.querySelector(".language-selected").classList.add("change-br");
        document.querySelector(".language-selected").classList.remove("change-en");

        // Seção
        document.querySelector("#title").textContent = "Olá, Meu nome é Weslley Vander.";
        document.querySelector("#sub-title").innerHTML = "Desenvolvedor Front-end.<span class='efect'>|</span>";
        document.querySelector(".front-home p").textContent = "Gosto de desenvolver ,e ajudar as pessoas com  minhas criações.";
        document.querySelector(".front-home .button").textContent = "Conheça meu portifolio";
        // Sobre
        document.querySelector(".about h2").textContent = "Sobre";
        document.querySelector(".about p:nth-child(3)").textContent = "Meu nome é Weslley Vander, tenho 26 anos, sou desenvolvedor front-end";
        document.querySelector(".about p:nth-child(4)").textContent = "Atualmente estou estudando e desenvolvendo projetos web mais precisamente no Front-end, de modo a ampliar meus conhecimentos e assim aprimorar ainda mais as habilidades que possuo.";
        document.querySelector(".download .button-strong .button:nth-child(1)").textContent = "Currículo em Protuguês";
        document.querySelector(".download .button-strong .button2").textContent = "Currículo em Inglês";
       
        // Conhecimentos

        document.querySelector(".knowledge .gradient").textContent = "Conhecimentos";
        //Html
        document.querySelector(".knowledge .html h2").textContent = "Html";
        document.querySelector(".knowledge .html h4").textContent = "6 meses de experiência";
        document.querySelector(".knowledge .html p").textContent = "HTML é a linguagem de marcação padrão para páginas da Web. Com HTML você pode criar seu próprio site.";
        // Css
        document.querySelector(".knowledge .css h2").textContent = "CSS";
        document.querySelector(".knowledge .css h4").textContent = "6 meses de experiência";
        document.querySelector(".knowledge .css p").textContent = "CSS é a linguagem que usamos para estilizar um documento HTML. CSS descreve como os elementos HTML devem ser exibido.";
        //JavaScrip
        document.querySelector(".knowledge .javascript h2").textContent = "Javascript";
        document.querySelector(".knowledge .javascript h4").textContent = "2 meses de experiência";
        document.querySelector(".knowledge .javascript p").textContent = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.";
       //projetos
        
       document.querySelector(".projects h2").textContent = "Projetos";
       document.querySelector(".projects p").textContent = "Em Breve";
       
        // Certificados

        document.querySelector(".certificates h2").textContent = "Certificados";
        document.querySelector(".certificates .web-design p").textContent = "Certificado Curso Web Design Completo HTML5- CSS3 e JS mais  5 Pojetos";
        document.querySelector(".certificates .scrum p").textContent = "Projetos ágeis com SCRUM";
        // Contato
        //email

        document.querySelector(".contacts h2").textContent = "Contato";
        document.querySelector(".contacts .email h3").textContent = "Envie um E-mail";
        // linkedin
        
        document.querySelector(".contacts .linkedin h3").textContent = "Linkedin";
        // rodapé
        document.querySelector(".footer span").innerHTML = "&copy; - 2022 por Weslley Vander - Desenvolvedor Front-end";

    }
    function english() {
        // Cabeçalho
        document.querySelector(".home").textContent = "Home";
        document.querySelector(".about").textContent = "About";
        document.querySelector(".knowledge").textContent = "Knowledge";
        document.querySelector(".projects").textContent = "Projects";
        document.querySelector(".certificates").textContent = "Certificates";
        document.querySelector(".contact").textContent = "Contact";
        document.querySelector(".language-selected").textContent = "English";
        document.querySelector(".language-selected").classList.add("change-en");
        document.querySelector(".language-selected").classList.remove("change-br");

        // section
        document.querySelector("#title").textContent = "Hello, My name is Weslley Vander";
        document.querySelector("#sub-title").innerHTML = "Front-end Developer.<span class='efect'>|</span>";
        document.querySelector(".front-home p").textContent = "I like to develop and help people with my creations.";
        document.querySelector(".front-home .button").textContent = "Meet my portfolio";
        // About
        document.querySelector(".about h2").textContent = "About";
        document.querySelector(".about p:nth-child(3)").textContent = "My name is Weslley Vander, I'm 26 years old, I'm a front-end developer";
        document.querySelector(".about p:nth-child(4)").textContent = "I'm currently studying and developing web projects more precisely on the Front-end, in order to expand my knowledge and thus improve even more the skills I have.";
        document.querySelector(".download .button-strong .button:nth-child(1)").textContent = "Resume in Portuguese";
        document.querySelector(".download .button-strong .button2").textContent = "Resume in English";
        
        // Knowledge

        document.querySelector(".knowledge .gradient").textContent = "Knowledge";
        //Html
        document.querySelector(".knowledge .html h2").textContent = "Html";
        document.querySelector(".knowledge .html h4").textContent = "6 months of experience";
        document.querySelector(".knowledge .html p").textContent = "HTML is the standard markup language for Web pages. With HTML you can create your own Website.";
        // Css
        document.querySelector(".knowledge .css h2").textContent = "CSS";
        document.querySelector(".knowledge .css h4").textContent = "6 months of experience";
        document.querySelector(".knowledge .css p").textContent = "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.";
        //JavaScrip
        document.querySelector(".knowledge .javascript h2").textContent = "Javascript";
        document.querySelector(".knowledge .javascript h4").textContent = "2 months of experience";
        document.querySelector(".knowledge .javascript p").textContent = "JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language. Along with HTML and CSS, JavaScript is one of the three main technologies of the World Wide Web.";
        //projects
        
        document.querySelector(".projects h2").textContent = "Projects.";
        document.querySelector(".projects p").textContent = "Coming Soon";
        // Certificates

        document.querySelector(".certificates h2").textContent = "Certificates";
        document.querySelector(".certificates .web-design p").textContent = "Complete Web Design Course HTML5- CSS3 and JS plus 5 Projects";
        document.querySelector(".certificates .scrum p").textContent = "Agile projects with SCRUM";
        // Contact
        //email

        document.querySelector(".contacts h2").textContent = "Contact";
        document.querySelector(".contacts .email h3").textContent = "Send an e-mail";
        // linkedin
        
        document.querySelector(".contacts .linkedin h3").textContent = "Linkedin";
        // rodapé
        document.querySelector(".footer span").innerHTML = "&copy; - 2022 by Weslley Vander - Front-end Developer";

    }


})();