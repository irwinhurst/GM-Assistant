# Combat: {{encounter_name}}

**Location**: {{area_number}} - {{area_name}}
**Trigger**: {{combat_trigger}}
**Page Reference**: p. {{page_reference}}
**Session**: {{session_name}}

**Encounter Difficulty (Quick Reference):**
- **SlyFlourish Rating:** {{slyflourish_rating}}
- **Benchmark Ratio:** {{benchmark_ratio}} ({{total_monster_crs}} ÷ {{slyflourish_group_benchmark}})
- **Single Monster Check:** {{single_monster_check}}
- **DMG Difficulty:** {{standard_difficulty_rating}}

## Combat Setup
**Initiative Surprise**: {{surprise_conditions}}
**Starting Distance**: {{starting_distance}}
**Terrain Advantage**: {{terrain_advantage}}

## Opponents
{{#each enemies}}
### {{enemy_name}}
- **Quantity**: {{count}}
- **Challenge Rating**: {{challenge_rating}}
- **Hit Points**: {{hit_points}}
- **Armor Class**: {{armor_class}}
- **Speed**: {{movement_speed}}
- **Stat Reference**: {{stat_block_reference}}
{{/each}}

## Combat Tactics
### Round 1 Strategy
{{round_1_tactics}}

### Ongoing Tactics
{{ongoing_tactics}}

### Retreat Conditions
{{retreat_conditions}}

## Encounter Difficulty Rating

### SlyFlourish Rating Scale
- **Weak**: Below 1/2 benchmark (minor encounters, resource preservation)
- **Moderate**: 1/2 to 3/4 benchmark (standard encounters, moderate challenge)  
- **Strong**: 3/4 to 1x benchmark (significant encounters, real challenge)
- **Severe**: 1x to 1.5x benchmark (major encounters, high resource cost)
- **Extreme**: 1.5x+ benchmark (boss fights, deadly encounters)

### Contextual Difficulty Modifiers
**Factors Making This Easier**: {{easier_factors}}
<!-- Example: Characters outnumber foes 2:1, excellent tactical position, full resources -->

**Factors Making This Harder**: {{harder_factors}}  
<!-- Example: Monsters have positional advantage, characters are worn down, surprise round -->

**Final Assessment**: {{contextual_assessment}}
<!-- Example: "Moderate baseline but easier due to environmental advantages" -->

**DM Notes**: {{difficulty_notes}}

## Battlefield Environment
- **Terrain Type**: {{terrain_type}}
- **Difficult Terrain**: {{difficult_terrain}}
- **Cover Options**: {{cover_available}}
- **Elevation Changes**: {{elevation_features}}
- **Lighting**: {{lighting_level}}
- **Room Dimensions**: {{room_size}}

## Environmental Hazards
{{#each hazards}}
- **{{hazard_name}}**: {{hazard_description}} ({{hazard_mechanics}})
{{/each}}

## Alternative Resolutions
### Intimidation/Surrender
**DC**: {{intimidation_dc}}
**Outcome**: {{intimidation_outcome}}

### Negotiation
**Languages**: {{creature_languages}}
**Motivation**: {{creature_motivation}}
**Possible Deal**: {{negotiation_terms}}

### Stealth Bypass
**Stealth DC**: {{stealth_dc}}
**Perception**: {{creature_perception}}
**Bypass Route**: {{stealth_route}}

## Combat Rewards
### Victory Loot
- **Treasure**: {{combat_treasure}}
- **Equipment**: {{enemy_equipment}}
- **Information**: {{information_gained}}

### Experience Points
**Total XP**: {{total_experience}}
**XP per Player**: {{xp_per_player}}

## Scaling Guidelines
### Party Size Adjustments
- **3 Players**: {{scaling_3_players}}
- **4 Players**: {{scaling_4_players}}
- **5 Players**: {{scaling_5_players}}
- **6+ Players**: {{scaling_6_players}}

### Difficulty Adjustments
- **Easy Mode**: {{easy_mode_changes}}
- **Hard Mode**: {{hard_mode_changes}}

## Session Runner Integration
```yaml
encounter_id: {{encounter_id}}
initiative_order: auto-generate
combat_tracker: csv-log
status_tracking: yaml-format
```

## DM Combat Reference
### Quick Stats
| Creature | AC | HP | Speed | Key Abilities |
|----------|----|----|-------|---------------|
{{#each enemies}}
| {{enemy_name}} | {{armor_class}} | {{hit_points}} | {{speed}} | {{key_abilities}} |
{{/each}}

### Combat Reminders
- {{combat_reminder_1}}
- {{combat_reminder_2}}
- {{combat_reminder_3}}

---
*Generated from combat-encounter-template.md | Centralized Encounter Template*
