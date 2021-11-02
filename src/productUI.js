import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";
import { connect } from 'react-redux';
import { addProduct } from './Actions/product';

class ProductUI extends Component {

    static navigationOptions = {
        title: 'Home',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'blue',
        },
    };

    state = {
        product: null,

    }

    // submitProduct = (product) => {
    //     this.setState({
    //         productList: [
    //             ...this.state.productList, {
    //                 key: Math.random(),
    //                 name: product
    //             }
    //         ]
    //     })
    // }

    // deleteProduct = (key) =>{
    //     this.setState({
    //         productList:[
    //             ...this.state.productList.filter((item)=>
    //             item.key !== key)
    //         ]
    //     })
    // }

    render() {
        // console.log(this.state.productList);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Redux</Text>
                <TextInput
                    value={this.state.product}
                    placeholder='Nhap vo'
                    style={styles.productInput}
                    onChangeText={(product) => this.setState({ product })}
                />
                <Button title='Submit'
                    color='black'
                    onPress={() =>this.props.add(this.state.product) }
                />
                <Button title='Go to ProductList'
                    onPress={() =>
                        this.props.navigation.navigate('productList')
                    }
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 16,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize: 64,
        marginBottom: 48
    },
    productInput:{
        fontSize: 32,
        marginBottom: 32,
        borderWidth: 1,
        padding: 8,
        width:'80%',
        borderRadius: 10,
    }

});

const mapStateToProps = (state)=>{
    console.log(state);
    return{
        products: state.productReducer.productList
    }

}

const mapDispatchToProps =(dispatch)=>{
    return{
        add:(product)=>dispatch(addProduct(product))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (ProductUI);
