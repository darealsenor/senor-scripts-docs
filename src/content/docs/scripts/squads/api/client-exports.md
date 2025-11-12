---
title: Client Exports
description: Client-side exports API for the Squads script.
---

# Client Exports

All client exports can be called from other client-side resources using the `exports` function.

## GetSquad

Get the current player's squad data.

```lua
local squad = exports['senor-squads']:GetSquad()
```

**Returns:**
- `table | nil` - Squad data table if player is in a squad, `nil` otherwise

**Squad Data Structure:**
```lua
{
    players = table,
    name = string,
    image = string,
    maxplayers = number,
    id = number,
    owner = number
}
```

**Example:**
```lua
local squad = exports['senor-squads']:GetSquad()
if squad then
    print("Squad name: " .. squad.name)
    print("Squad owner: " .. squad.owner)
end
```

## IsInSquad

Check if the current player is in a squad.

```lua
local inSquad = exports['senor-squads']:IsInSquad()
```

**Returns:**
- `boolean` - `true` if player is in a squad, `false` otherwise

**Example:**
```lua
if exports['senor-squads']:IsInSquad() then
    print("Player is in a squad")
end
```

## OpenMenu

Open the squad menu for the current player.

```lua
exports['senor-squads']:OpenMenu()
```

**Example:**
```lua
-- Open squad menu from another resource
exports['senor-squads']:OpenMenu()
```

## IsPlayerInMySquad

Check if a specific player is in the current player's squad.

```lua
local isInSquad = exports['senor-squads']:IsPlayerInMySquad(playerId)
```

**Parameters:**
- `playerId` (number) - The server ID of the player to check

**Returns:**
- `boolean` - `true` if the player is in the current player's squad, `false` otherwise

**Example:**
```lua
local targetPlayer = 2
if exports['senor-squads']:IsPlayerInMySquad(targetPlayer) then
    print("Player " .. targetPlayer .. " is in my squad")
end
```

## GetSquadPlayers

Get all players in the current player's squad.

```lua
local players = exports['senor-squads']:GetSquadPlayers()
```

**Returns:**
- `table | nil` - Array of player data if player is in a squad, `nil` otherwise

**Example:**
```lua
local players = exports['senor-squads']:GetSquadPlayers()
if players then
    for _, player in ipairs(players) do
        print("Player: " .. player.name .. " (ID: " .. player.serverId .. ")")
    end
end
```

## IsSettingEnabled

Check if a specific squad setting is enabled.

```lua
local isEnabled = exports['senor-squads']:IsSettingEnabled(setting)
```

**Parameters:**
- `setting` (string) - The setting to check. Valid values: `"relations"`, `"blips"`, `"tags"`, `"hud"`

**Returns:**
- `boolean` - `true` if the setting is enabled, `false` otherwise

**Example:**
```lua
if exports['senor-squads']:IsSettingEnabled("blips") then
    print("Blips are enabled")
end
```

## GetSquadOwner

Get the squad owner's server ID.

```lua
local ownerId = exports['senor-squads']:GetSquadOwner()
```

**Returns:**
- `number | nil` - The squad owner's server ID if player is in a squad, `nil` otherwise

**Example:**
```lua
local ownerId = exports['senor-squads']:GetSquadOwner()
if ownerId then
    print("Squad owner ID: " .. ownerId)
end
```

## GetRelationsGroupHash

Get the relationship group hash for the current player's squad.

```lua
local groupHash = exports['senor-squads']:GetRelationsGroupHash()
```

**Returns:**
- `number | nil` - The relationship group hash if player is in a squad and relations are enabled, `nil` otherwise

**Note:** This function creates/adds the relationship group if it doesn't exist. Use this to set relationships between squad members and other entities.

**Example:**
```lua
local groupHash = exports['senor-squads']:GetRelationsGroupHash()
if groupHash then
    -- Set relationship between entities
    SetPedRelationshipGroupHash(ped, groupHash)
end
```

