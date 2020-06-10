import React from 'react'
import Buttons from './Buttons'
import { Provider } from 'react-redux'
import configureStore from '../configureStore/configureStore'

export const store = configureStore()

export default class ButtonsPanel extends React.Component{
    render(){ 
        return (
            <Provider store={store}>
                <Buttons />
            </Provider>
        )
    }
}