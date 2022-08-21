import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "./api.service";

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent {
    question:any = {};
    quizId

    constructor(protected api: ApiService, protected route: ActivatedRoute) {}

    ngOnInit() {
        this.quizId = this.route.snapshot.paramMap.get('quizId')
        this.api.questionSelected.subscribe(question => this.question = question);
    }

    post(question) {
        question.quizId = this.quizId
        this.api.postQuestion(question)
    }
}