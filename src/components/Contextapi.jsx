import React from 'react'

const Contextapi = () => {
  return (
    <div>
        <h1>Context API</h1>
        <h2>context API is the way to pass data efficiently from one component to another without having to pass it through every nested component,thus avoiding props drilling.</h2>
        <h2>it works on the principle of provider and consumer.</h2>
        <h1>Props drilling</h1>
        <h3>props drilling is the concept where we have to pass data from one component to another through multiple nested components even though the data is not needed there.</h3>
        <h3>it makes our code large and data very vulnerable.</h3>
        <h3>to avoid props drilling,we could use useContext hook,context API or redux concept where we can store our data globally and dirext pass it from one component to another.</h3>
        <h1>State Uplifting</h1>
        <h3>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</h3>
        <h1>Difference between useEffect and useContext</h1>
        <h3>useEffect hook is alternative to componentDidMount,componentWillUnmount and componentDidUpdate in class component.
        it takes two arguments,first is a callback function ,second is a list of dependency array.
        </h3>
        <h3>useContext hook in functional component is a way to avoid props drilling.it is based on Context API and works on the concept of provider and getter component.</h3>
    </div>
  )
}

export default Contextapi