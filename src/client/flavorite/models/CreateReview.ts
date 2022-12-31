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
 * @interface CreateReview
 */
export interface CreateReview {
    /**
     * 
     * @type {string}
     * @memberof CreateReview
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReview
     */
    restaurantId: string;
    /**
     * 
     * @type {number}
     * @memberof CreateReview
     */
    rating: number;
    /**
     * 
     * @type {string}
     * @memberof CreateReview
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReview
     */
    photoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReview
     */
    favoriteFood: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateReview
     */
    starred: boolean;
}

export function CreateReviewFromJSON(json: any): CreateReview {
    return CreateReviewFromJSONTyped(json, false);
}

export function CreateReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'restaurantId': json['restaurantId'],
        'rating': json['rating'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'photoUrl': !exists(json, 'photoUrl') ? undefined : json['photoUrl'],
        'favoriteFood': json['favoriteFood'],
        'starred': json['starred'],
    };
}

export function CreateReviewToJSON(value?: CreateReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'restaurantId': value.restaurantId,
        'rating': value.rating,
        'content': value.content,
        'photoUrl': value.photoUrl,
        'favoriteFood': value.favoriteFood,
        'starred': value.starred,
    };
}


