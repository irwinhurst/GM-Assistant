# Social: {{encounter_name}}
**NPC**: {{npc_name}} ({{npc_role}}) | **Page**: p. {{page_reference}} | **Attitude**: {{initial_attitude}}

## Key Info
- **Goal**: {{npc_goals}} | **Motivation**: {{npc_motivation}}
- **Appearance**: {{npc_appearance}}
- **Key Traits**: {{npc_demeanor}}; {{speech_patterns}}

## Dialogue & Checks
| Interaction | Skill/Approach | DC | Outcome/Reward |
|:---|:---|:---:|:---|
| **Friendly** | {{friendly_skills}} | {{friendly_dc}} | {{friendly_outcome}} |
| **Coerce** | {{intimidation_skills}} | {{intimidation_dc}} | {{intimidation_success}} / {{intimidation_failure}} |
| **Manipulate** | {{deception_skills}} | {{deception_dc}} | {{deception_success}} / {{deception_failure}} |
| **Insight** | Insight Check | {{insight_dc}} | {{insight_information}} |

## Topics & Deals
- **Wants**: {{npc_want_1}} | **Offers**: {{npc_offer_1}}
- **Secrets**: {{#each information_topics}}**{{topic}}**: {{topic_details}}; {{/each}}
- **Services**: {{#each services}}{{service_name}} ({{service_cost}}); {{/each}}

---
**PREPARATION & CONTEXT (DELETE BELOW LINE BEFORE PRINTING)**

## Background & Detail
- **Full Context**: {{social_context}}
- **Backstory**: {{backstory_elements}}
- **Languages**: {{npc_languages}}
- **Relationships**: {{relationship_tracking_notes}}

## Hostile Scale
- **Turning Hostile**: {{hostile_trigger}} → Combat Ref: {{combat_reference}}
- **Stats**: {{npc_race}} {{npc_class}}

