import New from '../../models/New'

export const addNew = async (newNewData) => {
    
        const newNew = await New.create(newNewData)
        return newNew        
  
}