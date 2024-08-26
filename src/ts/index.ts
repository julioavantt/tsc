let future: Promise<string> = new Promise((res) =>
  setTimeout(() => res("Hello"), 3000)
);

future.then((value) => console.log(value));
