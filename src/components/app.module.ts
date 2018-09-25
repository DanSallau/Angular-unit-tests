import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./notFound/notFound.component";
import { HomeComponent } from './home/home.component';

// Services

// First layer of code spliting, (into is a second layer)
const ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "notfound", component: NotFoundComponent },
    { path: "**", redirectTo: "/notfound" }
];

@NgModule({
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        HomeComponent,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
