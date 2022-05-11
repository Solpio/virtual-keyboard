function CreateBlock(elem, classElem, id = '') {
  const element = document.createElement(elem);
  element.classList.add(classElem);
  if (id) {
    element.id = id;
  }
  return element;
}

export default CreateBlock;
