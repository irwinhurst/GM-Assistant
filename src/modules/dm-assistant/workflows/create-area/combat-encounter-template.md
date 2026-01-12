# Combat: {{encounter_name}}
**Trigger**: {{combat_trigger}} | **Page**: p. {{page_reference}} | **Session**: {{session_name}}

## Opponents
| Name | # | CR | AC | HP | Spd | Key Stats/Attacks |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
{{#each enemies}}
| {{enemy_name}} | {{count}} | {{challenge_rating}} | {{armor_class}} | {{hit_points}} | {{movement_speed}} | {{stat_block_summary}} |
{{/each}}

## Combat Tactics
- **Round 1**: {{round_1_tactics}}
- **Ongoing**: {{ongoing_tactics}}
- **Retreat**: {{retreat_conditions}}

## Environment & Hazards
- **Terrain**: {{terrain_type}} ({{lighting_level}})
- **Hazards**: {{#each hazards}}**{{hazard_name}}** ({{hazard_mechanics}}); {{/each}}
- **Key Features**: {{cover_available}}; {{elevation_features}}

## Resolution & Rewards
- **Surrender**: {{intimidation_dc}} DC ({{intimidation_outcome}})
- **Loot**: {{combat_treasure}} | **XP**: {{total_experience}} ({{xp_per_player}}/PC)

---
**PREPARATION & TUNING (DELETE BELOW LINE BEFORE PRINTING)**

## Scaling & Difficulty
- **SlyFlourish**: {{slyflourish_rating}} ({{benchmark_ratio}} of benchmark)
- **3/5 Players**: {{scaling_3_players}} / {{scaling_5_players}}
- **Easy/Hard**: {{easy_mode_changes}} / {{hard_mode_changes}}

## Full Reference
{{stat_block_reference}}

