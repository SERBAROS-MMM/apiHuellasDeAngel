import * as readServ from './../services/Auth/read'


export const loginUser = async (req, res) => {
    try{        
        
        const User = req.body
        const response = await readServ.loginUser(User)
        res.status(response.status).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}