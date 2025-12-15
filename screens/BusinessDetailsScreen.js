import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Linking,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import kathmanduBusinessService from '../services/kathmanduBusinessService';

export default function BusinessDetailsScreen({ route, navigation }) {
    const { placeId } = route.params;
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBusinessDetails();
    }, []);

    const fetchBusinessDetails = async () => {
        setLoading(true);
        const result = kathmanduBusinessService.getBusinessDetails(placeId);
        setLoading(false);

        if (result.success) {
            setBusiness(result.business);
        } else {
            Alert.alert('Error', 'Failed to load business details');
        }
    };

    const handleCall = () => {
        if (business?.formatted_phone_number) {
            Linking.openURL(`tel:${business.formatted_phone_number}`);
        }
    };

    const handleWebsite = () => {
        if (business?.website) {
            Linking.openURL(business.website);
        }
    };

    const handleDirections = () => {
        if (business?.geometry?.location) {
            const { lat, lng } = business.geometry.location;
            const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
            Linking.openURL(url);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#667eea" />
                <Text style={styles.loadingText}>Loading business details...</Text>
            </View>
        );
    }

    if (!business) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Business not found</Text>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const photoUrl = business.photos?.[0]?.photo_reference
        ? kathmanduBusinessService.getPhotoUrl(business.photos[0].photo_reference, 800)
        : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800';

    return (
        <ScrollView style={styles.container}>
            {/* Header Image */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: photoUrl }} style={styles.headerImage} />
                <TouchableOpacity
                    style={styles.backIconButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
            </View>

            {/* Business Info */}
            <View style={styles.content}>
                <Text style={styles.businessName}>{business.name}</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐ {business.rating || 'N/A'}</Text>
                    <Text style={styles.reviewCount}>
                        ({business.user_ratings_total || 0} reviews)
                    </Text>
                    {business.price_level && (
                        <Text style={styles.priceLevel}>
                            {'$'.repeat(business.price_level)}
                        </Text>
                    )}
                </View>

                {/* Status */}
                {business.opening_hours && (
                    <View style={styles.statusContainer}>
                        <View
                            style={[
                                styles.statusDot,
                                { backgroundColor: business.opening_hours.open_now ? '#4ade80' : '#ef4444' }
                            ]}
                        />
                        <Text
                            style={[
                                styles.statusText,
                                { color: business.opening_hours.open_now ? '#4ade80' : '#ef4444' }
                            ]}
                        >
                            {business.opening_hours.open_now ? 'Open Now' : 'Closed'}
                        </Text>
                    </View>
                )}

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                    {business.formatted_phone_number && (
                        <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
                            <LinearGradient
                                colors={['#667eea', '#764ba2']}
                                style={styles.actionButtonGradient}
                            >
                                <Text style={styles.actionButtonIcon}>📞</Text>
                                <Text style={styles.actionButtonText}>Call</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}

                    {business.website && (
                        <TouchableOpacity style={styles.actionButton} onPress={handleWebsite}>
                            <LinearGradient
                                colors={['#667eea', '#764ba2']}
                                style={styles.actionButtonGradient}
                            >
                                <Text style={styles.actionButtonIcon}>🌐</Text>
                                <Text style={styles.actionButtonText}>Website</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={styles.actionButton} onPress={handleDirections}>
                        <LinearGradient
                            colors={['#667eea', '#764ba2']}
                            style={styles.actionButtonGradient}
                        >
                            <Text style={styles.actionButtonIcon}>🗺️</Text>
                            <Text style={styles.actionButtonText}>Directions</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* Address */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>📍 Address</Text>
                    <Text style={styles.sectionText}>{business.formatted_address}</Text>
                </View>

                {/* Phone */}
                {business.formatted_phone_number && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>📞 Phone</Text>
                        <Text style={styles.sectionText}>{business.formatted_phone_number}</Text>
                    </View>
                )}

                {/* Opening Hours */}
                {business.opening_hours?.weekday_text && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>🕐 Opening Hours</Text>
                        {business.opening_hours.weekday_text.map((day, index) => (
                            <Text key={index} style={styles.hoursText}>
                                {day}
                            </Text>
                        ))}
                    </View>
                )}

                {/* Reviews */}
                {business.reviews && business.reviews.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>⭐ Reviews</Text>
                        {business.reviews.slice(0, 3).map((review, index) => (
                            <View key={index} style={styles.reviewCard}>
                                <View style={styles.reviewHeader}>
                                    <Text style={styles.reviewAuthor}>{review.author_name}</Text>
                                    <Text style={styles.reviewRating}>
                                        ⭐ {review.rating}
                                    </Text>
                                </View>
                                <Text style={styles.reviewText} numberOfLines={3}>
                                    {review.text}
                                </Text>
                                <Text style={styles.reviewTime}>{review.relative_time_description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Types/Categories */}
                {business.types && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>🏷️ Categories</Text>
                        <View style={styles.tagsContainer}>
                            {business.types.slice(0, 5).map((type, index) => (
                                <View key={index} style={styles.tag}>
                                    <Text style={styles.tagText}>
                                        {type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
        fontSize: 16,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    errorText: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#667eea',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    imageContainer: {
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: 300,
        backgroundColor: '#e0e0e0',
    },
    backIconButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    backIcon: {
        fontSize: 24,
        color: '#333',
    },
    content: {
        padding: 20,
    },
    businessName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        flexWrap: 'wrap',
    },
    ratingText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#f59e0b',
        marginRight: 8,
    },
    reviewCount: {
        fontSize: 16,
        color: '#666',
        marginRight: 12,
    },
    priceLevel: {
        fontSize: 16,
        color: '#4ade80',
        fontWeight: 'bold',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 8,
    },
    statusText: {
        fontSize: 16,
        fontWeight: '600',
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 30,
    },
    actionButton: {
        flex: 1,
    },
    actionButtonGradient: {
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    actionButtonIcon: {
        fontSize: 24,
        marginBottom: 4,
    },
    actionButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    sectionText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
    },
    hoursText: {
        fontSize: 15,
        color: '#666',
        marginBottom: 6,
    },
    reviewCard: {
        backgroundColor: '#f9fafb',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    reviewAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewRating: {
        fontSize: 14,
        color: '#f59e0b',
    },
    reviewText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 8,
    },
    reviewTime: {
        fontSize: 12,
        color: '#999',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tag: {
        backgroundColor: '#e0e7ff',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    tagText: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: '600',
    },
});
