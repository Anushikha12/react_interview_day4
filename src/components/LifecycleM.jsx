import React from 'react'

const LifecycleM = () => {
  return (
    <div>
        <h1>What are React Life cycles Explain each one with Example</h1>
        <h3>every component in react goes through a lifecycle which involves 4 phases ,i.e,initializing,mounting,updating and unmounting.</h3>
        <h3>Mounting means putting the component in DOM.when a component mounts,4 built-in methods executes which are--
            <ul>
                <li>Constructor()--this method is called before anything else.state is declared here.</li>
                <li>getDerivedStateFromProps()--called just before the render method.</li>
                <li>render()--most important method and required.</li>
                <li>componentDidMount()--called after the component is mounted .</li>
            </ul>
        </h3>
        <h3>During the updating phase,5 built-in methods are called which are--
            <ul>
                <li>getDerivedStateFromProps()--it is called first to get the data which is changing.</li>
                <li>shouldComponentUpdate()--by default,its value is true.it always returns a boolean value.</li>
                <li>render()--render method is required.</li>
                <li>getSnaPshotBeforeUpdate()--to get the previous state and props.if we execute this without componentDidUpdate(),then we will get an error.</li>
                <li>componentDidUpdate()--this method is called after our component updates.</li>
            </ul>
        </h3>
        <h3>Unmounting means removing the component from DOM.during this phase,one method is called which is componentWillUnmount().</h3>
    </div>
  )
}

export default LifecycleM