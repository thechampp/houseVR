import house from '../data/houseData'

let defaultStore = {
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms
}

export default roomReducer = (state = defaultStore, action) => {
    
    switch(action.type){
        case 'roomSelected': 
            return {
                room: house[action.room].roomName,
                info: house[action.room].info,
                adjacentRooms: house[action.room].adjacentRooms
            }
        default: return state
    }
}