/**
 * Enhanced Gallimaps Business Service
 * Uses Gallimaps API for real location data in Kathmandu Valley
 * Supplements with realistic business information (ratings, reviews, images)
 * 
 * Your Gallimaps API is configured and working!
 */

import axios from 'axios';

const GALLIMAPS_ACCESS_TOKEN = '98205dc6-4041-4b15-acfb-4e91cf28067b';
const GALLIMAPS_BASE_URL = 'https://route-init.gallimap.com/api/v1';

// Business type to image mapping (using Unsplash)
const businessImages = {
    restaurant: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    ],
    cafe: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
        'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
    ],
    hotel: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    ],
    shop: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
    ],
    default: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
    ]
};

// Sample review templates
const reviewTemplates = [
    { author: 'Rajesh Sharma', text: 'Great place! Highly recommended for locals and tourists.', rating: 5 },
    { author: 'Priya Gurung', text: 'Good service and quality. Will visit again.', rating: 4 },
    { author: 'Amit Thapa', text: 'Nice atmosphere and friendly staff.', rating: 5 },
    { author: 'Sarah Johnson', text: 'Excellent experience. Worth the visit!', rating: 5 },
    { author: 'Deepak Maharjan', text: 'Decent place, good for the price.', rating: 4 },
    { author: 'Lisa Anderson', text: 'One of the best in Kathmandu!', rating: 5 },
    { author: 'Suresh Rai', text: 'Good quality and reasonable prices.', rating: 4 },
    { author: 'Emma Brown', text: 'Very satisfied with the service.', rating: 5 },
    { author: 'Binod Karki', text: 'Nice place, would recommend to friends.', rating: 4 },
    { author: 'Karen White', text: 'Amazing! Exceeded my expectations.', rating: 5 },
];

class EnhancedGallimapsService {
    /**
     * Generate realistic business data
     */
    enhanceBusinessData(business, index) {
        // Safety check for business name
        if (!business || !business.name) {
            console.warn('Business or business name is undefined:', business);
            return {
                ...business,
                name: 'Unknown Business',
                rating: 4.0,
                user_ratings_total: 100,
                photos: [{ photo_reference: businessImages.default[0] }],
                opening_hours: { open_now: true, weekday_text: [] },
                formatted_phone_number: '+977 1-4000000',
                website: null,
                reviews: [],
                price_level: 2,
                types: ['establishment']
            };
        }

        // Generate consistent rating based on business name
        const nameHash = business.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const rating = 3.5 + (nameHash % 15) / 10; // Rating between 3.5 and 5.0
        const reviewCount = 50 + (nameHash % 2000); // Reviews between 50 and 2050

        // Determine business type from name
        const nameLower = business.name.toLowerCase();
        let imageCategory = 'default';
        if (nameLower.includes('restaurant') || nameLower.includes('khana') || nameLower.includes('bhoj')) {
            imageCategory = 'restaurant';
        } else if (nameLower.includes('cafe') || nameLower.includes('coffee')) {
            imageCategory = 'cafe';
        } else if (nameLower.includes('hotel') || nameLower.includes('lodge')) {
            imageCategory = 'hotel';
        } else if (nameLower.includes('shop') || nameLower.includes('store')) {
            imageCategory = 'shop';
        }

        // Get image
        const images = businessImages[imageCategory] || businessImages.default;
        const imageUrl = images[index % images.length];

        // Generate reviews
        const numReviews = 3;
        const reviews = [];
        for (let i = 0; i < numReviews; i++) {
            const template = reviewTemplates[(nameHash + i) % reviewTemplates.length];
            reviews.push({
                author_name: template.author,
                rating: template.rating,
                text: template.text,
                relative_time_description: i === 0 ? '1 week ago' : i === 1 ? '2 weeks ago' : '1 month ago'
            });
        }

        // Generate opening hours
        const isOpen = (nameHash % 10) > 2; // 80% chance of being open
        const openingHours = {
            open_now: isOpen,
            weekday_text: [
                'Monday: 9:00 AM – 9:00 PM',
                'Tuesday: 9:00 AM – 9:00 PM',
                'Wednesday: 9:00 AM – 9:00 PM',
                'Thursday: 9:00 AM – 9:00 PM',
                'Friday: 9:00 AM – 10:00 PM',
                'Saturday: 9:00 AM – 10:00 PM',
                'Sunday: 10:00 AM – 8:00 PM'
            ]
        };

        // Generate phone number (Nepal format)
        const phoneNumber = `+977 1-${4000000 + (nameHash % 999999)}`;

        // Price level (1-4)
        const priceLevel = 1 + (nameHash % 3);

        // Safely generate website
        const websiteUrl = (nameHash % 3) === 0
            ? `https://www.${business.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.com.np`
            : null;

        return {
            ...business,
            rating: parseFloat(rating.toFixed(1)),
            user_ratings_total: reviewCount,
            photos: [{ photo_reference: imageUrl }],
            opening_hours: openingHours,
            formatted_phone_number: phoneNumber,
            website: websiteUrl,
            reviews: reviews,
            price_level: priceLevel,
            types: [imageCategory, 'point_of_interest', 'establishment']
        };
    }

    /**
     * Search for nearby businesses using Gallimaps API
     */
    async searchNearbyBusinesses(latitude, longitude, query = 'restaurant', radius = 5000) {
        try {
            console.log('Searching Gallimaps for:', query, 'at', latitude, longitude);

            const response = await axios.get(`${GALLIMAPS_BASE_URL}/search/currentLocation`, {
                params: {
                    accessToken: GALLIMAPS_ACCESS_TOKEN,
                    name: query,
                    currentLat: latitude,
                    currentLng: longitude
                }
            });

            console.log('Gallimaps response:', response.data);

            if (response.data.success && response.data.data && response.data.data.features) {
                const features = response.data.data.features;

                if (!Array.isArray(features) || features.length === 0) {
                    return {
                        success: true,
                        businesses: [],
                        message: 'No businesses found'
                    };
                }

                const businesses = features.map((feature, index) => {
                    // Safely extract properties with fallbacks
                    const props = feature.properties || {};
                    const coords = feature.feature?.geometry?.coordinates || [0, 0]; // Access feature.geometry for coordinates

                    const baseData = {
                        place_id: `galli_${props.searchedItem || 'unknown'}_${index}`,
                        name: props.searchedItem || 'Unknown Business',
                        vicinity: `${props.municipality || 'Kathmandu'}, ${props.district || 'Kathmandu'}`,
                        formatted_address: `${props.municipality || 'Kathmandu'}, ${props.district || 'Kathmandu'}, ${props.province || 'Bagmati'}, Nepal`,
                        geometry: {
                            location: {
                                lat: coords[1] || 27.7172,
                                lng: coords[0] || 85.3240
                            }
                        },
                        distance: props.distance || 0,
                        province: props.province || 'Bagmati',
                        district: props.district || 'Kathmandu',
                        municipality: props.municipality || 'Kathmandu',
                        ward: props.ward || 1
                    };

                    return this.enhanceBusinessData(baseData, index);
                }).filter(business => business && business.name); // Filter out any invalid businesses

                return {
                    success: true,
                    businesses: businesses,
                    message: `Found ${businesses.length} businesses`
                };
            } else {
                console.warn('Gallimaps returned no results or error:', response.data);
                return {
                    success: true,
                    businesses: [],
                    message: response.data.message || 'No businesses found'
                };
            }
        } catch (error) {
            console.error('Error searching businesses:', error);
            return {
                success: false,
                error: error.message || 'Failed to search businesses',
                businesses: []
            };
        }
    }

    /**
     * Search businesses by text query
     */
    async searchBusinessesByText(query, latitude = 27.7172, longitude = 85.3240) {
        // Remove "in Kathmandu" from query if present
        const cleanQuery = query.replace(/\s+in\s+kathmandu/i, '').trim();
        return this.searchNearbyBusinesses(latitude, longitude, cleanQuery);
    }

    /**
     * Get business details
     */
    async getBusinessDetails(placeId) {
        try {
            // Extract the original search term from place_id
            const parts = placeId.split('_');
            if (parts.length < 2) {
                return {
                    success: false,
                    error: 'Invalid place ID'
                };
            }

            const searchTerm = parts.slice(1, -1).join('_');
            const index = parseInt(parts[parts.length - 1]) || 0;

            // Search for this specific business
            const result = await this.searchNearbyBusinesses(27.7172, 85.3240, searchTerm);

            if (result.success && result.businesses.length > index) {
                return {
                    success: true,
                    business: result.businesses[index]
                };
            } else {
                return {
                    success: false,
                    error: 'Business not found'
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
     * Get photo URL
     */
    getPhotoUrl(photoReference, maxWidth = 400) {
        // Photo reference is already a full URL from Unsplash
        return photoReference;
    }

    /**
     * Get autocomplete suggestions
     */
    async getAutocompleteSuggestions(input, latitude = 27.7172, longitude = 85.3240) {
        try {
            const response = await axios.get(`${GALLIMAPS_BASE_URL}/search/autocomplete`, {
                params: {
                    accessToken: GALLIMAPS_ACCESS_TOKEN,
                    word: input,
                    lat: latitude,
                    lng: longitude
                }
            });

            if (response.data.success) {
                const suggestions = response.data.data.map(item => ({
                    description: item.name,
                    place_id: `galli_${item.id}`,
                    structured_formatting: {
                        main_text: item.name,
                        secondary_text: `${item.municipality}, ${item.district}`
                    }
                }));

                return {
                    success: true,
                    suggestions: suggestions
                };
            } else {
                return {
                    success: false,
                    error: response.data.message,
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
     * Check if configured
     */
    isConfigured() {
        return GALLIMAPS_ACCESS_TOKEN && GALLIMAPS_ACCESS_TOKEN.length > 20;
    }

    /**
     * Get configuration status
     */
    getConfigStatus() {
        return {
            isConfigured: this.isConfigured(),
            apiKey: '***' + GALLIMAPS_ACCESS_TOKEN.slice(-4),
            message: 'Gallimaps API is configured and ready'
        };
    }
}

export default new EnhancedGallimapsService();
