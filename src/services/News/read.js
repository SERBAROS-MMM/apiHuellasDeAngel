import New from './../../models/New'

export const listNews  = async () => {
    const listNews = await New.find().populate("persons")
    return listNews        
}

export const newById = async (idNewData) =>{
    const newById = await New.findById(idNewData)
    return newById
}

export const newByParameter = async (parameterData,parameterNewData) =>{
    const query={}
    query[parameterData]= parameterNewData
    const newById = await New.find(query)
    return newById
}

export const listNewsfiltered  = async (FilterData) => {
    const listNews = await New.find()

    const listNewsfiltered=listNews.filter((item)=>{
        const a=(JSON.stringify(item)
           .toUpperCase()
           .indexOf(FilterData.toUpperCase()) > -1 ? 1 : 0)
        
        console.log(a)
       return a > 0
      });

    return listNewsfiltered        
}