import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    Alert,
    RefreshControl
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import kathmanduBusinessService from '../services/kathmanduBusinessService';
import { useAuth } from '../context/AuthContext';

export default function BusinessListingScreen({ navigation }) {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { user, logout } = useAuth();

    // Kathmandu Valley coordinates
    const KATHMANDU_LAT = 27.7172;
    const KATHMANDU_LNG = 85.3240;

    useEffect(() => {
        loadBusinesses();
    }, []);

    const loadBusinesses = async () => {
        setLoading(true);

        // Load all businesses from our fake data
        const result = kathmanduBusinessService.getAllBusinesses();

        setLoading(false);

        if (result.success) {
            setBusinesses(result.businesses);
        } else {
            Alert.alert('Error', result.error || 'Failed to load businesses');
            setBusinesses([]);
        }
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            loadBusinesses();
            return;
        }

        setLoading(true);

        // Search with user query in our fake data
        const result = kathmanduBusinessService.searchBusinesses(searchQuery);

        setLoading(false);

        if (result.success) {
            setBusinesses(result.businesses);
            if (result.businesses.length === 0) {
                Alert.alert('No Results', `No businesses found for "${searchQuery}"`);
            }
        } else {
            Alert.alert('Search Error', result.error || 'Search failed');
            setBusinesses([]);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadBusinesses();
        setRefreshing(false);
    };

    const handleLogout = async () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: async () => {
                        await logout();
                    }
                }
            ]
        );
    };

    const renderBusinessCard = ({ item }) => {
        const photoUrl = item.photos?.[0]?.photo_reference
            ? kathmanduBusinessService.getPhotoUrl(item.photos[0].photo_reference, 400)
            : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400';

        return (
            <TouchableOpacity
                style={styles.businessCard}
                onPress={() => navigation.navigate('BusinessDetails', { placeId: item.place_id })}
            >
                <Image
                    source={{ uri: photoUrl }}
                    style={styles.businessImage}
                    resizeMode="cover"
                />
                <View style={styles.businessInfo}>
                    <Text style={styles.businessName} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>⭐ {item.rating || 'N/A'}</Text>
                        <Text style={styles.reviewCount}>
                            ({item.user_ratings_total || 0} reviews)
                        </Text>
                    </View>
                    <Text style={styles.businessAddress} numberOfLines={2}>
                        📍 {item.vicinity || item.formatted_address}
                    </Text>
                    {item.opening_hours && (
                        <View style={styles.statusContainer}>
                            <View
                                style={[
                                    styles.statusDot,
                                    { backgroundColor: item.opening_hours.open_now ? '#4ade80' : '#ef4444' }
                                ]}
                            />
                            <Text
                                style={[
                                    styles.statusText,
                                    { color: item.opening_hours.open_now ? '#4ade80' : '#ef4444' }
                                ]}
                            >
                                {item.opening_hours.open_now ? 'Open Now' : 'Closed'}
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <LinearGradient colors={['#667eea', '#764ba2']} style={styles.header}>
                <View style={styles.headerTop}>
                    <View>
                        <Text style={styles.welcomeText}>Kathmandu Valley</Text>
                        <Text style={styles.userName}>Discover Local Businesses</Text>
                    </View>
                    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search restaurants, cafes, shops..."
                        placeholderTextColor="#999"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={handleSearch}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.searchButtonText}>🔍</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            {/* Business List */}
            {loading && !refreshing ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#667eea" />
                    <Text style={styles.loadingText}>Finding businesses in Kathmandu Valley...</Text>
                </View>
            ) : (
                <FlatList
                    data={businesses}
                    renderItem={renderBusinessCard}
                    keyExtractor={(item) => item.place_id}
                    contentContainerStyle={styles.listContainer}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#667eea']} />
                    }
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>🏪</Text>
                            <Text style={styles.emptyTitle}>No businesses found</Text>
                            <Text style={styles.emptySubtitle}>Try searching for something else</Text>
                        </View>
                    }
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 14,
    },
    userName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 4,
    },
    logoutButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    logoutText: {
        color: '#fff',
        fontWeight: '600',
    },
    searchContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: '#fff',
        borderRadius: 12,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButtonText: {
        fontSize: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
        fontSize: 16,
    },
    listContainer: {
        padding: 20,
    },
    businessCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    businessImage: {
        width: '100%',
        height: 180,
        backgroundColor: '#e0e0e0',
    },
    businessInfo: {
        padding: 16,
    },
    businessName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#f59e0b',
        marginRight: 6,
    },
    reviewCount: {
        fontSize: 14,
        color: '#666',
    },
    businessAddress: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6,
    },
    statusText: {
        fontSize: 14,
        fontWeight: '600',
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 16,
        color: '#666',
    },
});
