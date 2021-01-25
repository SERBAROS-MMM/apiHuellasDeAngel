import * as createServ from '../services/FromSites/create'
import * as readServ from '../services/FromSites/read'
import * as updateServ from '../services/FromSites/update'
import * as deleteServ from '../services/FromSites/delete'

//CREATE PERSONS
export const addFromSite = async (req, res) => { 
    try{
        const newFromSite = req.body
        const response = await createServ.addFromSite(newFromSite)
        console.log(response)
        res.status(201).json({status:201,response})
    }catch (e){
        res.status(500).json(e)
    }
}


// READ PERSONS
export const listFromSites = async (req, res) => {
    try{        
       
            const response = await readServ.listFromSites()
            res.status(200).json({status:200,response})
             
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const listFromSitesFilter = async (req, res) => {
    try{        
        const filter=req.params.filter
        
        const response = await readServ.listFromSitesfiltered(filter)
        res.status(200).json({status:200,response})
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const fromSiteById = async (req, res) => {
    try{        
        const idFromSite = req.params.fromSiteId
        const response = await readServ.fromSiteById(idFromSite)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const fromSiteByParameter = async (req, res) => {
    try{        
        const parameterFromSite = req.params.fromSiteParameter
        const parameter = req.params.parameter
        const response = await readServ.fromSiteByParameter(parameter,parameterFromSite)
        res.status(200).json({status:200,response})
    }catch (e){
        res.status(500).json(e)
    }
}

//UPDATE PERSONS
export const updateFromSiteById = async (req, res) => {
    try{
        const newFromSite = req.body
        const idFromSite = req.params.fromSiteId
        const response = await updateServ.updateFromSiteById(idFromSite,newFromSite)
        console.log(response)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//DELETE PERSONS
export const deleteFromSiteById = async (req, res) => {
    try{
        const idFromSite = req.params.fromSiteId
        const response = await deleteServ.deleteFromSiteById(idFromSite)
        console.log(response)
        res.status(204).json()
    }catch (e){
        res.status(500).json(e)
    }
}