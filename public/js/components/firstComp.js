webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: "Marquez Pickett"
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateActions();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;


        console.log(cities);

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item, className: 'options' },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;


        console.log(homeTypes);

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item, className: 'options' },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;


        console.log(bedrooms);

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, className: 'options', value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city", className: "title", style: {
                fontSize: "1rem",
                color: "grey",
                display: "block",
                margin: "10px 10px "
              } },
            "City"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "city",
              className: " filters city",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All", className: 'options' },
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city", className: "title", style: {
                fontSize: ".8rem",
                color: "grey",
                display: "block",
                margin: "10px 10px "
              } },
            "Hometype"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              className: " filters homeType",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Homes"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city", className: "title", style: {
                fontSize: ".8rem",
                color: "grey",
                display: "block",
                margin: "10px 10px "
              } },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              className: " filters bed-room",
              onChange: this.props.change },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "Elevators", value: "Elevators", className: "" },
              " ",
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", {
                name: "Elevators",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "Swimming_Pool", value: "Swimming_Pool", className: "" },
              " ",
              _react2.default.createElement(
                "span",
                null,
                "Swimming-pool"
              ),
              _react2.default.createElement("input", {
                name: "Swimming_Pool",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              {
                htmlFor: "Finished_Basement",
                value: "Finished_Basement",
                className: ""
              },
              " ",
              _react2.default.createElement(
                "span",
                null,
                " Finished Basement"
              ),
              _react2.default.createElement("input", {
                name: "Finished_Basement",
                type: "checkbox",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "Gym", value: "Gym", className: "" },
              " ",
              _react2.default.createElement(
                "span",
                null,
                " Gym"
              ),
              _react2.default.createElement("input", { name: "Gym", type: "checkbox", onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Marquez Pickett'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Pics\'Find A Home'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'create ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: "Marquez Pickett"
    };
    _this.loopHouse = _this.loopHouse.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: "loopHouse",
    value: function loopHouse() {
      var _this2 = this;

      var listingData = this.props.listingData;


      if (listingData == undefined || listingData.length == 0) {
        return "Sorry your filter did not match";
      }

      return listingData.map(function (listing, index) {
        if (_this2.props.globalState.view == "box") {
          return (
            // This is the BOX View
            _react2.default.createElement(
              "div",
              { className: "col-md-12 col-lg-6", key: index },
              _react2.default.createElement(
                "div",
                { className: "listing" },
                _react2.default.createElement(
                  "div",
                  {
                    className: "listings-img",
                    style: {
                      background: "url(\"" + listing.image + "\")center/cover no-repeat"
                    }
                  },
                  _react2.default.createElement(
                    "span",
                    { className: "address" },
                    listing.address
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "details" },
                    _react2.default.createElement(
                      "div",
                      { className: "col-md-3" },
                      _react2.default.createElement(
                        "div",
                        { className: "user-img" },
                        " "
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col-md-9" },
                      _react2.default.createElement(
                        "div",
                        { className: "user-details" },
                        _react2.default.createElement(
                          "span",
                          { className: "user-name" },
                          "Nina Smith"
                        ),
                        _react2.default.createElement(
                          "span",
                          { className: "post-date" },
                          "05/08/2019"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "listing-details" },
                        _react2.default.createElement(
                          "div",
                          { className: "floor-space" },
                          _react2.default.createElement("i", { className: "far fa-square" }),
                          _react2.default.createElement(
                            "span",
                            null,
                            listing.floorSpace,
                            " ft\xB2"
                          )
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "bed-room" },
                          " ",
                          _react2.default.createElement("i", { className: "fas fa-bed " }),
                          _react2.default.createElement(
                            "span",
                            null,
                            listing.rooms,
                            " bedrooms"
                          )
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "view-btn" },
                        "view listing"
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "bottom-info" },
                  _react2.default.createElement(
                    "span",
                    { className: "price" },
                    "$",
                    listing.price
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "location" },
                    " ",
                    _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                    " ",
                    listing.city
                  )
                )
              )
            )
          );
        } else {
          // This is the Long View
          return _react2.default.createElement(
            "div",
            { className: "col-md-10", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listings-img",
                  style: {
                    background: "url(\"" + listing.image + "\")center/cover no-repeat"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-img-1" },
                      " "
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details-1" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/08/2019"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details-1" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        " ",
                        _react2.default.createElement("i", { className: "far fa-square" }),
                        " ",
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " ft\xB2"
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bed-room" },
                        " ",
                        _react2.default.createElement("i", { className: "fas fa-bed " }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.rooms,
                          " bedrooms"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn-1" },
                      "view listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$",
                  listing.price
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  " ",
                  _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                  " ",
                  listing.city
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search", placeholder: "Search Homes...", onChange: this.props.change })
        ),
        _react2.default.createElement(
          "section",
          { className: "sort-by-area" },
          _react2.default.createElement(
            "div",
            { className: "result" },
            " ",
            this.props.globalState.filterData.length,
            " results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-option" },
            _react2.default.createElement(
              "select",
              {
                name: "sortby",
                className: "sortby",
                onChange: this.props.change
              },
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", {
                className: "fas fa-list-ul",
                "aria-hidden": "true",
                onClick: this.props.changeView.bind(null, "long")
              }),
              _react2.default.createElement("i", {
                className: "fas fa-th",
                "aria-hidden": "true",
                onClick: this.props.changeView.bind(null, "box")
              })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-result" },
          this.loopHouse()
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "page" },
            _react2.default.createElement(
              "li",
              null,
              "Prev"
            ),
            _react2.default.createElement(
              "li",
              { className: "active" },
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "3"
            ),
            _react2.default.createElement(
              "li",
              null,
              "4"
            ),
            _react2.default.createElement(
              "li",
              null,
              "5"
            ),
            _react2.default.createElement(
              "li",
              null,
              "Next"
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingData = [{
  address: "4576 hall road",
  city: "Atlanta, GA",
  state: "GA",
  rooms: 2,
  price: 422000,
  floorSpace: 1933,
  extras: ["Swimming_Pool", "Elevators", "Gym", "Finished_Basement"],
  homeType: "House",
  image: "https://images.pexels.com/photos/1488267/pexels-photo-1488267.png?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "5673 halls ferry road",
  city: "California, CA",
  state: "MS",
  rooms: 1,
  price: 24666,
  floorSpace: 992,
  extras: ["Swimming_Pool", "Gym", "Finished_Basement"],
  homeType: "Studio",
  image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "6376 cuda street",
  city: "Miami, FL",
  state: "MS",
  rooms: 4,
  price: 545355,
  floorSpace: 203,
  extras: ["Swimming_Pool", "Gym", "Finished_Basement"],
  homeType: "House",
  image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "746 yahoo street",
  city: "California, LA",
  state: "MS",
  rooms: 3,
  price: 200000,
  floorSpace: 1239,
  extras: ["Swimming_Pool", "Elevators", "Gym"],
  homeType: "Condo",
  image: "https://images.pexels.com/photos/532902/pexels-photo-532902.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "9982 north road",
  city: "Vicksburg, MS",
  state: "MS",
  rooms: 5,
  price: 603000,
  floorSpace: 2594,
  extras: ["Swimming_Pool",, "Gym", "Finished_Basement"],
  homeType: "House",
  image: "https://images.pexels.com/photos/534182/pexels-photo-534182.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "7566 south street",
  city: "Atlanta, GA",
  state: "MS",
  rooms: 1,
  price: 220000,
  floorSpace: 877,
  extras: ["Swimming_Pool", "Elevators", "Finished_Basement"],
  homeType: "Studio",
  image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "726 rap road",
  city: "New York, NY",
  state: "MS",
  rooms: 3,
  price: 123000,
  floorSpace: 1923,
  extras: ["Swimming_Pool", "Elevators", "Gym", "Finished_Basement"],
  homeType: "Condo",
  image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "747 buddy street",
  city: "Miami, FL",
  state: "MS",
  rooms: 2,
  price: 105700,
  floorSpace: 1997,
  extras: ["Elevators", "Gym", "Finished_Basement"],
  homeType: "Apartment",
  image: "https://images.pexels.com/photos/259602/pexels-photo-259602.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "656 easy street",
  city: "Vicksburg, MS",
  state: "MS",
  rooms: 5,
  price: 124200,
  floorSpace: 698,
  extras: ["Swimming_Pool", "Elevators", "Gym", "Finished_Basement"],
  homeType: "House",
  image: "https://images.pexels.com/photos/296109/pexels-photo-296109.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}, {
  address: "4576 hall road",
  city: "Atlanta, GA",
  state: "GA",
  rooms: 2,
  price: 349000,
  floorSpace: 1933,
  extras: ["Swimming_Pool", "Elevators", "Gym", "Finished_Basement"],
  homeType: "Apartment",
  image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}];

exports.default = listingData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingData = __webpack_require__(233);

var _listingData2 = _interopRequireDefault(_listingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Marquez Pickett',
      listingData: _listingData2.default,
      city: "All",
      homeType: "All",
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      Elevators: false,
      Finished_Basement: false,
      Gym: false,
      Swimming_Pool: false,
      filterData: _listingData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''

    };
    _this.change = _this.change.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingData = this.state.listingData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingData: listingData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filterData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filterData',
    value: function filterData() {
      var _this3 = this;

      var newData = this.state.listingData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      // Lowest Price
      if (this.state.sortby == "price-dsc") {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      //  Highest Price
      if (this.state.sortby == "price-asc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);
          if (n != null) {
            return true;
          }
        });
      }

      if (this.state.Elevators != false) {
        newData = newData.filter(function (item) {
          return item.Elevators != _this3.state.Elevators;
        });
      }

      this.setState({
        filterData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //city
      var cities = this.state.listingData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      //hometype
      var homeTypes = this.state.listingData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));

      homeTypes = homeTypes.sort();

      //bedrooms
      var bedrooms = this.state.listingData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));

      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateActions: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingData: this.state.filterData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);