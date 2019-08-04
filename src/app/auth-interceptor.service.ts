import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way :', req.url);
        const modifiedRequest = req.clone({
            headers: req.headers.append(
                'Authorization',
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdyZWciLCJpYXQiOjE1NjQ5NTU4MzcsImV4cCI6MTU2NDk1OTQzN30._dVkR5fLNpg53bYy9efiaGR_wp5BiDpctNbvnE1yt1g')
        });
        return next.handle(modifiedRequest);
    }
}
