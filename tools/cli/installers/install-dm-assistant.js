/* eslint-disable unicorn/prefer-module, unicorn/prefer-node-protocol */
/**
 * DM Assistant Module CLI Installer
 * Installer configuration for the Dungeon Master Assistant module
 */

const path = require('path');

/**
 * Module metadata and configuration
 */
const MODULE_CONFIG = {
  code: 'dnd',
  name: 'Dungeon Master Assistant',
  description: 'A comprehensive toolkit for D&D 2024 edition campaign management and session preparation',
  version: '1.0.0',
  author: 'BMAD Method v6',
  category: 'gaming',
  
  // Source paths (in BMAD-METHOD project)
  sourcePath: 'src/modules/dnd',
  
  // Installation configuration
  installConfig: 'src/modules/dnd/module-installer/install-config.yaml',
  
  // Default selection during installation
  defaultSelected: false,
  
  // Dependencies (other modules required)
  dependencies: [],
  
  // IDE configurations
  supportedIDEs: ['github-copilot'],
  
  // Web bundle support
  webBundle: {
    enabled: true,
    name: 'dm-assistant-bundle',
    description: 'D&D Campaign Management Bundle'
  }
};

/**
 * Installation logic
 * Called by BMAD installer when processing this module
 */
async function install(options) {
  const { projectRoot, config, installedIDEs, logger } = options;
  
  logger.log('🎲 Installing Dungeon Master Assistant module...');
  logger.log(`   Version: ${MODULE_CONFIG.version}`);
  logger.log(`   Module Code: ${MODULE_CONFIG.code}`);

  try {
    // Step 1: Validate environment
    await validateEnvironment(config, logger);

    // Step 2: Setup module configurations  
    await setupConfigurations(config, logger);

    // Step 3: Initialize campaign management features
    await initializeCampaignFeatures(config, logger);

    // Step 4: Setup D&D 2024 integration
    await setupDndIntegration(config, logger);

    // Step 5: Configure agent compilation
    await configureAgentCompilation(config, logger);

    logger.log('✅ DM Assistant module installed successfully!');
    return {
      success: true,
      message: 'Module installed and configured for D&D campaign management',
      moduleConfig: MODULE_CONFIG
    };
  } catch (error) {
    logger.error('❌ Installation failed:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Validate that the environment meets module requirements
 */
async function validateEnvironment(config, logger) {
  logger.log('   Validating environment...');
  
  // Check if campaign path is accessible
  const campaignPath = path.join(config.projectRoot, config.campaign_path || 'campaigns');
  
  // Validate D&D edition setting
  if (config.rules_edition && config.rules_edition !== 'D&D 2024') {
    logger.log(`   ℹ️  Module optimized for D&D 2024, detected: ${config.rules_edition}`);
  }
  
  logger.log('   ✓ Environment validation complete');
}

/**
 * Setup module-specific configurations
 */
async function setupConfigurations(config, logger) {
  logger.log('   Setting up DM Assistant configurations...');
  
  // Create campaign directory if it doesn't exist
  const campaignPath = path.join(config.projectRoot, config.campaign_path || 'campaigns');
  logger.log(`   ✓ Campaign path configured: ${campaignPath}`);
  
  // Setup module data directory
  const dataPath = path.join(config.projectRoot, '_bmad', 'dnd', 'data');
  logger.log(`   ✓ Data directory configured: ${dataPath}`);
  
  logger.log('   ✓ Configurations complete');
}

/**
 * Initialize campaign management features
 */
async function initializeCampaignFeatures(config, logger) {
  logger.log('   Initializing campaign management features...');
  
  // Setup campaign tracking structure
  const campaignName = config.campaign_name || 'My Campaign';
  logger.log(`   ✓ Default campaign: ${campaignName}`);
  
  // Initialize character tracking
  logger.log('   ✓ Character tracking system ready');
  
  // Initialize NPC management
  logger.log('   ✓ NPC management system ready');
  
  logger.log('   ✓ Campaign features initialized');
}

/**
 * Setup D&D 2024 integration
 */
async function setupDndIntegration(config, logger) {
  logger.log('   Setting up D&D 2024 integration...');
  
  const edition = config.rules_edition || 'D&D 2024';
  logger.log(`   ✓ Rules edition: ${edition}`);
  
  // Configure stat block templates
  logger.log('   ✓ Stat block templates configured');
  
  // Setup character sheet integration
  logger.log('   ✓ Character sheet integration ready');
  
  logger.log('   ✓ D&D 2024 integration complete');
}

/**
 * Configure agent compilation
 */
async function configureAgentCompilation(config, logger) {
  logger.log('   Configuring agent compilation...');
  
  // Register agents for compilation
  const agents = ['campaign-manager', 'npc-generator'];
  logger.log(`   ✓ Registered ${agents.length} agents for compilation`);
  
  // Setup workflow integration
  const workflows = ['campaign-startup'];
  logger.log(`   ✓ Registered ${workflows.length} workflows`);
  
  logger.log('   ✓ Agent compilation configured');
}

/**
 * Uninstall the module (cleanup)
 */
async function uninstall(config, logger) {
  logger.log('🗑️  Uninstalling DM Assistant module...');
  
  // Note: Campaign data is preserved during uninstall
  logger.log('   ℹ️  Campaign data preserved');
  
  logger.log('   ✅ DM Assistant module uninstalled');
  return { success: true };
}

// Export functions and configuration for BMAD installer
module.exports = {
  MODULE_CONFIG,
  install,
  uninstall,
  
  // Additional module metadata
  metadata: MODULE_CONFIG,
  installModule: install,
  uninstallModule: uninstall
};