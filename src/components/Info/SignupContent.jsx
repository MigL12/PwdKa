import React, { useState } from 'react';

const Signup = () => {
  const [formType, setFormType] = useState('user');

  const [userFormValues, setUserFormValues] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    birthdate: '',
    contactNumber: '',
    email: '',
    disability: '',
    password: '',
    reEnterPassword: '',
    idPicture: '',
    profilePicture: '',
    selfieWithID: '',
  });

  const [companyFormValues, setCompanyFormValues] = useState({
    companyName: '',
    companyDescription: '',
    companyAddress: '',
    companyCity: '',
    companyContactNumber: '',
    companyEmail: '',
    companyPassword: '',
    companyReEnterPassword: '',
    companyLogo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (formType === 'user') {
      setUserFormValues({ ...userFormValues, [name]: value });
    } else {
      setCompanyFormValues({ ...companyFormValues, [name]: value });
    }
  };

  const handleReset = () => {
    if (formType === 'user') {
      setUserFormValues({
        firstName: '',
        middleInitial: '',
        lastName: '',
        gender: '',
        address: '',
        city: '',
        birthdate: '',
        contactNumber: '',
        email: '',
        disability: '',
        password: '',
        reEnterPassword: '',
        idPicture: '',
        profilePicture: '',
        selfieWithID: '',
      });
    } else {
      setCompanyFormValues({
        companyName: '',
        companyDescription: '',
        companyAddress: '',
        companyCity: '',
        companyContactNumber: '',
        companyEmail: '',
        companyPassword: '',
        companyReEnterPassword: '',
        companyLogo: '',
      });
    }
  };

  const renderUserForm = () => (
    <form className="mt-8 grid grid-cols-12 gap-6">
      {/* User form fields */}
      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userFormValues.firstName}
              onChange={handleInputChange}
              className="mt-2 w-full h-10 rounded-md border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="middleInitial" className="block text-lg font-medium text-gray-700">
              Middle Initial
            </label>
            <input
              type="text"
              id="middleInitial"
              name="middleInitial"
              value={userFormValues.middleInitial}
              onChange={handleInputChange}
              className="mt-2 w-full h-10 rounded-md border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userFormValues.lastName}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-lg font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={userFormValues.gender}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="birthdate" className="block text-lg font-medium text-gray-700">
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={userFormValues.birthdate}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userFormValues.address}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-lg font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={userFormValues.city}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={userFormValues.contactNumber}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="disability" className="block text-lg font-medium text-gray-700">
              Disability
            </label>
            <select
              id="disability"
              name="disability"
              value={userFormValues.disability}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            >
              <option value="" disabled>
                Select disability
              </option>
              <option value="" disabled>Select disability</option>
              <option value="visual">Visual Disability</option>
              <option value="hearing">Deaf or Hard of Hearing</option>
              <option value="learning">Learning Disability</option>
              <option value="mental">Mental Disability</option>
              <option value="physical">Physical Disability (Orthopedic)</option>
              <option value="psychosocial">Psychosocial Disability</option>
              <option value="speech">Speech and Language Impairment</option>
              <option value="intellectual">Intellectual Disability</option>
              <option value="cancer">Cancer (RA11215)</option>
              <option value="rare">Rare Disease (RA10747)</option>
              {/* Add disability options here */}
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userFormValues.email}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userFormValues.password}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="reEnterPassword" className="block text-lg font-medium text-gray-700">
              Re-Enter Password
            </label>
            <input
              type="password"
              id="reEnterPassword"
              name="reEnterPassword"
              value={userFormValues.reEnterPassword}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4">
        <div>
          <label htmlFor="idPicture" className="block text-lg font-medium text-gray-700">
            PWD ID Picture
          </label>
          <input
            type="file"
            id="idPicture"
            name="idPicture"
            value={userFormValues.idPicture}
            onChange={handleInputChange}
            className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
            accept="image/*"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="profilePicture" className="block text-lg font-medium text-gray-700">
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            value={userFormValues.profilePicture}
            onChange={handleInputChange}
            className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
            accept="image/*"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="selfieWithID" className="block text-lg font-medium text-gray-700">
            Selfie with PWD ID
          </label>
          <input
            type="file"
            id="selfieWithID"
            name="selfieWithID"
            value={userFormValues.selfieWithID}
            onChange={handleInputChange}
            className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
            accept="image/*"
          />
        </div>
      </div>
    </form>
  );

  const renderCompanyForm = () => (
    <form className="mt-8 grid grid-cols-12 gap-6">
      {/* Company form fields */}
      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-lg font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyFormValues.companyName}
              onChange={handleInputChange}
              className="mt-2 w-full h-10 rounded-md border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyDescription" className="block text-lg font-medium text-gray-700">
              Company Description
            </label>
            <input
              type="text"
              id="companyDescription"
              name="companyDescription"
              value={companyFormValues.companyDescription}
              onChange={handleInputChange}
              className="mt-2 w-full h-10 rounded-md border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyAddress" className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              value={companyFormValues.companyAddress}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyCity" className="block text-lg font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="companyCity"
              name="companyCity"
              value={companyFormValues.companyCity}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyContactNumber" className="block text-lg font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="companyContactNumber"
              name="companyContactNumber"
              value={companyFormValues.companyContactNumber}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyEmail" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={companyFormValues.companyEmail}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyPassword" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="companyPassword"
              name="companyPassword"
              value={companyFormValues.companyPassword}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="companyReEnterPassword" className="block text-lg font-medium text-gray-700">
              Re-Enter Password
            </label>
            <input
              type="password"
              id="companyReEnterPassword"
              name="companyReEnterPassword"
              value={companyFormValues.companyReEnterPassword}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-md h-10 border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
              required
            />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4">
        <div>
          <label htmlFor="companyLogo" className="block text-lg font-medium text-gray-700">
            Company Logo
          </label>
          <input
            type="file"
            id="companyLogo"
            name="companyLogo"
            value={companyFormValues.companyLogo}
            onChange={handleInputChange}
            className="mt-2 w-full rounded-md border-gray-300 bg-white text-lg text-gray-700 shadow-sm"
            accept="image/*"
          />
        </div>
      </div>
    </form>
  );

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="src\imgs\group-adult-workers-office-together.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content here */}
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to PwdKa!
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
              quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-start justify-start px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-custom-bg">
          <div className="w-full">
            <div className="switchContainer flex justify-start items-center gap-10 mb-6">
              <span className="switchLabel font-bold text-lg text-custom-blue">Sign up as:</span>
              <div className="switchButtons flex gap-4">
                <button
                  className={`switchButton ${
                    formType === 'user' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
                  } px-4 py-2 rounded-md`}
                  onClick={() => setFormType('user')}
                >
                  User
                </button>
                <button
                  className={`switchButton ${
                    formType === 'company' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
                  } px-4 py-2 rounded-md`}
                  onClick={() => setFormType('company')}
                >
                  Company
                </button>
              </div>
            </div>

            {formType === 'user' ? renderUserForm() : renderCompanyForm()}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;  