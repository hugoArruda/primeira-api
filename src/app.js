import express from "express";


const app = express();
app.use(express.json());


const medicos = [
    {   
        id : 1,
        nome: "Irene Monteiro"

    },
    {
        id : 2,
        nome: "Dani"

    },
    {
        id : 3,
        nome: "Mãe Dani"

    }]


function buscaMedicoId(id){
    return medicos.findIndex(medico =>{
        return medico.id === Number(id);
    })
};



app.get("/", (req,res)=> {
    res.status(200).send("Curso nodejs");
});

app.get("/medicos",(req,res)=>{

    res.status(200).json(medicos);
});

app.get("/medicos/:id", (req,res)=> {
  
    const index = buscaMedicoId(req.params.id);

    res.status(200).json(medicos[index]);
});


app.post("/medicos",(req, res)=>{

   medicos.push(req.body);
   res.status(201).send("Médico Cadastrado com sucesso");

});

app.put("/medicos/:id", (req,res)=> {
  
    const index = buscaMedicoId(req.params.id);
    medicos[index].nome = req.body.nome;

    res.status(200).json(medicos[index]);
});

app.delete("/medicos/:id", (req,res)=> {
  
    const index = buscaMedicoId(req.params.id);
    medicos.splice(index,1);

    res.status(200).json(medicos);
});

export default app;