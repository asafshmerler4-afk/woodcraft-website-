@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --wood-dark: #5C3D2E;
  --wood-mid: #A0673A;
  --wood-light: #C8956C;
  --cream: #F5F0E8;
  --cream-dark: #EDE5D6;
  --green: #2D4A3E;
  --green-light: #3D6456;
  --text-dark: #1A1A18;
  --text-mid: #4A4A42;
  --text-muted: #7A7A6E;
  --border: rgba(90, 70, 50, 0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Georgia', serif;
  background-color: var(--cream);
  color: var(--text-dark);
}

.sans {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
