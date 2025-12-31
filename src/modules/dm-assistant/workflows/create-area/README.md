# Create Area Workflow

This workflow guides you through the standardized process of creating area files for dungeons and adventures in the DM Assistant module.

## Purpose
- Ensure all area files follow a consistent structure and use approved encounter templates.
- Centralize area creation for easier maintenance and module integration.

## Steps
1. **Start the Workflow**
   - Initiate the create-area workflow from the DM Assistant menu or agent.
2. **Select Area Type**
   - Choose the type of area you wish to create (e.g., dungeon room, wilderness location, social hub).
3. **Fill Out Area Details**
   - Use the provided `area-template.md` as a base.
   - Enter area name, description, features, and connections.
4. **Add Encounters**
   - Reference the appropriate encounter templates:
     - `combat-encounter-template.md`
     - `trap-encounter-template.md`
     - `social-encounter-template.md`
     - `generic-encounter-template.md`
   - Fill in encounter details as needed for each area.
   - **Important:** When extracting encounter details from an area, use exactly as it is written in the adventure. Do not modify, or add any treasure to the encounter. Complete the additional fields in the template as best as possible.
   - **Important:** Search for the monster file in {project-root}/monstermanual/[monster-name].md and fill in the template fields using the stats from the monster file.
5. **Review and Save**
   - Ensure all required fields are complete and consistent.
   - Save the area file in the correct module or campaign folder.

## Best Practices
- Always use the latest templates to maintain consistency.
- Double-check connections and difficulty ratings for each area.
- Centralize new area files for easy access by other workflows and agents.

---
*This README replaces the previous instructions.md for the create-area workflow.*
