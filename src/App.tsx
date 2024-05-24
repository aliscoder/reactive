import { Suspense, createContext, use, useState } from "react";


const themeContext = createContext<any>(null)

async function getPosts(): Promise<any[]> {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return data;
}

const Posts = () => {
  const posts = use(getPosts());
  const {theme, setTheme} = use(themeContext)
  return (
    <>
    <button onClick={() => setTheme('blue')}>change</button>
    {posts.map((item) => <p style={{color: theme}}>{item.title}</p>)}
    </>

    
  )
};

const App = () => {
  const [theme , setTheme] = useState('black')
  return (
    <div>
      <themeContext.Provider value={{theme,setTheme}}>
       <Suspense fallback={<>Loading ...</>}>
        <Posts />
      </Suspense> 
      </themeContext.Provider>
      
    </div>
  );
};

export default App;
