/**
 * Kathmandu Valley Business Service
 * Provides comprehensive fake data for businesses across Nepal
 * including Kathmandu, Lalitpur, Bhaktapur with fake images and working search
 */

// Comprehensive fake business data for Nepal
const kathmanduBusinesses = [
    // KATHMANDU RESTAURANTS
    {
        place_id: 'ktm_001',
        name: 'Bhojan Griha',
        vicinity: 'Dillibazar, Kathmandu',
        formatted_address: 'Dillibazar, Kathmandu 44600, Nepal',
        rating: 4.5,
        user_ratings_total: 1250,
        price_level: 3,
        geometry: {
            location: {
                lat: 27.7024,
                lng: 85.3261
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 11:00 AM – 10:00 PM',
                'Tuesday: 11:00 AM – 10:00 PM',
                'Wednesday: 11:00 AM – 10:00 PM',
                'Thursday: 11:00 AM – 10:00 PM',
                'Friday: 11:00 AM – 10:00 PM',
                'Saturday: 11:00 AM – 10:00 PM',
                'Sunday: 11:00 AM – 10:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-4416423',
        website: 'https://www.bhojangriha.com',
        types: ['restaurant', 'food', 'nepali', 'traditional'],
        reviews: [
            {
                author_name: 'Rajesh Sharma',
                rating: 5,
                text: 'Excellent traditional Nepali cuisine in a beautiful cultural setting. The dal bhat and momo are outstanding!',
                relative_time_description: '2 weeks ago'
            },
            {
                author_name: 'Sarah Johnson',
                rating: 4,
                text: 'Great atmosphere with traditional Nepali music and dance. Food is authentic and delicious.',
                relative_time_description: '1 month ago'
            }
        ]
    },

    {
        place_id: 'ktm_002',
        name: 'Fire and Ice Pizzeria',
        vicinity: 'Thamel, Kathmandu',
        formatted_address: 'Thamel Marg, Kathmandu 44600, Nepal',
        rating: 4.6,
        user_ratings_total: 2340,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.7145,
                lng: 85.3120
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 11:00 AM – 10:30 PM',
                'Tuesday: 11:00 AM – 10:30 PM',
                'Wednesday: 11:00 AM – 10:30 PM',
                'Thursday: 11:00 AM – 10:30 PM',
                'Friday: 11:00 AM – 11:00 PM',
                'Saturday: 11:00 AM – 11:00 PM',
                'Sunday: 11:00 AM – 10:30 PM'
            ]
        },
        formatted_phone_number: '+977 1-4250210',
        website: 'https://www.fireandice.com.np',
        types: ['restaurant', 'pizza', 'italian', 'food'],
        reviews: [
            {
                author_name: 'Michael Chen',
                rating: 5,
                text: 'Best pizza in Kathmandu! Authentic Italian taste with great service.',
                relative_time_description: '1 week ago'
            }
        ]
    },

    {
        place_id: 'ktm_003',
        name: 'Himalayan Java Coffee',
        vicinity: 'Thamel, Kathmandu',
        formatted_address: 'Tridevi Marg, Thamel, Kathmandu 44600, Nepal',
        rating: 4.4,
        user_ratings_total: 1890,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.7136,
                lng: 85.3142
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 7:00 AM – 9:00 PM',
                'Tuesday: 7:00 AM – 9:00 PM',
                'Wednesday: 7:00 AM – 9:00 PM',
                'Thursday: 7:00 AM – 9:00 PM',
                'Friday: 7:00 AM – 9:00 PM',
                'Saturday: 7:00 AM – 9:00 PM',
                'Sunday: 7:00 AM – 9:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-4700111',
        website: 'https://www.himalayanjava.com',
        types: ['cafe', 'coffee', 'food'],
        reviews: [
            {
                author_name: 'Lisa Anderson',
                rating: 5,
                text: 'Best coffee in Kathmandu! Great atmosphere for working.',
                relative_time_description: '3 days ago'
            }
        ]
    },

    {
        place_id: 'ktm_004',
        name: 'Newari Kitchen',
        vicinity: 'Basantapur, Kathmandu',
        formatted_address: 'Basantapur Durbar Square, Kathmandu 44600, Nepal',
        rating: 4.3,
        user_ratings_total: 890,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.7045,
                lng: 85.3077
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 10:00 AM – 9:00 PM',
                'Tuesday: 10:00 AM – 9:00 PM',
                'Wednesday: 10:00 AM – 9:00 PM',
                'Thursday: 10:00 AM – 9:00 PM',
                'Friday: 10:00 AM – 9:00 PM',
                'Saturday: 10:00 AM – 9:00 PM',
                'Sunday: 10:00 AM – 9:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-4247832',
        website: null,
        types: ['restaurant', 'newari', 'traditional', 'food'],
        reviews: [
            {
                author_name: 'Prakash Shrestha',
                rating: 5,
                text: 'Authentic Newari cuisine! The choila and bara are exceptional.',
                relative_time_description: '1 week ago'
            }
        ]
    },

    {
        place_id: 'ktm_005',
        name: 'Roadhouse Cafe',
        vicinity: 'Thamel, Kathmandu',
        formatted_address: 'Thamel Marg, Kathmandu 44600, Nepal',
        rating: 4.5,
        user_ratings_total: 2100,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.7152,
                lng: 85.3128
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 7:00 AM – 11:00 PM',
                'Tuesday: 7:00 AM – 11:00 PM',
                'Wednesday: 7:00 AM – 11:00 PM',
                'Thursday: 7:00 AM – 11:00 PM',
                'Friday: 7:00 AM – 11:00 PM',
                'Saturday: 7:00 AM – 11:00 PM',
                'Sunday: 7:00 AM – 11:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-4700043',
        website: 'https://www.roadhousecafe.com.np',
        types: ['restaurant', 'cafe', 'american', 'food'],
        reviews: [
            {
                author_name: 'Karen White',
                rating: 5,
                text: 'Amazing burgers and steaks! Great atmosphere and friendly staff.',
                relative_time_description: '4 days ago'
            }
        ]
    },

    // KATHMANDU SHOPPING
    {
        place_id: 'ktm_006',
        name: 'Bhatbhateni Supermarket',
        vicinity: 'Bhatbhateni, Kathmandu',
        formatted_address: 'Bhatbhateni, Kathmandu 44600, Nepal',
        rating: 4.3,
        user_ratings_total: 2340,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.7089,
                lng: 85.3201
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 10:00 AM – 8:00 PM',
                'Tuesday: 10:00 AM – 8:00 PM',
                'Wednesday: 10:00 AM – 8:00 PM',
                'Thursday: 10:00 AM – 8:00 PM',
                'Friday: 10:00 AM – 8:00 PM',
                'Saturday: 10:00 AM – 8:00 PM',
                'Sunday: 10:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-4428768',
        website: 'https://www.bhatbhateni.com',
        types: ['supermarket', 'shopping', 'grocery', 'store'],
        reviews: [
            {
                author_name: 'Rita Sharma',
                rating: 4,
                text: 'Great variety of products and reasonable prices. One-stop shopping destination.',
                relative_time_description: '3 days ago'
            }
        ]
    },

    {
        place_id: 'ktm_007',
        name: 'Asan Bazaar',
        vicinity: 'Asan, Kathmandu',
        formatted_address: 'Asan, Kathmandu 44600, Nepal',
        rating: 4.0,
        user_ratings_total: 890,
        price_level: 1,
        geometry: {
            location: {
                lat: 27.7056,
                lng: 85.3089
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:00 PM',
                'Tuesday: 6:00 AM – 8:00 PM',
                'Wednesday: 6:00 AM – 8:00 PM',
                'Thursday: 6:00 AM – 8:00 PM',
                'Friday: 6:00 AM – 8:00 PM',
                'Saturday: 6:00 AM – 8:00 PM',
                'Sunday: 6:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: null,
        website: null,
        types: ['market', 'traditional', 'shopping', 'local'],
        reviews: [
            {
                author_name: 'Pradeep Thapa',
                rating: 4,
                text: 'Traditional market with everything! Spices, vegetables, clothes. Great cultural experience.',
                relative_time_description: '2 days ago'
            }
        ]
    },

    // KATHMANDU HOTELS
    {
        place_id: 'ktm_008',
        name: 'Hotel Yak & Yeti',
        vicinity: 'Durbar Marg, Kathmandu',
        formatted_address: 'Durbar Marg, Kathmandu 44600, Nepal',
        rating: 4.5,
        user_ratings_total: 1890,
        price_level: 4,
        geometry: {
            location: {
                lat: 27.7021,
                lng: 85.3156
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: Open 24 hours',
                'Tuesday: Open 24 hours',
                'Wednesday: Open 24 hours',
                'Thursday: Open 24 hours',
                'Friday: Open 24 hours',
                'Saturday: Open 24 hours',
                'Sunday: Open 24 hours'
            ]
        },
        formatted_phone_number: '+977 1-4248999',
        website: 'https://www.yakandyeti.com',
        types: ['hotel', 'lodging', 'luxury', 'accommodation'],
        reviews: [
            {
                author_name: 'Robert Wilson',
                rating: 5,
                text: 'Excellent luxury hotel in the heart of Kathmandu. Great service and beautiful rooms.',
                relative_time_description: '1 week ago'
            }
        ]
    },

    // KATHMANDU TEMPLES
    {
        place_id: 'ktm_009',
        name: 'Pashupatinath Temple',
        vicinity: 'Pashupatinath, Kathmandu',
        formatted_address: 'Pashupatinath, Kathmandu 44600, Nepal',
        rating: 4.7,
        user_ratings_total: 3450,
        price_level: 0,
        geometry: {
            location: {
                lat: 27.7106,
                lng: 85.3481
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
                'Tuesday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
                'Wednesday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
                'Thursday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
                'Friday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
                'Saturday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
                'Sunday: 4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-4470348',
        website: 'https://www.pashupatiarea.org.np',
        types: ['temple', 'hindu', 'religious', 'tourist_attraction'],
        reviews: [
            {
                author_name: 'Spiritual Seeker',
                rating: 5,
                text: 'Sacred Hindu temple with incredible spiritual energy. UNESCO World Heritage Site.',
                relative_time_description: '2 days ago'
            }
        ]
    },

    {
        place_id: 'ktm_010',
        name: 'Boudhanath Stupa',
        vicinity: 'Boudha, Kathmandu',
        formatted_address: 'Boudha, Kathmandu 44600, Nepal',
        rating: 4.6,
        user_ratings_total: 2890,
        price_level: 0,
        geometry: {
            location: {
                lat: 27.7215,
                lng: 85.3624
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 5:00 AM – 8:00 PM',
                'Tuesday: 5:00 AM – 8:00 PM',
                'Wednesday: 5:00 AM – 8:00 PM',
                'Thursday: 5:00 AM – 8:00 PM',
                'Friday: 5:00 AM – 8:00 PM',
                'Saturday: 5:00 AM – 8:00 PM',
                'Sunday: 5:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: null,
        website: null,
        types: ['temple', 'buddhist', 'stupa', 'tourist_attraction'],
        reviews: [
            {
                author_name: 'Buddhist Pilgrim',
                rating: 5,
                text: 'One of the largest Buddhist stupas in the world. Peaceful and spiritually uplifting.',
                relative_time_description: '3 days ago'
            }
        ]
    },

    // LALITPUR BUSINESSES
    {
        place_id: 'ltp_001',
        name: 'Cafe Cheeno',
        vicinity: 'Jawalakhel, Lalitpur',
        formatted_address: 'Jawalakhel, Lalitpur 44700, Nepal',
        rating: 4.5,
        user_ratings_total: 1120,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.6693,
                lng: 85.3089
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 7:30 AM – 9:30 PM',
                'Tuesday: 7:30 AM – 9:30 PM',
                'Wednesday: 7:30 AM – 9:30 PM',
                'Thursday: 7:30 AM – 9:30 PM',
                'Friday: 7:30 AM – 10:00 PM',
                'Saturday: 7:30 AM – 10:00 PM',
                'Sunday: 8:00 AM – 9:30 PM'
            ]
        },
        formatted_phone_number: '+977 1-5543210',
        website: 'https://www.cafecheeno.com.np',
        types: ['cafe', 'restaurant', 'continental', 'food'],
        reviews: [
            {
                author_name: 'David Lee',
                rating: 5,
                text: 'Excellent food and ambiance! The pasta and steaks are top-notch.',
                relative_time_description: '3 days ago'
            }
        ]
    },

    {
        place_id: 'ltp_002',
        name: 'Patan Museum Cafe',
        vicinity: 'Patan Durbar Square, Lalitpur',
        formatted_address: 'Patan Durbar Square, Lalitpur 44700, Nepal',
        rating: 4.3,
        user_ratings_total: 650,
        price_level: 3,
        geometry: {
            location: {
                lat: 27.6722,
                lng: 85.3263
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:00 AM – 6:00 PM',
                'Tuesday: 9:00 AM – 6:00 PM',
                'Wednesday: Closed',
                'Thursday: 9:00 AM – 6:00 PM',
                'Friday: 9:00 AM – 6:00 PM',
                'Saturday: 9:00 AM – 6:00 PM',
                'Sunday: 9:00 AM – 6:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-5521492',
        website: 'https://www.patanmuseum.gov.np',
        types: ['cafe', 'museum', 'cultural', 'food'],
        reviews: [
            {
                author_name: 'Jennifer Adams',
                rating: 5,
                text: 'Beautiful setting in the museum courtyard. Great place to relax after exploring Patan.',
                relative_time_description: '4 days ago'
            }
        ]
    },

    {
        place_id: 'ltp_003',
        name: 'Swotha Traditional Food',
        vicinity: 'Mangal Bazaar, Lalitpur',
        formatted_address: 'Mangal Bazaar, Lalitpur 44700, Nepal',
        rating: 4.1,
        user_ratings_total: 430,
        price_level: 1,
        geometry: {
            location: {
                lat: 27.6741,
                lng: 85.3251
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:00 AM – 8:00 PM',
                'Tuesday: 9:00 AM – 8:00 PM',
                'Wednesday: 9:00 AM – 8:00 PM',
                'Thursday: 9:00 AM – 8:00 PM',
                'Friday: 9:00 AM – 8:00 PM',
                'Saturday: 9:00 AM – 8:00 PM',
                'Sunday: 9:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-5521876',
        website: null,
        types: ['restaurant', 'newari', 'traditional', 'local'],
        reviews: [
            {
                author_name: 'Suman Maharjan',
                rating: 5,
                text: 'Authentic Newari food at great prices! The yomari and chatamari are must-try.',
                relative_time_description: '1 week ago'
            }
        ]
    },

    {
        place_id: 'ltp_004',
        name: 'The Bakery Cafe Lalitpur',
        vicinity: 'Pulchowk, Lalitpur',
        formatted_address: 'Pulchowk, Lalitpur 44700, Nepal',
        rating: 4.6,
        user_ratings_total: 1340,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.6789,
                lng: 85.3156
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 7:00 AM – 8:00 PM',
                'Tuesday: 7:00 AM – 8:00 PM',
                'Wednesday: 7:00 AM – 8:00 PM',
                'Thursday: 7:00 AM – 8:00 PM',
                'Friday: 7:00 AM – 8:00 PM',
                'Saturday: 7:00 AM – 8:00 PM',
                'Sunday: 8:00 AM – 7:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-5552341',
        website: null,
        types: ['bakery', 'cafe', 'dessert', 'food'],
        reviews: [
            {
                author_name: 'Anna Wilson',
                rating: 5,
                text: 'Best pastries in Lalitpur! Fresh bread daily and excellent coffee.',
                relative_time_description: '2 days ago'
            }
        ]
    },

    // BHAKTAPUR BUSINESSES
    {
        place_id: 'bhk_001',
        name: 'Peacock Restaurant',
        vicinity: 'Bhaktapur Durbar Square, Bhaktapur',
        formatted_address: 'Durbar Square, Bhaktapur 44800, Nepal',
        rating: 4.4,
        user_ratings_total: 890,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.6710,
                lng: 85.4298
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 9:00 PM',
                'Tuesday: 8:00 AM – 9:00 PM',
                'Wednesday: 8:00 AM – 9:00 PM',
                'Thursday: 8:00 AM – 9:00 PM',
                'Friday: 8:00 AM – 9:00 PM',
                'Saturday: 8:00 AM – 9:00 PM',
                'Sunday: 8:00 AM – 9:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-6610045',
        website: null,
        types: ['restaurant', 'rooftop', 'view', 'food'],
        reviews: [
            {
                author_name: 'Michael Johnson',
                rating: 5,
                text: 'Amazing rooftop view of Bhaktapur Durbar Square! Food is excellent and service is great.',
                relative_time_description: '2 days ago'
            }
        ]
    },

    {
        place_id: 'bhk_002',
        name: 'Cafe Nyatapola',
        vicinity: 'Taumadhi Square, Bhaktapur',
        formatted_address: 'Taumadhi Square, Bhaktapur 44800, Nepal',
        rating: 4.2,
        user_ratings_total: 560,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.6721,
                lng: 85.4276
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 7:00 AM – 8:00 PM',
                'Tuesday: 7:00 AM – 8:00 PM',
                'Wednesday: 7:00 AM – 8:00 PM',
                'Thursday: 7:00 AM – 8:00 PM',
                'Friday: 7:00 AM – 8:00 PM',
                'Saturday: 7:00 AM – 8:00 PM',
                'Sunday: 7:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-6610234',
        website: null,
        types: ['cafe', 'coffee', 'traditional', 'food'],
        reviews: [
            {
                author_name: 'Sarah Thompson',
                rating: 4,
                text: 'Charming cafe with view of Nyatapola Temple. Good coffee and traditional snacks.',
                relative_time_description: '5 days ago'
            }
        ]
    },

    {
        place_id: 'bhk_003',
        name: 'King Curd (Juju Dhau)',
        vicinity: 'Bhaktapur',
        formatted_address: 'Bhaktapur 44800, Nepal',
        rating: 4.6,
        user_ratings_total: 1240,
        price_level: 1,
        geometry: {
            location: {
                lat: 27.6728,
                lng: 85.4289
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 8:00 PM',
                'Tuesday: 6:00 AM – 8:00 PM',
                'Wednesday: 6:00 AM – 8:00 PM',
                'Thursday: 6:00 AM – 8:00 PM',
                'Friday: 6:00 AM – 8:00 PM',
                'Saturday: 6:00 AM – 8:00 PM',
                'Sunday: 6:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-6610567',
        website: null,
        types: ['dessert', 'dairy', 'traditional', 'local_specialty'],
        reviews: [
            {
                author_name: 'Emma Davis',
                rating: 5,
                text: 'Famous Juju Dhau! Creamy, delicious yogurt that Bhaktapur is known for. Must try!',
                relative_time_description: '1 day ago'
            }
        ]
    },

    {
        place_id: 'bhk_004',
        name: 'Pottery Square Workshop',
        vicinity: 'Pottery Square, Bhaktapur',
        formatted_address: 'Pottery Square, Bhaktapur 44800, Nepal',
        rating: 4.3,
        user_ratings_total: 670,
        price_level: 1,
        geometry: {
            location: {
                lat: 27.6715,
                lng: 85.4285
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 8:00 AM – 6:00 PM',
                'Tuesday: 8:00 AM – 6:00 PM',
                'Wednesday: 8:00 AM – 6:00 PM',
                'Thursday: 8:00 AM – 6:00 PM',
                'Friday: 8:00 AM – 6:00 PM',
                'Saturday: 8:00 AM – 6:00 PM',
                'Sunday: 8:00 AM – 6:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-6610890',
        website: null,
        types: ['workshop', 'pottery', 'traditional', 'craft'],
        reviews: [
            {
                author_name: 'Cultural Tourist',
                rating: 4,
                text: 'Amazing to watch traditional pottery making. You can buy beautiful handmade items.',
                relative_time_description: '3 days ago'
            }
        ]
    },

    // MORE DIVERSE BUSINESSES
    {
        place_id: 'ktm_011',
        name: 'Norvic International Hospital',
        vicinity: 'Thapathali, Kathmandu',
        formatted_address: 'Thapathali, Kathmandu 44600, Nepal',
        rating: 4.3,
        user_ratings_total: 890,
        price_level: 3,
        geometry: {
            location: {
                lat: 27.6934,
                lng: 85.3178
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: Open 24 hours',
                'Tuesday: Open 24 hours',
                'Wednesday: Open 24 hours',
                'Thursday: Open 24 hours',
                'Friday: Open 24 hours',
                'Saturday: Open 24 hours',
                'Sunday: Open 24 hours'
            ]
        },
        formatted_phone_number: '+977 1-4258554',
        website: 'https://www.norvichospital.com',
        types: ['hospital', 'health', 'medical', 'emergency'],
        reviews: [
            {
                author_name: 'Patient Care',
                rating: 4,
                text: 'Good medical facilities and professional staff. Clean and well-equipped hospital.',
                relative_time_description: '1 week ago'
            }
        ]
    },

    {
        place_id: 'ktm_012',
        name: 'Tribhuvan University',
        vicinity: 'Kirtipur, Kathmandu',
        formatted_address: 'Kirtipur, Kathmandu 44613, Nepal',
        rating: 4.0,
        user_ratings_total: 1560,
        price_level: 1,
        geometry: {
            location: {
                lat: 27.6789,
                lng: 85.2890
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 10:00 AM – 5:00 PM',
                'Tuesday: 10:00 AM – 5:00 PM',
                'Wednesday: 10:00 AM – 5:00 PM',
                'Thursday: 10:00 AM – 5:00 PM',
                'Friday: 10:00 AM – 5:00 PM',
                'Saturday: Closed',
                'Sunday: Closed'
            ]
        },
        formatted_phone_number: '+977 1-4330433',
        website: 'https://www.tu.edu.np',
        types: ['university', 'education', 'school'],
        reviews: [
            {
                author_name: 'Student Life',
                rating: 4,
                text: 'Oldest and largest university in Nepal. Rich history and diverse academic programs.',
                relative_time_description: '1 month ago'
            }
        ]
    },

    {
        place_id: 'ktm_013',
        name: 'Nepal Investment Bank',
        vicinity: 'Durbar Marg, Kathmandu',
        formatted_address: 'Durbar Marg, Kathmandu 44600, Nepal',
        rating: 4.1,
        user_ratings_total: 450,
        price_level: 0,
        geometry: {
            location: {
                lat: 27.7015,
                lng: 85.3189
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 10:00 AM – 4:00 PM',
                'Tuesday: 10:00 AM – 4:00 PM',
                'Wednesday: 10:00 AM – 4:00 PM',
                'Thursday: 10:00 AM – 4:00 PM',
                'Friday: 10:00 AM – 3:00 PM',
                'Saturday: Closed',
                'Sunday: Closed'
            ]
        },
        formatted_phone_number: '+977 1-4228229',
        website: 'https://www.nibl.com.np',
        types: ['bank', 'finance', 'atm', 'financial_services'],
        reviews: [
            {
                author_name: 'Business Owner',
                rating: 4,
                text: 'Good banking services with professional staff. Convenient location in Durbar Marg.',
                relative_time_description: '1 week ago'
            }
        ]
    },

    {
        place_id: 'ltp_005',
        name: 'Patan Handicraft Center',
        vicinity: 'Lagankhel, Lalitpur',
        formatted_address: 'Lagankhel, Lalitpur 44700, Nepal',
        rating: 4.2,
        user_ratings_total: 340,
        price_level: 2,
        geometry: {
            location: {
                lat: 27.6654,
                lng: 85.3198
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 9:00 AM – 7:00 PM',
                'Tuesday: 9:00 AM – 7:00 PM',
                'Wednesday: 9:00 AM – 7:00 PM',
                'Thursday: 9:00 AM – 7:00 PM',
                'Friday: 9:00 AM – 7:00 PM',
                'Saturday: 9:00 AM – 7:00 PM',
                'Sunday: 10:00 AM – 6:00 PM'
            ]
        },
        formatted_phone_number: '+977 1-5521234',
        website: null,
        types: ['handicraft', 'shopping', 'traditional', 'art'],
        reviews: [
            {
                author_name: 'Art Lover',
                rating: 4,
                text: 'Beautiful traditional handicrafts and artwork. Great place to buy authentic Nepali souvenirs.',
                relative_time_description: '5 days ago'
            }
        ]
    },

    {
        place_id: 'ktm_014',
        name: 'Swayambhunath Temple',
        vicinity: 'Swayambhu, Kathmandu',
        formatted_address: 'Swayambhu, Kathmandu 44600, Nepal',
        rating: 4.5,
        user_ratings_total: 2340,
        price_level: 0,
        geometry: {
            location: {
                lat: 27.7149,
                lng: 85.2906
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 5:00 AM – 8:00 PM',
                'Tuesday: 5:00 AM – 8:00 PM',
                'Wednesday: 5:00 AM – 8:00 PM',
                'Thursday: 5:00 AM – 8:00 PM',
                'Friday: 5:00 AM – 8:00 PM',
                'Saturday: 5:00 AM – 8:00 PM',
                'Sunday: 5:00 AM – 8:00 PM'
            ]
        },
        formatted_phone_number: null,
        website: null,
        types: ['temple', 'buddhist', 'monkey_temple', 'tourist_attraction'],
        reviews: [
            {
                author_name: 'Temple Visitor',
                rating: 5,
                text: 'Famous Monkey Temple with stunning views of Kathmandu Valley. Watch out for the monkeys!',
                relative_time_description: '1 week ago'
            }
        ]
    },

    {
        place_id: 'bhk_005',
        name: 'Dattatreya Temple',
        vicinity: 'Tachupal Tole, Bhaktapur',
        formatted_address: 'Tachupal Tole, Bhaktapur 44800, Nepal',
        rating: 4.1,
        user_ratings_total: 420,
        price_level: 0,
        geometry: {
            location: {
                lat: 27.6698,
                lng: 85.4312
            }
        },
        photos: [
            { photo_reference: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800' },
            { photo_reference: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800' }
        ],
        opening_hours: {
            open_now: true,
            weekday_text: [
                'Monday: 6:00 AM – 7:00 PM',
                'Tuesday: 6:00 AM – 7:00 PM',
                'Wednesday: 6:00 AM – 7:00 PM',
                'Thursday: 6:00 AM – 7:00 PM',
                'Friday: 6:00 AM – 7:00 PM',
                'Saturday: 6:00 AM – 7:00 PM',
                'Sunday: 6:00 AM – 7:00 PM'
            ]
        },
        formatted_phone_number: null,
        website: null,
        types: ['temple', 'hindu', 'historical', 'religious'],
        reviews: [
            {
                author_name: 'History Buff',
                rating: 4,
                text: 'Ancient temple with beautiful wood carvings. Less crowded than other temples in Bhaktapur.',
                relative_time_description: '2 weeks ago'
            }
        ]
    }
];

class KathmanduBusinessService {
    /**
     * Get all businesses in Kathmandu Valley
     */
    getAllBusinesses() {
        return {
            success: true,
            businesses: kathmanduBusinesses,
            message: 'Loaded curated businesses in Kathmandu Valley'
        };
    }

    /**
     * Search businesses by query with enhanced filtering
     */
    searchBusinesses(query) {
        if (!query || query.trim() === '') {
            return this.getAllBusinesses();
        }

        const searchTerm = query.toLowerCase();
        const filtered = kathmanduBusinesses.filter(business => {
            // Search in name
            if (business.name.toLowerCase().includes(searchTerm)) return true;
            
            // Search in vicinity/location
            if (business.vicinity.toLowerCase().includes(searchTerm)) return true;
            
            // Search in address
            if (business.formatted_address.toLowerCase().includes(searchTerm)) return true;
            
            // Search in types/categories
            if (business.types.some(type => type.toLowerCase().includes(searchTerm))) return true;
            
            // Search in reviews
            if (business.reviews && business.reviews.some(review => 
                review.text.toLowerCase().includes(searchTerm)
            )) return true;

            return false;
        });

        return {
            success: true,
            businesses: filtered,
            message: `Found ${filtered.length} businesses matching "${query}"`
        };
    }

    /**
     * Get business details by place_id
     */
    getBusinessDetails(placeId) {
        const business = kathmanduBusinesses.find(b => b.place_id === placeId);

        if (business) {
            return {
                success: true,
                business: business
            };
        } else {
            return {
                success: false,
                error: 'Business not found'
            };
        }
    }

    /**
     * Get photo URL
     */
    getPhotoUrl(photoReference, maxWidth = 400) {
        // Return the photo reference directly as it's already a URL
        return photoReference;
    }

    /**
     * Get businesses by category
     */
    getBusinessesByCategory(category) {
        const filtered = kathmanduBusinesses.filter(business =>
            business.types.includes(category.toLowerCase())
        );

        return {
            success: true,
            businesses: filtered,
            message: `Found ${filtered.length} ${category} businesses`
        };
    }

    /**
     * Get businesses by location
     */
    getBusinessesByLocation(location) {
        const locationTerm = location.toLowerCase();
        const filtered = kathmanduBusinesses.filter(business =>
            business.vicinity.toLowerCase().includes(locationTerm) ||
            business.formatted_address.toLowerCase().includes(locationTerm)
        );

        return {
            success: true,
            businesses: filtered,
            message: `Found ${filtered.length} businesses in ${location}`
        };
    }

    /**
     * Get top rated businesses
     */
    getTopRatedBusinesses(limit = 5) {
        const sorted = [...kathmanduBusinesses].sort((a, b) => b.rating - a.rating);

        return {
            success: true,
            businesses: sorted.slice(0, limit),
            message: `Top ${limit} rated businesses`
        };
    }

    /**
     * Get businesses by price level
     */
    getBusinessesByPriceLevel(priceLevel) {
        const filtered = kathmanduBusinesses.filter(business =>
            business.price_level === priceLevel
        );

        return {
            success: true,
            businesses: filtered,
            message: `Found ${filtered.length} businesses with price level ${priceLevel}`
        };
    }

    /**
     * Get random businesses for discovery
     */
    getRandomBusinesses(limit = 10) {
        const shuffled = [...kathmanduBusinesses].sort(() => 0.5 - Math.random());
        
        return {
            success: true,
            businesses: shuffled.slice(0, limit),
            message: `Random selection of ${limit} businesses`
        };
    }
}

export default new KathmanduBusinessService();