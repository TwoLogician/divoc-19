import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getCases() {
        return this.http.get<any>("https://covid19.th-stat.com/api/open/cases")
    }
}