const fooUnknown = (bar: unknown) => {
  if (typeof bar === "number") return bar * 2
}

console.log(fooUnknown(4))
console.log(fooUnknown("bar"))