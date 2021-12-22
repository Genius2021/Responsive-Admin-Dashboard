import "./CreateUser.css";

function CreateUser() {
    return (
        <div className="create__user">
            <h1 className="new__user">Create New User</h1>
            <form className="new__user__form">
                <div className="new__user__item">
                  <label>First Name:</label>
                  <input type="text" placeholder="john" className="new__user__input"/>
                </div>
                <div className="new__user__item">
                  <label>Last Name:</label>
                  <input type="text" placeholder="Doe" className="new__user__input" />
                </div>
                <div className="new__user__item">
                  <label>Username:</label>
                  <input type="text" placeholder="john22" className="new__user__input" />
                </div>
                <div className="new__user__item">
                  <label>Email:</label>
                  <input type="email" placeholder="john@gmail.com" className="new__user__input" />
                </div>
                
                <div className="new__user__item">
                  <label>Password:</label>
                  <input type="password" placeholder="password" className="new__user__input" />
                </div>
                <div className="new__user__item">
                  <label>Confirm Password:</label>
                  <input type="password" placeholder="confirm password" className="new__user__input" />
                </div>
                <div className="new__user__item">
                  <label>Mobile Number:</label>
                  <input type="tel" placeholder="+123 456 78" className="new__user__input" />
                </div>
                <div className="new__user__item">
                  <label>Address:</label>
                  <input type="text" placeholder="20, Wall Street" className="new__user__input" />
                </div>
                <div className="new__user__item">
                  <label>Gender:</label>
                  <div className="new__user__gender">
                    <input type="radio"  name="gender" id="male" value="male" />
                    <label htmlFor="male" className="radio">Male</label>
                    <input type="radio"  name="gender" id="female" value="female" />
                    <label htmlFor="female"  className="radio">Female</label>
                    <input type="radio"  name="gender" id="others" value="others" />
                    <label htmlFor="others"  className="radio">Others</label>
                  </div>
                </div>
                <div className="new__user__item">
                  <label>Active:</label>
                  <select className="new__user__select" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <button className="create__button">Create</button>
            </form>
        </div>
    )
}

export default CreateUser
