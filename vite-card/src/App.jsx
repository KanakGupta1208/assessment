import './App.css';
import Circle from './component/welcome_circle/Circle';
import Button from './component/buttons/Button';

function App() {

  return (
    <>
      <div >

        <div className="outer-container">
          <div className="card">
            <h1 className="heading">
              Ah!!, I never saw someone from your <br />Company.
            </h1>
            <div className="line"></div>
            <Circle />
            <Button />
            <div className="footer-section">
              <div className="footer-text">
                **Tenant Connections are not allowed in free tier, however you can still
                explore the website
                <br /> features.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;