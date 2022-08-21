import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "./api.service";

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent {
    questions:any = {};
    quizId

    constructor(public api: ApiService, protected route: ActivatedRoute) {}

    ngOnInit() {
        this.quizId = this.route.snapshot.paramMap.get('quizId')
        this.api.getQuestions(this.quizId).subscribe(res => {
            console.log(res)
            this.questions = res;
        })
    }

    // post(question) {
    //     this.api.postQuestion(question)
    // }
}