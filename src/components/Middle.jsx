import {Emotion} from './Emotion'
export const Middle = () => {
  return <div className="container">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col mb-2">#</th>
          <th scope="col mb-2">Jan</th>
          <th scope="col mb-2">Fab</th>
          <th scope="col mb-2">Mar</th>
          <th scope="col mb-2">Apr</th>
          <th scope="col mb-2">May</th>
          <th scope="col mb-2">Jun</th>
          <th scope="col mb-2">Jul</th>
          <th scope="col mb-2">Aug</th>
          <th scope="col mb-2">Seb</th>
          <th scope="col mb-2">Oct</th>
          <th scope="col mb-2">Nov</th>
          <th scope="col mb-2">Dec</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td><Emotion /></td>
      <td><Emotion /></td>
      <td><Emotion /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>
  </div>
}