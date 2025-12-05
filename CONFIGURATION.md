# Custom Plugin Configuration

## Setup

Add to `settings.json` (user or workspace):

```json
{
  "datastar.customPlugins": ["my-plugin", "api-handler"]
}
```

Reload window after changes.

## Rules

- Lowercase only: `my-plugin` ✅, `MyPlugin` ❌
- Hyphens allowed: `my-plugin` ✅, `my_plugin` ❌
- No `data-` prefix: `plugin` ✅, `data-plugin` ❌
- Pattern: `^[a-z][a-z0-9-]*$`

## Usage

```html
<div data-my-plugin="$custom">...</div>
<button data-api-handler:click__debounce.500ms="$count++">...</button>
```

## Built-in Plugins (31)

**Core**: attr, bind, class, computed, effect, ignore, ignore-morph, indicator, init, json-signals, on, on-intersect, on-interval, preserve-attr, ref, show, signals, style, text

**Pro**: animate, custom-validity, on-raf, on-resize, persist, query-string, replace-url, rocket, scroll-into-view, view-transition, on-signal-patch, on-signal-patch-filter
