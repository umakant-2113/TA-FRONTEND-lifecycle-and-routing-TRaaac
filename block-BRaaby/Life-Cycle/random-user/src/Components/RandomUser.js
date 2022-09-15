import React from 'react';
import Loader from './Loader';

class RandomUser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results });
      });
  }

  handleRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results });
      });
  };

  handleUser = (...value) => {
    let str = '';
    value.map((elm) => {
      str += elm + ' ';
    });

    let h12 = document.querySelector('.heading');
    h12.innerText = 'MY Name Is';
    let h2 = document.querySelector('.heading2');
    h2.innerText = str !== undefined ? str : '';
  };
  emailHandle = (value) => {
    let h12 = document.querySelector('.heading');
    h12.innerText = 'MY Email Is';
    let h2 = document.querySelector('.heading2');
    h2.innerText = value !== undefined ? value : '';
  };

  handleAge = (value) => {
    let h12 = document.querySelector('.heading');
    h12.innerText = 'MY Age Is';
    let h2 = document.querySelector('.heading2');
    h2.innerText = value !== undefined ? value : '';
  };

  handleAddress = (...value) => {
    let str = '';
    value.map((elm) => {
      str += elm + ' ';
    });

    let h12 = document.querySelector('.heading');
    h12.innerText = 'MY Address Is';
    let h2 = document.querySelector('.heading2');
    h2.innerText = str !== undefined ? str : '';
  };

  handlePhone = (value) => {
    let h12 = document.querySelector('.heading');
    h12.innerText = 'MY Phone Is';
    let h2 = document.querySelector('.heading2');
    h2.innerText = value !== undefined ? value : '';
  };

  handlepassword = (value) => {
    let h12 = document.querySelector('.heading');
    h12.innerText = 'MY Password Is';
    let h2 = document.querySelector('.heading2');
    h2.innerText = value !== undefined ? value : '';
  };

  render() {
    if (this.state.data !== null) {
      let profile = this.state.data[0];

      return (
        <>
          <section className='section'>
            <div className='div1'>
              <div className='image-box'>
                <figure className='figure'>
                  <img src={profile.picture.large} alt='' />
                </figure>
              </div>
              <div className='image-box2'>
                <h2 className='heading'>My Name Is </h2>
                <h2 className='heading2'>
                  {profile.name.title} {profile.name.first} {profile.name.last}
                </h2>
                <div className='icon-div'>
                  <i
                    class='fa-solid fa-user'
                    onClick={() =>
                      this.handleUser(
                        profile.name.title,
                        profile.name.first,
                        profile.name.last
                      )
                    }
                  ></i>
                  <i
                    class='fa-solid fa-envelope-open-text'
                    onClick={() => this.emailHandle(profile.email)}
                  ></i>
                  <i
                    class='fa-solid fa-calendar-days'
                    onClick={() => this.handleAge(profile.dob.age)}
                  ></i>
                  <i
                    class='fa-solid fa-map'
                    onClick={() =>
                      this.handleAddress(
                        profile.location.city,
                        profile.location.state,
                        profile.location.country
                      )
                    }
                  ></i>
                  <i
                    class='fa-solid fa-phone'
                    onClick={() => this.handlePhone(profile.phone)}
                  ></i>
                  <i
                    class='fa-solid fa-lock'
                    onClick={() => this.handlepassword(profile.login.password)}
                  ></i>
                </div>

                <div className='btn-4'>
                  <button
                    onClick={
                      this.state.data == null ? (
                        <Loader />
                      ) : (
                        this.handleRandomUser
                      )
                    }
                  >
                    Random User{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className='div2'></div>
          </section>
        </>
      );
    }
  }
}

export default RandomUser;
