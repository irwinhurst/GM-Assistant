# AI Content Processing Guide

## Processing Steps

### 1. Content Analysis
- **Text Extraction**: Pull all readable text from uploaded content
- **Structure Recognition**: Identify area headers, descriptions, and connections
- **Map Interpretation**: Analyze visual connections between areas
- **Encounter Detection**: Find combat encounters and stat blocks

### 2. Area Identification
- **Numbering System**: Determine area numbering scheme (1-20, A-Z, mixed)
- **Naming Patterns**: Extract area names and titles
- **Description Boundaries**: **CRITICAL** - Identify where each area description starts/ends using:
  - Area numbers/letters (15., 16., A., B., etc.)
  - Bold headings or section breaks
  - Page breaks between areas
  - Repeated formatting patterns
- **Connection Keywords**: Look for "door", "passage", "leads to", "connects"
- **Encounter Detection**: Find mentions of NPCs, creatures, and challenges (names only)

### 2.1 Multi-Room Separation Logic
**ESSENTIAL**: When multiple rooms are provided in a single upload:
1. **Split by Area Headers**: Each numbered/lettered area becomes a separate file
2. **Preserve Full Descriptions**: Include complete text for each area
3. **Maintain Connections**: Extract inter-area connections for linking
4. **Individual Templates**: Each area MUST use the area-template.md structure
5. **File Naming**: Use format `area-{number}-{sanitized-name}.md`

### 3. Data Extraction

#### For Each Area:
- **Name/Number**: Area identifier and title
- **Description**: Full descriptive text
- **Key Features**: Important details, furniture, notable elements
- **Hidden Elements**: Secret doors, traps, hidden treasure (with DCs)
- **Connections**: Doors, passages, stairs to other areas
- **Encounters**: Creature names, NPC mentions, trap references, potential interactions (stats to be added later)
- **Treasure**: Loot, magic items, important objects
- **Page Reference**: Original source page number

#### Connection Mapping:
- **Direct Connections**: Obvious doors and passages
- **Secret Connections**: Hidden doors, secret passages
- **Conditional Access**: Locked doors, trapped passages
- **Directional Context**: North/south/east/west orientations

### 4. Quality Assurance
- **Text Accuracy**: Verify extracted text matches source
- **Connection Logic**: Ensure bi-directional connections make sense
- **Completeness**: Check all areas in range were processed
- **Formatting**: Consistent structure across all areas

## Expected Output Structure

### Session Folder Creation
- **Create session directory**: `sessions/session-{date}-{name}/`
- **Organize all content** within session folder for isolation
- **Area subfolder**: `sessions/{session}/areas/` for all area files
- **Encounter subfolder**: `sessions/{session}/encounters/` for all encounters

### Area Files
- **Individual `.md` file for each area** - NO CONSOLIDATION!
- Each file uses standardized area-template.md format
- Hyperlinked connections to other area files within same session
- Encounter links pointing to session encounters folder
- File naming: `area-{number}-{name}.md` (e.g., `area-15-throne-room.md`)
- **Location**: `sessions/{session-name}/areas/`

### Multi-Room Processing Requirements
**CRITICAL WORKFLOW**: When processing uploads with multiple rooms:
1. **Parse Each Area Separately**: Split content by area headers/numbers
2. **Apply Template to Each**: Every area gets its own template-based file
3. **Cross-Reference Connections**: Build navigation links between areas
4. **Validate Completeness**: Ensure no areas are missed or merged
5. **Create Area Index**: Generate master list of all created area files

### Encounter Files
- Placeholder files for identified encounters and interactions
- Creature/NPC names with potential interaction contexts
- Multiple resolution options (combat, negotiation, stealth)
- Template structure ready for DM completion with various outcomes

### Navigation Index
- Master list of all areas with hyperlinks to individual files
- Connection overview showing area relationships
- Quick reference table for session navigation

## Processing Notes
- **Manual Review Required**: AI processing may need DM validation
- **Context Sensitivity**: Some connections may require adventure knowledge
- **Encounter Flexibility**: Encounters should support multiple resolution methods (combat, social, stealth)
- **Stat Block Sources**: DM must provide Monster Manual pages or other stat sources
- **Interaction Options**: Consider diplomatic, peaceful, or creative solutions to encounters

## Multi-Room Processing Example

### Input: Upload with Multiple Areas
```
15. THRONE ROOM
A magnificent chamber with golden throne...
North door leads to area 12. Secret door behind tapestry leads to area 18.

16. ARMORY  
Weapon racks line the walls...
South door connects to area 15. East passage leads to area 17.

17. BARRACKS
Rows of simple cots...
West passage returns to area 16. North stairs lead to area 20.
```

### Expected Output: Session-Organized Files

**Session Folder**: `sessions/session-2025-11-27-dungeon-level-1/`

**File: sessions/session-2025-11-27-dungeon-level-1/areas/area-15-throne-room.md**
```markdown
# Area 15: Throne Room
**Page Reference**: p. 42
**Map Key**: 15
**Session**: session-2025-11-27-dungeon-level-1

## Description
A magnificent chamber with golden throne...

## Connections
- [North Door](area-12-{name}.md) - To area 12
- [Secret Door](area-18-{name}.md) - Behind tapestry (DC 15 Investigation)
```

**File: sessions/session-2025-11-27-dungeon-level-1/areas/area-16-armory.md**
```markdown  
# Area 16: Armory
**Page Reference**: p. 42
**Map Key**: 16
**Session**: session-2025-11-27-dungeon-level-1

## Description
Weapon racks line the walls...

## Connections
- [South Door](area-15-throne-room.md) - To Throne Room
- [East Passage](area-17-barracks.md) - To Barracks
```

**❌ WRONG**: Creating files in generic data/ folders
**✅ CORRECT**: Creating session-specific folders with organized structure