import SnackBar from 'react-native-snackbar'

const BottomAlert = (message) => {
    setTimeout(()=>{
        SnackBar.show({
            text: message,
            duration: SnackBar.LENGTH_LONG,
          })
    }, 500); 
}

export default BottomAlert