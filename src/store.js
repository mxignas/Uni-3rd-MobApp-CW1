import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import mathImg from "./assets/Math.png"
import englishImg from "./assets/English.png"
import artImg from "./assets/Art.png"
import geographyImg from "./assets/Geography.png"
import scienceImg from "./assets/Science.png"
import boxingImg from "./assets/Boxing.png"
import basketballImg from "./assets/Basketball.png"
import volleyballImg from "./assets/Volleyball.png"
import tennisImg from "./assets/Tennis.png"
import soccerImg from "./assets/Soccer.png"
export const store = new Vuex.Store({
    
    state: { 
        Lessons: [
        { id: 1001, url: mathImg, Title: "Lessons", Activity: "Math", Location: "West End", Price: "100", Availability: 5 },
        { id: 1002, url: soccerImg, Title: "Sports", Activity: "Soccer", Location: "Hendon", Price: "50", Availability: 5 },
        { id: 1003, url: englishImg, Title: "Lessons", Activity: "English", Location: "Kensington", Price: "80", Availability: 5 },
        { id: 1004, url: boxingImg, Title: "Sports", Activity: "Boxing", Location: "Hendon", Price: "60", Availability: 5 },
        { id: 1005, url: artImg, Title: "Lessons", Activity: "Art", Location: "London", Price: "80", Availability: 5 },
        { id: 1006, url: tennisImg, Title: "Sports", Activity: "Tennis", Location: "Westminster", Price: "150", Availability: 5 },
        { id: 1007, url: scienceImg, Title: "Lessons", Activity: "Science", Location: "London", Price: "120", Availability: 5 },
        { id: 1008, url: volleyballImg, Title: "Sports", Activity: "Volleyball", Location: "Camden Town", Price: "50", Availability: 5 },
        { id: 1009, url: geographyImg, Title: "Lessons", Activity: "Geography", Location: "London", Price: "60", Availability: 5 },
        { id: 1010, url: basketballImg, Title: "Sports", Activity: "Basketball", Location: "Soho", Price: "95", Availability: 5 },
        ],
        cart: [],
    }
})


