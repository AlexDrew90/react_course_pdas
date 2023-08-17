let ProfileCard = ({title, handle, image}) => {
  // const title = props.title
  // const handle = props.handle
  return <div>
          <div><img src={image} alt="pda logo"/></div>
          <p>The assistant is called {title} and the handle is {handle}.</p>
        </div>
}

export default ProfileCard;
