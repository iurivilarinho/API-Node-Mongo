import livros from "../models/Livro.js";


class LivroController{

        static listarLivros = (req, res) => {
            livros.find((err, livros) => {
                res.status(200).send(livros);
            })
        }

        static listarLivrosId = (req, res) => {

           const id = req.params.id;
            livros.findById(id, (err, livros) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - id do livro não localizado`})
                }else{
                    res.status(200).send(livros);
                }
            })
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
        static atualizarLivro = (req, res) => {
            const id = req.params.id;
            livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
                if(!err){
                    res.status(200).send({message: 'livro atualziado com sucesso'})
                } else{
                    res.status(500).send({message: err.message})
                }
            })

        }
}

 function buscaLivro(id){
            return livros.findIndex(livro => livro.id == id)
        }
 export default LivroController