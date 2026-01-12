# Update Area Workflow

This workflow allows DMs to update, fix, or enhance existing area files. It uses the same centralized templates as create-area for consistency.

## Templates Used
- `../create-area/area-template.md`
- `../create-area/combat-encounter-template.md`
- `../create-area/trap-encounter-template.md`
- `../create-area/social-encounter-template.md`
- `../create-area/generic-encounter-template.md`

## Typical Update Actions
- **Correct area descriptions, features, or connections**
- **Add, remove, or modify encounters**
  - Reference the appropriate encounter templates:
     - `combat-encounter-template.md`
     - `trap-encounter-template.md`
     - `social-encounter-template.md`
     - `generic-encounter-template.md`
   - Fill in encounter details as needed for each area.
   - Use the map image to read and fill in the description of the dimensions for the area. Each square on the map is 5 feet by 5 feet.
   - **Important:** When extracting encounter details from an area, use exactly as it is written in the adventure. Do not modify, or add any treasure to the encounter. Complete the additional fields in the template as best as possible.
   - **Important:** The enhanced description is for the AI to use to generate a more embellished description of the area but stay true to the original description and do not use personification. It should be written in the style of the adventure.
   - **Important:** Search for the monster file in {project-root}/monstermanual/[monster-name].md and fill in the template fields using the stats from the monster file.
- **Adjust treasure, DCs, or special rules**
- **Link to updated encounter templates**
- **Rebalance difficulty using SlyFlourish guide**
  - Prompt the user if additional information is needed

## Usage
- Select the area file to update
- Apply changes using the shared templates
- Validate links and difficulty ratings

---
*Centralized for DM Assistant workflows*
