import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

let App = () => {

  return(
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title='Alexa' handle='@alex99' image={AlexaImage} />
      <ProfileCard title='Cortana' handle='@Cortana32' image={CortanaImage} />
      <ProfileCard title='Siri' handle='@siri199' image={SiriImage} />
    </div>
  );
}

export default App;
