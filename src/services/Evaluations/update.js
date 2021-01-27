import Evaluation from '../../models/Evaluation'

export const updateEvaluationById = async (idEvaluationData,newEvaluationData) =>{
    const evaluationUptatedById = await Evaluation.findByIdAndUpdate(idEvaluationData,newEvaluationData,{new :true})
    return evaluationUptatedById
}