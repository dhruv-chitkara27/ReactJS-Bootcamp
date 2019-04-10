import React, { Component } from 'react';

//userData

class Profile extends Component {

  render() {
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;


    if(userdata.notFound === 'User not Found'){
    return (
      <div className="notfound">
        <h2>Heyyyy</h2>
        <p>Are you sure, for whom you are looking for ???</p>
      </div>
    );
}
    else {
      return (
        <div>

        </div>
      );
    }
  }
}

export default Profile;
