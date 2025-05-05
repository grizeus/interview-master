import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";

import { QuestionItem } from "../components/category/category.component.config";
import { Response, ResponseArray } from "../models/response.models";

@Injectable({
  providedIn: "root",
})
export class PreparationService {
  public baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getPreparationQuestionsByCategory(
    categoryName: string
  ): Observable<ResponseArray<QuestionItem>> {
    return this.http
      .get<ResponseArray<QuestionItem>>(
        `${this.baseUrl}/preparation/${categoryName}`
      )
      .pipe(
        map((responce: any) => {
          return { data: responce[0]?.questions || [] };
        }),
        delay(500)
      );
  }

  updatePreparationQuestionById(
    question: Partial<QuestionItem>,
    id: number
  ): Observable<Response<QuestionItem>> {
    return this.http.patch<Response<QuestionItem>>(
      `${this.baseUrl}/664/questions/${id}`,
      { ...question }
    );
  }

  deletePreparationQuestionById(
    categoryName: string,
    id: number
  ): Observable<Response<QuestionItem>> {
    return this.http.delete<Response<QuestionItem>>(
      `${this.baseUrl}/664/questions/${id}`
    );
  }
}
