import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
    const { user, logout } = useAuth();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#4f46e5" />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {/* HEADER */}
                <LinearGradient colors={['#4f46e5', '#6366f1']} style={styles.header}>
                    <View style={styles.headerContent}>
                        <View style={styles.logoRow}>
                            <View style={styles.logoBox}>
                                <Text style={styles.logoText}>CB</Text>
                            </View>
                            <View style={styles.headerTextContainer}>
                                <Text style={styles.headerTitle}>Community Business</Text>
                                <Text style={styles.headerSubtitle}>Grow Together</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                {/* HERO SECTION */}
                <View style={styles.section}>
                    <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>Grow your local business with community-first tools</Text>
                        <Text style={styles.heroDescription}>
                            Community Business Grow helps small businesses in Kathmandu Valley attract local customers, manage bookings, collect reviews, and run promotions.
                        </Text>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                                style={styles.primaryBtn}
                                onPress={() => navigation.navigate('BusinessListing')}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.primaryBtnText}>🏪 Explore Businesses</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80' }}
                        style={styles.heroImg}
                        resizeMode="cover"
                    />
                </View>

                {/* FEATURES */}
                <View style={styles.featuresSection}>
                    <Text style={styles.sectionTitle}>✨ Powerful Features</Text>
                    <Text style={styles.sectionSubtitle}>Everything you need to grow your business</Text>

                    <View style={styles.featuresGrid}>
                        {features.map((item, index) => (
                            <View key={index} style={styles.featureCard}>
                                <View style={styles.featureIconContainer}>
                                    <Text style={styles.featureEmoji}>{item.emoji}</Text>
                                </View>
                                <Text style={styles.featureTitle}>{item.title}</Text>
                                <Text style={styles.featureDesc}>{item.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* PRICING */}
                <View style={styles.pricingSection}>
                    <Text style={styles.sectionTitle}>💰 Simple Pricing</Text>
                    <Text style={styles.sectionSubtitle}>Choose the plan that fits your needs</Text>

                    {pricing.map((p, index) => (
                        <View key={index} style={[styles.priceCard, p.featured && styles.featuredCard]}>
                            {p.featured && (
                                <View style={styles.popularBadge}>
                                    <Text style={styles.popularText}>⭐ MOST POPULAR</Text>
                                </View>
                            )}
                            <Text style={styles.priceTitle}>{p.title}</Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceValue}>{p.price}</Text>
                                {p.price !== 'Free' && p.price !== 'Custom' && (
                                    <Text style={styles.priceUnit}>/month</Text>
                                )}
                            </View>
                            <View style={styles.divider} />
                            {p.features.map((f, i) => (
                                <View key={i} style={styles.featureRow}>
                                    <Text style={styles.checkmark}>✓</Text>
                                    <Text style={styles.priceFeature}>{f}</Text>
                                </View>
                            ))}
                            <TouchableOpacity
                                style={[styles.chooseBtn, p.featured && styles.chooseBtnFeatured]}
                                activeOpacity={0.8}
                            >
                                <Text style={p.featured ? styles.chooseFeaturedText : styles.chooseText}>
                                    Get Started
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* CONTACT / CTA */}
                <LinearGradient colors={['#4f46e5', '#6366f1']} style={styles.ctaBox}>
                    <Text style={styles.ctaTitle}>🚀 Ready to grow your business?</Text>
                    <Text style={styles.ctaSubtitle}>Join hundreds of businesses in Kathmandu Valley</Text>

                    <TextInput
                        placeholder="Your email"
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Business name"
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                        <Text style={styles.ctaButtonText}>Start Free Trial</Text>
                    </TouchableOpacity>
                </LinearGradient>

                {/* FOOTER */}
                <View style={styles.footerContainer}>
                    <Text style={styles.footer}>© {new Date().getFullYear()} Community Business Grow</Text>
                    <Text style={styles.footerSubtext}>Empowering local businesses in Kathmandu Valley</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

/* ---------- Data ---------- */
const features = [
    { title: 'Local Promotions', description: 'Create targeted offers for nearby customers.', emoji: '🎯' },
    { title: 'Easy Bookings', description: 'Accept bookings and schedule easily.', emoji: '📅' },
    { title: 'Customer Reviews', description: 'Collect and display real reviews.', emoji: '⭐' },
    { title: 'Analytics Dashboard', description: 'Track visits and sales in real-time.', emoji: '📊' },
];

const pricing = [
    { title: 'Starter', price: 'Free', features: ['1 location', 'Basic analytics', 'Email support', 'Community access'] },
    { title: 'Pro', price: '$29', featured: true, features: ['5 locations', 'Advanced analytics', 'Priority support', 'Custom branding', 'API access'] },
    { title: 'Enterprise', price: 'Custom', features: ['Unlimited locations', 'Dedicated manager', 'Custom integrations', 'White label solution'] },
];

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#4f46e5',
    },
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },

    // Header Styles
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    logoBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    logoText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    headerTextContainer: {
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    headerSubtitle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        marginTop: 2,
    },
    logoutBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    logoutText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
    },

    // Hero Section
    section: {
        padding: 20,
    },
    heroContent: {
        marginBottom: 20,
    },
    heroTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#1e293b',
        lineHeight: 36,
    },
    heroDescription: {
        color: '#64748b',
        marginBottom: 24,
        lineHeight: 24,
        fontSize: 15,
    },
    heroImg: {
        width: '100%',
        height: 220,
        borderRadius: 16,
        backgroundColor: '#e2e8f0',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },
    primaryBtn: {
        backgroundColor: '#4f46e5',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        flex: 1,
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    primaryBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // Features Section
    featuresSection: {
        padding: 20,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1e293b',
        textAlign: 'center',
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#64748b',
        textAlign: 'center',
        marginBottom: 24,
    },
    featuresGrid: {
        gap: 16,
    },
    featureCard: {
        backgroundColor: '#f8fafc',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    featureIconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    featureEmoji: {
        fontSize: 32,
    },
    featureTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#1e293b',
        marginBottom: 6,
        textAlign: 'center',
    },
    featureDesc: {
        color: '#64748b',
        lineHeight: 20,
        fontSize: 14,
        textAlign: 'center',
    },

    // Pricing Section
    pricingSection: {
        padding: 20,
    },
    priceCard: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
        borderWidth: 2,
        borderColor: '#e2e8f0',
    },
    featuredCard: {
        borderColor: '#4f46e5',
        borderWidth: 3,
        shadowColor: '#4f46e5',
        shadowOpacity: 0.2,
        transform: [{ scale: 1.02 }],
    },
    popularBadge: {
        position: 'absolute',
        top: -12,
        right: 20,
        backgroundColor: '#4f46e5',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    popularText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 11,
        letterSpacing: 0.5,
    },
    priceTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1e293b',
        marginTop: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginVertical: 12,
    },
    priceValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#4f46e5',
    },
    priceUnit: {
        fontSize: 16,
        color: '#64748b',
        marginLeft: 4,
    },
    divider: {
        height: 1,
        backgroundColor: '#e2e8f0',
        marginVertical: 16,
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkmark: {
        color: '#10b981',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 12,
        width: 24,
    },
    priceFeature: {
        color: '#475569',
        fontSize: 15,
        flex: 1,
    },
    chooseBtn: {
        marginTop: 16,
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: '#f1f5f9',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e2e8f0',
    },
    chooseBtnFeatured: {
        backgroundColor: '#4f46e5',
        borderColor: '#4f46e5',
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    chooseText: {
        color: '#475569',
        fontWeight: '600',
        fontSize: 16,
    },
    chooseFeaturedText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // CTA Section
    ctaBox: {
        borderRadius: 20,
        margin: 20,
        padding: 28,
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 10,
    },
    ctaTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    ctaSubtitle: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        fontSize: 15,
        color: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    ctaButton: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    ctaButtonText: {
        color: '#4f46e5',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // Footer
    footerContainer: {
        padding: 24,
        alignItems: 'center',
    },
    footer: {
        textAlign: 'center',
        color: '#94a3b8',
        fontSize: 13,
        fontWeight: '500',
    },
    footerSubtext: {
        textAlign: 'center',
        color: '#cbd5e1',
        fontSize: 11,
        marginTop: 4,
    },
});
