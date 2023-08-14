import {Metadata} from "next";

export const metadata: Metadata = {
    title:'Home'
}

const Home = () => {
  return(
      <div className="max-w-screen-lg my-8 mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-">
          <div className="flex w-full">something</div>
          <div className="flex w-full">something</div>
          <div className="flex w-full">something</div>
          <div className="flex w-full">something</div>
      </div>
  )
}

export default Home;