export class RequestService {
    //'https://localhost:7223/api/icebreakerquestion/getlist'
    public static async post<TResponseData>(endpoint: string, data: any | null = null): Promise<TResponseData | Error> {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                console.log(response);
                throw new Error('!responseok');
            }
            return await response.json();
        } catch (error) {
            console.log(endpoint, error);
            return Error('RequestServiceError:' + error)
        }
    }

    public static async get<TResponseData>(endpoint: string): Promise<TResponseData | Error> {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return await response.json();
        } catch (error) {
            return Error('Error fetching data:' + error)
        }
    }
}