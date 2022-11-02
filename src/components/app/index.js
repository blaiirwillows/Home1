import React from "react";
import PostList from "../post-list";

const App = () => {
    const WithCalcNum = WithCalculate(CalculateClientNum);
    const WithClientNum = WithCalculate(CalculateNum);

    return (
        <div>
            <PostList/>
            <WithCalcNum a={12} b={6} title="Hello" test="Test data" />
            <WithClientNum a={45} b={90} title="Hi" />
        </div>
    );
};

const WithCalculate = (Wrapp) => ({a,b, ...props}) => {
    const c = a + b;

    console.log(props);
    return <Wrapp result={c} {...props} />;
};

const CalculateClientNum = ({result, title, test}) => {
    return(
        <h1>
            {result} {title} {test}
        </h1>
    );
};

const CalculateNum = ({result, title}) => {
    return(
        <p>
            {result} {title} 
        </p>
    );
};

export default App;