import Temperature from './../../models/Temperature'

export const addTemperature = async (newTemperatureData) => {
    
        const temperatureNew = await Temperature.create(newTemperatureData)
        return temperatureNew        
  
}