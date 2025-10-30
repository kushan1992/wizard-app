function Account() {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Repeat password
        </label>
        <input
          type="password"
          id="repeat-password"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
        />
      </div>
    </form>
  );
}

export default Account;
