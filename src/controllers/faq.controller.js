import view from '../view/faq.html'

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  return divElement;
}