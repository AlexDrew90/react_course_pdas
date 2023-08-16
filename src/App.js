import ProfileCard from './ProfileCard'

let App = () => {
  return(
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title='Alexa' handle='@alex99'/>
      <ProfileCard title='Cortana' handle='@Cortana32'/>
      <ProfileCard title='Siri' handle='@siri199'/>
    </div>
  );
}

export default App;
