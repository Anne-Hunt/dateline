

class DatelineService {
    async getQuotes(num) {
        const response = await api.get(api / quotes)
        return response;
    }

}

export const datelineService = new DatelineService()