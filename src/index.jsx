import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

/* import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

import noteService from "./services/notes";

import noteReducer, { setNotes } from "./reducers/noteReducer";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

noteService.getAll().then((notes) => store.dispatch(setNotes(notes))); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
