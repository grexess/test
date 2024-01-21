import Parse from "parse/dist/parse.min.js";

import { DB } from "../config/config";

Parse.serverURL = import.meta.env.VITE_APP_PARSE_SERVER_URL;
Parse.initialize(import.meta.env.VITE_APP_PARSE_APP_ID, import.meta.env.VITE_APP_PARSE_JAVASCRIPT_ID);

const findParseObjects = async ({ className, query, select }) => {
  const q = new Parse.Query(className);
  q.limit(DB.QUERY_LIMIT);
  Object.keys(query).forEach((key) => {
    q.equalTo(key, query[key]);
  });
  if (select) {
    q.select(select);
  }
  return await q.find();
};

const firstParseObject = async (className, queryData, select) => {
  const query = new Parse.Query(className);
  Object.keys(queryData).forEach((key) => {
    query.equalTo(key, queryData[key]);
  });
  if (select) {
    query.select(select);
  }
  return await query.first();
};

const getParseObject = async (className, id, select) => {
  const query = new Parse.Query(className);
  if (select) {
    query.select(select);
  }
  const rc = await query.get(id);
  return rc;
};

const createParseObject = async (className, queryData) => {
  const entry = new Parse.Object(className);
  Object.keys(queryData).forEach((key) => {
    entry.set(key, queryData[key]);
  });
  return await entry.save();
};

const updateParseObject = async (className, id, queryData) => {
  const entry = await getParseObject(className, id);
  Object.keys(queryData).forEach((key) => {
    entry.set(key, queryData[key]);
  });
  return await entry.save();
};

const deleteParseObject = async (className, id) => {
  const entry = await getParseObject(className, id);
  await entry.destroy();
};

export { findParseObjects, firstParseObject, getParseObject, createParseObject, updateParseObject, deleteParseObject };
