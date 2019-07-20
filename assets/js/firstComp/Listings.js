import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: "Marquez Pickett"
    };
    this.loopHouse = this.loopHouse.bind(this);
  }

  loopHouse() {
    const { listingData } = this.props;

    if (listingData == undefined || listingData.length == 0) {
      return "Sorry your filter did not match";
    }

    return listingData.map((listing, index) => {
      if (this.props.globalState.view == "box") {
        return (
          // This is the BOX View
          <div className={"col-md-12 col-lg-6"} key={index}>
            <div className={"listing"}>
              <div
                className={"listings-img"}
                style={{
                  background: `url("${listing.image}")center/cover no-repeat`
                }}
              >
                <span className={"address"}>{listing.address}</span>
                <div className={"details"}>
                  <div className={"col-md-3"}>
                    <div className={"user-img"}> </div>
                  </div>

                  <div className={"col-md-9"}>
                    <div className={"user-details"}>
                      <span className={"user-name"}>Nina Smith</span>
                      <span className={"post-date"}>05/08/2019</span>
                    </div>
                    <div className={"listing-details"}>
                      <div className={"floor-space"}>
                        <i className="far fa-square" />
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className={"bed-room"}>
                        {" "}
                        <i className="fas fa-bed " />
                        <span>{listing.rooms} bedrooms</span>
                      </div>
                    </div>

                    <div className={"view-btn"}>view listing</div>
                  </div>
                </div>
              </div>
              <div className={"bottom-info"}>
                <span className={"price"}>${listing.price}</span>
                <span className={"location"}>
                  {" "}
                  <i className="fas fa-map-marker-alt" /> {listing.city}
                </span>
              </div>
            </div>
          </div>
        );
      } else {
        // This is the Long View
        return (
          <div className={"col-md-10"} key={index}>
            <div className={"listing"}>
              <div
                className={"listings-img"}
                style={{
                  background: `url("${listing.image}")center/cover no-repeat`
                }}
              >
                <span className={"address"}>{listing.address}</span>
                <div className={"details"}>
                  <div className={"col-md-3"}>
                    <div className={"user-img-1"}> </div>
                  </div>

                  <div className={"col-md-9"}>
                    <div className={"user-details-1"}>
                      <span className={"user-name"}>Nina Smith</span>
                      <span className={"post-date"}>05/08/2019</span>
                    </div>
                    <div className={"listing-details-1"}>
                      <div className={"floor-space"}>
                        {" "}
                        <i className="far fa-square" />{" "}
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className={"bed-room"}>
                        {" "}
                        <i className="fas fa-bed " />
                        <span>{listing.rooms} bedrooms</span>
                      </div>
                    </div>

                    <div className={"view-btn-1"}>view listing</div>
                  </div>
                </div>
              </div>
              <div className={"bottom-info"}>
                <span className={"price"}>${listing.price}</span>
                <span className={"location"}>
                  {" "}
                  <i className="fas fa-map-marker-alt" /> {listing.city}
                </span>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <section id={"listings"}>
        <section className={"search-area"}>
          <input type="text" name="search"placeholder="Search Homes..." onChange={this.props.change} />
        </section>

        <section className={"sort-by-area"}>
          <div className={"result"}>
            {" "}
            {this.props.globalState.filterData.length} results found
          </div>
          <div className={"sort-option"}>
            <select
              name="sortby"
              className={"sortby"}
              onChange={this.props.change}
            >
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className={"view"}>
              <i
                className="fas fa-list-ul"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, "long")}
              />
              <i
                className="fas fa-th"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, "box")}
              />
            </div>
          </div>
        </section>

        <section className={"listings-result"}>{this.loopHouse()}</section>

        <section id={"pagination"}>
          <ul className={"page"}>
            <li>Prev</li>
            <li className={"active"}>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}
