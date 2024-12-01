import { useState } from "react";

const CreateTokenForm = () => {
  const [createTokenForm, setCreateTokenForm] = useState({
    asset_name: "",
    supply_cap: [0],
    challenge: null,
    metadata: {
      property_name: "",
      location: "",
      size_sqm: "",
      year_acquired: "",
      owner_name: "",
      property_document: null,
      plot_number: "",
    },
    name: "",
    description: "",
    asset_content_type: "",
    asset_content: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateTokenForm({
      ...createTokenForm,
      [name]: value,
    });
  };

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setCreateTokenForm({
      ...createTokenForm,
      metadata: {
        ...createTokenForm.metadata,
        [name]: value,
      },
    });
  };

  const handleChallenge = (e) => {
    const file = e.target.files[0];
    setCreateTokenForm({
      ...createTokenForm,
      challenge: file,
    });
  };

  const handleAssetContent = (e) => {
    const file = e.target.files[0];
    setCreateTokenForm({
      ...createTokenForm,
      asset_content: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createTokenForm);
    //mint logic goes here
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md max-h-[70vh] overflow-y-auto"
      >
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">
          Create Asset
        </h2>

        {/* Asset Name */}
        <div className="mb-6">
          <label
            htmlFor="asset_name"
            className="block text-sm font-medium text-gray-600"
          >
            Asset Name
          </label>
          <input
            type="text"
            id="asset_name"
            name="asset_name"
            value={createTokenForm.asset_name}
            onChange={handleChange}
            className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter asset name"
            required
          />
        </div>

        {/* Supply Cap */}
        <div className="mb-6">
          <label
            htmlFor="supply_cap"
            className="block text-sm font-medium text-gray-600"
          >
            Supply Cap
          </label>
          <input
            type="number"
            id="supply_cap"
            name="supply_cap"
            value={createTokenForm.supply_cap[0]}
            onChange={handleChange}
            className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-600"
            placeholder="Enter supply cap"
          />
        </div>

        {/* Metadata */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Property Metadata
          </h3>

          {/* Property Name */}
          <div className="mb-4">
            <label
              htmlFor="property_name"
              className="block text-sm font-medium text-gray-600"
            >
              Property Name
            </label>
            <input
              type="text"
              id="property_name"
              name="property_name"
              value={createTokenForm.metadata.property_name}
              onChange={handleMetadataChange}
              className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter property name"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={createTokenForm.metadata.location}
              onChange={handleMetadataChange}
              className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          {/* Size (sqm) */}
          <div className="mb-4">
            <label
              htmlFor="size_sqm"
              className="block text-sm font-medium text-gray-600"
            >
              Size (sqm)
            </label>
            <input
              type="number"
              id="size_sqm"
              name="size_sqm"
              value={createTokenForm.metadata.size_sqm}
              onChange={handleMetadataChange}
              className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter size in sqm"
            />
          </div>

          {/* Year Acquired */}
          <div className="mb-4">
            <label
              htmlFor="year_acquired"
              className="block text-sm font-medium text-gray-600"
            >
              Year Acquired
            </label>
            <input
              type="number"
              id="year_acquired"
              name="year_acquired"
              value={createTokenForm.metadata.year_acquired}
              onChange={handleMetadataChange}
              className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter year acquired"
            />
          </div>

          {/* Owner Name */}
          <div className="mb-4">
            <label
              htmlFor="owner_name"
              className="block text-sm font-medium text-gray-600"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="owner_name"
              name="owner_name"
              value={createTokenForm.metadata.owner_name}
              onChange={handleMetadataChange}
              className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter owner name"
            />
          </div>

          {/* Plot Number */}
          <div className="mb-4">
            <label
              htmlFor="plot_number"
              className="block text-sm font-medium text-gray-600"
            >
              Plot Number
            </label>
            <input
              type="text"
              id="plot_number"
              name="plot_number"
              value={createTokenForm.metadata.plot_number}
              onChange={handleMetadataChange}
              className="mt-2 block w-full py-3 px-4 rounded-md border-gray-300 shadow-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter plot number"
            />
          </div>

          {/* Property Document */}
          <div className="mb-4">
            <label
              htmlFor="property_document"
              className="block text-sm font-medium text-gray-600"
            >
              Property Document
            </label>
            <input
              type="file"
              id="property_document"
              name="property_document"
              accept=".pdf, .jpg, .png"
              onChange={handleChallenge}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Mint Token
        </button>
      </form>
    </div>
  );
};

export default CreateTokenForm;
