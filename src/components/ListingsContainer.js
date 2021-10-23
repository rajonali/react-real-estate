import React from "react";
import { withListingConsumer } from "../context";
import Loading from "./Loading";
import ListingsFilter from "./ListingsFilter";
import ListingsList from "./ListingsList";

function ListingContainer({ context }) {
  const { loading, sortedListings, listings } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <ListingsFilter listings={listings} />
      <ListingsList listings={sortedListings} />
    </div>
  );
}

export default withListingConsumer(ListingContainer);

// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, setRoom, sortedRooms,rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} setRoom={setRoom} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }