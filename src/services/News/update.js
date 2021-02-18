import New from '../../models/New'

export const updateNewById = async (idNewData,newNewData) =>{
    const newUptatedById = await New.findByIdAndUpdate(idNewData,newNewData,{new :true})
    return newUptatedById
}