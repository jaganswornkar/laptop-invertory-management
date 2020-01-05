import FilesReducer from "./LaptopDetails";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  files: FilesReducer
});

export default allReducers;
