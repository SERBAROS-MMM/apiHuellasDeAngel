import Temperature from '../../models/Temperature'

export const updateTemperatureById = async (idTemperatureData,newTemperatureData) =>{
    const temperatureUptatedById = await Temperature.findByIdAndUpdate(idTemperatureData,newTemperatureData,{new :true})
    return temperatureUptatedById
}