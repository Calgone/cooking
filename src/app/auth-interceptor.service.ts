import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way :', req.url);
        const modifiedRequest = req.clone({
            headers: req.headers.append(
                'Authorization',
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdyZWciLCJpYXQiOjE1NjUwMzcxMzQsImV4cCI6MTU2NTA0MDczNH0.1dO0cg24R89v-QxEmpGEzm2BTmCoZlpBXBHp1gBd6e0',
            ),
        });
        return next.handle(modifiedRequest);
    }
}
