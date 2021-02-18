import Temperature from '../../models/Temperature'

export const deleteTemperatureById = async (idTemperatureData) =>{
    const temperatureDeletedById = await Temperature.findByIdAndDelete(idTemperatureData)
    return temperatureDeletedById
}