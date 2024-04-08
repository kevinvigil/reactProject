const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let expressions = [
    {"expression" : "El único camino para hacer un gran trabajo es amar lo que haces. - Steve Jobs"},
    {"expression" : "El éxito no es definitivo, el fracaso no es fatal: es el coraje para continuar lo que cuenta. - Winston Churchill"},
    {"expression" : "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon"},
    {"expression" : "El futuro pertenece a quienes creen en la belleza de sus sueños. - Eleanor Roosevelt"},
    {"expression" : "No importa lo lento que vayas, siempre y cuando no te detengas. - Confucio"},
    {"expression" : "El mayor error que puedes cometer en la vida es tener miedo de cometer errores. - Elbert Hubbard"},
    {"expression" : "No esperes a que las condiciones sean perfectas para avanzar. Avanza y haz que las condiciones sean perfectas. - Alan Cohen"},
    {"expression" : "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs"},
    {"expression" : "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier"},
    {"expression" : "La actitud es una pequeña cosa que marca una gran diferencia. - Winston Churchill"}
]

app.get('/api/frases', (req, res) => {
    let randomIndex = Math.floor(Math.random() * expressions.length);
    let randomExpression = expressions[randomIndex];
    res.json(randomExpression);
});

// Puerto en el que el servidor escucha las solicitudes
const PORT = 3001 || process.env.PORT;
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});