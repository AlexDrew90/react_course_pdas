import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

let App = () => {

  return(
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
              title='Alexa'
              handle='@alex99'
              image={AlexaImage}
              description='blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
              />
            </div>
            <div className="column is-3">
            <ProfileCard
            title='Cortana'
            handle='@Cortana32'
            image={CortanaImage}
            description='blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
            />
            </div>
            <div className="column is-3">
            <ProfileCard
            title='Siri'
            handle='@siri199'
            image={SiriImage}
            description='blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
            />
            </div>
          </div>
        </section>
      </div>
    </div>


  );
}

export default App;
