/* tslint:disable */
/* eslint-disable */
/**
 * Flavorite - OpenAPI 3.0
 * This is a Flavorite Server based on the OpenAPI 3.0 specification. 
 *
 * The version of the OpenAPI document: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Restaurant,
    RestaurantFromJSON,
    RestaurantToJSON,
} from '../models';

export interface GetRestaurantsRequest {
    longitude: number;
    latitude: number;
    radius: number;
}

/**
 * 
 */
export class RestaurantApi extends runtime.BaseAPI {

    /**
     * Returns all restauarants in given location radius
     * Find restaurants in user location given
     */
    async getRestaurantsRaw(requestParameters: GetRestaurantsRequest): Promise<runtime.ApiResponse<Restaurant>> {
        if (requestParameters.longitude === null || requestParameters.longitude === undefined) {
            throw new runtime.RequiredError('longitude','Required parameter requestParameters.longitude was null or undefined when calling getRestaurants.');
        }

        if (requestParameters.latitude === null || requestParameters.latitude === undefined) {
            throw new runtime.RequiredError('latitude','Required parameter requestParameters.latitude was null or undefined when calling getRestaurants.');
        }

        if (requestParameters.radius === null || requestParameters.radius === undefined) {
            throw new runtime.RequiredError('radius','Required parameter requestParameters.radius was null or undefined when calling getRestaurants.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.longitude !== undefined) {
            queryParameters['longitude'] = requestParameters.longitude;
        }

        if (requestParameters.latitude !== undefined) {
            queryParameters['latitude'] = requestParameters.latitude;
        }

        if (requestParameters.radius !== undefined) {
            queryParameters['radius'] = requestParameters.radius;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("flavorite_auth", ["write:restaurants", "read:restaurants"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/restaurant`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RestaurantFromJSON(jsonValue));
    }

    /**
     * Returns all restauarants in given location radius
     * Find restaurants in user location given
     */
    async getRestaurants(requestParameters: GetRestaurantsRequest): Promise<Restaurant> {
        const response = await this.getRestaurantsRaw(requestParameters);
        return await response.value();
    }

}
