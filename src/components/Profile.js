const Profile = (props) => {
  const data = props.profileToLoad

  return (
    <div className='profile'>
      <div className='profile-menus'>
        <div className='profile-header'>
          <div className='profile-pic'>
            <img
              src={data[0].author.avatar}
              className='profpic'
              title={data[0].author.name}
              alt={data[0].author.name}
            />
          </div>

          <div className='profile-data'>
            <div className='profile-username'>{data[0].author.name}</div>
            <div className='profile-url'>
              <a
                href={data[0].author.url}
                target='_blank'
                className='the-profile-url'
              >
                <span>{data[0].author.url}</span>
              </a>
            </div>
          </div>
        </div>

        <div className='post-title'>POSTS</div>

        <div className='profile-posts'>
          {data.map((eachPost) => (
            <div key={eachPost.id} className='post'>
              <a href={eachPost.canonical} target='_blank'>
                <img
                  src={eachPost.image}
                  className='post-pic'
                  title={eachPost.title}
                  alt={eachPost.title}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .profile {
            width: 100%;
            background-color: #f4f4f4;
            margin-top: 100px;
          }
          .profile-menus {
            width: 75%;
            margin-left: 14%;
            display: flex;
            flex-direction: column;
          }
          .profile-header {
            display: flex;
            flex-direction: row;
            padding-bottom: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          }
          .profile-pic {
            margin: 0 7% 0 7%;
          }
          .profpic {
            height: 150px;
            width: auto;
            border-radius: 50%;
          }
          .profile-data {
            display: flex;
            flex-direction: column;
          }
          .profile-username {
            margin-top: 20px;
            margin-bottom: 20px;
            font-family: 'PT Sans', sans-serif;
            font-size: 30px;
            font-weight: light;
          }
          .profile-url {
            margin-top: 20px;
            margin-bottom: 5px;
            font-family: 'PT Sans', sans-serif;
            font-weight: bold;
          }
          .the-profile-url {
            color: rgb(60, 108, 186);
            text-decoration: none;
          }
          .post-title {
            margin-top: 15px;
            margin-bottom: 10px;
            font-family: 'PT Sans', sans-serif;
            font-size: 15px;
            font-weight: bold;
            text-align: center;
          }
          .profile-posts {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 10px;
          }
          .post {
            width: 250px;
            height: 250px;
            padding: 16px 16px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
            position: relative;
            background-color: white;
          }
          .post-pic {
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
        `}
      </style>
    </div>
  )
}

export default Profile
