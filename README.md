# WR-Timer

## Parse Backend Requirements

### Roles & Permission

TimeKeeper requires role **wrTimeKeeper** which grants Read/Write access to results.

### Classes

|        Class        |                    Description                     |       LiveQuery        |
| :-----------------: | :------------------------------------------------: | :--------------------: |
|      WR_EVENT       |            WeRace **Event** Description            | YES (Add StartNumber)  |
|      WR_POPUP       |            WeRace **Event** Description            |           NO           |
| WR_EVENT_TIMETABLE  |            Stores results for WR_EVENT             | YES (Start/Reset/Stop) |
| WR_POPUP_TIMETABLE  |            Stores results for WR_POPUP             | YES (Start/Reset/Stop) |
| WR_SESSION_OBSERVER | Used for identification for TimeKeeper counterpart |   YES (Counterpart)    |
|   WR_POPUP_CODES    |                 Store Popup Codes                  |           NO           |

#### Class Definitions

<details>
  <summary>WR_EVENT</summary>
see EventEditor
</details>

<details>
  <summary>WR_POPUP</summary>
  
  ```json
  {
  "className": "Popup",
  "fields": {
    "Owner": {
      "type": "String",
      "required": true
    },
    "Name": {
      "type": "String",
      "required": true
    },
    "paymentId": {
      "type": "String",
      "required": false
    },
    "paymentStatus": {
      "type": "String",
      "required": false
    },
    "private": {
      "type": "Boolean",
      "required": false,
      "defaultValue": false
    },
    "ResultKeeping": {
      "type": "String",
      "required": false
    }
  },
  "classLevelPermissions": {
    "find": {},
    "count": {},
    "get": {},
    "create": {},
    "update": {},
    "delete": {},
    "addField": {},
    "protectedFields": {
      "*": []
    }
  }
}
  ```
</details>

<details>
  <summary>WR_EVENT_TIMETABLE</summary>
see EventEditor
</details>

<details>
  <summary>WR_POPUP_TIMETABLE</summary>

```json
{
  "className": "WR_POPUP_TIMETABLE",
  "fields": {
    "PopupId": {
      "type": "String",
      "required": true
    },
    "StartNumber": {
      "type": "String",
      "required": false
    },
    "StartTime": {
      "type": "Number",
      "required": false
    },
    "FinishTime": {
      "type": "Number",
      "required": false
    },
    "Result": {
      "type": "Number",
      "required": false
    }
  },
  "classLevelPermissions": {
    "find": {
      "role:wrOrganizer": true,
      "role:wrTimeKeeper": true,
      "*": true
    },
    "count": {
      "role:wrOrganizer": true,
      "role:wrTimeKeeper": true,
      "*": true
    },
    "get": {
      "*": true,
      "role:wrOrganizer": true,
      "role:wrTimeKeeper": true
    },
    "create": {
      "role:wrOrganizer": true,
      "role:wrTimeKeeper": true
    },
    "update": {
      "role:wrOrganizer": true,
      "role:wrTimeKeeper": true
    },
    "delete": {
      "role:wrOrganizer": true,
      "role:wrTimeKeeper": true
    },
    "addField": {},
    "protectedFields": {
      "*": []
    }
  }
}
```

</details>

<details>
  <summary>WR_SESSION_OBSERVER</summary>

```json
{
  "className": "WR_SESSION_OBSERVER",
  "fields": {
    "Session": {
      "type": "String",
      "required": true
    },
    "Target": {
      "type": "String",
      "required": false
    },
    "User": {
      "type": "String",
      "required": true
    },
    "WR_ID": {
      "type": "String",
      "required": true
    },
    "StageName": {
      "type": "String",
      "required": false
    }
  },
  "classLevelPermissions": {
    "find": {
      "*": true
    },
    "count": {
      "*": true
    },
    "get": {
      "*": true
    },
    "create": {},
    "update": {},
    "delete": {},
    "addField": {},
    "protectedFields": {
      "*": []
    }
  }
}
```

</details>

<details>
  <summary>WR_POPUP_CODES</summary>

```json
{
  "className": "WR_POPUP_CODES",
  "fields": {
    "email": {
      "type": "String",
      "required": true
    },
    "code": {
      "type": "String",
      "required": true
    },
    "usage": {
      "type": "Array",
      "required": false
    },
    "initialAmount": {
      "type": "Number",
      "required": false
    }
  },
  "classLevelPermissions": {
    "find": {},
    "count": {},
    "get": {},
    "create": {},
    "update": {},
    "delete": {},
    "addField": {},
    "protectedFields": {
      "*": []
    }
  }
}
```

</details>

### Cloud Functions

#### External

#### Internal

### Config

|  Parameter  | Value |        Desc        |
| :---------: | :---: | :----------------: |
| TRACE_LEVEL | DEBUG | for Debug purposes |

### Web Content

#### Timer

`./public/timer`
