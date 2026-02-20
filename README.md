# mini-project-04

## Spring 2026

### Topic:

#### a) React Hooks (useEffect, useState)

#### b) Utility-first Style (TailwindCSS, DaisyUI)

#### c) fetch API

## Reading \& Exercise

## 1. React Hooks

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

## 2. Styling Web Apps:

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

b) **Utility-first CSS:** It uses small, single-purpose classes (e.g., `pt-4` for padding-top: `1rem`, `flex` for `display: flex`) applied directly in the HTML markup to build designs.

- **Advantages:**
  - **Rapid Prototyping:** Developers can build interfaces quickly without leaving the HTML file, eliminating the need to context-switch between HTML and separate CSS files.

  - **No "Naming Problem":** It eliminates the need to come up with meaningful or "semantic" class names (e.g., .card-primary vs .card-main).

  - **Smaller CSS Bundles:** Frameworks can automatically purge unused utility classes in the final build, resulting in minimal, optimized production CSS files.

  - **Design Consistency:** Utility classes are usually tied to a predefined design system's configuration (e.g., a specific color palette or spacing scale), which enforces visual consistency across the project.

  - **Avoids Specificity Issues:** Since utility classes have low specificity, developers rarely encounter frustrating CSS specificity battles or need !important declarations.

- **Disadvantages:**
  - **Bloated HTML:** HTML files can become cluttered and less readable with a long list of classes on each element.

  - **Steeper Learning Curve:** New team members may require time to learn the specific utility syntax and workflow of the framework.

  - **Refactoring Challenges:** Changing a design that uses the same combination of utilities in multiple places can be cumbersome without abstracting them into a component

The choice between them **depends heavily on project needs, team preferences, and the required level of design flexibility.**

### ToDo:

a) Install Tailwindcss + DaisyUI:

- https://tailwindcss.com/docs/installation/using-vite

- https://daisyui.com/docs/install/

* Note: is a popular, open-source component library for Tailwind CSS. It acts as a plugin that adds semantic class names (e.g., .btn, .card) to your project, allowing you to build faster without writing long, complex utility class chains. It is CSS-only, meaning it adds no extra JavaScript to your bundle.

b) Create a new project and start using tailwindcss + daisyUI.

- Use a navbar, footer, banner from **DaisyUI** with some customization.

- We will continue to use this project for this weeks work.

## 3) API Calls

An API call is a request sent by one software application to another (the server) to access data or trigger a specific function, which then sends back a response. This mechanism enables different programs to communicate and exchange information seamlessly, forming the foundation of modern web and mobile applications.

### Loading Dummy JSON Data:

- To load dummy JSON data using the **fetch()** API, you can either retrieve data from a local JSON file or use a public, dummy API endpoint.

- The `fetch()` function returns a `Promise` that resolves to a `Response` object, which you then convert to a JavaScript object using response.json()

- for class demo, we will use (https://jsonplaceholder.typicode.com/); then for the project, we will use a local .json file (provided with your project).

```javascript
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) throw new Error("failed to fetch");

      const myData = await response.json();
      setData(myData); // data is loaded properly
      setError(null); // no error

      //console.log(data); //--> testing
    } catch (err) {
      setError(err); // error
      //console.log(err);
      setData(null); // data is still null
    } finally {
      setIsLoading(false); // loading attempted and done
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // [] -> dependency array, if empty, then the effect only takes place at the beginning (first render)

  return (
    <>
      {isLoading && <h1 className="text-7xl">Loading data ... please wait</h1>}
      {!isLoading && data && (
        <ul className="m-10 p-3">
          {data.map((d, index) => (
            <li key={index} className="text-3xl">
              {d.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
```

- **Note:** `async-await`: You may have noticed that the `fetchData()` function is declared as an `async` function and the `fetch(...)` and `response.json()` are called with `await`. So, what do they mean and when should we use them?
  - In React, `async` and `await` are used to handle asynchronous tasks—like fetching data from an API or submitting a form—in a way that looks and behaves like normal, sequential code.
  - `async`: Marks a function as asynchronous. It ensures the function always returns a `Promise`.

  - `await`: this can only be used inside an `async` function. It pauses the function's execution until a `Promise` resolves, then returns the result. This allows you to write code without messy `.then()` chains.

  - **Key Rules:**
    - **Error Handling:** Always use `try...catch` blocks around `await` calls to prevent your app from crashing if a network request fails.

    - **Non-Blocking:** While `await` pauses the function it is in, it does not block the main thread. The rest of your React app remains responsive (e.g., animations and other interactions continue).

    - **Server Components (React 18/19+):** In React Server Components, you can use async/await directly at the component level to fetch data before the component even sends HTML to the browser.

### Resources:

- https://www.w3schools.com/react/react_hooks.asp
