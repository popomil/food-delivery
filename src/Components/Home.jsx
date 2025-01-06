import { Fragment, useState } from "react"
import Hero from "./Hero"
import Menu from "./Menu"
import Food from "./Food"

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <Fragment>
      <Hero/>
      <Menu id="#menu" setCategory={setCategory}/>
      <Food category={category}/>
    </Fragment>
  )
}

export default Home
