import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css';

export function App() {

  return (
    <>
      <Header />
      <Post
        author="Diego Nacif"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque molestias, incidunt ad neque eum iste consequatur reiciendis, autem suscipit vero architecto at nisi. Quos corporis delectus, tempora quaerat aspernatur dolore."
      />
      <Post
        author="William Nacif"
        content="Um novo post muito legal"
      />
      
    </>
  )
}

