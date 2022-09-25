import livros from "../models/Livro.js";


class LivroController{

        static listarLivros = (req, res) => {
            livros.find((err, livros) => {
                res.status(200).send(livros);
            })
        }

        static listarLivrosId = (req, res) => {
            let index = buscaLivro(req.params.id);
            res.json(livros[index]);
        }

        static cadastrarLivro = (req, res) => {
            let livro = new livros(req.body);

            livro.save((err) => {
                if(err){
                    res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
                } else{
                    res.status(200).send(livro.toJSON())
                }
            })
        }
}

 function buscaLivro(id){
            return livros.findIndex(livro => livro.id == id)
        }
 export default LivroController