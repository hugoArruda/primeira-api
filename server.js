import http from "http";


const PORT = 3000;
const medicos = ['Irene Monteiro', 'Dani', 'mãe dani'];

console.log(medicos) ;
const rotas = {
    "/": "Node JS",
    "/medicos": "'Irene Monteiro', 'Dani', 'mãe dani'"
} 

const server = http.createServer((req,res)=>{
    res.writeHead(200,{});
    res.end(rotas[req.url]);

});


server.listen( PORT, () => {

console.log("Servidor escutando a Porta: " + PORT);
});