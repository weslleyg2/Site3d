(function () {
    'use strict';

    // Cabeçalho
    $(".br").click(function () {
        $(".nav-menu").children().eq(0).text("Inicio");
        $(".nav-menu").children().eq(1).text("Sobre");
        $(".nav-menu").children().eq(2).text("Conhecimentos");
        $(".nav-menu").children().eq(3).text("Projetos");
        $(".nav-menu").children().eq(4).text("Certificados");
        $(".nav-menu").children().eq(5).text("Contatos");
        $(".language-selected").text("Português(Brasil)");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-br");
        // Seção
        $("#title").text("Olá, Meu Nome é Weslley Vander");
        $("#sub-titile").text("Desenvolvedor Front-end.");
        $("section p").text("Gosto de desenvolver ,e ajudar as pessoas com  minhas criações.");
        $(".button-strong ").text("Conheça meu portifolio");
        // Sobre
        $(".about h2").text("Sobre");
        $(".about p:nth-child(3)").text("Meu nome é Weslley Vander, tenho 26 anos, sou desenvolvedor front-end");
        $(".about p:nth-child(4)").text("Atualmente estou estudando e desenvolvendo projetos web mais precisamente no Front-end, de modo a ampliar meus conhecimentos e assim aprimorar ainda mais as habilidades que possuo.");
        $(".download .button-strong:nth-child(1)").text("Currículo em Português");
        $(".download .button-strong:nth-child(2)").text("Currículo em Inglês");
        // Conhecimentos

        $(".knowledge h2").text("Conhecimentos");
        $(".knowledge .html h2").text("Html");
        $(".knowledge .html h4").text("6 meses de experiência");
        $(".knowledge .html p").text("HTML é a linguagem de marcação padrão para páginas da Web. Com HTML você pode criar seu próprio site.");
        $(".knowledge .css h2").text("CSS");
        $(".knowledge .css h4").text("6 meses de experiência");
        $(".knowledge .css p").text("CSS é a linguagem que usamos para estilizar um documento HTML. CSS descreve como os elementos HTML devem ser exibido.");
        $(".knowledge .javascript h2").text("Javascript");
        $(".knowledge .javascript h4").text("2 meses de experiência");
        $(".knowledge .javascript p").text("JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.");

        // certificados

        $(".certificates h2").text("Certificados");
        $(".certificates .web-design p").text("Curso Web Design Completo HTML5- CSS3 e JS mais  5 Pojetos");
        $(".certificates .scrum p").text("Projetos ágeis com SCRUM");

        // Contato
        //email
        $(".contacts h2").text("Contato");
        $(".contacts .email h3").text("Envie um E-mail");
        // linkedin
        $(".contacts .email h3").text("Linkedin");
        $(".contacts .email p").text("/weslley-vander-6a579392/");

        // rodapé
        $(".footer span").text("© - 2022 por Weslley Vander - Desenvolvedor Front-end");
    });
        // ENGLISH
        $(".en").click(function () {
            $(".nav-menu").children().eq(0).text("Home");
            $(".nav-menu").children().eq(1).text("About");
            $(".nav-menu").children().eq(2).text("Knowledge");
            $(".nav-menu").children().eq(3).text("Projects");
            $(".nav-menu").children().eq(4).text("Certificates");
            $(".nav-menu").children().eq(5).text("Contact");
            $(".language-selected").text("English");
            $(".language-selected").removeClass("change-br");
            $(".language-selected").addClass("change-en");
            // section
            $("#title").text("Hello, My name is Weslley Vander");
            $("#sub-titile").text("Front-end Developer.");
            $("section p").text("I like to develop and help people with my creations.");
            $(".button-strong ").text("Meet my portfolio");

            // About
            $(".about h2").text("About");
            $(".about p:nth-child(3)").text("My name is Weslley Vander, I'm 26 years old, I'm a front-end developer");
            $(".about p:nth-child(4)").text("I'm currently studying and developing web projects more precisely on the Front-end, in order to expand my knowledge and thus improve even more the skills I have.");
            $(".download .button-strong:nth-child(1)").text("Resume in Portuguese Brazil");
            $(".download .button-strong:nth-child(2)").text("Resume in English");
            // Knowledge

            $(".knowledge h2").text("Knowledge");
            $(".knowledge .html h2").text("Html");
            $(".knowledge .html h4").text("6 months of experience");
            $(".knowledge .html p").text("HTML is the standard markup language for Web pages. With HTML you can create your own Website.");

            $(".knowledge .css h2").text("CSS");
            $(".knowledge .css h4").text("6 months of experience");
            $(".knowledge .css p").text("CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.");

            $(".knowledge .javascript h2").text("Javascript");
            $(".knowledge .javascript h4").text("2 months of experience");
            $(".knowledge .javascript p").text("JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language. Along with HTML and CSS, JavaScript is one of the three main technologies of the World Wide Web.");

            // certificados

            $(".certificates h2").text("Certificates");
            $(".certificates .web-design p").text("Complete Web Design Course HTML5- CSS3 and JS plus 5 Projects");
            $(".certificates .scrum p").text("Agile projects with SCRUM");

            // Contact
            //email
            $(".contacts h2").text("Contact");
            $(".contacts .email h3").text("Send an e-mail");
            // linkedin
            $(".contacts .email h3").text("Linkedin");
            $(".contacts .email p").text("/weslley-vander-6a579392/");

            // footer
            $(".footer span").text("© - 2022 by Weslley Vander - Front-end Developer");
        });
    })();