import React from "react";
import Listing from "./Listing";
const ListingsList = ({ listings }) => {
  if (listings.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="listingslist">
      <div className="listingslist-center">
        {listings.map(item => {
          return <Listing key={item.id} listing={item} />;
        })}
      </div>
    </section>
  );
};

export default ListingsList;