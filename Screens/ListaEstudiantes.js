import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ListaEstudiantes() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters/staff")
            .then(response => response.json())
            .then(staff => setData(staff))

    }, []);

    function mensaje ( item ){
        Alert.alert("Año de nacimiento", item.name+ " nació en "+ item.yearOfBirth)
  
    }


    return (
        <View>
            <Text style={{ fontSize: 25, alignSelf: 'center' }}></Text>
            <Image style={styles.img}
            source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1024px-Harry_Potter_wordmark.svg.png"}}/>
            <FlatList
                data={data}
                renderItem={({ item }) =>

                    <TouchableOpacity style={styles.btnF} onPress={ ()=>mensaje(item)}>
                        {item.image &&
                            <Image source={{ uri: item.image }} style={styles.imgL} />
                        }
                        <View>
                            <Text style={styles.txtL}> {item.name} </Text>
                            <Text style={styles.txtL} > {item.house}</Text>
                        </View>
                    </TouchableOpacity>

                }

            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtL: {
        fontSize: 25,
    },
    imgL: {
        width: '20%',
        height: '100%',
    },
    btnF:{
        flexDirection:'row',
        height:100
    },
    img:{
        height:"15%"
    }

});