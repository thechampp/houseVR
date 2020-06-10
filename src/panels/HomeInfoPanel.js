import React from 'react'
import Info from './Info'
import { store } from './ButtonsPanel'
import { Provider } from 'react-redux'

export default class HomeInfoPanel extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Info />
            </Provider>
        )
    }
}