import './App.css';
import SimpleShowHide from './testing-dasar/03-SimpleShowHide';
import CompVariant from './testing-dasar/05-CompVariant';
import UserEvent from './testing-dasar/06-CompUserEvent';
import CompAxios from './testing-dasar/07-CompAxios';

function App() {
  return (
    <div className="App">
      <>
        {/* <SampleCompRTL /> */}
        <SimpleShowHide />
        <CompVariant />
        <UserEvent />
        <CompAxios />
      </>
    </div>
  );
}

export default App;
