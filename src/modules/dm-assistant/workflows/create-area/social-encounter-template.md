# Social: {{encounter_name}}

**Location**: {{area_number}} - {{area_name}}
**NPC/Group**: {{npc_name}}
**Encounter Type**: {{social_type}}
**Page Reference**: p. {{page_reference}}
**Session**: {{session_name}}

## NPC Details
### Basic Information
**Name**: {{npc_full_name}}
**Race**: {{npc_race}}
**Class/Role**: {{npc_role}}
**Languages**: {{npc_languages}}

### Personality
**Demeanor**: {{npc_demeanor}}
**Motivation**: {{npc_motivation}}
**Goals**: {{npc_goals}}
**Fears**: {{npc_fears}}

### Appearance
{{npc_appearance}}

## Social Situation
### Context
{{social_context}}

### Initial Attitude
**Toward Party**: {{initial_attitude}}
**Reason**: {{attitude_reason}}

### Stakes
**For NPC**: {{npc_stakes}}
**For Party**: {{party_stakes}}

## Conversation Flow
### Opening
{{opening_dialogue}}

### Key Information
{{#each information_topics}}
- **{{topic}}**: {{topic_details}} ({{reveal_conditions}})
{{/each}}

### NPC Requests/Offers
{{#each npc_requests}}
- **{{request_type}}**: {{request_details}}
{{/each}}

## Dialogue Options
### Friendly Approach
**Best Skills**: {{friendly_skills}}
**DC**: {{friendly_dc}}
**Outcome**: {{friendly_outcome}}

### Intimidation
**Skills**: {{intimidation_skills}}
**DC**: {{intimidation_dc}}
**Success**: {{intimidation_success}}
**Failure**: {{intimidation_failure}}

### Deception
**Skills**: {{deception_skills}}
**DC**: {{deception_dc}}
**Success**: {{deception_success}}
**Failure**: {{deception_failure}}

### Persuasion
**Skills**: {{persuasion_skills}}
**DC**: {{persuasion_dc}}
**Success**: {{persuasion_success}}
**Failure**: {{persuasion_failure}}

### Insight Checks
**DC {{insight_dc}}**: {{insight_information}}

## Negotiation Framework
### What NPC Wants
1. {{npc_want_1}}
2. {{npc_want_2}}
3. {{npc_want_3}}

### What NPC Can Offer
1. {{npc_offer_1}}
2. {{npc_offer_2}}
3. {{npc_offer_3}}

### Deal Points
- **Minimum Acceptable**: {{minimum_deal}}
- **Ideal Outcome**: {{ideal_deal}}
- **Compromise Position**: {{compromise_deal}}

## Potential Outcomes
### Successful Negotiation
{{successful_negotiation_outcome}}

### Failed Negotiation
{{failed_negotiation_outcome}}

### Hostile Turn
**Trigger**: {{hostile_trigger}}
**Combat Stats**: {{combat_reference}}
**Allies**: {{npc_allies}}

### Neutral Outcome
{{neutral_outcome}}

## Information & Rewards
### Information Available
{{#each available_information}}
- **{{info_topic}}**: {{info_details}} ({{revelation_condition}})
{{/each}}

### Services Offered
{{#each services}}
- **{{service_name}}**: {{service_description}} ({{service_cost}})
{{/each}}

### Material Rewards
{{material_rewards}}

## Roleplay Guidance
### Speech Patterns
{{speech_patterns}}

### Mannerisms
{{npc_mannerisms}}

### Common Phrases
{{#each common_phrases}}
- "{{phrase}}"
{{/each}}

### Emotional Triggers
- **Positive**: {{positive_triggers}}
- **Negative**: {{negative_triggers}}

## Character Development
### Backstory Elements
{{backstory_elements}}

### Future Appearances
{{future_appearance_notes}}

### Relationship Tracking
{{relationship_tracking_notes}}

## DM Reference
### Quick Stats
- **Attitude**: {{quick_attitude}}
- **Key Info**: {{key_information}}
- **Main Goal**: {{main_goal}}

### Social Combat Resolution
- **Initiative**: Charisma + Proficiency
- **"HP"**: Attitude levels (Hostile → Unfriendly → Neutral → Friendly → Helpful)
- **"Damage"**: Failed social checks worsen attitude

### Session Integration
- **Area Link**: [{{area_name}}](../areas/area-{{area_number}}-{{sanitized_area_name}}.md)
- **NPC File**: [{{npc_name}}](../npcs/{{npc_file}}.md)
- **Campaign Tracking**: Update relationship status post-encounter

---
*Generated from social-encounter-template.md | Centralized Encounter Template*
