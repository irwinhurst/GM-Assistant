
# Start Combat Workflow

This workflow initializes and manages combat encounters in the DM Assistant system. It guides the DM through loading encounters, rolling initiative, setting up combat tracking, and managing turn-by-turn actions.

## Purpose
- Set up combat tracking from the current area encounter
- Generate combat-status and combat-log files for session management
- Automate initiative and turn order for NPCs and PCs
- Provide a structured process for running combat rounds

## Pre-Combat Setup

### Encounter File Processing
1. Load encounter from area file reference
2. Parse enemy stat blocks and quantities
3. Identify environmental hazards/features
4. Set battlefield conditions

### Initiative Management
```yaml
Initiative Order:
  Round: 0
  Turn: 0
  Participants:
    - name: "PC Name"
      initiative: [DM Input Required]
      type: "player"
    - name: "Enemy 1"
      initiative: [Auto-rolled]
      type: "npc"
```

### Combat File Creation
**combat-status.md Template:**
```markdown
# Combat Status - [Encounter Name]
## Round [X] - [Current Character]'s Turn

### Initiative Order
1. Character (Initiative Score) - Status
2. Enemy (Initiative Score) - Status

### Current Conditions
- Character: [HP/Max], [Conditions]
- Enemy: [HP/Max], [Conditions]

### Environmental Factors
[Lighting, terrain, weather, etc.]
```

**combat-log.csv Template:**
```csv
Round,Initiative,Character,Action,Target,Result,Damage,Conditions,HP_Remaining,Notes
0,0,Combat,Start,All,Encounter Begins,0,,Full HP,Initiative rolled
```

## Combat Flow Commands
- `attack [target]` - Process attack action
- `spell [spell name]` - Cast spell with effects
- `move [distance]` - Character movement
- `end-turn` - Advance to next in initiative
- `damage [amount] [target]` - Apply damage
- `heal [amount] [target]` - Apply healing
- `condition [type] [target]` - Apply status condition
- `end-combat` - Complete encounter

## Steps
1. **Identify Encounter**
   - Load the encounter file from the current area
2. **Create Combat Files**
   - Generate combat-status.md and combat-log.csv for tracking
3. **Roll Initiative**
   - Auto-roll for NPCs, prompt for PC initiative
4. **Setup Tracking**
   - Initialize turn order and Round 0 status
5. **Begin Combat**
   - Start turn-by-turn combat management

## Outputs
- combat-status.md
- combat-log.csv
- session-log-entry.md

## Integration
- Compatible with session-runner and campaign-manager agents
- Works with create-area, update-area, and import-adventure workflows

## Best Practices
- Ensure all encounter details are loaded before starting combat
- Use combat-status.md to track initiative, HP, and effects
- Update combat-log.csv after each action for accurate records
- Review session-log-entry.md for post-combat summaries

---
*This README replaces combat-initialization.md for the start-combat workflow and includes all template and setup information.*
