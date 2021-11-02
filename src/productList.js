import React, { Component } from 'react';
import { StyleSheet, FlatList,View,Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { connect } from 'react-redux'; //kết nối redux
import { deleteProduct } from './Actions/product';

class ProductList extends Component {

    static navigationOptions = {
        title: 'Product List',
        headerTintColor: 'black',
        headerStyle: {
            backgroundColor: 'green',
        },
    };

    render() {
        // console.log(this.props.navigation.getParam('deleteProduct'));
        return (
        
            <FlatList style={styles.listContainer}
                data={ this.props.products}
                keyExtractor={(item, index) => item.key.toString()}
                renderItem={
                    (data) =>                  
                        // <Text  style={styles.innerText}>{data.item.name}
                        //     <Text name='delete' size={36} onPress={() => this.props.delete(data.item.key)}>Xóa</Text>
                        // </Text>     
                       <ListItem>
                           <ListItem.Title>{data.item.name}</ListItem.Title>
                           <Icon name='delete' size={36} onPress={() => this.props.delete(data.item.key)} size={30} />
                          
                       </ListItem>                        
                }
            />
        );
    }
};

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'grey',
        padding: 16,
        
    },
    innerText: {
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: 'red',
        padding: 16
      },
    listText: {
        fontSize: 30,
         
    },
   
});

const mapStateToProps = (state)=>{
    console.log(state);
    return{
        products: state.productReducer.productList
    }

}
const mapDispatchToProps =(dispatch)=>{
    return{
        delete:(key)=>dispatch(deleteProduct(key))
    }

}
export default connect(mapStateToProps, mapDispatchToProps) (ProductList);