import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  const post = useSelector((state) => state.post);
  const { postList, loading } = post;
  console.log(postList);
  return (
    <div className="App">
      <h1>post list</h1>
      <hr />
      {loading ? (
        <h2>loading</h2>
      ) : (
        postList?.map((post) => (
          <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </>
        ))
      )}
    </div>
  );
}

export default App;
