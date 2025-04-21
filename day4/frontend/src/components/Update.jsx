import React from 'react'
import axios from 'axios'

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;

    const user = { name, age };

    try {
      await axios.put(`http://localhost:9000/users/${id}`, user);
      alert('User updated successfully');
    } catch (error) {
      console.error("Error updating user:", error);
      alert('Failed to update user');
    }
  }

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleupdate}>
        <label>
          ID:
          <input type="text" name="id" />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" />
        </label>
        <br />
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Update;
