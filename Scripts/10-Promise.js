let myFun = () => {
  return new Promise((resolve, reject) => {
    console.log("Kasun");
    const myArr = ["You are success", "Kasun", "Dinusha"];
    let error = false;
    if (error) {
      reject("You hava error");
    } else {
      resolve(myArr);
    }
  });
};

myFun()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
