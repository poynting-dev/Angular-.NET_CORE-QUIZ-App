import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector: 'play',
    templateUrl: './play.component.html'
})

export class PlayComponent {

    quizzes

    constructor(protected api: ApiService) {}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            console.log(res)
            this.quizzes = res;
        })
    }

}