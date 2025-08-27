const Stack = require("./arrayStack");  // import class
let st = new Stack();
st.push(10);
st.push(20);
st.push(30);

st.pop();
st.push(40);

st.peek();
st.display();