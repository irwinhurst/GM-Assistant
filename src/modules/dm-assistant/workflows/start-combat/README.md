
# Start Combat Workflow

This workflow initializes and manages combat encounters in the DM Assistant system. It guides the DM through loading encounters, setting up combat tracking, and responding to DM actions.

## Purpose
- Set up combat tracking from the current area encounter
- Generate combat-status and combat-log files for session management
- Do not attempt to roll initiative unless asked
- Do not attempt to track combat rounds
## Pre-Combat Setup

### Encounter File Processing
1. Load encounter from area file reference
2. Parse enemy stat blocks and quantities
3. Identify environmental hazards/features and inform the DM
4. Set battlefield conditions and inform the DM

### Current Conditions
- Character: [HP/Max], [Conditions]
- Enemy: [HP/Max], [Conditions]

### Environmental Factors
[Lighting, terrain, weather, etc.]

## Combat Flow Commands
- `[Attacker] attacks [target]` - Process attack action for the attacker, use the attacker's stats and the target's stats. Then respond with one sentence of flavor text.
- `spell [spell name]` - Cast spell with effects, use the caster's stats. Then respond with one sentence of flavor text.
- `damage [amount] [target]` - Apply damage to the target. Then respond with one sentence of flavor text.
- `heal [amount] [target]` - Apply healing to the target. Then respond with one sentence of flavor text.
- `condition [type] [target]` - Apply status condition to the target. Then respond with one sentence of flavor text.
- `end-combat` - Complete encounter, update combat-status.md
- `[Attacker] hits [target]` - Do not process the attack, just apply damanage to target. Then respond with one sentence of flavor text.

## Steps
1. **Identify Encounter**
   - Load the encounter file from the current area
2. **Create Combat Files**
   - Generate combat-status.md for tracking
3. **Setup Tracking**
   - Initialize turn order and Round 0 status

## Outputs
- combat-status.md

## Integration
- Compatible with session-runner and campaign-manager agents
- Works with create-area, update-area, and import-adventure workflows

## Best Practices
- Ensure all encounter details are loaded before starting combat
- Use combat-status.md HP, and effects

---
*This README replaces combat-initialization.md for the start-combat workflow and includes all template and setup information.*
