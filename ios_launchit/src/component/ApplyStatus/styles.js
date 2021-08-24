import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width:"100%",
        height:55,
        paddingHorizontal:"2%",
        position:"relative",backgroundColor:"#FAFAFA",
        flexDirection:'row',
  
  justifyContent:'space-between',
  alignItems:'center',

    },
    CompletedStatus:{
  flexDirection:'column',
  
  justifyContent:'center',
  alignItems:'center',
  marginTop:6
    },
    SelCompletedStatus:{
        flexDirection:'column',
        
        justifyContent:'center',
        alignItems:'center',
        marginTop:6
          },
    TextStyle:{
        fontSize:10,
        marginTop:11,
        marginBottom:6,
        color:"#000000"
    },
    DisableTextStyle:{
        fontSize:10,
        marginTop:11,
        marginBottom:6,
        color:"#C4C4C4"
    },
    RowStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    LineStyle:{
        width:81,
        backgroundColor:'red',
        height:4
    }

    

})