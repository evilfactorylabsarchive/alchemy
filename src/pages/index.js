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

      <style jsx global>
        {`
          body {
            background-color: #f4f4f4;
          }

          .to-render {
            margin-top: 80px;
          }
        `}
      </style>
    </Layout>
  )
}

export default index
