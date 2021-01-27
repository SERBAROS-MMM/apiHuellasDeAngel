import Evaluation from './../../models/Evaluation'

export const addEvaluation = async (newEvaluationData) => {
    
        const evaluationNew = await Evaluation.create(newEvaluationData)
        return evaluationNew        
  
}