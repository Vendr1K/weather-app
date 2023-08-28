export function changeCssRootVariables(theme) {
  const root = document.querySelector(':root');

  const components = [
    'background-light',
    'color-white',
    'color-text',
    'color-gray',
    'body',
    'color-84',
    'color-E6',
  ];

  components.forEach(component => {
    root.style.setProperty(
      `--${component}`,
      `var(--${component}_${theme})`
    );
  });
}