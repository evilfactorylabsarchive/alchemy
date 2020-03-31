import Link from 'next/link'
import ProfileIcon from './ProfileIcon'

const Post = (props) => {
  let date = new Date(props.timestamp)
  let postTime = date.toDateString()

  return (
    <div className='post'>
      <div className='post-menus'>
        <div className='post-header'>
          <div className='profile-icon'>
            <ProfileIcon {...props.author} />
          </div>
          <div className='user-nickname'>
            <Link href='/users/[name]' as={`/users/${props.author.name}`}>
              <span>{props.author.name}</span>
            </Link>

            <br />
            <img
              className='twitter-icon'
              src='https://image.flaticon.com/icons/png/512/23/23931.png'
            />
            <a
              className='twitter-account'
              href={'https://twitter.com/' + props.author.twitter}
              target='_blank'
            >
              {props.author.twitter}
            </a>
          </div>
        </div>

        <div>
          <a href={props.canonical} target='_blank'>
            <img className='post-image' src={props.image} title={props.title} />
          </a>
        </div>

        <div className='post-caption'>
          <div>
            <div className='main-caption'>
              <Link href='/users/[name]' as={`/users/${props.author.name}`}>
                <strong>{props.author.name}</strong>
              </Link>
              {props.title}
            </div>
            <div className='excerpt'>{props.excerpt}</div>
            <div className='timestamp'>{postTime}</div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .post {
            width: 100%;
            background-color: #fff;
            margin-bottom: 60px;
          }
          .post-menus {
            width: 50%;
            margin-left: 14%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
          }
          .post-header {
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          .profile-icon {
            margin: 12px;
          }
          .user-nickname {
            margin-top: 20px;
            margin-bottom: 5px;
            font-family: 'PT Sans', sans-serif;
            font-weight: bold;
            cursor: pointer;
          }
          .twitter-icon {
            width: 12px;
            height: auto;
            margin: 5px 5px 0 10px;
          }
          .twitter-account {
            font-size: 11px;
            padding-bottom: 20px 0px 15px 10px;
            text-decoration: none;
          }
          .post-image {
            width: 100%;
            height: auto;
          }
          .post-caption {
            padding: 16px 16px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            font-family: 'PT Sans', sans-serif;
          }
          .main-caption {
            font-size: 14px;
          }
          .main-caption strong {
            font-weight: bold;
            margin-right: 5px;
            text-decoration: none;
            cursor: pointer;
          }
          .excerpt {
            font-size: 13px;
            margin: 5px 0px 5px 10px;
          }
          .timestamp {
            font-size: 11px;
            margin-top: 15px;
          }
        `}
      </style>
    </div>
  )
}

export default Post
