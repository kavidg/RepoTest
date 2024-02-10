import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 16,
    backgroundColor: '#f0f0f0',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    marginTop: 4,
    color: '#888',
  },
  button: {
    backgroundColor: '#007bff', // Color azul para el botón
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Color blanco para el texto del botón
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    textAlign: 'center',
    padding: 10,
  },
});