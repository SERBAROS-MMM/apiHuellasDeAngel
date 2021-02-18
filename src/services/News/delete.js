import New from '../../models/New'

export const deleteNewById = async (idNewData) =>{
    const newDeletedById = await New.findByIdAndDelete(idNewData)
    return newDeletedById
}