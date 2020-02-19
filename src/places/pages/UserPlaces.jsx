import React from 'react'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Emppire State Building',
        description: 'One of the most famous sky scrappers in the World!',
        imageUrl:'https://i.imgur.com/x3gmYHT.jpg',
        address:'20 w 34th St, New York, NY 10001',
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title:'Emppire State Building',
        description: 'One of the most famous sky scrappers in the World!',
        imageUrl:'https://i.imgur.com/x3gmYHT.jpg',
        address:'20 w 34th St, New York, NY 10001',
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES}/>
}

export default UserPlaces