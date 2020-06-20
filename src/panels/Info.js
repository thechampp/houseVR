import React from 'react'
import { 
    StyleSheet,  
    Text,
    View, 
} from 'react-360'
import { connect } from 'react-redux'

class Info extends React.Component {
    state = {
      info: this.props.info
    }

    render() {
      return (
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
              <Text style={{color: 'green'}}>Info</Text>
              <Text style={{color: 'green'}}>{this.props.info}</Text>
          </View>
        </View>
      );
    }
  };
  
  const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 1000,
      height: 600,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    greetingBox: {
      padding: 20,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
    }
  });

  const mapStateToProps = state => {
    return state
  }

  export default connect(mapStateToProps)(Info)