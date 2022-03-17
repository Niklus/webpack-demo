export default (text = "Hello Universe") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};
