import * as createServ from '../services/News/create'
import * as readServ from '../services/News/read'
import * as updateServ from '../services/News/update'
import * as deleteServ from '../services/News/delete'

//CREATE NEWS
export const addNew = async (req, res) => { 
    try{
        const newNew = req.body
        
        const response = await createServ.addNew(newNew)
        console.log(response)
        res.status(201).json({status:201,response})
    }catch (e){
        res.status(500).json(e)
        console.log(e)
    }
}


// READ NEWS
export const listNews = async (req, res) => {
    try{        
       
            const response = await readServ.listNews()
            res.status(200).json({status:200,response})
             
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const listaNewsFilter = async (req, res) => {
    try{        
        console.log("filtro")
        const filter=req.params.filter
        console.log(filter)
        const response = await readServ.listNewsfiltered(filter)
        console.log(response)
        res.status(200).json({status:200,response})
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const newById = async (req, res) => {
    try{        
        const idNew = req.params.newId
        const response = await readServ.newById(idNew)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const newByParameter = async (req, res) => {
    try{      
        
        const parameterNew = req.params.newParameter        
        const parameter = req.params.parameter
        console.log(parameterNew,parameter)
        const response = await readServ.newByParameter(parameter,parameterNew)
        res.status(200).json({status:200,response})
    }catch (e){
        res.status(500).json(e)
    }
}

//UPDATE NEWS
export const updateNewById = async (req, res) => {
    try{
        const newNew = req.body
        const idNew = req.params.newId
        const response = await updateServ.updateNewById(idNew,newNew)
        console.log(response)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//DELETE NEWS
export const deleteNewById = async (req, res) => {
    try{
        const idNew = req.params.newId
        const response = await deleteServ.deleteNewById(idNew)
        console.log(response)
        res.status(204).json()
    }catch (e){
        res.status(500).json(e)
    }
}