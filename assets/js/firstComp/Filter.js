import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Marquez Pickett"
    };
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }

  componentWillMount() {
    this.props.populateActions();
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData;

      console.log(cities);

      return cities.map(item => {
        return (
          <option key={item} value={item} className={'options'}>
            {item}
          </option>
        );
      });
    }
  }

  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData;

      console.log(homeTypes);

      return homeTypes.map(item => {
        return (
          <option key={item} value={item} className={'options'}>
            {item}
          </option>
        );
      });
    }
  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData;

      console.log(bedrooms);

      return bedrooms.map(item => {
        return (
          <option key={item} className={'options'} value={item}>{item}+ BR</option>
        );
      });
    }
  }
  render() {
    return (
      <section id={"filter"}>
        <div className={"inside"}>
          <h4>Filter</h4>
          <label htmlFor="city" className={"title"} style={{
            fontSize: "1rem",
            color: "grey",
            display: "block",
           margin: "10px 10px ",
          }}>City</label>
          <select
            name="city"
            className={" filters city"}
            onChange={this.props.change}
          >
            <option value="All" className={'options'}>All</option>
            {this.cities()}
          </select>

          <label htmlFor="city" className={"title"} style={{
            fontSize: ".8rem",
            color: "grey",
            display: "block",
           margin: "10px 10px ",
          }}>
            Hometype
          </label>
          <select
            name="homeType"
            className={" filters homeType"}
            onChange={this.props.change}
          >
            <option value="All">All Homes</option>
            {this.homeTypes()}
          </select>

          <label htmlFor="city" className={"title"} style={{
            fontSize: ".8rem",
            color: "grey",
            display: "block",
           margin: "10px 10px ",
          }}>
            Bedrooms
          </label>
          <select
            name="bedrooms"
            className={" filters bed-room"}
            onChange={this.props.change}>
            {this.bedrooms()}
          </select>

          <div className={"filters price"}>
            <span className={"title"}>Price</span>
            <input
              type="text"
              name="min_price"
              className={"min-price"}
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className={"max-price"}
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>

          <div className={"filters floor-space"}>
            <span className={"title"}>Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className={"min-floor-space"}
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className={"max-floor-space"}
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className={"filters extras"}>
            <span className={"title"}>Extras</span>
            <label htmlFor="Elevators" value="Elevators" className={""}>
              {" "}
              <span>Elevators</span>
              <input
                name="Elevators"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>

            <label htmlFor="Swimming_Pool" value="Swimming_Pool" className={""}>
              {" "}
              <span>Swimming-pool</span>
              <input
                name="Swimming_Pool"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>

            <label
              htmlFor="Finished_Basement"
              value="Finished_Basement"
              className={""}
            >
              {" "}
              <span> Finished Basement</span>
              <input
                name="Finished_Basement"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>

            <label htmlFor="Gym" value="Gym" className={""}>
              {" "}
              <span> Gym</span>
              <input name="Gym" type="checkbox" onChange={this.props.change} />
            </label>
          </div>
        </div>
      </section>
    );
  }
}
