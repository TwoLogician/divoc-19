import { registerLocaleData } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import en from "@angular/common/locales/en"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NzCardModule } from "ng-zorro-antd/card"
import { NzDatePickerModule } from "ng-zorro-antd/date-picker"
import { NzDividerModule } from "ng-zorro-antd/divider"
import { NzGridModule } from "ng-zorro-antd/grid"
import { en_US } from "ng-zorro-antd/i18n"
import { NZ_I18N } from "ng-zorro-antd/i18n"
import { NzInputModule } from "ng-zorro-antd/input"
import { NzTableModule } from "ng-zorro-antd/table"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AppService } from "./app.service"

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NzCardModule,
    NzDatePickerModule,
    NzDividerModule,
    NzGridModule,
    NzInputModule,
    NzTableModule,
  ],
  providers: [
    AppService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
