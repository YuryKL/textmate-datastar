# DataStar TextMate Grammar

Syntax highlighting for DataStar attributes across 21 template engines (25 language scopes).

## Features

- Highlights plugin names, keys, modifiers, and JavaScript expressions
- Supports custom plugins via VS Code settings
- **Supported languages**: HTML, PHP, Twig, Blade, Edge, Nunjucks, EJS, Pug, Handlebars, Mustache, Vue, Svelte, Astro, Django, Jinja, ERB, Liquid, templ, GoHTML, JSP, Razor


## Scope Names

The grammar assigns the following TextMate scopes:

### Attribute Components
| Component | Scope |
|-----------|-------|
| `data-` prefix | `keyword.operator.datastar.prefix` |
| Plugin name | `support.function.datastar.plugin` |
| `:` separator | `punctuation.separator.key.datastar` |
| Key name | `variable.parameter.datastar.key` |
| `__` separator | `punctuation.separator.modifier.datastar` |
| Modifier | `storage.modifier.datastar` |

### Expression Components
| Component | Scope |
|-----------|-------|
| Signal (`$count`) | `variable.other.datastar.signal` |
| Action (`@get`) | `support.function.datastar.action` |
| Function | `entity.name.function.datastar` |
| Keywords | `keyword.control.datastar` |
| Operators | `keyword.operator.datastar` |
| Strings | `string.quoted.*.datastar` |
| Numbers | `constant.numeric.datastar` |

## Custom Plugins

Add custom plugins in `settings.json`:

```json
{
  "datastar.customPlugins": ["my-plugin", "custom-action"]
}
```

Rules: lowercase, hyphens only, no `data-` prefix. Reload window after changes.

## Testing

1. Press `F5` to launch Extension Development Host
2. Open test files from `test-samples/`
3. Use **Inspect Editor Tokens and Scopes** to verify highlighting
4. See `TESTING.md` for complete test matrix

## Limitations

- Some LSPs (C# for Razor) override textmate colors with semantic tokens
- Template delimiters (`{{ }}`) may conflict with JS object syntax in some engines
- Only highlights DataStar plugins (31 built-in + custom configured)

## Adding Languages

1. Find scope name with **Inspect Editor Tokens and Scopes**
2. Add to `package.json` `injectTo` array
3. Test with `F5` and verify in `test-samples/`

## License

MIT
