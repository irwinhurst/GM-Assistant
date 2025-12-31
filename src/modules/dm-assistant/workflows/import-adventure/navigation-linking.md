# Area Navigation Linking

## Connection Types

### Direct Connections
- **Open Doors**: Freely accessible passages
- **Closed Doors**: Doors that can be opened normally
- **Archways**: Open passages without doors
- **Stairs**: Connections between levels

### Restricted Connections
- **Locked Doors**: Require keys or lock picking
- **Secret Doors**: Hidden passages requiring discovery
- **Magical Barriers**: Require spells or special items
- **Trapped Passages**: Dangerous but passable routes

### Conditional Connections
- **One-Way Passages**: Can only travel in one direction
- **Triggered Routes**: Activated by switches or events
- **Temporary Connections**: Available only under certain conditions
- **Skill-Based Access**: Require climbing, swimming, etc.

## Link Format Examples

### Standard Connection
```markdown
- [North Door](area-02-guard-room.md)
- [East Corridor](area-05-armory.md)
- [Stairs Up](area-12-upper-hall.md)
```

### Secret Connection
```markdown
- [Hidden Door](area-15-secret-chamber.md) (DC 15 Investigation)
- [Concealed Passage](area-08-treasure-room.md) (DC 18 Perception)
```

### Locked Connection
```markdown
- [Iron Door](area-20-throne-room.md) (Locked - requires brass key)
- [Reinforced Portal](area-25-vault.md) (DC 20 Thieves' Tools)
```

### Conditional Connection
```markdown
- [Lowered Bridge](area-18-other-side.md) (When lever is pulled)
- [Flooded Tunnel](area-22-lower-caves.md) (DC 15 Athletics to swim)
```

## Bi-Directional Linking

### Ensuring Two-Way Navigation
- **Area A links to Area B** → **Area B must link back to Area A**
- **Check connection descriptions** match from both directions
- **Verify door/passage names** are consistent
- **Confirm access conditions** work in both directions

### Connection Descriptions
- **From Area 1**: "North door leads to Guard Room"
- **From Area 2**: "South door leads to Entrance Hall"
- **Both should reference** the same physical connection

## Special Navigation Cases

### Multi-Level Areas
```markdown
- [Stairs Down](area-10-lower-level.md)
- [Ladder Up](area-03-upper-balcony.md)
- [Rope Descent](area-07-pit-bottom.md) (DC 12 Athletics)
```

### Outdoor Connections
```markdown
- [Forest Path North](area-04-clearing.md)
- [Mountain Trail](area-11-cave-entrance.md) (1 hour travel)
- [River Crossing](area-06-far-bank.md) (DC 13 Athletics or boat)
```

### Teleportation/Magic
```markdown
- [Magic Circle](area-30-wizard-tower.md) (Requires teleport spell)
- [Portal](area-45-other-plane.md) (Active only during full moon)
```

## Navigation Index Creation

### Area Connection Matrix
| Area | Connects To | Connection Type | Requirements |
|------|-------------|-----------------|-------------|
| 1 | 2, 5 | Door, Secret Door | None, DC 15 Investigation |
| 2 | 1, 3, 4 | Door, Corridor, Stairs | None |
| 3 | 2, 6 | Stairs, Locked Door | None, Brass Key |

### Quick Reference Map
```
[1] ←→ [2] ←→ [3]
 ↕       ↕       ↕
[5]     [4]     [6]
```

## Validation Steps

### Connection Verification
1. **Check all outbound links** from each area
2. **Verify inbound links exist** in connected areas
3. **Test link syntax** and file naming
4. **Confirm file paths** are correct

### Accessibility Review
1. **Ensure no orphaned areas** (unreachable from others)
2. **Verify progression paths** through the adventure
3. **Check for dead ends** that should have exits
4. **Confirm secret connections** are properly hidden

### Quality Assurance
1. **Consistent naming convention** for area files
2. **Uniform link formatting** across all areas
3. **Proper requirement notation** for restricted access
4. **Clear directional descriptions** (north, east, up, down)