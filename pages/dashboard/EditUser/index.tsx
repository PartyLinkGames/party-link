function ModalEditUser() {
  return (
    <div className="modal-contaneir">
      <section className="bg-primary-dark w-full max-w-sm py-10 col-center justify-center rounded-lg">
        <form className="flex flex-col w-[80%] gap-3 mt-5 text-white">
          <label htmlFor="userName" className="modal-form-label">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Choose your new username..."
            className="modal-form-input border-indigo-500/0 hover:border-yellow-400/70 border-[3px] border-solid"
          />

          <label htmlFor="imageUrl" className="modal-form-label">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Choose your user image..."
            className="modal-form-input border-indigo-500/0 hover:border-yellow-400/70 border-[3px] border-solid"
          />

          <label htmlFor="discord" className="modal-form-label">
            Discord:
          </label>
          <input
            type="text"
            id="discord"
            placeholder="Write your Discord..."
            className="modal-form-input border-indigo-500/0 hover:border-yellow-400/70 border-[3px] border-solid"
          />
          <button type="submit" className="btn-yellow-submit">Save</button>
        </form>
      </section>
    </div>
  );
}
