import fetcher from '~/libs/fetch'
import useSWR from 'swr'

import Layout from '~/components/MyLayout'
import Post from '~/components/Post'

const index = () => {
  const { data } = useSWR('/api/feed', fetcher)

  return (
    <Layout>
      <div className='to-render'>
        {data &&
          data.map((eachEntry) => <Post key={eachEntry.id} {...eachEntry} />)}
      </div>

      <style jsx>
        {`
          .to-render {
            margin-top: 80px;
          }
        `}
      </style>
    </Layout>
  )
}

export default index

// import fetcher from "~/libs/fetch"
// import useSWR from "swr";
// import Layout from "../components/MyLayout"
// import Post from "../components/Post"

// const index = (props) => {

//   const { data } = useSWR("/api/feed", fetcher);

//   return (
//     <Layout>
//       <div className='to-render'>
//         {data.map((eachEntry) => (
//           <Post key={eachEntry.id} {...eachEntry} />
//         ))}
//       </div>

//       <style jsx>
//         {`
//           .to-render {
//             margin-top: 80px;
//           }
//         `}
//       </style>
//     </Layout>
//   )
// }

// export default index
