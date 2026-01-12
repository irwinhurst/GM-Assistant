# Trap: {{trap_name}}
**Type**: {{trap_type}} | **Page**: p. {{page_reference}} | **Search DC**: {{detection_dc}} ({{detection_skill}})

## Active Mechanics
- **Trigger**: {{trap_trigger}}
- **Effect**: {{primary_damage}} (Save: {{saving_throw}} DC {{save_dc}})
- **Area**: {{effect_area}}
- **Visuals**: {{#each visual_clues}}{{clue_description}}; {{/each}}

## Countermeasures
| Action | Skill | DC | Outcome |
|:---|:---|:---:|:---|
| **Spot** | Perception/Invest | {{detection_dc}} | {{active_detection_description}} |
| **Disarm** | {{disarm_skill}} | {{disarm_dc}} | {{disarm_time}}. Fail: {{standard_failure_effect}} |
| **Bypass** | {{#each alternative_methods}}{{method_name}} | {{method_dc}} | {{method_description}} <br> {{/each}} |

## Reset & Variations
- **Reset**: {{trap_reset}}
- **Complex**: {{complex_version_description}}

---
**PREPARATION & SCALING (DELETE BELOW LINE BEFORE PRINTING)**

## Detailed Mechanics
- **Safe Path**: {{safe_approach}}
- **Secondary Effects**: {{#each secondary_effects}}{{effect_name}}: {{effect_description}}; {{/each}}
- **Crit Fail**: {{critical_failure_effect}}

## Scaling
- **Low Level**: Detect {{lower_level_detection}} | Save {{lower_level_save}} | Dmg {{lower_level_damage}}
- **High Level**: Detect {{higher_level_detection}} | Save {{higher_level_save}} | Dmg {{higher_level_damage}}

## Reference
- **Troubleshooting**: If players stuck: {{detection_help}} OR {{disarm_help}}
