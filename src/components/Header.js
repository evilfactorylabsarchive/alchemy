import Link from 'next/link'
import ProfileIcon from '~/components/ProfileIcon'

const Header = () => {
  // since I don't see any code that *mutating* the state, I assume this is not a dynamic data
  const state = {
    name: 'evilfactorylabs blog',
    avatar: 'https://avatars1.githubusercontent.com/u/43804217?s=200&v=4',
  }

  return (
    <div className='header'>
      <div className='header-menus'>
        <Link href='/'>
          <img
            src='https://i.imgur.com/eE2rJ0x.png'
            className='logo'
            alt='alchemy logo'
            title='Alchemy'
          />
        </Link>

        <div className='profile-icon'>
          <ProfileIcon {...state} />
        </div>
      </div>

      <style jsx>
        {`
          .header {
            top: 0;
            height: 50px;
            width: 100%;
            position: fixed;
            background-color: white;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          .header-menus {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 75%;
            margin: 0 auto;
          }
          .logo {
            height: 30px;
            width: auto;
            margin: 12px 10px 10px 20px;
            cursor: pointer;
          }
          .profile-icon {
            margin: 12px 10px 10px 20px;
          }
        `}
      </style>
    </div>
  )
}

export default Header
