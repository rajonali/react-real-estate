import React, { Component } from "react";
import items from "./data";
/*import Client from "./Contentful";*/

const ListingContext = React.createContext();

export default class ListingProvider extends Component {
  state = {
    listings: [],
    sortedListings: [],
    featuredListings: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // this.getData();
    let listings = this.formatData(items);
    let featuredListings = listings.filter(room => listings.featured === true);
    //
    let maxPrice = Math.max(...listings.map(item => item.price));
    let maxSize = Math.max(...listings.map(item => item.size));
    this.setState({
      listings,
      featuredListings,
      sortedListings: listings,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let listing = { ...item.fields, images, id };
      return listing;
    });
    return tempItems;
  }
  getListing = slug => {
    let tempListings = [...this.state.listings];
    const listing = tempListings.find(listing => listing.slug === slug);
    return listing;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterListings
    );
  };
  filterListings = () => {
    let {
      listings,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempListings = [...listings];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempListings = tempListings.filter(listing => listing.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempListings = tempListings.filter(listing => listing.capacity >= capacity);
    }
    // filter by price
    tempListings = tempListings.filter(listing => listing.price <= price);
    //filter by size
    tempListings = tempListings.filter(
      listing => listing.size >= minSize && listing.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempListings = tempListings.filter(listing => listing.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempListings = tempListings.filter(listing => listing.pets === true);
    }
    this.setState({
      sortedListings: tempListings
    });
  };
  render() {
    return (
      <ListingContext.Provider
        value={{
          ...this.state,
          getListing: this.getListing,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ListingContext.Provider>
    );
  }
}
const ListingConsumer = ListingContext.Consumer;

export { ListingProvider, ListingConsumer, ListingContext };

export function withListingConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ListingConsumer>
        {value => <Component {...props} context={value} />}
      </ListingConsumer>
    );
  };
}