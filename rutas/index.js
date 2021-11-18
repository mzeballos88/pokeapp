const express = require('express');
const router = express.Router();
const Contenedor = require('../classes/Contenedor');
const contenedor = new Contenedor();

router.get('/',(req,res)=>{
    contenedor.getAll()
    .then(
        result=>{
        if(result.status ==="success"){
           res.status(200).send(result.event);
        }else{
           res.status(500).send(result.message);
        }
    })
})                         

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    contenedor.getById(id)
    .then(
        result=>{
            res.send(result);
        })
})

/* router.get('/:id',(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    contenedor.getById(id)
    .then(
        result=>{
            res.send(result);
        })
}) */


router.post('/',(req,res)=>{
    let cuerpo = req.body;
    contenedor.save(cuerpo)
    .then(
        result=>{
            if(result.status ==="success"){
               res.status(200).send(cuepo.id);
            }else{
               res.status(500).send("El pokemon ya existe");
            }
    })
})

router.put('/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let body = req.body;
    contenedor.updateProducto(id,body)
    .then(
        result=>{
        res.send(result);
    })
})

/* router.put('/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let body = req.body;
    contenedor.update(id,body)
    .then(
        result=>{
        res.send(result);
    })
}) */

router.delete('/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    contenedor.deleteById(id)
    .then(
        result=>{
            res.send(result);
        }
    )
})

module.exports = router;