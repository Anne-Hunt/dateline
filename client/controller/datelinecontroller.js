import { AppState } from "../AppState.js";
import { Quote } from "../model/quote.js";
import { datelineService } from "../service/datelineservice.js";

export class DatelineController {
    async getQuotes(num) {
        AppState.currentResult = ''
        const response = await datelineService.getQuotes(num)
        const quote = new Quote(response)
        AppState.currentResult = quote
    }
}