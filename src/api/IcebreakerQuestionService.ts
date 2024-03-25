import { IcebreakerQuestion, IcebreakerQuestionEditRequest, IcebreakerQuestionEditResponse } from "../types/IcebreakerQuestion";
import { RequestService } from "./RequestService";

class IcebreakerQuestionEndpoints {
    static baseUrl: string = 'https://localhost:7223/api/icebreakerquestion/';
    static getList: string = this.baseUrl + 'getlist';
    static edit: string = this.baseUrl + 'edit';
}

export class IcebreakerQuestionService {
    public static getList(): Promise<IcebreakerQuestion[] | Error> {
        return RequestService.post(IcebreakerQuestionEndpoints.getList);
    }

    public static edit(id: number | null, question: string): Promise<IcebreakerQuestionEditResponse | Error> {
        if (!question) {
            return new Promise<Error>(() => Error('invalid question'));
        }

        const request: IcebreakerQuestionEditRequest = {
            IcebreakerQuestionId: id,
            Question: question,
        }

        return RequestService.post<IcebreakerQuestionEditResponse>(IcebreakerQuestionEndpoints.edit, request);
    }
}