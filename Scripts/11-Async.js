let arr = [];

const myFun = async (val) => {
  let out = await new Promise((res, rej) => {
    setTimeout(() => {
      arr.push(val);
      let err = false;

      err ? rej("Some error") : res("Data Update is Success");
    }, 2000);
  });
  console.log(out);
  console.log(arr);
};
myFun("Kasun");
