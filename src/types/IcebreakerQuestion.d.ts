export interface IcebreakerQuestion {
    icebreakerQuestionId: number,
    question: string,
    dateCreated: Date,
}

export interface IcebreakerQuestionEditRequest {
    IcebreakerQuestionId: number?,
    Question: string,
}

export interface IcebreakerQuestionEditResponse {
    id: number,
}