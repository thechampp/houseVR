import React from 'react'
import { 
    asset,
    Environment,
    NativeModules,
    StyleSheet,  
    Text,
    Image,
    View,
    VrButton
} from 'react-360'
import { connect } from 'react-redux'
import { roomSelected } from '../actions/roomAction'

const { AudioModule } = NativeModules

class AudioPanele extends React.Component{
  _onPlayAudio = () => {
    debugger
    AudioModule.playEnvironmental({
      source: asset('audio/ambient.wav'),
      volume: 0.3
    })
  }

  _onStopAudio = () => {
    debugger
    AudioModule.stopEnvironmental()
  }

  render(){
    return (
      <View style={{flexDirection: 'row'}}>
        <VrButton
          onClick={() => this._onPlayAudio()}
        >
          <Image style={{height:30, width:30}} source={asset('./audioOn.png')} />
        </VrButton>
        <VrButton
          onClick={() => this._onStopAudio()}
        >
          <Image style={{height:30, width:30}} source={asset('./audioOff.png')} />
        </VrButton>
      </View>
    )
  }
}

class Buttons extends React.Component {
    state = {
      room: this.props.room,
      adjacentRooms: this.props.adjacentRooms
    }

    _onRoomSelected = room => {
      this.props.dispatch(roomSelected(room))
      Environment.setBackgroundImage(asset(`./360_${room}.jpg`))
    }

    _adjacentRooms = (adjacentRooms) => {
      return adjacentRooms.map(room => (
        <VrButton 
          key={`${room}` + '-button'} 
          onClick={() => this._onRoomSelected(room)}
        >
          <Text style={{backgroundColor: 'green'}}>{ room }</Text>
        </VrButton>)
      )
    }

    render() {
      
      return (
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={{color: 'black'}}>Room Selected</Text>
            <Text style={{color: 'black'}}>{this.props.room}</Text>
            {this._adjacentRooms(this.props.adjacentRooms)}
            <AudioPanele />
          </View>
        </View>
      );
    }
  };
  
const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 600,
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#FFFFE0',
        borderColor: '#639dda',
        borderWidth: 2,
    }
});

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Buttons)