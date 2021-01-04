import { Component, OnInit } from "@angular/core"
import * as moment from "moment"

import { AppService } from "./app.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  allCases: any[] = []
  cases: any[] = []
  confirmDate = ""
  district = ""
  loading = false
  province = ""

  constructor(private service: AppService) { }

  async ngOnInit() {
    try {
      if (window.location.protocol == "http:") {
        window.location.href = `https://${window.location.hostname}`
      }
      this.setLoading(true)
      let rs = await this.service.getCases().toPromise()
      this.cases = rs.Data
      this.allCases = this.cases
      this.setLoading(false)
    } catch (err) {
      alert(err.error)
      this.setLoading(false)
    }
  }

  search() {
    this.setLoading(true)
    this.cases = this.allCases
    if (this.confirmDate) {
      let keyword = moment(this.confirmDate).format("YYYY-MM-DD")
      this.cases = this.cases.filter(x => false
        || x.ConfirmDate.includes(keyword)
      )
    }
    if (this.district) {
      let keyword = this.district.toUpperCase()
      this.cases = this.cases.filter(x => false
        || x.District.toUpperCase().includes(keyword)
      )
    }
    if (this.province) {
      let keyword = this.province.toUpperCase()
      this.cases = this.cases.filter(x => false
        || x.Province.toUpperCase().includes(keyword)
        || x.ProvinceEn.toUpperCase().includes(keyword)
      )
    }
    this.setLoading(false)
  }

  setLoading(e: boolean) {
    this.loading = e
  }
}
