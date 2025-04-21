import React from 'react'
import axios from 'axios'

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    
    try {
      await axios.delete(`https://fsdbackend-fwxi.onrender.com/users/${id}`);
      alert('User deleted successfully');
    } catch (error) {
      console.error("Error deleting user:", error);
      alert('Failed to delete user');
    }
  }

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleDelete}>
        <label>
          ID:
          <input type="text" name="id" />
        </label>
        <button type='submit'>Delete</button>
      </form>
    </div>
  )
}

export default Delete;
