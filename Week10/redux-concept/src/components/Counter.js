import { connect, useDispatch, useSelector } from "react-redux";

const Counter = (props) => {
  console.log(props);
  return (
    <>
      Count: {props.myCount}
      <button onClick={() => props.setCount(props.count + 1)}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("Store state  ", state);
  return {
    myCount: state.counter.count,
  };
};
export default connect(mapStateToProps)(Counter);
