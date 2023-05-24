/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Data = (function() {

    /**
     * Properties of a Data.
     * @exports IData
     * @interface IData
     * @property {string|null} [_id] Data _id
     * @property {string|null} [name] Data name
     * @property {number|null} [age] Data age
     * @property {string|null} [description] Data description
     */

    /**
     * Constructs a new Data.
     * @exports Data
     * @classdesc Represents a Data.
     * @implements IData
     * @constructor
     * @param {IData=} [properties] Properties to set
     */
    function Data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Data _id.
     * @member {string} _id
     * @memberof Data
     * @instance
     */
    Data.prototype._id = "";

    /**
     * Data name.
     * @member {string} name
     * @memberof Data
     * @instance
     */
    Data.prototype.name = "";

    /**
     * Data age.
     * @member {number} age
     * @memberof Data
     * @instance
     */
    Data.prototype.age = 0;

    /**
     * Data description.
     * @member {string} description
     * @memberof Data
     * @instance
     */
    Data.prototype.description = "";

    /**
     * Creates a new Data instance using the specified properties.
     * @function create
     * @memberof Data
     * @static
     * @param {IData=} [properties] Properties to set
     * @returns {Data} Data instance
     */
    Data.create = function create(properties) {
        return new Data(properties);
    };

    /**
     * Encodes the specified Data message. Does not implicitly {@link Data.verify|verify} messages.
     * @function encode
     * @memberof Data
     * @static
     * @param {IData} message Data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message._id != null && Object.hasOwnProperty.call(message, "_id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message._id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.age != null && Object.hasOwnProperty.call(message, "age"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.age);
        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
        return writer;
    };

    /**
     * Encodes the specified Data message, length delimited. Does not implicitly {@link Data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Data
     * @static
     * @param {IData} message Data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Data message from the specified reader or buffer.
     * @function decode
     * @memberof Data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Data} Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message._id = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.age = reader.int32();
                break;
            case 4:
                message.description = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Data} Data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Data message.
     * @function verify
     * @memberof Data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message._id != null && message.hasOwnProperty("_id"))
            if (!$util.isString(message._id))
                return "_id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.age != null && message.hasOwnProperty("age"))
            if (!$util.isInteger(message.age))
                return "age: integer expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        return null;
    };

    /**
     * Creates a Data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Data} Data
     */
    Data.fromObject = function fromObject(object) {
        if (object instanceof $root.Data)
            return object;
        var message = new $root.Data();
        if (object._id != null)
            message._id = String(object._id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.age != null)
            message.age = object.age | 0;
        if (object.description != null)
            message.description = String(object.description);
        return message;
    };

    /**
     * Creates a plain object from a Data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Data
     * @static
     * @param {Data} message Data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object._id = "";
            object.name = "";
            object.age = 0;
            object.description = "";
        }
        if (message._id != null && message.hasOwnProperty("_id"))
            object._id = message._id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.age != null && message.hasOwnProperty("age"))
            object.age = message.age;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        return object;
    };

    /**
     * Converts this Data to JSON.
     * @function toJSON
     * @memberof Data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Data;
})();

$root.AllData = (function() {

    /**
     * Properties of an AllData.
     * @exports IAllData
     * @interface IAllData
     * @property {Array.<IData>|null} [allData] AllData allData
     */

    /**
     * Constructs a new AllData.
     * @exports AllData
     * @classdesc Represents an AllData.
     * @implements IAllData
     * @constructor
     * @param {IAllData=} [properties] Properties to set
     */
    function AllData(properties) {
        this.allData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AllData allData.
     * @member {Array.<IData>} allData
     * @memberof AllData
     * @instance
     */
    AllData.prototype.allData = $util.emptyArray;

    /**
     * Creates a new AllData instance using the specified properties.
     * @function create
     * @memberof AllData
     * @static
     * @param {IAllData=} [properties] Properties to set
     * @returns {AllData} AllData instance
     */
    AllData.create = function create(properties) {
        return new AllData(properties);
    };

    /**
     * Encodes the specified AllData message. Does not implicitly {@link AllData.verify|verify} messages.
     * @function encode
     * @memberof AllData
     * @static
     * @param {IAllData} message AllData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.allData != null && message.allData.length)
            for (var i = 0; i < message.allData.length; ++i)
                $root.Data.encode(message.allData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AllData message, length delimited. Does not implicitly {@link AllData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AllData
     * @static
     * @param {IAllData} message AllData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AllData message from the specified reader or buffer.
     * @function decode
     * @memberof AllData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AllData} AllData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AllData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.allData && message.allData.length))
                    message.allData = [];
                message.allData.push($root.Data.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AllData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AllData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AllData} AllData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AllData message.
     * @function verify
     * @memberof AllData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AllData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.allData != null && message.hasOwnProperty("allData")) {
            if (!Array.isArray(message.allData))
                return "allData: array expected";
            for (var i = 0; i < message.allData.length; ++i) {
                var error = $root.Data.verify(message.allData[i]);
                if (error)
                    return "allData." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AllData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AllData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AllData} AllData
     */
    AllData.fromObject = function fromObject(object) {
        if (object instanceof $root.AllData)
            return object;
        var message = new $root.AllData();
        if (object.allData) {
            if (!Array.isArray(object.allData))
                throw TypeError(".AllData.allData: array expected");
            message.allData = [];
            for (var i = 0; i < object.allData.length; ++i) {
                if (typeof object.allData[i] !== "object")
                    throw TypeError(".AllData.allData: object expected");
                message.allData[i] = $root.Data.fromObject(object.allData[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AllData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AllData
     * @static
     * @param {AllData} message AllData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AllData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.allData = [];
        if (message.allData && message.allData.length) {
            object.allData = [];
            for (var j = 0; j < message.allData.length; ++j)
                object.allData[j] = $root.Data.toObject(message.allData[j], options);
        }
        return object;
    };

    /**
     * Converts this AllData to JSON.
     * @function toJSON
     * @memberof AllData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AllData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AllData;
})();

module.exports = $root;
