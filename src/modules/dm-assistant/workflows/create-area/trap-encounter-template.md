# Trap: {{trap_name}}

**Location**: {{area_number}} - {{area_name}}
**Trap Type**: {{trap_type}}
**Page Reference**: p. {{page_reference}}
**Session**: {{session_name}}

## Trap Mechanics
**Detection DC**: {{detection_dc}} ({{detection_skill}})
**Trigger**: {{trap_trigger}}
**Reset**: {{trap_reset}}

## Detection
### Passive Perception
**DC {{passive_detection_dc}}**: {{passive_detection_description}}

### Active Search
**{{detection_skill}} DC {{detection_dc}}**: {{active_detection_description}}

### Visual Clues
{{#each visual_clues}}
- {{clue_description}}
{{/each}}

## Trigger Conditions
{{trigger_description}}

### Safe Approach
{{safe_approach}}

## Trap Effects
### Primary Effect
**Damage/Effect**: {{primary_damage}}
**Save**: {{saving_throw}} DC {{save_dc}}
**Area of Effect**: {{effect_area}}

### Secondary Effects
{{#if secondary_effects}}
{{#each secondary_effects}}
- **{{effect_name}}**: {{effect_description}}
{{/each}}
{{/if}}

## Disarming the Trap
### Standard Disarm
**Skill Required**: {{disarm_skill}} DC {{disarm_dc}}
**Tools Needed**: {{required_tools}}
**Time Required**: {{disarm_time}}

### Failure Consequences
**Failure by 5+**: {{critical_failure_effect}}
**Standard Failure**: {{standard_failure_effect}}

### Alternative Disarm Methods
{{#each alternative_methods}}
- **{{method_name}}**: {{method_description}} (DC {{method_dc}})
{{/each}}

## Bypass Options
### Physical Bypass
{{physical_bypass_description}}

### Magical Bypass  
{{magical_bypass_description}}

### Environmental Bypass
{{environmental_bypass_description}}

## Scaling for Different Levels
### Lower Level Parties
**Detection DC**: {{lower_level_detection}}
**Save DC**: {{lower_level_save}}
**Damage**: {{lower_level_damage}}

### Higher Level Parties
**Detection DC**: {{higher_level_detection}}
**Save DC**: {{higher_level_save}}
**Damage**: {{higher_level_damage}}

## Treasure Integration
{{#if treasure_protected}}
**Protected Treasure**: {{protected_treasure}}
**Treasure Location**: {{treasure_location}}
{{/if}}

## Trap Variations
### Simple Version
{{simple_version_description}}

### Complex Version
{{complex_version_description}}

### Magical Enhancement
{{magical_enhancement_description}}

## DM Reference
### Quick Stats
- **Type**: {{trap_type}}
- **Detect**: {{detection_skill}} DC {{detection_dc}}
- **Disarm**: {{disarm_skill}} DC {{disarm_dc}}
- **Effect**: {{quick_effect_summary}}

### Common Player Approaches
- **Careful Searcher**: {{careful_search_notes}}
- **Reckless Rusher**: {{reckless_approach_notes}}
- **Creative Problem Solver**: {{creative_solution_notes}}

### Troubleshooting
- **Players Can't Detect**: {{detection_help}}
- **Players Can't Disarm**: {{disarm_help}}
- **Trap Too Deadly**: {{reduce_lethality}}

## Session Integration
- **Area Reference**: [{{area_name}}](../areas/area-{{area_number}}-{{sanitized_area_name}}.md)
- **Session Runner**: Note as environmental hazard
- **Combat Integration**: May trigger during fights

---
*Generated from trap-encounter-template.md | Centralized Encounter Template*
