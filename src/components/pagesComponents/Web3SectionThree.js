const Web3SectionThree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <i className="fas fa-shield-alt text-blue-500 text-2xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">
            Immutable Proof of Ownership
          </h2>
          <p className="text-gray-600">
            Your YouTube channel is tokenized on the blockchain, ensuring you
            can always prove that you are the rightful owner of your content.
          </p>
          <div className="bg-blue-100 p-4 rounded-full mb-4 mt-8">
            <i className="fas fa-bolt text-blue-500 text-2xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">Web3 Integration</h2>
          <p className="text-gray-600">
            Connect your YouTube channel to the growing world of decentralized
            applications (dApps), giving you a stake in the future of the
            internet.
          </p>
        </div>
        <div className="bg-black rounded-lg shadow-lg p-6 mt-8 w-full max-w-sm mx-auto  ">
          <div className="relative">
            <img
              src="https://placehold.co/400x200"
              alt="Profile background"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <img
              src="https://placehold.co/100x100"
              alt="Profile picture"
              className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 rounded-full border-4 border-black"
            />
          </div>
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-lime-400">FUFUFARAH</h2>
            <p className="text-gray-500">@fufufarah</p>
            <div className="flex justify-between mt-4 text-gray-500">
              <div>
                <p className="text-sm">Subscribers</p>
                <p className="text-lime-400 text-lg">1.6M</p>
              </div>
              <div>
                <p className="text-sm">Video Views</p>
                <p className="text-lime-400 text-lg">212M</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-gray-500">
              <div>
                <p className="text-sm">Country</p>
                <p className="text-lime-400 text-lg flex items-center">
                  <span className="mr-2">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Indonesia flag"
                      className="w-5 h-5"
                    />
                  </span>
                  Indonesia
                </p>
              </div>
              <div>
                <p className="text-sm">Account Created</p>
                <p className="text-lime-400 text-lg">Nov 29, 2019</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <i className="fas fa-id-badge text-blue-500 text-2xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">Digital Identity</h2>
          <p className="text-gray-600">
            Your channel becomes a unique Web3 identity, verified and protected
            on-chain, allowing you to leverage it in future digital economies
            (NFTs, DAOs, virtual worlds, and more).
          </p>
          <div className="bg-blue-100 p-4 rounded-full mb-4 mt-8">
            <i className="fas fa-user-friends text-blue-500 text-2xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-2">
            Unlock Future Opportunities
          </h2>
          <p className="text-gray-600">
            By owning your channel on-chain, you can unlock access to exclusive
            partnerships, collaborations, and monetization models within the
            Web3 ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web3SectionThree;
