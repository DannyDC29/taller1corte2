var autores = ["BLACKPINK", "Jennie", "Lisa", "Jisoo", "Rosé"];
var citas = [
    "In this world that is a lie, the only truth, it's you",

    "Show me the colors of your heart. I really need you in my world. Open your eyes, herе I am in front of you. I'm ready for love",

    "Everything collapses at the touch of my fingertips",

    "Don't apologize for my behavior, if you're offended, I don't care",
    
    "Everybody tells me to play nice. Everybody judge, but looking twice. But my body don’t belong to, none of them though, and I'm not gonna change 'cause you say so"
];

function generarCita() {
    var autorAleatorio = autores[Math.floor(Math.random() * autores.length)];
    var citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
    
    var citaCompleta = autorAleatorio + ' said: "' + citaAleatoria + '"';
    
    document.getElementById("cita").textContent = citaCompleta;
}