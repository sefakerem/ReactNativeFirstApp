import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    container: {
        height:300,
        borderRadius:15,
        width:Dimensions.get('window').width/2,
        backgroundColor:'lightgray',
        margin:2
    },
    urunImage:{
        marginTop:36,
        borderRadius:45,
        height:Dimensions.get('window').height/5,
    },
    urunTitle:{
        margin:15,
    },
    urunPrice:{
        marginLeft:12,
        color:'gray'
        
    }

})