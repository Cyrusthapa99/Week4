/**
 * Google Places API Service
 * Fetches real business data from Google Places API
 * 
 * SETUP INSTRUCTIONS:
 * 1. Get your API key from: https://console.cloud.google.com/
 * 2. Enable "Places API" in your Google Cloud Console
 * 3. Replace YOUR_GOOGLE_PLACES_API_KEY below with your actual key
 * 
 * API Documentation: https://developers.google.com/maps/documentation/places/web-service
 */

import axios from 'axios';

// TODO: Replace with your actual Google Places API Key
const GOOGLE_PLACES_API_KEY = 'AIzaSyDGBPII4_3ggxZN8wZ9v8Zt8Z5Z5Z5Z5Z5'; // Replace this!
const GOOGLE_PLACES_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

class GooglePlacesService {
    /**
     * Search for nearby businesses using Text Search
     * @param {number} latitude - Center latitude
     * @param {number} longitude - Center longitude
     * @param {string} query - Search query (e.g., "restaurants", "cafes")
     * @param {number} radius - Search radius in meters (default: 5000)
     */
    async searchNearbyBusinesses(latitude, longitude, query = 'restaurant', radius = 5000) {
        try {
            const location = `${latitude},${longitude}`;

            const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/textsearch/json`, {
                params: {
                    query: query,
                    location: location,
                    radius: radius,
                    key: GOOGLE_PLACES_API_KEY
                }
            });

            if (response.data.status === 'OK') {
                return {
                    success: true,
                    businesses: response.data.results,
                    message: 'Businesses loaded successfully'
                };
            } else if (response.data.status === 'ZERO_RESULTS') {
                return {
                    success: true,
                    businesses: [],
                    message: 'No businesses found'
                };
            } else {
                return {
                    success: false,
                    error: response.data.status + ': ' + (response.data.error_message || 'Search failed'),
                    businesses: []
                };
            }
        } catch (error) {
            console.error('Error searching businesses:', error);
            return {
                success: false,
                error: error.message,
                businesses: []
            };
        }
    }

    /**
     * Search businesses by text query
     * @param {string} query - Search query
     * @param {number} latitude - Optional latitude for location bias
     * @param {number} longitude - Optional longitude for location bias
     */
    async searchBusinessesByText(query, latitude = null, longitude = null) {
        try {
            const params = {
                query: query,
                key: GOOGLE_PLACES_API_KEY
            };

            // Add location bias if provided
            if (latitude && longitude) {
                params.location = `${latitude},${longitude}`;
                params.radius = 10000; // 10km radius
            }

            const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/textsearch/json`, {
                params: params
            });

            if (response.data.status === 'OK') {
                return {
                    success: true,
                    businesses: response.data.results,
                    message: 'Search completed successfully'
                };
            } else if (response.data.status === 'ZERO_RESULTS') {
                return {
                    success: true,
                    businesses: [],
                    message: 'No results found'
                };
            } else {
                return {
                    success: false,
                    error: response.data.status,
                    businesses: []
                };
            }
        } catch (error) {
            console.error('Error in text search:', error);
            return {
                success: false,
                error: error.message,
                businesses: []
            };
        }
    }

    /**
     * Get detailed information about a specific place
     * @param {string} placeId - Google Place ID
     */
    async getBusinessDetails(placeId) {
        try {
            const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/details/json`, {
                params: {
                    place_id: placeId,
                    fields: 'name,rating,formatted_phone_number,formatted_address,opening_hours,website,photos,reviews,geometry,price_level,user_ratings_total,types,vicinity',
                    key: GOOGLE_PLACES_API_KEY
                }
            });

            if (response.data.status === 'OK') {
                return {
                    success: true,
                    business: response.data.result
                };
            } else {
                return {
                    success: false,
                    error: response.data.status
                };
            }
        } catch (error) {
            console.error('Error fetching business details:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get photo URL from photo reference
     * @param {string} photoReference - Photo reference from Places API
     * @param {number} maxWidth - Maximum width of the photo (default: 400)
     */
    getPhotoUrl(photoReference, maxWidth = 400) {
        if (!photoReference) {
            return null;
        }
        return `${GOOGLE_PLACES_BASE_URL}/photo?maxwidth=${maxWidth}&photo_reference=${photoReference}&key=${GOOGLE_PLACES_API_KEY}`;
    }

    /**
     * Get autocomplete suggestions
     * @param {string} input - User input text
     * @param {number} latitude - Current latitude for location bias
     * @param {number} longitude - Current longitude for location bias
     */
    async getAutocompleteSuggestions(input, latitude = null, longitude = null) {
        try {
            const params = {
                input: input,
                key: GOOGLE_PLACES_API_KEY,
                types: 'establishment'
            };

            if (latitude && longitude) {
                params.location = `${latitude},${longitude}`;
                params.radius = 50000; // 50km radius
            }

            const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/autocomplete/json`, {
                params: params
            });

            if (response.data.status === 'OK') {
                return {
                    success: true,
                    suggestions: response.data.predictions
                };
            } else {
                return {
                    success: false,
                    error: response.data.status,
                    suggestions: []
                };
            }
        } catch (error) {
            console.error('Error fetching autocomplete:', error);
            return {
                success: false,
                error: error.message,
                suggestions: []
            };
        }
    }

    /**
     * Check if API key is configured
     */
    isConfigured() {
        return GOOGLE_PLACES_API_KEY &&
            GOOGLE_PLACES_API_KEY !== 'YOUR_GOOGLE_PLACES_API_KEY' &&
            GOOGLE_PLACES_API_KEY.length > 20;
    }

    /**
     * Get configuration status
     */
    getConfigStatus() {
        return {
            isConfigured: this.isConfigured(),
            apiKey: this.isConfigured() ? '***' + GOOGLE_PLACES_API_KEY.slice(-4) : 'Not configured',
            message: this.isConfigured()
                ? 'Google Places API is configured'
                : 'Please configure your Google Places API key'
        };
    }
}

export default new GooglePlacesService();
