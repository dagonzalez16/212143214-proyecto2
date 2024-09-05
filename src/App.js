import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id: 1, laptop: "Lenovo T14"},
  {id: 2, laptop: "Lenovo T24"},
  {id: 3, laptop: "Lenovo T74"},
];

class App extends React.Component {
  
  state={data: data}

  render() {
    return (
    <>
    <Container>
    <br/>
      <Button>Insertar</Button>
      <br/><br/>

      <Table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Laptop</th>
        </tr>
        </thead>

        <tbody>
          {this.state.data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.laptop}</td>
              <td><Button>Editar</Button></td>
              <td><Button>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
        
      </Table>
    </Container>
    </>
  );
}
}

export default App;