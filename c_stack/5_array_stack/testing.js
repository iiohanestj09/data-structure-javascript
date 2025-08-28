const Stack = require("./arrayStack");  // import class
let st = new Stack();

st.pop();
console.log(st.peek());

st.push(10);
st.push(20);
st.push(30);

st.pop();
st.push(40);

console.log(st.peek());
console.log(st.size());

st.display();