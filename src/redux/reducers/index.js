import { combineReducers } from "redux";
import products from "./products";
import filters from "./filters";
import recommendations from "./recommendations"

export default combineReducers({ products: products, filters: filters, recommendations: recommendations });
