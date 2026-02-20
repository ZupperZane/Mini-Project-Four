# mini-project-04

## Spring 2026

### Topic: React Hooks (useEffect, useState) + TailwindCSS

### Reading:

1. React Hooks:

- React Hooks are special functions that allow you to use state and other React features in functional components without writing a class. They were introduced in React 16.8 to simplify code, improve readability, and facilitate the reuse of stateful logic.

- Some popular and useful React Hooks are:
  - `useState`
  - `useEffect`
  - `useContext`
  - `useReducer`
  - `useRef`

- We will use `useEffect` and `useState` in today's lab.

  a) `useEffect`: It performs side effects (e.g., data fetching, subscriptions, manual DOM updates) in functional components.
  - check `TestUseEffect.jsx`. While testing it, comment out `<App / >` from the `main.jsx` file and add `<TestUseEffect />` instead. Notice how `useEffect` is triggered/called when the dependency (`count`) changes. -**Note:** if the dependency array is left empty, it means, the `useEffect` function will be called only once (first time DOM rendering).

  - More examples: https://www.w3schools.com/react/react_useeffect.asp (please check before moving forward)

    b) `useState`: The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

2. Styling Web Apps:

   a) **Semantic CSS**: It focuses on naming classes based on the content's meaning or purpose (e.g., .site-header, .main-navigation), keeping the HTML clean and the styling logic separate in a dedicated CSS file.
   - **Advantages:**
     - **Clean HTML:** Keeps the HTML markup clean and focused on structure and content.
     - **Strong Separation of Concerns:** Styles are kept entirely separate from the content in dedicated .css files, which aligns with traditional web development principles.

     - **Ease of Theming/Reskinning:** A single stylesheet can be swapped out to completely change the look of an entire website.
     - **Standardized Components:** Component-based frameworks offer consistent, pre-built UI elements that reduce design decision fatigue and make onboarding new developers easier.

   - **Disadvantages:**
     - **CSS Bloat:** Can lead to large CSS files as projects grow, sometimes with unused or overridden styles.
     - **Customization Difficulties:** Deviating from a component framework's default design can require significant effort, often involving complex overrides or !important rules.
     - **"Naming Things" Problem:** Developers often spend time debating class names and managing naming collisions.

   b) **Utility-first CSS:** It uses small, single-purpose classes (e.g., `pt-4` for padding-top: 1rem, `flex` for display: flex) applied directly in the HTML markup to build designs.
   - **Advantages:**
     - **Rapid Prototyping:** Developers can build interfaces quickly without leaving the HTML file, eliminating the need to context-switch between HTML and separate CSS files.
     - **No "Naming Problem":** It eliminates the need to come up with meaningful or "semantic" class names (e.g., .card-primary vs .card-main).

   - **Smaller CSS Bundles:** Frameworks can automatically purge unused utility classes in the final build, resulting in minimal, optimized production CSS files.
   - **Design Consistency:** Utility classes are usually tied to a predefined design system's configuration (e.g., a specific color palette or spacing scale), which enforces visual consistency across the project.

   - **Avoids Specificity Issues:** Since utility classes have low specificity, developers rarely encounter frustrating CSS specificity battles or need !important declarations.

   -**Disadvantages:**

   -**Bloated HTML:** HTML files can become cluttered and less readable with a long list of classes on each element.

   -**Steeper Learning Curve:** New team members may require time to learn the specific utility syntax and workflow of the framework.

   -**Refactoring Challenges:** Changing a design that uses the same combination of utilities in multiple places can be cumbersome without abstracting them into a component

- The choice between them depends heavily on project needs, team preferences, and the required level of design flexibility.

### ToDos:

### Resources:

- https://www.w3schools.com/react/react_hooks.asp
