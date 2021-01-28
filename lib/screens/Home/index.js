var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _AppyBar=_interopRequireDefault(require("../../allScreens/AppyBar"));var _NexesBar=_interopRequireDefault(require("./NexesBar"));var _ProfileCard=_interopRequireDefault(require("./ProfileCard"));var _DisplayScreen=_interopRequireDefault(require("./DisplayScreen"));var _asyncStorage=_interopRequireDefault(require("@react-native-async-storage/async-storage"));var _this=this,_jsxFileName="C:\\Users\\lucas\\Coding_Projects\\HaxeReactNative\\RNfirebase-chat\\src\\screens\\Home\\index.js";var navigationOptions=function navigationOptions(_ref){var navigation=_ref.navigation;return{title:"Naxe Chat App"};};var HomeScreen=function HomeScreen(_ref2){var props=_ref2.props,navigation=_ref2.navigation;var _useState=(0,_react.useState)(""),_useState2=(0,_slicedToArray2.default)(_useState,2),Name=_useState2[0],setName=_useState2[1];var _useState3=(0,_react.useState)(),_useState4=(0,_slicedToArray2.default)(_useState3,2),NumberHolder=_useState4[0],setNumber=_useState4[1];var _useState5=(0,_react.useState)(""),_useState6=(0,_slicedToArray2.default)(_useState5,2),email=_useState6[0],setEmail=_useState6[1];var _useState7=(0,_react.useState)(""),_useState8=(0,_slicedToArray2.default)(_useState7,2),avatar=_useState8[0],setAvatar=_useState8[1];(0,_react.useEffect)(function(){function setVars(){return _regenerator.default.async(function setVars$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator.default.awrap(getNameID(Name,setName));case 2:_context.next=4;return _regenerator.default.awrap(getUserID(NumberHolder,setNumber));case 4:case"end":return _context.stop();}}},null,null,null,Promise);}setVars();},[]);var deviceWidth=_reactNative.Dimensions.get("window").width;return _react.default.createElement(_reactNative.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:3}},_react.default.createElement(_AppyBar.default,{navigation:navigation,__self:_this,__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:4}}),_react.default.createElement(_ProfileCard.default,{userID:NumberHolder,nameID:Name,__self:_this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:4}}),_react.default.createElement(_NexesBar.default,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:4}}),_react.default.createElement(_DisplayScreen.default,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:4}}));};var _default=HomeScreen;exports.default=_default;function pickRandom(list){return list[Math.floor(Math.random()*list.length)];}function fetchNames(nameType){return fetchData("https://www.randomlists.com/data/names-"+nameType+".json");}var fetchData=function fetchData(url){var response;return _regenerator.default.async(function fetchData$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return _regenerator.default.awrap(fetch(url));case 3:response=_context2.sent;if(response.ok){_context2.next=6;break;}throw new Error("Network response was not ok");case 6:return _context2.abrupt("return",response.json());case 9:_context2.prev=9;_context2.t0=_context2["catch"](0);console.error("Unable to fetch data:",_context2.t0);case 12:case"end":return _context2.stop();}}},null,null,[[0,9]],Promise);};function generateName(gender){var response,_response,firstNames,lastNames,firstName,lastName;return _regenerator.default.async(function generateName$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return _regenerator.default.awrap(Promise.all([fetchNames(gender),fetchNames("surnames")]));case 3:response=_context3.sent;_response=(0,_slicedToArray2.default)(response,2),firstNames=_response[0],lastNames=_response[1];firstName=pickRandom(firstNames.data);lastName=pickRandom(lastNames.data);console.log("my name "+firstName);return _context3.abrupt("return",firstName.toString());case 11:_context3.prev=11;_context3.t0=_context3["catch"](0);console.error("Unable to generate name:",_context3.t0);case 14:case"end":return _context3.stop();}}},null,null,[[0,11]],Promise);}var getNameID=function getNameID(name,setName){var value,randomNameID;return _regenerator.default.async(function getNameID$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.next=3;return _regenerator.default.awrap(_asyncStorage.default.getItem("nameID"));case 3:value=_context4.sent;if(value!==null){console.log("fetching nameID successful, setting nameID = "+value.toString());setName(value);}else{randomNameID=generateName("male");console.log("nameID is null, creating new nameID = "+randomNameID);setName(JSON.stringify(randomNameID));storeNameID(name);}_context4.next=9;break;case 7:_context4.prev=7;_context4.t0=_context4["catch"](0);case 9:case"end":return _context4.stop();}}},null,null,[[0,7]],Promise);};var storeNameID=function storeNameID(value){return _regenerator.default.async(function storeNameID$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;_context5.next=3;return _regenerator.default.awrap(_asyncStorage.default.setItem("nameID",value));case 3:_context5.next=7;break;case 5:_context5.prev=5;_context5.t0=_context5["catch"](0);case 7:case"end":return _context5.stop();}}},null,null,[[0,5]],Promise);};var GenerateRandomNumber=function GenerateRandomNumber(){var RandomNumber=Math.floor(Math.random()*9999999)+1000000;return RandomNumber;};var getUserID=function getUserID(numb,setnumb){var value,randomUserID;return _regenerator.default.async(function getUserID$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.prev=0;_context6.next=3;return _regenerator.default.awrap(_asyncStorage.default.getItem("userID"));case 3:value=_context6.sent;if(value!==null){console.log("fetching userID successful, setting userID = "+value);setnumb(value);}else{randomUserID=GenerateRandomNumber();console.log("userID is null, creating new userID = "+randomUserID);setnumb(randomUserID);storeUserID(numb.toString());}_context6.next=9;break;case 7:_context6.prev=7;_context6.t0=_context6["catch"](0);case 9:case"end":return _context6.stop();}}},null,null,[[0,7]],Promise);};var storeUserID=function storeUserID(value){return _regenerator.default.async(function storeUserID$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.prev=0;_context7.next=3;return _regenerator.default.awrap(_asyncStorage.default.setItem("userID",value));case 3:_context7.next=7;break;case 5:_context7.prev=5;_context7.t0=_context7["catch"](0);case 7:case"end":return _context7.stop();}}},null,null,[[0,5]],Promise);};var styles=_reactNative.StyleSheet.create({contentBelow:{fontSize:50},container:{flex:1,flexDirection:"column",alignItems:"center"},buttons:{marginTop:16,flexDirection:"column"},title:{marginTop:16,marginLeft:16,fontSize:16},nameInput:{height:16*2,margin:16,paddingHorizontal:16,borderColor:"#111111",borderWidth:1,fontSize:16},buttonText:{marginLeft:16,fontSize:42}});