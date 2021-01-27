import Evaluation from './../../models/Evaluation'

export const listEvaluations  = async () => {
    const listEvaluations = await Evaluation.find()
    return listEvaluations        
}

export const evaluationById = async (idEvaluationData) =>{
    const evaluationById = await Evaluation.findById(idEvaluationData)
    return evaluationById
}

export const evaluationByParameter = async (parameterData,parameterEvaluationData) =>{
    const query={}
    query[parameterData]= parameterEvaluationData
    const evaluationById = await Evaluation.findOne(query)
    return evaluationById
}

export const listEvaluationsfiltered  = async (FilterData) => {
    const listEvaluations = await Evaluation.find()

    const listEvaluationsfiltered=listEvaluations.filter((item)=>{
        const a=(JSON.stringify(item)
           .toUpperCase()
           .indexOf(FilterData.toUpperCase()) > -1 ? 1 : 0)
       return a > 0
      });

    return listEvaluationsfiltered        
}