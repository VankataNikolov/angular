import { Provider } from '@angular/core';

export class AuthService {

    setToken<T>(key: string, item: T): T {
        const str = typeof item === 'string' ? item : JSON.stringify(item);
        localStorage.setItem(key, str);
        return item;
    }

    getToken<T>(key: string): T {
        let item: any;
        const tmp = localStorage.getItem(key);
        if (!tmp) {
            return null;
        }
        try {
            item = JSON.parse(tmp);
        } catch {
            item = tmp;
        }
        return item;
    }

    remove(key: string) {
        try{
            localStorage.removeItem(key);
        }
        catch{
            return null;
        }
    }
}

export const authServiceProvider: Provider = {
    provide: AuthService,
    useClass: AuthService
};