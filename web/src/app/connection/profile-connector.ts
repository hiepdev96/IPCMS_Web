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
import { FilterProfileRequest, ProfileViewDetailRequest, SwaggerException } from '../common/model/generic-model';


export const API_BASE_URL = new InjectionToken<string>
    ('API URL', {
        providedIn: 'root',
        factory: () => environment.apiUrl
    });
@Injectable({
    providedIn: 'root'
})
export class ProfileClient {
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


    public filterProfile(page: number, request: FilterProfileRequest, fid: string = 'F15'): Observable<any> {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/icp/filter/{page}?";
        url_ = url_.replace("{page}", encodeURIComponent("" + page));
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        url_ += "fid=" + encodeURIComponent("" + fid) + "&";
        params.push(fid);
        const keyParams: string[] = [
            'id_number',
            'full_name',
            'phone_number',
            'type_of_loan',
            'product_loan',
            'loan_form',
            'form_payment',
            'type_customer',
            'create_from',
            'create_to',
            'classify_cutomer'
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
        params.push(String(page));
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params)) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
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
                } else
                    return <Observable<any | null>><any>_observableThrow(response$);
            }));
    }

    public viewDetail(request: ProfileViewDetailRequest, fid: string = 'F16') {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/icp/view_detail?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        url_ += "fid=" + encodeURIComponent("" + fid) + "&";
        params.push(fid);
        const keyParams: string[] = [
            'id_profile',
            'classify_cutomer'
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
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params)) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
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
                } else
                    return <Observable<any | null>><any>_observableThrow(response$);
            }));
    }

    public getProvincial() {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/icp/provincial?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params)) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
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
                } else
                    return <Observable<any | null>><any>_observableThrow(response$);
            }));
    }

    public getDistrict(code_provincial: string) {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/icp/district?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        if (code_provincial) {
            url_ += "code_provincial=" + encodeURIComponent("" + code_provincial) + "&";
            params.push(code_provincial);
        }
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params)) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
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
                } else
                    return <Observable<any | null>><any>_observableThrow(response$);
            }));
    }

    public getCommune(code_district: string) {
        let params: string[] = [];
        let url_ = this.baseUrl + "/ipcms/icp/commune?";
        const userId = this.authService.getUserId();
        url_ += "user_id=" + encodeURIComponent("" + userId) + "&";
        params.push(userId);
        params.push(this.authService.getSecretKey());
        if (code_district) {
            url_ += "code_district=" + encodeURIComponent("" + code_district) + "&";
            params.push(code_district);
        }
        url_ += "secret_token=" + encodeURIComponent("" + SHA256(...params)) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
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
                } else
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