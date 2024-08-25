import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

const rootreducer = combineReducers({
    customer:reducer1,
    simvalidate:reducer2
})

export default rootreducer