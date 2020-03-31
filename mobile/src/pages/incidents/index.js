import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './style.css';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}></Image>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>


      <FlatList 
        data={[1, 2, 3, 4, 5]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        shownVerticalScrollIndicator={false}
        renderItem={() => (
        <View style={styles.Incidents}>
          <Text style={[styles.incidentProperty, { marginTop: 0 } ]}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>120,00</Text>

          <TouchableOpacity 
            style={styles.detailButton}
            onPress={navigateToDetail}
          >
          <Text style={styles.detaillsButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="#E02041" />
        </TouchableOpacity>
     </View>
        )}
      />
    </View >
  );
}