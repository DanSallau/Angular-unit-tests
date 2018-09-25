import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "../../constants/routePaths";

@Component({
    selector: "not-found",
    templateUrl: "./notFound.component.html"
})
export class NotFoundComponent {
    paths: { [index: string]: AppRoutes } = {
        Home: AppRoutes.Home
    };

    constructor(private router: Router) {
        this.navigateHome = this.navigateHome.bind(this);
    }

    /** Navigates to home page */
    navigateHome(): void {
        this.router.navigateByUrl(this.paths.Home);
    }
}
