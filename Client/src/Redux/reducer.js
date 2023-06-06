import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:{
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            }
        }
        case REMOVE_FAV:{

            return{
                ...state, 
                myFavorites: action.payload,
            }
        }
        case FILTER:{

            if(action.payload === "ALL") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const allCharactersCopy = [...state.allCharacters]
            const filteredCharacters = allCharactersCopy.filter((character) => character.gender === action.payload) 

            return{
                ...state,
                myFavorites: filteredCharacters
            }
        }
        case ORDER:{

            let orderCharacters = [...state.allCharacters];

            if(action.payload === "A"){
                orderCharacters = state.allCharacters.sort(
                    (a, b) => a.id - b.id
                )
            } else if( action.payload === "D"){
                orderCharacters = state.allCharacters.sort(
                    (a, b) => b.id - a.id
                )
            }

            return {
                ...state,
                myFavorites: orderCharacters
            }
        }
        default:
            return {...state};
    }
}



export default reducer;