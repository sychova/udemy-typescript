const addNumbers = (): void => {
  console.log(2 + 4);
}

addNumbers();

const throwNewError = (): never => {
  throw new Error("Your Program Terminated because");
};

throwNewError();