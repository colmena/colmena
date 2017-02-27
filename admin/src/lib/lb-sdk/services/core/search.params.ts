/* tslint:disable */
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module JSONSearchParams
* @license MIT
* @description
* JSON Parser and Wrapper for the Angular2 URLSearchParams
* This module correctly encodes a json object into a query string and then creates
* an instance of the URLSearchParams component for later use in HTTP Calls
**/
@Injectable()
export class JSONSearchParams {

    private _usp: URLSearchParams;

    public setJSON(obj: any) {
        this._usp = new URLSearchParams(this._JSON2URL(obj, false));
    }

    public getURLSearchParams(): URLSearchParams {
        return this._usp;
    }

    private _JSON2URL(obj: any, parent: any) {
        var parts: any = [];
        for (var key in obj)
        parts.push(this._parseParam(key, obj[key], parent));
        return parts.join('&');
    }

    private _parseParam(key: string, value: any, parent: string) {
        if (typeof value !== 'object' && typeof value !== 'array') {
            return parent ? parent + '[' + key + ']=' + value
                          : key + '=' + value;
        } else if (typeof value === 'object' ||  typeof value === 'array') {
            return parent ? this._JSON2URL(value, parent + '[' + key + ']')
                          : this._JSON2URL(value, key);
        } else {
            throw new Error('Unexpected Type');
        }
    }
}
