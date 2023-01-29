import { inject, Inject, Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Injectable({
    providedIn: 'root'
})
export class CanMatchLocal implements CanMatch {
    appService = inject(AppService)
    constructor() { }

    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        console.log('inside cam match => is module 1 active: ', this.appService.isActive)
        return this.appService.isActive;
    }
}