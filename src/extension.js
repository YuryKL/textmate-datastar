const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Built-in Datastar plugins (31 core + pro plugins)
const BUILTIN_PLUGINS = [
  'attr', 'bind', 'class', 'computed', 'effect', 'ignore', 'ignore-morph',
  'indicator', 'init', 'json-signals', 'on', 'on-intersect', 'on-interval',
  'on-signal-patch', 'on-signal-patch-filter', 'preserve-attr', 'ref', 'show',
  'signals', 'style', 'text', 'animate', 'custom-validity', 'on-raf',
  'on-resize', 'persist', 'query-string', 'replace-url', 'rocket',
  'scroll-into-view', 'view-transition'
];

let grammarPath;

function activate(context) {
  grammarPath = path.join(context.extensionPath, 'src', 'datastar.injection.tmLanguage.json');

  generateGrammar();

  // Regenerate grammar when configuration changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('datastar.customPlugins')) {
        generateGrammar();

        // Notify user to reload
        vscode.window.showInformationMessage(
          'Datastar custom plugins updated. Reload window to apply changes.',
          'Reload'
        ).then(selection => {
          if (selection === 'Reload') {
            vscode.commands.executeCommand('workbench.action.reloadWindow');
          }
        });
      }
    })
  );
}

function generateGrammar() {
  try {
    // Read custom plugins from configuration
    const config = vscode.workspace.getConfiguration('datastar');
    const customPlugins = config.get('customPlugins', []);

    // Validate custom plugins
    const validCustomPlugins = customPlugins.filter(plugin => {
      if (typeof plugin !== 'string' || !/^[a-z][a-z0-9-]*$/.test(plugin)) {
        console.warn(`Invalid custom plugin name: ${plugin}. Must be lowercase with hyphens.`);
        return false;
      }
      return true;
    });

    // Merge built-in and custom plugins
    const allPlugins = [...BUILTIN_PLUGINS, ...validCustomPlugins];
    const pluginList = allPlugins.join('|');

    // Read the grammar file
    const grammarContent = fs.readFileSync(grammarPath, 'utf8');
    const grammar = JSON.parse(grammarContent);

    // Update the plugin regex in datastar-attribute begin pattern
    const beginPattern = `\\b(data-)(${pluginList})(?=__|:|[\\s>=])`;
    grammar.repository['datastar-attribute'].begin = beginPattern;

    // Update the plugin regex in nested plugin-like keys pattern
    const nestedPattern = `(:)(data-(?:${pluginList}))(?=__|:|[\\s>=])`;
    grammar.repository['datastar-attribute'].patterns[0].match = nestedPattern;

    // Write updated grammar back
    fs.writeFileSync(grammarPath, JSON.stringify(grammar, null, 2), 'utf8');

    console.log(`Datastar grammar updated with ${allPlugins.length} plugins (${BUILTIN_PLUGINS.length} built-in + ${validCustomPlugins.length} custom)`);
  } catch (error) {
    console.error('Failed to generate Datastar grammar:', error);
    vscode.window.showErrorMessage(`Failed to update Datastar grammar: ${error.message}`);
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
