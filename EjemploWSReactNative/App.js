import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

    constructor(props){
    super(props);

    this.state = {
    loading: false,
    pokemon: [1],
    url: 'https://pokeapi.co/api/v2/pokemon'}
    }

    componentDidMount(){
    this.getPokemon();
    }

    getPokemon = () => {

    this.setState({ loading:true })

    fetch(this.state.url)
    .then(res =>res.json())
    .then( res => {

        this.setState({
        pokemon: res.results,
        url: res.next,
        loading: false
        })
    });
    };

render(){

    if(this.state.loading){
  return (
    <View style={styles.container}>
      <Text>CARGANDO LISTA</Text>
    </View>
         );
    }


    return (
          <View style={{ alignItems: "center", backgroundColor: '#660000',fontSize: 20,
          color: 'white'}, styles.container}>
          <Text> </Text>
          <Text> </Text>
          <Text>LISTA DE POKEMONES</Text>
                <FlatList
                    data={this.state.pokemon}
                    renderItem={({ item }) => (
            <Text> { item.name } </Text>
                    )}
                />
            </View>
          );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#660000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
