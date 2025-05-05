import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { QuestionItem } from "../components/category/category.component.config";
import { Response, ResponseArray } from "../models/response.models";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  public baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getQuestionsByCategory(
    categoryName: string
  ): Observable<ResponseArray<QuestionItem>> {
    return this.http
      .get<ResponseArray<QuestionItem>>(
        `${this.baseUrl}/category/${categoryName}`
      )
      .pipe(
        map((responce: any) => {
          return { data: responce[0]?.questions || [] };
        }),
        delay(500)
      );
  }

  deleteCategoryQuestionById(id: number): Observable<Response<QuestionItem>> {
    return this.http.delete<Response<QuestionItem>>(
      `${this.baseUrl}/664/questions/${id}`
    );
  }
}
