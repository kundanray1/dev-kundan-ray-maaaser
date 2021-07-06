//headers for authorization while sending request to server
export const APIHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const ProtoHeaders = {
  Accept: 'application/protobuf',
  'Content-Type': 'application/protobuf',
  cors: '*',
};

export const APIHeadersForMultipartFormData = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};
