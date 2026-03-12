import { suggestions } from "@/data/suggestions";

function Suggestions() {

  return (
    <>

      {/*Profile switch */}
      <div className="profile-section flex items-center p-3 gap-3 mb-6">
        <img
          src="/profile.webp"
          alt="profile-image"
          className="w-11 h-11 rounded-full border-2 border-pink-600"
        />
        <div className="user-details w-30">
          <p className="text-white text-sm font-semibold">Sajin.C.L</p>
          <p className="text-gray-300 text-xs">@sajin_cl</p>
        </div>
        <div className="switch-btn mx-auto">
          <a href="#" className="text-blue-800 font-semibold text-sm hover:underline">Switch</a>
        </div>
      </div>

      <div className="suggestion-all flex items-center p-3">
        <p className="text-sm text-white font-semibold w-45">Suggested for you</p>
        <p className="mx-auto text-xs  font-semibold text-white cursor-pointer hover:text-gray-500">See all</p>
      </div>

      {/* Suggestion List */}
      {suggestions.map((suggestion) =>
      (
        <div
          key={suggestion?.id}
          className="suggestion-list flex items-center gap-3 p-3"
        >
          <div>
            <img
              src={suggestion?.image}
              alt={suggestion?.userName}
              className="w-10 h-10 rounded-full border-2 border-pink-600 cursor-pointer"
            />
          </div>

          <div >
            <p
              className="text-white text-sm cursor-pointer"
            >
              {suggestion?.userName}
            </p>

            <p
              className="text-xs text-gray-600 w-30 overflow-hidden truncate"
              title={suggestion?.followedBy?.join(',')}
            >
              Followd by {suggestion?.followedBy?.join(',')}
            </p>
          </div>

          <div className="switch-btn mx-auto">
            <a href="#" className="text-blue-800 font-semibold text-xs hover:text-blue-700">Follow</a>
          </div>
        </div>
      )
      )}

    </>
  );
};

export default Suggestions;