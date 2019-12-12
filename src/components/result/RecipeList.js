"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var CardDeck_1 = require("react-bootstrap/CardDeck");
var RecipeList = /** @class */ (function (_super) {
    __extends(RecipeList, _super);
    // public childrenWithProps = React.Children.map(this.props.children, child => {
    //   return React.cloneElement(child, {
    //     advice: item.advice,
    //     description: item.description,
    //     key: item.recipe_id,
    //     texture_count: item.texture_count,
    //     title: item.title
    //   });
    // });
    function RecipeList(props) {
        var _this = _super.call(this, props) || this;
        _this.cardGenerator = _this.state.items.map(function (item) { return (<ul key={item.recipe_id}>
      <li>{item.recipe_id}</li>
      <li>{item.title}</li>
      <li>{item.description}</li>
    </ul>
        // <RecipeCard
        //   key={item.recipe_id}
        //   title={item.title}
        //   description={item.description}
        //   advice={item.advice}
        //   texture_count={item.texture_count}
        // />
        ); });
        var keyword = _this.props.keyword;
        var texture = _this.props.texture;
        _this.state = {
            isLoaded: false,
            items: []
        };
        _this.loadDataFromServer = _this.loadDataFromServer.bind(_this);
        loadDataFromServer(keyword, texture);
        return _this;
    }
    RecipeList.prototype.recipeCardGenerator = function () {
        return this.state.items.map(function (item) { return (<ul key={item.recipe_id}>
        <li>{item.recipe_id}</li>
        <li>{item.title}</li>
        <li>{item.description}</li>
      </ul>); });
    };
    RecipeList.prototype.loadDataFromServer = function (keyword, texture) {
        var _this = this;
        var baseUrl = "http://kento/ex-gen-app/api";
        // const keyword = "ケーキ";
        // const texture = "濃厚";
        var url = baseUrl + "?keyword=" + keyword + "&texture=" + texture;
        fetch(url, { mode: "cors" })
            .then(function (res) { return res.json(); })
            .then(function (jsonData) {
            // const previousItems: ItemsType[] = Object.assign(
            //   [],
            //   this.state.items
            // );
            // console.log(previousItems);
            _this.setState(function (prevState) {
                // return { items: prevState.items.push(jsonData) };
                return { items: jsonData };
            });
            console.log(jsonData);
            console.log(_this.state.items);
        }, function (error) {
            _this.setState({
                // error,
                isLoaded: true
            });
        });
    };
    RecipeList.prototype.componentDidMount = function () {
        this.loadDataFromServer();
    };
    RecipeList.prototype.render = function () {
        return (<CardDeck_1["default"] style={{ display: "flex", flexDirection: "column" }}>
        {this.cardGenerator}
      </CardDeck_1["default"]>);
    };
    return RecipeList;
}(react_1["default"].Component));
exports["default"] = RecipeList;
