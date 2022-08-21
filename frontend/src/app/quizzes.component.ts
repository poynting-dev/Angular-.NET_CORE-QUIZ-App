import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})

export class QuizzesComponent {
    quizzes:any = {};

    constructor(public api: ApiService) {}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            console.log(res)
            this.quizzes = res;
        })
    }

    
}