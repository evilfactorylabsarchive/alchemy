import Layout from '../../components/MyLayout'
import Profile from '../../components/Profile'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const ProfilePage = (props) => {
  const router = useRouter()
  const profileToLoad = props.profiles.filter((profile) => {
    return profile.author.name.toLowerCase().includes(router.query.name)
  })

  return (
    <Layout>
      <Profile profileToLoad={profileToLoad} />
    </Layout>
  )
}

ProfilePage.getInitialProps = async () => {
  const res = await fetch('https://alchemy.edgy-network.workers.dev')
  const data = await res.json()

  return {
    profiles: data,
  }
}

export default ProfilePage
