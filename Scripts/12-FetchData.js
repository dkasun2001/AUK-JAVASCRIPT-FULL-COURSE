/* const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};
getData(); */

const sendData = [
  { userID: 123, title: "Some title", body: "Some body" },
  { userID: 124, title: "Some title", body: "Some body" },
  { userID: 125, title: "Some title", body: "Some body" },
  { userID: 126, title: "Some title", body: "Some body" },
  { userID: 127, title: "Some title", body: "Some body" },
  { userID: 128, title: "Some title", body: "Some body" },
];

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(sendData),
  });
  const data = await res.json();
  console.log(data);
};
getData();
