import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet , TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  function calculoIMC (){
  const resultado = peso / (altura*altura);

  if (resultado <18.5){
  alert('O seu IMC é de ' + resultado + '. ' +'Você está abaixo do peso normal');
  }
  else if (resultado >18.5 && resultado <24.9){
  alert('O seu IMC é de ' + resultado + '. ' +'Você está com o peso normal');
  }
  else if (resultado >25 && resultado <29.9){
  alert('O seu IMC é de ' + resultado + '. ' +'Você está acima do peso.');
  }
  else if (resultado >30 && resultado <34.9){
  alert('O seu IMC é de ' + resultado + '. ' +'Cuidado. Obesidade Classe I.');
  }
  else if (resultado >35 && resultado <39.9){
  alert('O seu IMC é de ' + resultado + '. ' +'Alerta. Obesidade Classe II.');
  }
  else if (resultado >40){
  alert('O seu IMC é de ' + resultado + '. ' +'Alerta. Obesidade Classe III. Obesidade Mórbida.');
  }
}

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState(''); 

  return (
<SafeAreaView style={styles.container}>


      <Text style={styles.paragraph}>
        Cálculo do IMC
      </Text>
    
      <TextInput style={styles.input}
      placeholder="Insira o seu peso em kg" placeholderTextColor="black"
      keyboardType="numeric"
      onChangeText={(peso)=>setPeso(peso)}
      />

      <TextInput style={styles.input}
      placeholder="Insira a sua altura" placeholderTextColor="black"
      keyboardType="numeric"
      onChangeText={(altura)=>setAltura(altura)}
      />

    <TouchableOpacity style={styles.btn} onPress={calculoIMC}>
<Text style={styles.textBtn}> Calcular IMC</Text>
</TouchableOpacity>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#80b3ff',
    padding: 10
  },

  paragraph: {
    margin: 24,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60
  },

  input:{
    fontSize: 24,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20
  },

  btn: {
    alignItems: 'center',
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 15,
    margin: 20,
    marginTop: 70
  },

  textBtn:{
    fontSize:30,
    color: 'white'
  }
});