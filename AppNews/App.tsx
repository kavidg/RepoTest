import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from './src/styles/AppStyles';
import { fetchNews } from './src/api/newsApi';

interface NewsItem {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
}

const App = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews(page)
      .then(articles => {
        setNews(prevNews => [...prevNews, ...articles]);
        setLoading(false);
      });
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.description}</Text>
      <Text style={styles.date}>{item.publishedAt}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleOpenURL(item.url)}>
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  
  const handleOpenURL = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error al abrir la URL:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Noticias Globales</Text>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(_item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Text style={styles.loading}>{loading ? 'Cargando...' : ''}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;