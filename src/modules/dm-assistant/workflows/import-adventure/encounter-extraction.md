# Encounter Extraction

## Encounter Types to Extract

### Combat Encounters
- **Creature Encounters**: Monsters, NPCs, hostile creatures (names only)
- **Multiple Creature Groups**: Complex battles with different enemy types
- **Environmental Battles**: Combat with terrain hazards
- **Boss Encounters**: Significant antagonists with special mechanics

### Non-Combat Interactions
- **Negotiable Encounters**: Creatures that might talk instead of fight
- **Social Opportunities**: NPCs with information or services
- **Stealth Alternatives**: Encounters that can be bypassed or avoided

### Trap Encounters
- **Mechanical Traps**: Pressure plates, tripwires, falling blocks
- **Magical Traps**: Spell effects, magical alarms, wards
- **Environmental Hazards**: Unstable floors, poisonous gas, extreme temperatures

### Social Encounters
- **NPC Conversations**: Important dialogue with quest-giving NPCs
- **Negotiation Scenarios**: Diplomatic challenges, bargaining
- **Information Gathering**: NPCs with crucial plot information

## Encounter File Structure

### Combat Encounter Template
```markdown
# Encounter: [Name]

**Location**: [Area Number/Name]
**Trigger**: [What starts the encounter]
**Page Reference**: p. [XX]

## Creatures
- [Number] x [Monster Name] (CR [X]) → [Link to creature file when available]
- [Number] x [NPC Name] (CR [X]) → [Link to NPC file when available]

## Difficulty Assessment
**Total Monster CRs**: [Sum of all creature CRs]
**Standard D&D Rating**: [Easy/Medium/Hard/Deadly based on DMG]
**SlyFlourish Benchmark**: [Party Group Benchmark: X, Single Monster Limit: Y]
**SlyFlourish Rating**: [Weak/Moderate/Strong/Severe/Extreme]
**Benchmark Ratio**: [Total CRs ÷ Group Benchmark = X.XX]

> **DM Note**: This encounter totals [X] CRs against a party benchmark of [Y]. [Additional contextual factors that might make it easier/harder]

## Interaction Options
- **Combat**: [Basic combat approach]
- **Social**: [Negotiation possibilities, languages, motivations]
- **Stealth**: [Ways to avoid or bypass encounter]
- **Creative**: [Other potential solutions]

## Environment
- [Terrain features affecting encounter]
- [Cover, difficult terrain, hazards]
- [Lighting, visibility conditions]

## Outcomes
- **Combat Victory**: [Loot, information, progression]
- **Peaceful Resolution**: [Alternative rewards or information]
- **Stealth Success**: [What players gain by avoiding conflict]

## DM Preparation Needed
- [ ] Import/create creature stat blocks → Use Campaign Manager "Import Creatures"
- [ ] Define social interaction details
- [ ] Prepare alternative resolution rewards
- [ ] Set up environmental effects
```

### Trap Encounter Template
```markdown
# Trap: [Name]

**Location**: [Area Number/Name]
**Detection**: [Skill] DC [#]
**Trigger**: [What sets off the trap]
**Page Reference**: p. [XX]

## Effect
- [What happens when triggered]
- [Damage, conditions, or other effects]
- [Save or skill check to avoid]

## Disarm
- [How to disable the trap]
- [Required tools or skills]
- [DC and consequences of failure]

## Bypass
- [Alternative ways to avoid the trap]
- [Safe routes or special knowledge]
```

## Extraction Process

### Setup: Calculate Party Benchmarks
Before extracting encounters, establish party benchmarks using the **SlyFlourish Lazy Encounter Benchmark**:

**For levels 1-4**: Group Benchmark = Total party levels ÷ 4
**For levels 5+**: Group Benchmark = Total party levels ÷ 2

**Single Monster Benchmark**: Average level (1-4) or 1.5 × average level (5+)

*Reference: See `slyflourish-benchmark-guide.md` for complete calculations and benchmark table*

### 1. Identification
- **Scan area descriptions** for encounter indicators
- **Look for stat blocks** embedded in area text
- **Extract creature CRs** for difficulty calculation
- **Find trigger conditions** that start encounters
- **Identify treasure** associated with encounters

### 2. Classification and Difficulty Assessment
- **Determine encounter type** (combat, trap, social)
- **Calculate total monster CRs** for combat encounters
- **Apply SlyFlourish benchmark analysis**:
  - Compare total CRs to group benchmark
  - Check if any single monster exceeds single monster benchmark
  - Assign SlyFlourish rating (Weak/Moderate/Strong/Severe/Extreme)
- **Note contextual factors** that might affect difficulty
- **Assess complexity level** (simple, moderate, complex)
- **Extract relevant statistics** and DCs

### 3. File Creation
- **Generate unique filename** based on encounter type and location
- **Populate template** with extracted information including difficulty ratings
- **Include both D&D standard and SlyFlourish assessments**
- **Link back to area file** where encounter occurs
- **Cross-reference** with adventure book pages

### 4. Quality Control
- **Flag encounters exceeding benchmarks** for DM review
- **Identify potential scaling needs** for over/under-tuned encounters
- **Note encounters requiring special preparation**
- **Suggest modifications** for parties of different levels

### 5. Integration
- **Add encounter links** to area files
- **Create encounter index** for quick reference
- **Organize by difficulty rating** for session planning
- **Cross-reference encounter difficulty** across adventure areas

## Integration with Campaign Manager

### Import Creatures Workflow
After encounter extraction, DMs will need to:
1. **Use Campaign Manager's "Import Creatures" workflow** to upload stat blocks
2. **Link creature files** to encounter references
3. **Organize creature library** for reuse across multiple encounters
4. **Update encounter files** with proper creature file links

### Creature File Organization
- **Standalone creature files**: `/creatures/goblin.md`, `/creatures/orc-chief.md`
- **NPC files**: `/npcs/merchant-aldwin.md`, `/npcs/guard-captain.md`  
- **Reusable references**: Same creature can be linked from multiple encounters
- **Centralized management**: Update creature stats in one place