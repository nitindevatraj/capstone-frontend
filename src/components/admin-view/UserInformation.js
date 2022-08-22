import React from "react";
import "./UserInformation.css";
function UserInformation(props) {
  return (
    <div className="table-container">
      <table className="user-info-table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Place</th>
          <th>Bookings</th>
          <th>Feedback</th>
        </tr>
        <tr>
          <td>Debra B Parks</td>
          <td>darius2002@yahoo.com</td>
          <td>904-450-7940</td>
          <td>34</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Daniel A Smyth</td>
          <td>charlie1989@gmail.com</td>
          <td>203-836-3560</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Christopher N</td>
          <td>bobbie2004@gmail.com</td>
          <td>717-462-3816</td>
          <td>28</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Kathleen M</td>
          <td>moriah.aue8@gmail.com</td>
          <td>208-284-6183</td>
          <td>26</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>William V Small</td>
          <td>michaela2004@yahoo.com</td>
          <td>507-270-8564</td>
          <td>25</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Ashley L Mahurin</td>
          <td>lottie1982@hotmail.com</td>
          <td>330-712-3363</td>
          <td>22</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <button type="button" className="close-button" onClick={props.onClick}>
        close
      </button>
    </div>
  );
}

export default UserInformation;
