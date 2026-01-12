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
   - Use the map image to read and fill in the description of the dimensions for the area. Each square on the map is 5 feet by 5 feet.
   - Enter area name, description, Enhanced Description, DM Information/Notes, features, and connections.
   - The Description is generally just the first paragraph of the area description in the adventure.
   - **Important:** The enhanced description is for the AI to use to generate a more embellished description of the area but stay true to the original description and do not use personification. It should be written in the style of the adventure.
4. **Add Encounters**
   - Reference the appropriate encounter templates:
     - `combat-encounter-template.md`
     - `trap-encounter-template.md`
     - `social-encounter-template.md`
     - `generic-encounter-template.md`
   - Fill in encounter details as needed for each area.
   - **Important:** When extracting encounter details from an area, use exactly as it is written in the adventure. Do not modify, or add any treasure to the encounter. Complete the additional fields in the template as best as possible.
   - **Important:** Search for the monster file in {project-root}/monsters/[monster-name].md and fill in the template fields using the stats from the monster file.
5. **Review and Save**
   - Ensure all required fields are complete and consistent.
   - Save the area file in the correct module or campaign folder.

## Best Practices
- Always use the latest templates to maintain consistency.
- Double-check connections and difficulty ratings for each area.
- Centralize new area files for easy access by other workflows and agents.

---
*This README replaces the previous instructions.md for the create-area workflow.*
