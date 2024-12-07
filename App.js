import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0); // Skor Tim A
  const [teamBScore, setTeamBScore] = useState(0); // Skor Tim B

  // Fungsi untuk menambah dan mengurangi skor
  const incrementScoreA = () => setTeamAScore((prev) => prev + 1);
  const decrementScoreA = () => {
    if (teamAScore > 0) setTeamAScore((prev) => prev - 1);
  };
  const incrementScoreB = () => setTeamBScore((prev) => prev + 1);
  const decrementScoreB = () => {
    if (teamBScore > 0) setTeamBScore((prev) => prev - 1);
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      {/* Header dalam Kotak */}
      <View style={styles.fullTimeContainer}>
        <Text style={styles.fullTime}>FULL TIME</Text>
      </View>

      {/* Match Container */}
      <View style={styles.matchContainer}>
        {/* Tim B */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>KOSARANG</Text>
          <Image
            source={{
              uri: 'https://warungfreelancer.com/src/gambar/produk/beli-template-logo-tim-futsal.webp',
            }}
            style={styles.logo}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={incrementScoreB}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementScoreB}>
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Skor */}
        <Text style={styles.score}>
          {teamBScore} - {teamAScore}
        </Text>

        {/* Tim A */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>LOREMIPSUM</Text>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/soccer-football-badge-logo-sport-team-identity-vector-illustrations-isolated-ect_220203-432.jpg?w=2000',
            }}
            style={styles.logo}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={incrementScoreA}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementScoreA}>
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Pesan Pemenang */}
      <View style={styles.winnerContainer}>
        {teamAScore >= 10 && <Text style={styles.winnerText}>LOREMIPSUM Menang!</Text>}
        {teamBScore >= 10 && <Text style={styles.winnerText}>KOSARANG Menang!</Text>}
      </View>

      {/* Tombol Reset */}
      <View style={styles.resetButtonContainer}>
        <TouchableOpacity onPress={resetScores}>
          <Text style={styles.textButton}>Reset Skor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b22222', // Warna merah gelap
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fullTimeContainer: {
    position: 'absolute',
    top: 200, // Posisi lebih ke atas
    backgroundColor: '#FFFFFF', // Warna latar belakang putih untuk kontras
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10, // Membuat sudut kotak menjadi melingkar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Untuk efek bayangan di Android
  },
  fullTime: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B0000', // Warna teks merah gelap
    textAlign: 'center',
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 80, // Memberi ruang untuk kotak FULL TIME
  },
  teamContainer: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
  },
  teamName: {
    fontSize: 15.7,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  score: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: 100,
  },
  textButton: {
    color: 'white', // Warna teks putih
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  winnerContainer: {
    marginTop: 20,
  },
  winnerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
  },
  resetButtonContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
});
