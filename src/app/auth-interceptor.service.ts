import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way');
        const modifiedRequest = req.clone({
            headers: req.headers.append(
                'Authorization',
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdyZWciLCJpYXQiOjE1NjQ1MjExNjcsImV4cCI6MTU2NDUyNDc2N30.JAQePTjwmfRo4S9HCZ_En0XT2bbOuGJxNOuhh43VYbw')
        });
        return next.handle(modifiedRequest);
    }
}
