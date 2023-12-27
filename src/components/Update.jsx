
const Update = () => {
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Update User</h3>
      <form >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="form-control" placeholder="your name" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" name="email" className="form-control" placeholder="your email" />
        </div>
        <button className="btn btn-info mt-3">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update