import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

export default function MobileLanding() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>CB</Text>
        </View>
        <Text style={styles.headerTitle}>Community Business Grow</Text>
      </View>

      {/* HERO SECTION */}
      <View style={styles.section}>
        <Text style={styles.heroTitle}>Grow your local business with community-first tools</Text>
        <Text style={styles.heroDescription}>
          Community Business Grow helps small businesses attract local customers, manage bookings, collect reviews, and run promotions.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.primaryBtn}><Text style={styles.primaryBtnText}>Start Free Trial</Text></TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}><Text style={styles.secondaryBtnText}>See Features</Text></TouchableOpacity>
        </View>

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=60' }}
          style={styles.heroImg}
        />
      </View>

      {/* FEATURES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Powerful Features</Text>

        {features.map((item, index) => (
          <View key={index} style={styles.featureCard}>
            <Text style={styles.featureEmoji}>{item.emoji}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* PRICING */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pricing</Text>

        {pricing.map((p, index) => (
          <View key={index} style={[styles.priceCard, p.featured && styles.featuredCard]}>
            <Text style={styles.priceTitle}>{p.title}</Text>
            <Text style={styles.priceValue}>{p.price}</Text>
            {p.features.map((f, i) => (<Text key={i} style={styles.priceFeature}>• {f}</Text>))}
            <TouchableOpacity style={[styles.chooseBtn, p.featured && styles.chooseBtnFeatured]}>
              <Text style={p.featured ? styles.chooseFeaturedText : styles.chooseText}>Choose</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* CONTACT / CTA */}
      <View style={[styles.section, styles.ctaBox]}>
        <Text style={styles.ctaTitle}>Ready to grow your business?</Text>

        <TextInput placeholder="Your email" style={styles.input} />
        <TextInput placeholder="Business name" style={styles.input} />

        <TouchableOpacity style={styles.primaryBtn}><Text style={styles.primaryBtnText}>Start Free Trial</Text></TouchableOpacity>
      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>© {new Date().getFullYear()} Community Business Grow</Text>

    </ScrollView>
  );
}

/* ---------- Data ---------- */
const features = [
  { title: 'Local promotions', description: 'Create targeted offers for nearby customers.', emoji: '🎯' },
  { title: 'Bookings', description: 'Accept bookings and schedule easily.', emoji: '📅' },
  { title: 'Customer reviews', description: 'Collect and display real reviews.', emoji: '⭐' },
  { title: 'Analytics', description: 'Track visits and sales.', emoji: '📊' },
];

const pricing = [
  { title: 'Starter', price: 'Free', features: ['1 location', 'Basic analytics', 'Email support'] },
  { title: 'Pro', price: '$29/mo', featured: true, features: ['5 locations', 'Advanced analytics', 'Priority support'] },
  { title: 'Enterprise', price: 'Custom', features: ['Custom integrations', 'Dedicated manager'] },
];

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },

  header: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', elevation: 2 },
  logoBox: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#4f46e5', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#fff', fontWeight: 'bold' },
  headerTitle: { marginLeft: 12, fontWeight: 'bold', fontSize: 16 },

  section: { padding: 20 },
  heroTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  heroDescription: { color: '#555', marginBottom: 20 },

  heroImg: { width: '100%', height: 200, borderRadius: 12, marginTop: 10 },

  buttonRow: { flexDirection: 'row', gap: 10 },
  primaryBtn: { backgroundColor: '#4f46e5', padding: 12, borderRadius: 8, alignItems: 'center', flex: 1 },
  primaryBtnText: { color: '#fff', fontWeight: 'bold' },
  secondaryBtn: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, alignItems: 'center', flex: 1 },
  secondaryBtnText: { color: '#333' },

  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },

  featureCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 10, elevation: 2, gap: 12 },
  featureEmoji: { fontSize: 28 },
  featureTitle: { fontWeight: 'bold', fontSize: 16 },
  featureDesc: { color: '#666' },

  priceCard: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 12 },
  featuredCard: { borderColor: '#4f46e5', borderWidth: 2 },
  priceTitle: { fontWeight: 'bold', fontSize: 16 },
  priceValue: { fontSize: 22, fontWeight: 'bold', marginVertical: 8 },
  priceFeature: { color: '#555', marginBottom: 4 },

  chooseBtn: { marginTop: 10, padding: 12, borderRadius: 8, backgroundColor: '#eee', alignItems: 'center' },
  chooseBtnFeatured: { backgroundColor: '#4f46e5' },
  chooseText: { color: '#333' },
  chooseFeaturedText: { color: '#fff', fontWeight: 'bold' },

  ctaBox: { backgroundColor: '#4f46e5', borderRadius: 12, margin: 15 },
  ctaTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },

  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10 },

  footer: { textAlign: 'center', color: '#777', padding: 20 }
});
