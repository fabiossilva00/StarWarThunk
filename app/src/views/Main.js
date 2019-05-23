import React from 'react'
import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPeople } from '../services/request/getPeople'
import { fetchDataRejected } from '../redux/reducers/peopleReducer'

class Main extends React.Component {

    _renderItem = ({ item }) => {
        return (
            <View style={{width: '100%', marginBottom: 7, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text>Nome: </Text><Text>{item.name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Aniversário: </Text><Text>{item.birth_year}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Gênero: </Text><Text>{item.gender}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Altura: </Text><Text>{item.height}</Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex: 1}} >
                <Button title='Get People'
                    onPress={() => {
                        this.props.getPeople()
                        // console.log(this.props)
                    }}
                />
                <Button title='Print Props'
                    onPress={() => {
                        console.log(this.props)
                    }}
                />                
                {this.props.loading ? 
                    (
                        <Text style={{alignSelf: 'center'}}>{`Loading ... ${this.props.loading}`}</Text>    
                    )
                : null 
                }
                {
                    this.props.people != 0 && this.props.loading != true ?
                    (
                        <FlatList 
                            keyExtractor={(item, index) => index.toString()}
                            data={this.props.people}
                            renderItem={this._renderItem}
                        />
                    )
                    : null
                }
                {
                    this.props.errorMessage != '' ?
                    (
                        <Text style={{alignSelf: 'center'}}>Status {this.props.errorMessage}</Text>
                    )
                    : null
                }
            </View>
        )
    }
}

const mapStateToProps = store => ({
    people: store.peopleState.people,
    loading: store.peopleState.loading,
    errorMessage: store.peopleState.errorMessage
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({getPeople, fetchDataRejected}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)