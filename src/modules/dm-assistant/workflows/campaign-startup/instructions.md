# Campaign Startup Instructions

<critical>The workflow execution engine is governed by: {project-root}/_bmad/core/tasks/workflow.xml</critical>
<critical>You MUST have already loaded and processed: {project-root}/_bmad/dnd/workflows/campaign-startup/workflow.yaml</critical>
<critical>Communicate in {communication_language} throughout the campaign creation process</critical>
<critical>⚠️ ABSOLUTELY NO TIME ESTIMATES - NEVER mention hours, days, weeks, months, or ANY time-based predictions. AI has fundamentally changed development speed - what once took teams weeks/months can now be done by one person in hours. DO NOT give ANY time estimates whatsoever.</critical>

<workflow>

<step n="1" goal="Campaign vision and theme discovery">
<action>Welcome {user_name} to campaign creation for D&D 2024 edition</action>

<action>Guide them to articulate their campaign vision through open conversation:

Explore their creative vision by asking about:
- What kind of story do they want to tell?
- What tone and themes resonate with them? (heroic, gritty, political, exploration, mystery, etc.)
- What makes this campaign exciting to them as a DM?
- Any inspiration sources (books, movies, games, history)?

Listen for clues about:
- Preferred campaign style (sandbox vs. linear, political vs. combat-heavy)
- Level of magic in the world (low, standard, high fantasy)
- Cultural and geographical themes they're drawn to
- Player agency vs. story structure preferences

Adapt your depth to their responses. If they have a clear vision, help them refine it. If they're exploring, offer examples to spark ideas.
</action>

<template-output>campaign_vision</template-output>
</step>

<step n="2" goal="World parameters and scope definition">
<action>Based on their vision, collaborate on practical campaign parameters:

Help them define the scope and scale:
- Geographic scope (single city, region, continent, multiverse?)
- Power scale (street-level heroes to world-shakers?)
- Campaign length expectations (short arc, long campaign, ongoing?)

Explore world-building preferences:
- Existing D&D settings vs. homebrew world?
- Level of detail they want to prepare upfront vs. develop during play?
- Key locations, kingdoms, or organizations they envision?

Guide them to establish practical boundaries that match their preparation style and player expectations.
</action>

<template-output>world_parameters</template-output>
</step>

<step n="3" goal="Player configuration and party setup">
<action>Discuss player group and character considerations:

Explore the social aspects:
- How many players? What are their experience levels?
- Any specific player preferences or character concepts already discussed?
- Group dynamics and play style preferences?

Plan character creation approach:
- Starting level (typically 1-3 for new campaigns)?
- Any class or race restrictions that fit the world?
- Character creation method (rolling stats, point buy, standard array)?
- Equipment starting guidelines?

Consider Session 0 preparation:
- Key topics to cover with players?
- Character backstory integration level?
- Party formation and shared goals?
</action>

<template-output>player_setup</template-output>
</step>

<step n="3a" goal="Document player characters" repeat="for-each-player">
<action>For each player, create a comprehensive character profile:

Capture character details:
- Character name, class, race, and background
- Key ability scores and notable skills
- Character backstory and motivations
- Personal goals and fears
- Connections to other party members
- Hooks for campaign integration

Document player preferences:
- Player's preferred play style (roleplay, combat, exploration, problem-solving)
- Character development interests
- Comfort level with different content types

Create individual character file at: {campaign_path}/{campaign_name}/characters/{{character_name}}.md
This allows detailed tracking and easy reference during sessions.
</action>

<template-output>character_profiles</template-output>
</step>

<step n="4" goal="Initial setting and starting location">
<action>Design the campaign's opening environment:

Collaborate on the starting location:
- Where do the characters begin their story?
- What's the local situation or tension?
- Key NPCs in the starting area?
- Immediate hooks or opportunities for adventure?

Consider the opening scenario:
- How do the characters meet (if they don't know each other)?
- What draws them into the first adventure?
- Local threats, mysteries, or opportunities?
- Connection between starting events and larger campaign themes?

Keep the scope manageable - focus on the immediate area where sessions 1-3 will likely take place.
</action>

<template-output>starting_setting</template-output>
</step>

<step n="5" goal="Session 0 planning and house rules">
<action>Prepare for the foundational session with players:

Plan Session 0 agenda:
- Character creation assistance needed?
- World introduction and tone setting?
- Party formation and shared goals?
- Safety tools and table expectations?

Establish house rules and expectations:
- Any modifications to D&D 2024 rules?
- Death and resurrection policies?
- Player agency vs. story structure balance?
- Table etiquette and communication preferences?

Consider practical logistics:
- Session frequency and length?
- Attendance and backup character policies?
- Note-taking and campaign tracking methods?
</action>

<template-output>session_zero_plan</template-output>
</step>

<step n="6" goal="Campaign materials organization">
<action>Set up the campaign infrastructure:

Establish organization systems:
- Campaign folder structure in {campaign_path}/{campaign_name}/
  - /characters/ folder for individual character files
  - /npcs/ folder for NPC tracking  
  - /locations/ folder for world documentation
  - /sessions/ folder for session notes and summaries
- NPC tracking methods (names, relationships, stats)?
- Location documentation approach?
- Plot thread and continuity tracking?

Plan preparation workflows:
- How will you use other DM Assistant agents?
- Session preparation routine and timing?
- Between-session note-taking and planning?
- Player communication and session summaries?

Create the campaign directory structure and character files based on the documented player characters.
This creates the foundation for using the prep-session and other workflows effectively.

Congratulate {user_name} on completing their campaign foundation. Their campaign is now ready for Session 0, and they have everything needed to begin session preparation using the prep-session workflow.
</action>

<template-output>organization_system</template-output>
</step>

</workflow>