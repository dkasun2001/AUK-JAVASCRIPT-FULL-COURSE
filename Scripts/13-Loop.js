let myVal = 0;

while (myVal <= 10) {
  myVal++;

  if (myVal == "exit") {
    break;
  } else if (myVal == 5) {
    continue;
  }
  console.log(myVal);
}
