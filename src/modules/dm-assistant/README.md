# Dungeon Master Assistant

A comprehensive toolkit for D&D 2024 edition campaign management and session preparation, helping DMs create engaging experiences with reduced preparation overhead.

## Overview

This module provides:
- **7 Professional Agents** for content generation and session management
- **4 Core Workflows** covering preparation, encounters, locations, and campaign setup
- **D&D 2024 Edition Support** with accurate rules and mechanics
- **Professional Interface** focused on practical utility without themed personalities

## Installation

```bash
npx bmad-method@alpha install dm-assistant
```

## Components

### Agents (7)

**Content Generation Specialists:**
- **NPC Generator** - Creates detailed NPCs with stats, personality, and backstory for D&D 2024
- **Shop Generator** - Generates merchants, inventories, and pricing for settlements  
- **Dungeon Generator** - Creates dungeon layouts, encounters, and treasure distributions
- **Items Generator** - Custom magic items, mundane equipment, and treasure appropriate to campaign level

**Utility and Management:**
- **Random Table Generator** - Creates and manages custom random tables for campaign elements
- **Session Manager** - Live session support, initiative tracking, and real-time assistance
- **Campaign Manager** - Long-term campaign planning, story arcs, and campaign continuity

### Workflows (4)

**Core Workflows:**
- **prep-session** - Complete session preparation using multiple generators
- **run-encounter** - Live encounter management with stats and tracking
- **build-location** - Create complete locations (dungeons, towns, shops, NPCs)

**Feature Workflows:**
- **campaign-startup** - New campaign initialization and world building

### Tasks (0)

No standalone tasks - functionality delivered through agent workflows.

## Quick Start

1. **Load the main agent:**
   ```
   agent campaign-manager
   ```

2. **View available commands:**
   ```
   *help
   ```

3. **Run the main workflow:**
   ```
   workflow prep-session
   ```

## Module Structure

```
dm-assistant/
├── agents/                    # Agent definitions
├── workflows/                 # Workflow folders
├── templates/                 # Shared templates
├── data/                      # Module data files
├── _module-installer/         # Installation configuration
│   └── install-config.yaml   # Configuration questions
└── README.md                  # This documentation
```

## Configuration

The module can be configured in `_bmad/dnd/config.yaml`

Key settings:
- **campaign_path**: Where campaign files are saved
- **campaign_name**: Current active campaign name
- **rules_edition**: D&D edition (defaults to "D&D 2024")

## Examples

### Example 1: Session Preparation

Load the Campaign Manager and run the session prep workflow:

```
agent campaign-manager
workflow prep-session
```

This guides you through generating NPCs, encounters, and locations for your upcoming session.

### Example 2: Live Session Management

During gameplay, use the Session Manager for encounter tracking:

```
agent session-manager
*run-encounter
```

Provides initiative tracking, HP monitoring, and quick reference tools.

### Example 3: Location Building

Create a complete location with NPCs and shops:

```
workflow build-location
```

Generates a fully detailed location ready for player exploration.

## Development Roadmap

### Phase 1: MVP (Current)
- [ ] Campaign Manager agent
- [ ] Session Manager agent  
- [ ] NPC Generator agent
- [ ] prep-session workflow

### Phase 2: Content Expansion
- [ ] Shop Generator agent
- [ ] Dungeon Generator agent
- [ ] Items Generator agent
- [ ] run-encounter workflow
- [ ] build-location workflow

### Phase 3: Advanced Features
- [ ] Random Table Generator agent
- [ ] campaign-startup workflow
- [ ] Performance optimization
- [ ] Advanced integrations

## Contributing

To extend this module:

1. Add new agents using `create-agent` workflow
2. Add new workflows using `create-workflow` workflow
3. Submit improvements via pull request

## Author

Created by irwin on 2025-11-25

## Support

For D&D 2024 edition campaigns requiring:
- Reduced preparation time
- Consistent content generation
- Live session management
- Professional workflow tools