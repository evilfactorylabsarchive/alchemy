import fetch from '../libs/fetch'
import rssFetcher from './api/feed'
import Layout from '../components/MyLayout'
import Post from '../components/Post'

const Index = (props) => {
  return (
    <Layout>
      <div className='to-render'>
        {props.timeline.map((eachEntry) => (
          <Post key={eachEntry.id} {...eachEntry} />
        ))}
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

Index.getInitialProps = async () => {
  const res = await fetch('https://alchemy.edgy-network.workers.dev')

  return {
    timeline: res,
  }
}

export default Index
