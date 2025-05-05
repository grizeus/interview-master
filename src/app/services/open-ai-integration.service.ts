import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OpenAiIntegrationService {
  private apiUrl = "https://api.openai.com/v1/chat/completions";
  private apiKey = "YOUR_API_KEY";

  constructor(private http: HttpClient) {}

  generateAnswerForQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    });

    const systemPrompt = `
      You are expert in answering questions about the following topic: Angular,
      TypeScript, JavaScript, Tailwind CSS, RxJS, and other related technologies.
      Please explain the following question in a clear and concise manner,
       providing relevant examples and context where necessary.`;

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: question,
        },
      ],
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      map((response: any) => {
        return response.choices[0].message.content;
      })
    );
  }
}
