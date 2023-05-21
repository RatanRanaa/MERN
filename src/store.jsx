import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzaReducer} from './reducers/PizzaReducer'
import { CartReducer } from './reducers/CartReducer'

const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    CartReducer:CartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    CartReducer: {
        cartItems: cartItems
    }
}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store