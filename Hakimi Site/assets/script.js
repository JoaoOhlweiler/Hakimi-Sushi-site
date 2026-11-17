let reserva = document.querySelector("#reserva");
let estaQuebrado=false;

reserva.style.color="white"
reserva.addEventListener("mouseover",e =>{
    if(!estaQuebrado)
        reserva.style.background="black";
        reserva.style.border="black";
        
    
});
reserva.addEventListener("mouseout",e =>{
     if(!estaQuebrado)
     reserva.style.background="rgb(212, 17, 40)";
});



const botoes = document.querySelectorAll(".menu button");
const abas = document.querySelectorAll(".aba");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        abas.forEach((aba) => {
            aba.style.display = "none";
        });

        abas[index].style.display = "block";

    });
});
function mostrarTexto(opcao) {

    let conteudo = document.getElementById("conteudo");

    if (opcao === "quem") {
        conteudo.innerHTML =`
        <h1 class="ttext">Quem somos</h1>
        
         <p class="text">&nbsp;&nbsp;&nbsp;Criado em 1970, o Hakimi Sushi é um restaurante especializado na culinária japonesa. Ao longo de sua história, busca proporcionar uma experiência gastronômica única, combinando tradição, qualidade e sabor em cada prato. Com um cardápio inspirado na cultura japonesa, oferece diferentes opções preparadas com cuidado e dedicação, valorizando os ingredientes e seus sabores. Mais do que uma refeição, o Hakimi Sushi representa uma experiência gastronômica especial para seus clientes. Estamos de portas abertas e esperamos por você para conhecer de perto nossa história, nossa tradição e, claro, nossa culinária!</p>  
    `
            }
    

    else if (opcao === "onde") {
         conteudo.innerHTML =`
        <a href="https://www.google.com/maps/search/?api=1&query=Kinami+Sushi"
   target="_blank"
   class="mapa-link" class="mapa">

    <iframe
        src="https://maps.google.com/maps?q=Kinami%20Sushi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy">
    </iframe></a>
    `;} 
    else if (opcao === "fotos") {
        conteudo.innerHTML = `
<table class="tabela-horarios">
    <tr>
        <th>Dias</th>
        <th>Horários de atendimento</th>
    </tr>
    <tr>
        <td>Segunda-feira</td>
        <td>18:00 – 23:00</td>
    </tr>
    <tr>
        <td>Terça-feira</td>
        <td>18:00 – 23:00</td>
    </tr>
    <tr>
        <td>Quarta-feira</td>
        <td>18:00 – 23:00</td>
    </tr>
    <tr>
        <td>Quinta-feira</td>
        <td>18:00 – 23:00</td>
    </tr>
    <tr>
        <td>Sexta-feira</td>
        <td>18:00 – 23:30</td>
    </tr>
    <tr>
        <td>Sábado</td>
        <td>18:00 – 01:30</td>
    </tr>
    <tr>
        <td>Domingo</td>
        <td>Fechado</td>
    </tr>
</table>




        `
    }

}


const textos = document.querySelectorAll(".mov");

textos.forEach(texto => {
    const palavras = texto.innerText.split(/\s+/);

    texto.innerHTML = palavras.map(palavra =>
        `<span class="palavra">${palavra}</span>`
    ).join(" ");
});

function animarTexto() {

    textos.forEach(texto => {

        const palavras = texto.querySelectorAll(".palavra");

        const posicao = texto.getBoundingClientRect().top;
        const altura = window.innerHeight;

        const progresso = Math.max(0, Math.min(1,
            (altura - posicao) / (altura * 0.7)
        ));

        const avanço = Math.pow(progresso, 0.65) * (palavras.length + 2);

        palavras.forEach((palavra, index) => {

            let intensidade = Math.max(0, Math.min(1,
                (avanço - index + 0.5) / 2.5
            ));

            intensidade = intensidade * intensidade *
                (3 - 2 * intensidade);

            palavra.style.opacity = 0.05 + intensidade * 0.95;

        });

    });

    requestAnimationFrame(animarTexto);
}

animarTexto();