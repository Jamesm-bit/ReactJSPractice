import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let FNameVal = null;
let LNameVal = null;
let ColorVal = null;

const dummyArray = [{fName: "J",lName:"M",color:"#ff6600"},{fName: "J",lName:"M",color:"#ff6600"},{fName: "J",lName:"M",color:"#ff6600"},{fName: "J",lName:"M",color:"#ff6600"},{fName: "J",lName:"M",color:"#ff6600"}]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArray: []
    }
    
  }

  add = () => {
    const listOfNames = this.state.nameArray;
    listOfNames.push({fName:FNameVal, lName:LNameVal, color:ColorVal})
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("selectedColor").value = "";
    this.setState({ nameArray: listOfNames })
  }

  handleOnChangeFName = (input) => {
    FNameVal = input.target.value;
  }

  handleOnChangeLName = (input) => {
    LNameVal = input.target.value;
  }

  handleOnChangeColor = (input) => {
    ColorVal = input.target.value;
  }

  handleSubmit(event) {
    alert('this was submited');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="fname" placeholder="First Name" required onChange={this.handleOnChangeFName} value="test"/>
          <input type="text" id="lname" placeholder="Last Name" required onChange={this.handleOnChangeLName} value="test"/>
          <input type="text" id="selectedColor" placeholder="#background color" required />

          <select id="textSize" placeholder="Text Size">
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>

          <button type="submit" className="topButton" id="Add" onClick={this.add}>Add</button>
          <button type="button" className="topButton" id="confirmEdit">Update</button>
        </form>

        <div>
          {this.state.nameArray.map((item, index) => {

            let colorInput = {
              color: item.color
            }

            return (

              <div id={index} key={index}>
                <p className="innamef" id={"fNameID" + index} style={colorInput}>{item.fName}</p>
                <p className='innamel' id={"lNameID" + index} style={colorInput}>{item.lName}</p>
                <button className="fNameButton" onClick={() => {
                  document.getElementById("fNameID"+index).innerHTML = FNameVal
                  document.getElementById("lNameID"+index).innerHTML = LNameVal
                }}>Edit</button>
                <button className="lNameButton" onClick={() => {
                  let delobject = document.getElementById(index)
                  delobject.remove();
                }}>Delete</button>
              </div>
            )
          })}
        </div>

      </div>

      /*
      <form onsubmit="return false">
        <input type="text" id="fname" placeholder="First Name" required />
        <input type="text" id="lname" placeholder="Last Name" required />
        <input type="text" id="selectedColor" placeholder="#background color" required>

          <select id="textSize" placeholder="Text Size">
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>

          <button type="submit" class="topButton" id="Add" onclick="add()"><i class="fas fa-plus-circle"></i> Add</button>
          <button type="button" class="topButton" id="confirmEdit" onclick="editFinish()">Update</button>
          <button type="button" class="topButton" id="render" onclick="renderTestData()">Render</button>
    </form>
        <div>
          <input type="checkbox" id="checkbx" onclick="checkAll()">Select All</input>
        <p id="totalselec">Total 0 Selected Rows</p>
            <button type="button" id="checkdel" onclick="removeChecked()">Delete</button>
    </div>
          <list id="list">

          </list>
          */
    )
  }

}


ReactDOM.render(<App />, document.getElementById('root'))
