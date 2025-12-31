# Import Adventure Workflow

This workflow guides you through importing published adventure content (PDFs, images, or text) into the DM Assistant system, transforming static material into interactive, navigable area and encounter files.

## Purpose
- Extract areas, encounters, traps, and social interactions from adventure books
- Standardize area and encounter documentation using approved templates
- Enable hyperlinked navigation and session-ready content for DMs

## Steps
1. **Start the Workflow**
   - Initiate import-adventure from the DM Assistant menu or agent.
2. **Upload Content**
   - Provide adventure pages, images, or text for processing.
3. **Extract Areas and Encounters**
   - Use `../create-area/encounter-extraction.md` and `../create-area/generic-encounter-template.md`, `../create-area/combat-encounter-template.md`, `../create-area/trap-encounter-template.md`, and `../create-area/social-encounter-template.md` for encounter guidance.
   - **Important:** Only extract the encounter details exactly as it is written in the adventure. Do not modify, or add any treasure to the encounter. Complete the additional fields in the template as best as possible.
   - **Important:** Search for the monster file in {project-root}/monstermanual/[monster-name].md and fill in the template fields using the stats from the monster file
   - Apply `../create-area/area-template.md` for each area.
4. **Difficulty Assessment**
   - Use SlyFlourish and DMG benchmarks to rate encounter difficulty.
5. **File Creation**
   - Generate area and encounter files in the appropriate session folders.
   - Link files for navigation and session integration.
6. **Review and Save**
   - Validate all files for completeness and accuracy.
   - Ensure all links and references are functional.

## Templates Used
- `../create-area/area-template.md`
- `../create-area/combat-encounter-template.md`
- `../create-area/trap-encounter-template.md`
- `../create-area/social-encounter-template.md`
- `../create-area/generic-encounter-template.md`
- `../create-area/encounter-extraction.md`

## Integration
- Works with Campaign Manager for stat block import and organization
- Compatible with session-prep and session-runner workflows
- Supports session folder structure and navigation

## Best Practices
- Always use standardized templates for new files
- Double-check difficulty ratings and scaling notes
- Maintain clear navigation between areas and encounters
- Validate all links and references before session play

---
*This README documents the import-adventure workflow for DM Assistant.*
