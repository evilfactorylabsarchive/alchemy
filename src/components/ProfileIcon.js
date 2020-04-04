import Link from 'next/link'

const ProfileIcon = (props) => {
  return (
    <div>
      <Link href='/users/[name]' as={`/users/${props.name}`}>
        <img
          src={props.avatar}
          className='avatar'
          title={props.name}
          alt={props.name}
        />
      </Link>

      <style jsx>
        {`
          .avatar {
            height: 30px;
            width: auto;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default ProfileIcon
