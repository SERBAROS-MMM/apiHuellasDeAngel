import Temperature from './../../models/Temperature'

export const listTemperatures  = async () => {
    const listTemperatures = await Temperature.find()
    return listTemperatures        
}

export const temperatureById = async (idTemperatureData) =>{
    const temperatureById = await Temperature.findById(idTemperatureData)
    return temperatureById
}

export const temperatureByParameter = async (parameterData,parameterTemperatureData) =>{
    const query={}
    query[parameterData]= parameterTemperatureData
    const temperatureById = await Temperature.find(query)
    return temperatureById
}

export const listTemperaturesfiltered  = async (FilterData) => {
    const listTemperatures = await Temperature.find()

    const listTemperaturesfiltered=listTemperatures.filter((item)=>{
        const a=(JSON.stringify(item)
           .toUpperCase()
           .indexOf(FilterData.toUpperCase()) > -1 ? 1 : 0)
        
        console.log(a)
       return a > 0
      });

    return listTemperaturesfiltered        
}