/*
import {useCallback} from 'react'

const mapReducer = (state, action) => {
    switch(action.type) {
        case 'MAP_SET_DATA':
        return {
        inputs:action.inputs,
        payload:[latitude,longitude]     
    }
    default: 
    return state
    }
}

export const setMapData = useCallback((inputData,[latitude, longitude]) => {
    dispatch({
     type:'MAP_SET_DATA',
     inputs:inputData,
     latitude,
     longitude,
    })
},[])

return [setMapData] */
