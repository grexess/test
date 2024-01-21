const PARSE_SERVER_URL = "https://parseapi.back4app.com/";
const PARSE_APP_ID = "nRQrdWGmyjLgMmL9UPl4gvsGq9kr2dVJTQKxlcz2";
const PARSE_JAVASCRIPT_ID = "n6PZug3p1Q0HuxLlyorrLelpj3yjlKAX6iX2V4XP";
const PARSE_MASTER_KEY = "JhUiwH6Yx3xN6TFcplqEabY1AlZ5z8kc8SEii0m5";
const PARSE_WSS_URL = "wss://werace-d.b4a.app/";

async function createUser({ username, password, email, usertype }) {
  try {
    const response = await fetch(`https://parseapi.back4app.com/parse/users`, {
      method: "POST",
      headers: getHeader(),
      body: JSON.stringify({
        username,
        password,
        email,
        usertype,
      }),
    });
    const user = await response.json();
    await deleteParseObjects("_Session", { user: { __type: "Pointer", className: "_User", objectId: user.objectId } });
    return user;
  } catch (error) {
    console.log({ createUserError: error });
    throw error;
  }
}

async function assignUserTo_wrOrganizer_Role(user) {
  const response = await fetch(`https://parseapi.back4app.com/parse/roles/?where={"name":"wrOrganizer"}`, {
    method: "GET",
    headers: getHeader(),
  });
  const roleId = (await response.json()).results[0].objectId;
  return await fetch(`https://parseapi.back4app.com/parse/roles/${roleId}`, {
    method: "PUT",
    headers: getHeader(),
    body: JSON.stringify({
      users: {
        __op: "AddRelation",
        objects: [
          {
            __type: "Pointer",
            className: "_User",
            objectId: user.objectId,
          },
        ],
      },
    }),
  });
}

async function getUser(objectId) {
  const response = await fetch(`https://parseapi.back4app.com/parse/users/${objectId}`, {
    headers: getHeader(),
  });
  return await response.json();
}

async function deleteUser(username) {
  let response, data;
  response = await fetch(`https://parseapi.back4app.com/parse/classes/_User?where={"username":"${username}"}`, {
    headers: getHeader(),
  });
  data = await response.json();
  if (!data.results[0]) return;
  const objectId = data.results[0].objectId;
  response = await fetch(`https://parseapi.back4app.com/parse/users/${objectId}`, {
    method: "DELETE",
    headers: getHeader(),
  });
}

async function deleteEvent(eventname) {
  try {
    const usersResponse = await fetch(`https://parseapi.back4app.com/parse/classes/WR_EVENT?where={"eventName":"${eventname}"}`, {
      headers: getHeader(),
    });
    const userData = await usersResponse.json();
    if (!userData.results || userData.results.length === 0) {
      return;
    }
    const deleteRequests = userData.results.map((user) => {
      const objectId = user.objectId;
      return fetch(`https://parseapi.back4app.com/parse/classes/WR_EVENT/${objectId}`, {
        method: "DELETE",
        headers: getHeader(),
      });
    });
    await Promise.all(deleteRequests);
  } catch (error) {
    console.error("Error occurred while deleting events:", error);
  }
}

function getHeader() {
  return {
    "X-Parse-Application-Id": PARSE_APP_ID,
    "X-Parse-Master-Key": PARSE_MASTER_KEY,
    // "X-Parse-REST-API-Key": this.stages[this.selectedStage].RestKey,
    // "X-Parse-Javascript-Key": this.stages[this.selectedStage].JavaScriptKey,
    "Content-Type": "application/json",
  };
}

async function findParseObjects({ className, query }) {
  const response = await fetch(`https://parseapi.back4app.com/parse/classes/${className}/?where=${JSON.stringify(query)}`, {
    method: "GET",
    headers: getHeader(),
  });
  return await response.json();
}
async function deleteParseObjects(className, query) {
  const entries = await findParseObjects(className, query);
  for (let entry of entries.results) {
    await deleteParseObject({ className, id: entry.objectId });
  }
  // const rc = await Promise.all(entries.results.map((entry) => deleteParseObject({ className, id: entry.objectId })));
  // console.log({ rc });
}

async function deleteParseObject({ className, id }) {
  const rc = await fetch(`https://parseapi.back4app.com/parse/classes/${className}/${id}`, {
    method: "DELETE",
    headers: getHeader(),
  });
  console.log(await rc.json());
}

export { deleteEvent, getUser, createUser, deleteUser, assignUserTo_wrOrganizer_Role };
