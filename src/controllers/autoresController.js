import autores from "../models/Autor.js";


class AutorController{

        static listarAutor = (req, res) => {
            autores.find((err, autores) => {
                res.status(200).send(autores);
            })
        }

        static listarAutoresId = (req, res) => {

           const id = req.params.id;
            autores.findById(id, (err, autores) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - id do Autor não localizado`})
                }else{
                    res.status(200).send(autores);
                }
            })
        }

        static cadastrarAutor = (req, res) => {
            let autor = new autores(req.body);

            autor.save((err) => {
                if(err){
                    res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`})
                } else{
                    res.status(200).send(autor.toJSON())
                }
            })
        }
        static atualizarAutor = (req, res) => {
            const id = req.params.id;
            autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
                if(!err){
                    res.status(200).send({message: 'Autor atualziado com sucesso'})
                } else{
                    res.status(500).send({message: err.message})
                }
            })

        }

        static excluirAutor = (req, res) => {
            const id = req.params.id

        autores.findOneAndDelete(id, (err)=> {
             if(!err){
                    res.status(200).send({message: 'Autor Excluido com sucesso'})
            }else{

                    res.status(500).send({message: err.message})
                }
            })
        }
}

 
 export default AutorController