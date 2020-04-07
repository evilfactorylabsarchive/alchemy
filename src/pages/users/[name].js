import Layout from '~/components/MyLayout'
import Profile from '~/components/Profile'
import fetcher from '~/libs/fetch'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const ProfilePage = (props) => {
  const router = useRouter()
  const { data } = useSWR('/api/feed', fetcher)

  return (
    <Layout>
      {data ? (
        <Profile
          profileToLoad={data.filter((profile) => {
            return profile.author.name.toLowerCase().includes(router.query.name)
          })}
        />
      ) : null}
      
    </Layout>
  )
}

export default ProfilePage
