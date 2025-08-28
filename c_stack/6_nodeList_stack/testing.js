const Stack = require("./nodeListStack");

const st = new Stack();

st.push(10);
st.push(20);
st.push(30);

st.pop();
st.push(40);
console.log(st.size());

st.peek();
st.display();

/* Di JS, objek seperti Stack, Queue, Graph dll tidak wajib method destroy().
Karena destroy() ini biasa digunakan di C/C++ karena penggunaan malloc atau new yg harus dibebaskan memory di akhir penggunaan secara manual  */