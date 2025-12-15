/**
 * Gallimaps API Service
 * 
 * INSTRUCTIONS:
 * 1. Go to https://dashboard-init.gallimap.com/signup and sign up
 * 2. Generate your access token from the dashboard
 * 3. Replace 'YOUR_GALLIMAPS_ACCESS_TOKEN' below with your actual access token
 * 
 * IMPORTANT: 
 * - Never commit your actual access token to version control
 * - Keep your access token secure
 * - Check Gallimaps documentation for API limits and pricing
 * 
 * API Documentation: https://gallimaps.com/documentation/galli-apis-doc.html
 */

import axios from 'axios';

// TODO: Replace with your Gallimaps Access Token
const GALLIMAPS_ACCESS_TOKEN = '98205dc6-4041-4b15-acfb-4e91cf28067b';
const GALLIMAPS_BASE_URL = 'https://route-init.gallimap.com/api/v1';

/**
 * Gallimaps Business API Service
 * This service handles fetching local business and location data using Gallimaps API
 */
class GallimapsBusinessService {

    /**
     * Search for nearby businesses/places using text query
     * @param {number} latitude - User's current latitude
     * @param {number} longitude - User's current longitude
     * @param {string} searchQuery - Search query string (business name, type, etc.)
     * @returns {Promise} Search results with location data
     */
    async searchNearbyBusinesses(latitude, longitude, searchQuery = '') {
        try {
            if (!searchQuery) {
                return {
                    success: false,
                    error: 'Search query is required'
                };
            }

            const response = await axios.get(`${GALLIMAPS_BASE_URL}/search/currentLocation`, {
                params: {
                    accessToken: GALLIMAPS_ACCESS_TOKEN,
                    name: searchQuery,
                    currentLat: latitude,
                    currentLng: longitude
                }
            });

            if (response.data.success) {
                // Transform Gallimaps response to match our app's expected format
                const businesses = response.data.data.features.map((feature, index) => ({
                    place_id: feature.properties.searchedItem + '_' + index,
                    name: feature.properties.searchedItem,
                    vicinity: `${feature.properties.municipality}, ${feature.properties.district}, ${feature.properties.province}`,
                    geometry: {
                        location: {
                            lat: feature.geometry.coordinates[1],
                            lng: feature.geometry.coordinates[0]
                        }
                    },
                    rating: null, // Gallimaps doesn't provide ratings
                    user_ratings_total: null,
                    distance: feature.properties.distance, // Distance in meters
                    province: feature.properties.province,
                    district: feature.properties.district,
                    municipality: feature.properties.municipality,
                    ward: feature.properties.ward
                }));

                return {
                    success: true,
                    businesses: businesses,
                    message: response.data.message
                };
            } else {
                return {
                    success: false,
                    error: response.data.message || 'Search failed'
                };
            }
        } catch (error) {
            console.error('Error searching businesses:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get detailed information about a specific location
     * Note: Gallimaps doesn't have a direct "place details" API like Google
     * This method returns the data we already have from search
     * @param {string} placeId - Place identifier
     * @param {object} placeData - The place data from search results
     */
    async getBusinessDetails(placeId, placeData = null) {
        try {
            if (!placeData) {
                return {
                    success: false,
                    error: 'Place data not available. Please search first.'
                };
            }

            // Return formatted business details
            return {
                success: true,
                business: {
                    name: placeData.name,
                    formatted_address: placeData.vicinity,
                    geometry: placeData.geometry,
                    rating: placeData.rating,
                    user_ratings_total: placeData.user_ratings_total,
                    province: placeData.province,
                    district: placeData.district,
                    municipality: placeData.municipality,
                    ward: placeData.ward,
                    distance: placeData.distance,
                    // Note: Gallimaps doesn't provide these fields
                    formatted_phone_number: null,
                    website: null,
                    opening_hours: null,
                    photos: [],
                    reviews: [],
                    price_level: null
                }
            };
        } catch (error) {
            console.error('Error fetching business details:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Search businesses by text query (alias for searchNearbyBusinesses)
     * @param {string} query - Search query
     * @param {number} latitude - User's latitude
     * @param {number} longitude - User's longitude
     */
    async searchBusinessesByText(query, latitude, longitude) {
        return this.searchNearbyBusinesses(latitude, longitude, query);
    }

    /**
     * Get autocomplete suggestions for search
     * @param {string} input - User input text
     * @param {number} latitude - Current latitude for location bias
     * @param {number} longitude - Current longitude for location bias
     */
    async getAutocompleteSuggestions(input, latitude = null, longitude = null) {
        try {
            if (!input || input.trim().length === 0) {
                return {
                    success: false,
                    error: 'Input is required'
                };
            }

            const params = {
                accessToken: GALLIMAPS_ACCESS_TOKEN,
                word: input
            };

            // Add location if provided for proximity-based results
            if (latitude && longitude) {
                params.lat = latitude;
                params.lng = longitude;
            }

            const response = await axios.get(`${GALLIMAPS_BASE_URL}/search/autocomplete`, {
                params
            });

            if (response.data.success) {
                // Transform Gallimaps autocomplete response
                const suggestions = response.data.data.map(item => ({
                    description: item.name,
                    place_id: item.id,
                    structured_formatting: {
                        main_text: item.nameLower || item.name,
                        secondary_text: `${item.municipality}, ${item.district}, ${item.province}`
                    },
                    province: item.province,
                    district: item.district,
                    municipality: item.municipality,
                    ward: item.ward,
                    distance: item.distance,
                    geometry: item.geometry
                }));

                return {
                    success: true,
                    suggestions: suggestions,
                    message: response.data.message
                };
            } else {
                return {
                    success: false,
                    error: response.data.message || 'Autocomplete failed'
                };
            }
        } catch (error) {
            console.error('Error fetching autocomplete suggestions:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Reverse geocoding - Get address from coordinates
     * @param {number} latitude - Latitude
     * @param {number} longitude - Longitude
     */
    async reverseGeocode(latitude, longitude) {
        try {
            const response = await axios.get(`${GALLIMAPS_BASE_URL}/reverse`, {
                params: {
                    accessToken: GALLIMAPS_ACCESS_TOKEN,
                    lat: latitude,
                    lng: longitude
                }
            });

            if (response.data.success) {
                return {
                    success: true,
                    address: response.data.data,
                    message: response.data.message
                };
            } else {
                return {
                    success: false,
                    error: response.data.message || 'Reverse geocoding failed'
                };
            }
        } catch (error) {
            console.error('Error in reverse geocoding:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get photo URL for a business
     * Note: Gallimaps doesn't provide business photos through their API
     * This method returns null or a placeholder
     * @param {string} photoReference - Photo reference (not used in Gallimaps)
     * @param {number} maxWidth - Maximum width of the photo
     */
    getPhotoUrl(photoReference, maxWidth = 400) {
        // Gallimaps doesn't provide photo URLs
        // You could return a placeholder image or null
        return null;
    }

    /**
     * Check if the access token is configured
     * @returns {boolean} True if access token is set
     */
    isConfigured() {
        return GALLIMAPS_ACCESS_TOKEN !== 'YOUR_GALLIMAPS_ACCESS_TOKEN' &&
            GALLIMAPS_ACCESS_TOKEN.length > 0;
    }

    /**
     * Get the current configuration status
     * @returns {object} Configuration status
     */
    getConfigStatus() {
        return {
            isConfigured: this.isConfigured(),
            baseUrl: GALLIMAPS_BASE_URL,
            message: this.isConfigured()
                ? 'Gallimaps API is configured'
                : 'Please configure your Gallimaps access token'
        };
        }
}

export default new GallimapsBusinessService();
