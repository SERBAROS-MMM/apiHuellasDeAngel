import * as readServ from './../services/Auth/read'

export const loginUser = async (req, res) => {
    try{        
        const User = req.body
        console.log(User)
        const response = await readServ.loginUser(User)
        res.status(response.status).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const autologinUser = async (req, res) => {
    try{        
        
        const UserId = req.query.userIdActive
        const response = await readServ.autologinUser(UserId)
        res.status(response.status).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}