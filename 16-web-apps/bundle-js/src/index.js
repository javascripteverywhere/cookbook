import join from 'lodash-es/join';
import foo from './foo';
import bar from './bar';

function component() {
  // create foo,bar element
  const element = document.createElement('div');
  element.innerHTML = join([foo(), bar()]);

  // lazy load button.js on click
  const buttonElement = document.getElementById('button');
  buttonElement.onclick = e =>
    import(/* webpackChunkName: "button" */ './button').then(module => {
      const button = module.default;
      button();
    });

  return element;
}

document.body.appendChild(component());
