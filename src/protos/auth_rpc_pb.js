/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var auth_pb = require('./auth_pb.js');
var treeleaf_pb = require('./treeleaf_pb.js');
goog.exportSymbol('proto.brilltech.maaser.rpc.AuthBaseRequest', null, global);
goog.exportSymbol('proto.brilltech.maaser.rpc.AuthBaseResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.brilltech.maaser.rpc.AuthBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.brilltech.maaser.rpc.AuthBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.brilltech.maaser.rpc.AuthBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.brilltech.maaser.rpc.AuthBaseRequest.displayName = 'proto.brilltech.maaser.rpc.AuthBaseRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.brilltech.maaser.rpc.AuthBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.brilltech.maaser.rpc.AuthBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stringvaluesList: jspb.Message.getRepeatedField(msg, 3),
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    longvalue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    boolvalue: jspb.Message.getFieldWithDefault(msg, 6, false),
    doublevalue: jspb.Message.getFieldWithDefault(msg, 7, false),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    authorization: (f = msg.getAuthorization()) && auth_pb.Authorization.toObject(includeInstance, f),
    loginrequest: (f = msg.getLoginrequest()) && auth_pb.LoginRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.brilltech.maaser.rpc.AuthBaseRequest}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.brilltech.maaser.rpc.AuthBaseRequest;
  return proto.brilltech.maaser.rpc.AuthBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.brilltech.maaser.rpc.AuthBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.brilltech.maaser.rpc.AuthBaseRequest}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addStringvalues(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntvalue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongvalue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoublevalue(value);
      break;
    case 8:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 9:
      var value = new auth_pb.Authorization;
      reader.readMessage(value,auth_pb.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    case 10:
      var value = new auth_pb.LoginRequest;
      reader.readMessage(value,auth_pb.LoginRequest.deserializeBinaryFromReader);
      msg.setLoginrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.brilltech.maaser.rpc.AuthBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.brilltech.maaser.rpc.AuthBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStringvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIntvalue();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLongvalue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDoublevalue();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      auth_pb.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getLoginrequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      auth_pb.LoginRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setRefid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setStringvalue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setStringvaluesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.clearStringvaluesList = function() {
  this.setStringvaluesList([]);
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setIntvalue = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 longValue = 5;
 * @return {number}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getLongvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setLongvalue = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool boolValue = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setBoolvalue = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool doubleValue = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getDoublevalue = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setDoublevalue = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional treeleaf.protos.Debug debug = 8;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 8));
};


/** @param {?proto.treeleaf.protos.Debug|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setDebug = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.clearDebug = function() {
  this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional brilltech.maaser.entities.Authorization authorization = 9;
 * @return {?proto.brilltech.maaser.entities.Authorization}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.brilltech.maaser.entities.Authorization} */ (
    jspb.Message.getWrapperField(this, auth_pb.Authorization, 9));
};


/** @param {?proto.brilltech.maaser.entities.Authorization|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setAuthorization = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.clearAuthorization = function() {
  this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional brilltech.maaser.entities.LoginRequest loginRequest = 10;
 * @return {?proto.brilltech.maaser.entities.LoginRequest}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.getLoginrequest = function() {
  return /** @type{?proto.brilltech.maaser.entities.LoginRequest} */ (
    jspb.Message.getWrapperField(this, auth_pb.LoginRequest, 10));
};


/** @param {?proto.brilltech.maaser.entities.LoginRequest|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.setLoginrequest = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.clearLoginrequest = function() {
  this.setLoginrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseRequest.prototype.hasLoginrequest = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.brilltech.maaser.rpc.AuthBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.brilltech.maaser.rpc.AuthBaseResponse.repeatedFields_, null);
};
goog.inherits(proto.brilltech.maaser.rpc.AuthBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.brilltech.maaser.rpc.AuthBaseResponse.displayName = 'proto.brilltech.maaser.rpc.AuthBaseResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.brilltech.maaser.rpc.AuthBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.brilltech.maaser.rpc.AuthBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    session: (f = msg.getSession()) && auth_pb.Session.toObject(includeInstance, f),
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    auth_pb.Session.toObject, includeInstance),
    loginresponse: (f = msg.getLoginresponse()) && auth_pb.LoginResponse.toObject(includeInstance, f),
    authresponse: (f = msg.getAuthresponse()) && auth_pb.AuthResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.brilltech.maaser.rpc.AuthBaseResponse}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.brilltech.maaser.rpc.AuthBaseResponse;
  return proto.brilltech.maaser.rpc.AuthBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.brilltech.maaser.rpc.AuthBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.brilltech.maaser.rpc.AuthBaseResponse}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.protos.ErrorCode} */ (reader.readEnum());
      msg.setErrorcode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 7:
      var value = new auth_pb.Session;
      reader.readMessage(value,auth_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 8:
      var value = new auth_pb.Session;
      reader.readMessage(value,auth_pb.Session.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 9:
      var value = new auth_pb.LoginResponse;
      reader.readMessage(value,auth_pb.LoginResponse.deserializeBinaryFromReader);
      msg.setLoginresponse(value);
      break;
    case 10:
      var value = new auth_pb.AuthResponse;
      reader.readMessage(value,auth_pb.AuthResponse.deserializeBinaryFromReader);
      msg.setAuthresponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.brilltech.maaser.rpc.AuthBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.brilltech.maaser.rpc.AuthBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorcode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      auth_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      auth_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getLoginresponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      auth_pb.LoginResponse.serializeBinaryToWriter
    );
  }
  f = message.getAuthresponse();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      auth_pb.AuthResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool error = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setError = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setMsg = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.treeleaf.protos.ErrorCode} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setErrorcode = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional treeleaf.protos.Debug debug = 6;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 6));
};


/** @param {?proto.treeleaf.protos.Debug|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setDebug = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.clearDebug = function() {
  this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional brilltech.maaser.entities.Session session = 7;
 * @return {?proto.brilltech.maaser.entities.Session}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getSession = function() {
  return /** @type{?proto.brilltech.maaser.entities.Session} */ (
    jspb.Message.getWrapperField(this, auth_pb.Session, 7));
};


/** @param {?proto.brilltech.maaser.entities.Session|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setSession = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.clearSession = function() {
  this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.hasSession = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated brilltech.maaser.entities.Session sessions = 8;
 * @return {!Array<!proto.brilltech.maaser.entities.Session>}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.brilltech.maaser.entities.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, auth_pb.Session, 8));
};


/** @param {!Array<!proto.brilltech.maaser.entities.Session>} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setSessionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.brilltech.maaser.entities.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.brilltech.maaser.entities.Session}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.brilltech.maaser.entities.Session, opt_index);
};


proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.clearSessionsList = function() {
  this.setSessionsList([]);
};


/**
 * optional brilltech.maaser.entities.LoginResponse loginResponse = 9;
 * @return {?proto.brilltech.maaser.entities.LoginResponse}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getLoginresponse = function() {
  return /** @type{?proto.brilltech.maaser.entities.LoginResponse} */ (
    jspb.Message.getWrapperField(this, auth_pb.LoginResponse, 9));
};


/** @param {?proto.brilltech.maaser.entities.LoginResponse|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setLoginresponse = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.clearLoginresponse = function() {
  this.setLoginresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.hasLoginresponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional brilltech.maaser.entities.AuthResponse authResponse = 10;
 * @return {?proto.brilltech.maaser.entities.AuthResponse}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.getAuthresponse = function() {
  return /** @type{?proto.brilltech.maaser.entities.AuthResponse} */ (
    jspb.Message.getWrapperField(this, auth_pb.AuthResponse, 10));
};


/** @param {?proto.brilltech.maaser.entities.AuthResponse|undefined} value */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.setAuthresponse = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.clearAuthresponse = function() {
  this.setAuthresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.brilltech.maaser.rpc.AuthBaseResponse.prototype.hasAuthresponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


goog.object.extend(exports, proto.brilltech.maaser.rpc);
