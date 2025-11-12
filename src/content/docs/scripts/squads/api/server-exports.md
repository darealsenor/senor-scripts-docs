---
title: Server Exports
description: Server-side exports API for the Squads script.
---

# Server Exports

All server exports can be called from other server-side resources using the `exports` function.

## GetSquad

Get a squad by ID, name, or player ID.

```lua
local result = exports['senor-squads']:GetSquad(identifier)
```

**Parameters:**
- `identifier` (number | string) - Squad ID (number), squad name (string), or player ID (number)

**Returns:**
```lua
{
    success = boolean,
    message = string,
    data = {
        players = table,
        name = string,
        image = string,
        maxplayers = number,
        id = number,
        owner = number
    } | nil
}
```

**Example:**
```lua
-- Get squad by ID
local result = exports['senor-squads']:GetSquad(12345)
if result.success then
    print("Squad name: " .. result.data.name)
end

-- Get squad by name
local result = exports['senor-squads']:GetSquad("MySquad")
if result.success then
    print("Squad ID: " .. result.data.id)
end

-- Get squad by player ID
local result = exports['senor-squads']:GetSquad(1)
if result.success then
    print("Player is in squad: " .. result.data.name)
end
```

## GetSquads

Get all available squads.

```lua
local squads = exports['senor-squads']:GetSquads()
```

**Returns:**
- `table` - Array of squad data tables

**Squad Data Structure:**
```lua
{
    players = table,
    name = string,
    image = string,
    maxplayers = number,
    id = number,
    owner = number,
    privacy = boolean -- true if squad has a password
}
```

**Example:**
```lua
local squads = exports['senor-squads']:GetSquads()
for _, squad in ipairs(squads) do
    print("Squad: " .. squad.name .. " (ID: " .. squad.id .. ")")
    print("Players: " .. #squad.players .. "/" .. squad.maxplayers)
end
```

## CreateSquad

Create a new squad programmatically.

```lua
local result = exports['senor-squads']:CreateSquad(data)
```

**Parameters:**
- `data` (table) - Squad configuration
  - `playerId` (number) - The owner's server ID (required)
  - `name` (string) - Squad name, 1-24 characters (required)
  - `image` (string?) - Squad image URL (optional)
  - `maxplayers` (number?) - Maximum players, defaults to 4 (optional)
  - `password` (string?) - Squad password for privacy (optional)

**Returns:**
```lua
{
    success = boolean,
    message = string,
    data = {
        players = table,
        name = string,
        image = string,
        maxplayers = number,
        id = number,
        owner = number
    } | nil
}
```

**Example:**
```lua
local result = exports['senor-squads']:CreateSquad({
    playerId = 1,
    name = "MySquad",
    image = "https://example.com/image.png",
    maxplayers = 5,
    password = "secret123"
})

if result.success then
    print("Squad created: " .. result.data.name)
else
    print("Error: " .. result.message)
end
```

## AddPlayer

Add a player to a squad.

```lua
local result = exports['senor-squads']:AddPlayer(playerId, squadId)
```

**Parameters:**
- `playerId` (number) - The server ID of the player to add
- `squadId` (number | string) - The squad ID (number) or squad name (string)

**Returns:**
```lua
{
    success = boolean,
    message = string
}
```

**Example:**
```lua
-- Add player by squad ID
local result = exports['senor-squads']:AddPlayer(2, 12345)
if result.success then
    print("Player added to squad")
end

-- Add player by squad name
local result = exports['senor-squads']:AddPlayer(2, "MySquad")
if result.success then
    print("Player added to squad")
end
```

## RemovePlayer

Remove a player from their squad.

```lua
local result = exports['senor-squads']:RemovePlayer(playerId)
```

**Parameters:**
- `playerId` (number) - The server ID of the player to remove

**Returns:**
```lua
{
    success = boolean,
    message = string
}
```

**Example:**
```lua
local result = exports['senor-squads']:RemovePlayer(2)
if result.success then
    print("Player removed from squad")
else
    print("Error: " .. result.message)
end
```

## IsPlayerInSquad

Check if a player is in a squad.

```lua
local inSquad = exports['senor-squads']:IsPlayerInSquad(playerId)
```

**Parameters:**
- `playerId` (number) - The server ID of the player

**Returns:**
- `boolean` - `true` if player is in a squad, `false` otherwise

**Example:**
```lua
if exports['senor-squads']:IsPlayerInSquad(1) then
    print("Player is in a squad")
end
```

## EditSquad

Edit a squad programmatically (owner only).

```lua
local result = exports['senor-squads']:EditSquad(playerId, data)
```

**Parameters:**
- `playerId` (number) - The server ID of the squad owner
- `data` (table) - Squad data to update
  - `name` (string?) - New squad name (optional)
  - `image` (string?) - New squad image URL (optional, use empty string to reset)
  - `maxplayers` (number?) - New maximum players (optional)
  - `password` (string?) - New squad password (optional, use `nil` to remove password)

**Returns:**
```lua
{
    success = boolean,
    message = string,
    data = {
        players = table,
        name = string,
        image = string,
        maxplayers = number,
        id = number,
        owner = number
    } | nil
}
```

**Example:**
```lua
local result = exports['senor-squads']:EditSquad(1, {
    name = "NewSquadName",
    maxplayers = 6,
    password = "newpassword"
})

if result.success then
    print("Squad updated: " .. result.data.name)
end
```

