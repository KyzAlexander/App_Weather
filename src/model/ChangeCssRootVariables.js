export const changeCssRootVariables = (theme) => {
  const root = document.querySelector(":root");

  const components = ["body-background", "components-background"];
  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
};
