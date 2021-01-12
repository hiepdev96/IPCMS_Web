/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.7.0.0 (NJsonSchema v10.1.24.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming


import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf, from, generate } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { SHA256 } from '../common/functions';
import { FilterProfileRequest, ProfileViewDetailRequest, SwaggerException, TelesaleRequest, UserCreateRequest, UserUpdateRequest } from '../common/model/generic-model';


export const API_BASE_URL = new InjectionToken<string>
    ('API URL', {
        providedIn: 'root',
        factory: () => environment.apiUrlUser
    });
@Injectable({
    providedIn: 'root'
})
export class UserClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(
        private authService: AuthService,
        @Inject(HttpClient) http: HttpClient,
        @Optional() @Inject(API_BASE_URL) baseUrl?: string,
    ) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    public detail(view_user_id: string, fid: string = 'F65') {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/user/detail?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        url_ += "fid=" + encodeURIComponent("" + fid) + "&";
        params.push(fid);
        url_ += "view_user_id=" + encodeURIComponent("" + view_user_id) + "&";
        params.push(view_user_id);
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params));
        url_ = url_.replace(/[?&]$/, "");
        return this.callAPI(url_);
    }
    public update(request: UserUpdateRequest, fid: string = 'F66') {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/user/update?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        url_ += "fid=" + encodeURIComponent("" + fid) + "&";
        params.push(fid);
        const keyParams: string[] = [
            'update_user_id',
            'full_name',
            'origanization',
            'position',
            'phone_number',
            'email',
            'address',
            'note',
        ];
        for (const key of keyParams) {
            const v = request[key] ?? '';
            if (v !== '') {
                url_ += `${key}=` + encodeURIComponent("" + v) + "&";

            } else {
                url_ += `${key}&`;
            }
            params.push(v);
        }
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params));
        url_ = url_.replace(/[?&]$/, "");
        return this.callAPI(url_);
    }
    public new(request: UserCreateRequest, fid: string = 'F61') {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/user/new?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        url_ += "fid=" + encodeURIComponent("" + fid) + "&";
        params.push(fid);
        const keyParams: string[] = [
            'new_user_id',
            'full_name',
            'origanization',
            'position',
            'phone_number',
            'email',
            'address',
            'role',
            'scope',
            'note'

        ];
        for (const key of keyParams) {
            const v = request[key] ?? '';
            if (v !== '') {
                if (typeof v === 'object') {
                    url_ += `${key}=` + encodeURIComponent("" + JSON.stringify(v)) + "&";
                    params.push(JSON.stringify(v));
                } else {
                    url_ += `${key}=` + encodeURIComponent("" + v) + "&";
                    params.push(v);
                }
            } else {
                url_ += `${key}&`;
                params.push(v);
            }
        }
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params)) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.callAPI(url_);
    }


    private callAPI(url_: string) {
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({})
        };
        return this.http.request('get', url_, options_)
            .pipe(_observableMergeMap((response$: any) => {
                return this.processResponse(response$);
            })).pipe(_observableCatch((response$: any) => {
                if (response$ instanceof HttpResponseBase) {
                    try {
                        return this.processResponse(<any>response$);
                    } catch (e) {
                        return <Observable<any | null>><any>_observableThrow(e);
                    }
                }
                else
                    return <Observable<any | null>><any>_observableThrow(response$);
            }));
    }
    private processResponse(response: HttpResponseBase): Observable<any> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? resultData200 : <any>null;
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<any | null>(<any>null);
    }
}
function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}