import Evaluation from './../../models/Evaluation'

export const deleteEvaluationById = async (idEvaluationData) =>{
    const evaluationDeletedById = await Evaluation.findByIdAndDelete(idEvaluationData)
    return evaluationDeletedById
}