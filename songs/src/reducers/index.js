import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:04" },
    { title: "ciao", duration: "2:04" },
    { title: "mariaa", duration: "3:04" },
    { title: "no", duration: "5:04" },
    { title: "scrubs", duration: "3:04" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
