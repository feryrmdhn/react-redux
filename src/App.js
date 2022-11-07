import { useState } from 'react';
import { connect } from 'react-redux';
import { getData, delData } from './store/actions/app';
import FormTest from './Form';
import { Button } from 'react-bootstrap';
import './App.css';

function App({ Auth, getData, Data, delData }) {
  const [loading, setLoading] = useState(false)

  const getListData = async () => {
    setLoading(true)
    await getData()
    setLoading(false)
  }

  console.log('check auth response', Auth);

  const remove = async (id) => {
    await delData(id)
  }

  return (
    <div className="App">
      <Button onClick={getListData}>
        {loading ?
          "Loading..."
          :
          "Get data"
        }
      </Button>
      <div>
        {Data.map(item => (
          <div key={item.id}>
            <p>{item.nama}</p>
            <button onClick={() => remove(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <FormTest />
    </div>
  );
}

const mapStateToProps = state => ({
  Data: state.auth.data,
  Auth: state.auth.isAuthenticate
});

const mapDispacthToProps = dispatch => {
  return {
    getData: () => dispatch(getData()),
    delData: (id) => dispatch(delData(id))
  };

};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);