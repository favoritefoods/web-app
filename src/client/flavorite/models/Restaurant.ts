/* tslint:disable */
/* eslint-disable */
/**
 * Flavorite - OpenAPI 3.0
 * This is a Flavorite Server based on the OpenAPI 3.0 specification.
 *
 * The version of the OpenAPI document: 1.1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Restaurant
 */
export interface Restaurant {
    /**
     * 
     * @type {string}
     * @memberof Restaurant
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Restaurant
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Restaurant
     */
    longitude: number;
    /**
     * 
     * @type {number}
     * @memberof Restaurant
     */
    latitude: number;
    /**
     * 
     * @type {string}
     * @memberof Restaurant
     */
    address: string;
}

export function RestaurantFromJSON(json: any): Restaurant {
    return RestaurantFromJSONTyped(json, false);
}

export function RestaurantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Restaurant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'longitude': json['longitude'],
        'latitude': json['latitude'],
        'address': json['address'],
    };
}

export function RestaurantToJSON(value?: Restaurant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'longitude': value.longitude,
        'latitude': value.latitude,
        'address': value.address,
    };
}


