# Session Folder Creation

## Session Information Required

### Session Details
- **Session Name**: Descriptive name for this session (e.g., "goblin-caves", "dragon-tower")
- **Session Date**: Date for this session (YYYY-MM-DD format)
- **Adventure Source**: Name of adventure book/module
- **Page Range**: Pages being imported for this session

### Generated Session Structure
```
sessions/session-{date}-{name}/
├── areas/                    # Individual area files
├── encounters/               # Encounter files and stat blocks
├── session-index.md         # Master navigation file
├── session-prep.md          # Session preparation notes
└── import-summary.md        # Import completion summary
```

## Folder Creation Process

### 1. Session Naming
- **Automatic Format**: `session-{YYYY-MM-DD}-{sanitized-name}`
- **Example**: `session-2025-11-27-goblin-caves`
- **Sanitization**: Replace spaces with hyphens, lowercase, remove special characters

### 2. Directory Structure
Create the following directories:
- Main session folder under `sessions/`
- `areas/` subfolder for all area files
- `encounters/` subfolder for encounter files
- Session-level files in root of session folder

### 3. Initial Files
- **session-prep.md**: Session preparation checklist and notes
- **session-index.md**: Navigation hub linking all areas and encounters
- **README.md**: Session overview and quick reference

## Session Isolation Benefits

### Organization Advantages
- **Complete Isolation**: Each session has its own file space
- **Easy Navigation**: All related files in one location
- **Archive Ready**: Sessions can be easily backed up or moved
- **No Conflicts**: Multiple sessions don't interfere with each other

### File Management
- **Relative Linking**: All links within session use relative paths
- **Portable Sessions**: Session folders can be shared or moved
- **Version Control**: Easy to track changes per session
- **Cleanup**: Sessions can be archived after completion

## Next Steps
Once session folder is created:
1. Proceed to upload adventure content
2. Process content within session context
3. Generate area files in session/areas/ 
4. Create encounter files in session/encounters/
5. Build navigation links within session scope

The session folder provides the foundation for organized adventure import and seamless table play.