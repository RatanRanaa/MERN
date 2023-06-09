import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzaReducer} from './reducers/PizzaReducer'
import { CartReducer } from './reducers/CartReducer'
import { registerUserReducer, loginUserReducer } from './reducers/UserReducer'
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    CartReducer:CartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer
})


const initialState = {
    CartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser:currentUser
    }
}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store